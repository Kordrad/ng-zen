import { normalize, strings } from '@angular-devkit/core';
import { apply, applyTemplates, chain, filter, mergeWith, move, Rule, url } from '@angular-devkit/schematics';
import { ComponentGeneratorSchema } from '../schematics/components/components-generator';
import { GeneratorSchemaBase } from '../types';

type Folders = ComponentGeneratorSchema['components'];

const createTemplateRules = (folder: Folders, path: string): Rule[] => [
  applyTemplates({
    name: folder,
    localeDate: new Date().toLocaleString(),
    ...strings,
  }),
  move(normalize(`${path}/${folder}`)),
];

const getTemplates = (rules: Rule[]) => apply(url(`./templates`), rules);
const includeStories = (include: boolean) => filter(filePath => include || !filePath.endsWith('.stories.ts'));

export function applyFileTemplateUtil(folders: Folders, config: GeneratorSchemaBase): Rule[] {
  return folders.map(folder => {
    const RULES = createTemplateRules(folders, config.path);

    const folderSource = apply(url(`./files/${folder}`), [includeStories(config.stories), ...RULES]);

    return chain([folderSource, getTemplates(RULES)].map(mergeWith));
  });
}
