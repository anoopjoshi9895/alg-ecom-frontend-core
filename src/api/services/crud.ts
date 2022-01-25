
import ApiService from './service';

export default class CrudService extends ApiService {
  // public async getList(request: CrudListRequestModel) {
  //   const { page = 1, perPage = 10 } = request.pagination;
  //   const { field, order } = request.sort;
  //   const query = {
  //     _filters: JSON.stringify(request.filter),
  //     _sort: field,
  //     _order: order,
  //     _start: (page - 1) * perPage,
  //     _end: page * perPage,
  //     ...request.queryParams,
  //   };
  //   const url = `${this.apiDomain}/${request.resource}?${stringify(query)}`;
  //   const response = await http.get(url, this.token);
  //   return { data: response.data, count: response.headers['x-total-count'] };
  // }
  // public async create(request: CrudRequestModel, data: any) {
  //   const url = `${this.apiDomain}/${request.resource}`;
  //   return http.post(url, data, this.token);
  // }
  // public async get(request: CrudDetailsRequestModel) {
  //   const url = `${this.apiDomain}/${request.resource}/${request.resourceId}`;
  //   return http.get(url, this.token);
  // }
  // public async update(request: CrudDetailsRequestModel, data: any) {
  //   const url = `${this.apiDomain}/${request.resource}/${request.resourceId}`;
  //   return http.put(url, data, this.token);
  // }
  // public async remove(request: CrudDetailsRequestModel) {
  //   const url = `${this.apiDomain}/${request.resource}/${request.resourceId}`;
  //   return http.remove(url, this.token);
  // }
}
