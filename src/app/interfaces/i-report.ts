export interface IReport {
  id: number,
  accountNumber: string,
  homeAddress: string,
  name: string,
  agingDate: string,
  coveran: string,
  postalCode: string,
  priority: boolean
}

export interface IReportWrapper{
  data: Array<IReport>
  success: boolean,
  message: string,
  status: number,
  timestamp:string,
}
