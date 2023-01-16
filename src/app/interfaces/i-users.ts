export interface IUsers {
    id:number,
    uniqId:string,
    collectName:string,
    type:string,
    title:string,
    password:string,
    coveran:string,
    phoneNumber:string,
    active:boolean,
    mobile:boolean,
    cms:boolean,
    //khusun user mobile
    msisdn:string,
    remark:string
    
}

export interface IUsersWrapper{
    data:Array<IUsers>;
    success: boolean,
    message: string,
    status: number,
    timestamp: string
}
