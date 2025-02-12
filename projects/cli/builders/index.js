import { createBuilder } from '@angular-devkit/architect';
import { execa } from 'execa';
import cpy from 'cpy';
import path from 'node:path';
import fs from 'fs-extra';

async function compileTypeScript(tsConfig, context) {
  await execa('tsc', ['-p', tsConfig], {
    stdio: 'inherit',
    cwd: context.currentDirectory,
  });
}

async function copyProjectFiles(files, outputDir, context) {
  const outputPath = path.join(context.workspaceRoot, outputDir);
  await cpy(files, outputPath, {
    parents: true,
    cwd: context.currentDirectory,
  });
}

async function cleanPackageJson(outputDir, context) {
  const outputPath = path.join(context.workspaceRoot, outputDir);
  const distPackageJson = path.join(outputPath, 'package.json');

  const pkg = await fs.readJson(distPackageJson);
  delete pkg.scripts;
  delete pkg.devDependencies;
  await fs.writeJson(distPackageJson, pkg, { spaces: 2 });
}

export default createBuilder(async (options, context) => {
  try {
    await compileTypeScript(options.tsConfig, context);

    context.logger.info(`Copying project files: ${options.files.join(', ')}`);
    await copyProjectFiles(options.files, options.outputDir, context);

    context.logger.info('Cleaning package.json');
    await cleanPackageJson(options.outputDir, context);

    return { success: true };
  } catch (error) {
    context.logger.error(`Build failed: ${error.message}`);
    return { success: false };
  }
});
