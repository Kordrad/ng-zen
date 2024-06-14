import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { addPathToTsconfigUtil } from '../utils/add-path-to-tsconfig.util';

export function ngAdd(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info('Adding library to the project');

    addPathToTsconfigUtil(tree, '@ng-zen/ui/*', ['./projects/ng-zen/ui/src/*']);

    return tree;
  };
}
