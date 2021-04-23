export interface FieldNT {
  nameTech: TN
  nameVisual: string
}

export enum TN {
  TEXT_FIELD = 'TextField',
  DATE = 'Date',
  DATETIME_LOCAL = 'DateTimeLocal',
  DATE_MONTH = 'DateMonth',
  DATE_WEEK = 'DateWeek',
  DATE_TIME = 'DateTime',
  EMAIL = 'Email',
  TEXT_AREA = 'TextArea',
  COLOR = 'Color',
  NUMBER = 'Number',
  RANGE = 'Range',
  PASSWORD = 'Password',
  TEL = 'Tel',
  CHECKBOX = 'Checkbox',
  URL = 'URL',
  IMAGE = 'Image',
  FILE = 'File',
  HIDDEN = 'Hidden',
  RESET = 'Reset',
  SEARCH = 'Search',
  SUBMIT = 'Submit',
  BUTTON = 'Button',
}

export class Fields {
  static values(): FieldNT[] {
    return [
      {nameTech: TN.TEXT_FIELD, nameVisual: 'Text Field'} as FieldNT,
      {nameTech: TN.DATE, nameVisual: 'Date'} as FieldNT,
      {nameTech: TN.DATETIME_LOCAL, nameVisual: 'Date & time local'} as FieldNT,
      {nameTech: TN.DATE_MONTH, nameVisual: 'Month'} as FieldNT,
      {nameTech: TN.DATE_WEEK, nameVisual: 'Week'} as FieldNT,
      {nameTech: TN.DATE_TIME, nameVisual: 'Time'} as FieldNT,
      {nameTech: TN.EMAIL, nameVisual: 'Email'} as FieldNT,
      {nameTech: TN.PASSWORD, nameVisual: 'Password'} as FieldNT,
      {nameTech: TN.TEL, nameVisual: 'Tel'} as FieldNT,
      {nameTech: TN.TEXT_AREA, nameVisual: 'Text area'} as FieldNT,
      {nameTech: TN.COLOR, nameVisual: 'Color'} as FieldNT,
      {nameTech: TN.NUMBER, nameVisual: 'Number'} as FieldNT,
      {nameTech: TN.RANGE, nameVisual: 'Range'} as FieldNT,
      {nameTech: TN.CHECKBOX, nameVisual: 'Checkbox'} as FieldNT,
      {nameTech: TN.URL, nameVisual: 'URL'} as FieldNT,
      {nameTech: TN.IMAGE, nameVisual: 'Image'} as FieldNT,
      {nameTech: TN.FILE, nameVisual: 'File'} as FieldNT,
      {nameTech: TN.HIDDEN, nameVisual: 'Hidden'} as FieldNT,
      {nameTech: TN.RESET, nameVisual: 'Reset'} as FieldNT,
      {nameTech: TN.SEARCH, nameVisual: 'Search'} as FieldNT,
      {nameTech: TN.SUBMIT, nameVisual: 'Submit'} as FieldNT,
      {nameTech: TN.BUTTON, nameVisual: 'Button'} as FieldNT,
    ]
  }

  static inputByField(field: FieldNT): JSX.Element {
    switch (field.nameTech) {
      case TN.TEXT_FIELD:
        return <input type={'text'}/>
      case TN.DATE:
        return <input type={'date'}/>
      case TN.DATETIME_LOCAL:
        return <input type={'datetime-local'}/>
      case TN.DATE_MONTH:
        return <input type={'month'}/>
      case TN.DATE_WEEK:
        return <input type={'week'}/>
      case TN.DATE_TIME:
        return <input type={'time'}/>
      case TN.EMAIL:
        return <input type={'email'}/>
      case TN.TEXT_AREA:
        return <textarea></textarea>
      case TN.COLOR:
        return <input type={'color'}/>
      case TN.NUMBER:
        return <input type={'number'}/>
      case TN.RANGE:
        return <input type={'range'}/>
      case TN.PASSWORD:
        return <input type={'password'}/>
      case TN.TEL:
        return <input type={'tel'}/>
      case TN.CHECKBOX:
        return <input type={'checkbox'}/>
      case TN.URL:
        return <input type={'url'}/>
      case TN.IMAGE:
        return <input type={'image'} alt={'image'}/>
      case TN.FILE:
        return <input type={'file'}/>
      case TN.HIDDEN:
        return <input type={'hidden'}/>
      case TN.RESET:
        return <input type={'reset'}/>
      case TN.SEARCH:
        return <input type={'search'}/>
      case TN.SUBMIT:
        return <input type={'submit'}/>
      case TN.BUTTON:
        return <input type={'button'}/>
    }
    return <input type={'text'}/>
  }
}
