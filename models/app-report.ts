export interface IPhoneReportPayload {
  phoneNumber?: string;
  page: number;
  limit: number;
}

export interface IAppReportInitialState {
  loading: boolean;
  error: boolean;
  appReportList: IAppReport[];
}

export interface IAppReport {
  id: string;
  appBundleAndroid: string;
  appBundleIos: string;
  appDescription: string;
  appImage: string;
  appName: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

