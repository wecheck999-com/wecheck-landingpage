export interface IMessagePayload {
  phoneNumber?: string;
  page: number;
  limit: number;
}

export interface IMessageInitialState {
  loading: boolean;
  error: boolean;
  messageList: IMessageResponse[];
}

export interface IMessageResponse {
  id: string;
  body: string;
  keyWordSpam: string;
  notificationDes: string;
  pority: string;
  title: string;
  type: number;
  updatedAt: string;
  deletedAt: string;
}

