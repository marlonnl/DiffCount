export function relativeCalc(totalCount: number, cellCount: number) {
  return ((cellCount / totalCount) * 100).toFixed(1)
}
