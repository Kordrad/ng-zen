import { chain, Rule } from '@angular-devkit/schematics';

import { applyFileTemplateUtil } from '../_utils/apply-file-template.util';
import { DirectiveGeneratorSchema } from './directives-generator';

export function directiveGenerator(options: DirectiveGeneratorSchema): Rule {
  return () => {
    return chain(applyFileTemplateUtil(options.directives, options.path));
  };
}
