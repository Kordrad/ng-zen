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

export function applyFileTemplateUtil(
  sources: string[],
  path: string,
  templatesPath = `./templates`
): Rule[] {
  return sources.map(source => {
    const rules: Rule[] = [
      applyTemplates({
        name: source,
        localeDate: new Date().toLocaleString(),
        ...strings,
      }),
      move(normalize(`${path}/${source}`)),
    ];

    const componentTemplateSource = apply(url(`./files/${source}`), rules);
    const genericTemplates = apply(url(templatesPath), rules);

    return chain([componentTemplateSource, genericTemplates].map(mergeWith));
  });
}
