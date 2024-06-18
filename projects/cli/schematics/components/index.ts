import { normalize, strings } from '@angular-devkit/core';
import {
  apply,
  applyTemplates,
  chain,
  mergeWith,
  move,
  Rule,
  url,
} from '@angular-devkit/schematics';

import { ComponentGeneratorSchema } from './components-generator';

export function componentGenerator(options: ComponentGeneratorSchema): Rule {
  return () => {
    const componentsSource = options.components.map(component => {
      const rules: Rule[] = [
        applyTemplates({
          name: component,
          localeDate: new Date().toLocaleString(),
          ...strings,
        }),
        move(normalize(`${options.path}/${component}`)),
      ];

      const componentTemplateSource = apply(url(`./files/${component}`), rules);
      const genericTemplates = apply(url(`./templates`), rules);

      return chain([componentTemplateSource, genericTemplates].map(mergeWith));
    });

    return chain(componentsSource);
  };
}
