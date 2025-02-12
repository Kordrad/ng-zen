import { createBuilder } from '@angular-devkit/architect';
import { execa } from 'execa';
import cpy from 'cpy';
import path from 'node:path';
import fs from 'fs-extra';

async function cleanOutputDirectory(outputDir, context) {
  try {
    if (await fs.pathExists(outputDir)) {
      context.logger.info(`Cleaning output directory: ${outputDir}`);
      await fs.rm(outputDir, { recursive: true, force: true });
    }
    await fs.mkdir(outputDir, { recursive: true });
  } catch (error) {
    context.logger.error(`Failed to clean output directory: ${error.message}`);
    throw error; // Rethrow to stop the build process
  }
}

async function getOutputDir(tsConfigPath, workspaceRoot) {
  const fullPath = path.resolve(workspaceRoot, tsConfigPath);
  const configContent = await fs.readFile(fullPath, 'utf-8');
  const config = JSON.parse(configContent);

  const outDir = config.compilerOptions?.outDir || 'dist';
  const tsConfigDir = path.dirname(fullPath);

  return path.resolve(tsConfigDir, outDir);
}

async function compileTypeScript(tsConfig, context) {
  const outputDir = await getOutputDir(tsConfig, context.workspaceRoot);

  await execa('tsc', ['-p', tsConfig], {
    stdio: 'inherit',
    cwd: context.currentDirectory,
  });

  return outputDir;
}

async function copyProjectFiles(files, outputDir, context) {
  await cpy(files, outputDir, {
    parents: true,
    cwd: context.currentDirectory,
  });
}

async function cleanPackageJson(outputDir) {
  const distPackageJson = path.join(outputDir, 'package.json');
  const pkg = await fs.readJson(distPackageJson);
  delete pkg.scripts;
  delete pkg.devDependencies;
  await fs.writeJson(distPackageJson, pkg, { spaces: 2 });
}

export default createBuilder(async (options, context) => {
  try {
    const outputDir = await compileTypeScript(options.tsConfig, context);

    // Clean old files before building
    context.logger.info('Cleaning old dist files...');
    await cleanOutputDirectory(outputDir, context);

    context.logger.info(`Copying files to: ${outputDir}`);
    await copyProjectFiles(options.files, outputDir, context);

    context.logger.info('Cleaning package.json');
    await cleanPackageJson(outputDir, context);

    return { success: true };
  } catch (error) {
    context.logger.error(`Build failed: ${error.message}`);
    return { success: false };
  }
});
