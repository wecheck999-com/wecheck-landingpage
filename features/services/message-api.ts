import  axiosClient  from './axios-client';

class messageApi {

  getListMessages(payload:any) {
    return axiosClient({
        method: 'get',
        url:`/api/v1/message`,
        params: {
            page: payload.page,
            limit:payload.limit
        }
    })
}
}
export default new messageApi();

