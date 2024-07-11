import { chain, Rule } from '@angular-devkit/schematics';

import { applyFileTemplateUtil } from '../../utils';
import { DirectiveGeneratorSchema } from './directives-generator';

export function directiveGenerator(options: DirectiveGeneratorSchema): Rule {
  return () => {
    return chain(applyFileTemplateUtil(options.directives, options.path));
  };
}
