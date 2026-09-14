export function relativeCalc(totalCount: number, cellCount: number) {
  const relative = ((cellCount / totalCount) * 100).toFixed(1)

  return relative == 'NaN' ? '0.0' : relative
}
