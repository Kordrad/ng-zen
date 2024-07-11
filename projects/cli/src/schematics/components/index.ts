import { chain, Rule } from '@angular-devkit/schematics';

import { applyFileTemplateUtil } from '../../utils';
import { ComponentGeneratorSchema } from './components-generator';

export function componentGenerator(options: ComponentGeneratorSchema): Rule {
  return () => {
    return chain(applyFileTemplateUtil(options.components, options.path));
  };
}
