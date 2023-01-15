export interface IUser {
  id: number,
  uniqId: string,
  collectName: string,
  type: string,
  title: string,
  password: number,
  coveran: string,
  phoneNumber: number,
  msisdn: number,
  remark: string,
  activated: boolean,
  cms: boolean,
  mobile: boolean
}


export interface ILoginWrapper {
  data: IUser;
  success: boolean,
  message: string,
  status: number,
  timestamp: string
}

