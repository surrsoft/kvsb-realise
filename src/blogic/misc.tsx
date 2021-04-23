export interface FieldNT {
  nameTech: TN
  nameVisual: string
}

export enum TN {
  TEXT_FIELD = 'TextField',
  DATE = 'Date'
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

  static inputByField(field: FieldNT): JSX.Element {
    switch (field.nameTech) {
      case TN.TEXT_FIELD:
        return <input type={'text'}/>
      case TN.DATE:
        return <input type={'date'}/>
    }
    return <input type={'text'}/>
  }
}
