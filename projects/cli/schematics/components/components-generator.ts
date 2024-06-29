export interface ComponentGeneratorSchema {
  components: (
    | 'avatar'
    | 'badge'
    | 'button'
    | 'checkbox'
    | 'pin'
    | 'switch'
    | 'tag'
  )[];
  path: string;
}
