import { CrudService, UserService, QuickAccessService } from './services';
import { AppSettingsService } from './services/app-settings';
import BuildService from './services/build';
import ApiServiceDataStore from './services/data';

export default class AlghanimApiClient {
  public crud: CrudService;
  public user: UserService;
  public build: BuildService;
  public appSettings: AppSettingsService;
  public quickAccess: QuickAccessService;
  private store: ApiServiceDataStore = {
    apiDomain: '',
    token: undefined,
    languageID: undefined,
    subsiteID: undefined,
    websiteID: undefined,
    currencyID: undefined,
  };

  constructor(apiDomain: string) {
    this.store.apiDomain = apiDomain;
    this.crud = new CrudService(this.store);
    this.user = new UserService(this.store);
    this.build = new BuildService(this.store);
    this.appSettings = new AppSettingsService(this.store);
    this.quickAccess = new QuickAccessService(this.store);
  }

  public setToken(token?: string) {
    this.store.token = token;
  }

  public setLanguageID(id?: number) {
    this.store.languageID = id;
  }
  public setWebsiteID(id?: number) {
    this.store.websiteID = id;
  }
  public setSubsiteID(id?: number) {
    this.store.subsiteID = id;
  }
  public setCurrencyID(id?: number) {
    this.store.currencyID = id;
  }
}
