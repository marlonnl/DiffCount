export type CellStateModel = {
  cells: CellStateModel[]
  totalCount: number
  config: {
    countTo: 50 | 100
    beep: boolean
  }
}
