import {
  Rule,
  SchematicContext,
  SchematicsException,
  Tree,
} from '@angular-devkit/schematics';

export function ngAdd(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info('Adding library to the project');
    const _tsconfigPath = 'tsconfig.json';
    if (!tree.exists(_tsconfigPath))
      throw new SchematicsException('tsconfig does not exist');

    _context.logger.info('Installing dependencies');
    return tree;
  };
}
