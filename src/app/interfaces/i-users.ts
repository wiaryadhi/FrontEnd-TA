export interface IUsers {
    uniqId:string,
    collectName:string,
    type:string,
    title:string,
    password:string,
    coveran:string,
    phoneNumber:string,
    msisdn:string,
    remark:string,
    active:boolean,
    mobile:boolean,
    cms:boolean
}

export interface IUsersWrapper{
    data:Array<IUsers>;
    success: boolean,
    message: string,
    status: number,
    timestamp: string
}
