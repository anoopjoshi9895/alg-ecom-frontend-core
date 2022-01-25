import * as http from './http';
import ApiService from './service';

export class AppSettingsService extends ApiService {
  public async getAppSettings() {
    const url = `${this.apiDomain}mobileapp/index/common/`;
    return http.get(url);
  }
}
