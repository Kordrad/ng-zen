import { GeneratorSchemaBase } from '../../types';

export type ComponentType = 'avatar' | 'button';

export interface ComponentGeneratorSchema extends GeneratorSchemaBase {
  components: ComponentType[];
}
