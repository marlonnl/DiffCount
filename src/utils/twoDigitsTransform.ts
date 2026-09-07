export function twoDigitsTransform(value: number): string {
  return value.toString().padStart(2, '0')
}
