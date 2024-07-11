export interface ComponentGeneratorSchema {
  components: (
    | 'avatar'
    | 'badge'
    | 'button'
    | 'checkbox'
    | 'pin'
    | 'radio'
    | 'switch'
    | 'tag'
  )[];
  path: string;
}
