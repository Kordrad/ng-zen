/**
 * Use it when you use `booleanAttribute` for transform in angular input
 * @example
 * ```typescript
 * input<boolean, BooleanAttribute>(false, {
 *    transform: booleanAttribute
 * });
 * ```
 */

export type BooleanAttribute = boolean | 'true' | 'false' | '';
