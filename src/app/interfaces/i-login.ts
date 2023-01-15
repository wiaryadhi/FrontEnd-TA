export interface ILogin {
  uniqId: string;
  password: string;
}

export interface ILoginToken {
  id: number,
  uniqId: string,
  msisdn: number
}

// {"data":{"id":4,"uniqId":"arya","collectName":"Azimm","type":"type","title":"Staff","password":"123123","coveran":"Boyolali","phoneNumber":"0813336","msisdn":"0813336","remark":"-","activated":false,"cms":false,"mobile":false},"success":true,"message":"BERHASIL LOGIN","status":200,"timestamp":"2023-01-13T10:05:54.079+00:00"}
