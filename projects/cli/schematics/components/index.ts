import { chain, Rule } from '@angular-devkit/schematics';

import { applyFileTemplateUtil } from '../_utils/apply-file-template.util';
import { ComponentGeneratorSchema } from './components-generator';

export function componentGenerator(options: ComponentGeneratorSchema): Rule {
  return () => {
    return chain(applyFileTemplateUtil(options.components, options.path));
  };
}
