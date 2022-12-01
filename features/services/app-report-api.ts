import  axiosClient  from './axios-client';

class appReportApi {

  getListAppReport(payload:any) {
    return axiosClient({
        method: 'get',
        url:`/api/v1/appreport`,
        params: {
            page: payload.page,
            limit:payload.limit
        }
    })
}
}
export default new appReportApi();