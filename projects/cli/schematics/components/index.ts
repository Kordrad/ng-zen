import { normalize, strings } from '@angular-devkit/core';
import {
  apply,
  applyTemplates,
  chain,
  filter,
  mergeWith,
  move,
  Rule,
  url,
} from '@angular-devkit/schematics';

import { ComponentGeneratorSchema } from './component-generator';

export function componentGenerator(options: ComponentGeneratorSchema): Rule {
  return () => {
    const applyTemplate = (name: string) =>
      applyTemplates({ name, camelize: strings.camelize });

    const moveValue = (folder: string) =>
      move(normalize(`${options.path}/${folder}`));

    const componentsSources = options.components.map(component => {
      return apply(url(`./files/${component}`), [
        applyTemplate(component),
        moveValue(component),
      ]);
    });

    const readmeSources = options.components.map(component => {
      return apply(url(`./files/`), [
        filter(val => val.includes('README.md')),
        applyTemplate(component),
        moveValue(component),
      ]);
    });

    return chain([
      ...componentsSources.map(mergeWith),
      ...readmeSources.map(mergeWith),
    ]);
  };
}
