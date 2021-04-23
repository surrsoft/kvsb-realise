export interface FieldNT {
  nameTech: string
  nameVisual: string
}

export class Fields {
  static values(): FieldNT[] {
    return [
      {
        nameTech: 'TextField',
        nameVisual: 'Text Field'
      } as FieldNT,
      {
        nameTech: 'Date',
        nameVisual: 'Date'
      } as FieldNT
    ]
  }
}
