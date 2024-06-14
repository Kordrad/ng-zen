import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { addPathToTsconfigUtil } from '../utils/add-path-to-tsconfig.util';
import { NgZenGeneratorSchema } from './ng-zen-generator';

export function ngAdd(options: NgZenGeneratorSchema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info('Adding library to the project');
    console.log(options);

    addPathToTsconfigUtil(tree, 'ng-zen/*', [`${options.path}/*`]);

    return tree;
  };
}
