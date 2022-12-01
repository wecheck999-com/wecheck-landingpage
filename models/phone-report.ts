export interface IPhoneReportInitialState {
    loading:boolean,
    phoneReportList: IPhoneReport[];
    error: boolean;
    phoneDetailList:IPhoneReport[] | any;
    loadingCreateChart:boolean;
    phoneCommentList: IPhoneComment[] ;
    loadingCreateCommentPhone:boolean
}

export interface IPhoneReport {
    id: string;
    phoneNumber: string;
    phoneDesription: string;
    countConfirm: number;
    countReport: number;
    originImage:string;
    confirmed: boolean;
    changeOwner: boolean;
    originName: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

export interface ISearchPhonePayload {
    phoneNumber?: any;
    page:number;
    limit:number;
}
export interface ISearchPhoneCommentPayload {
    phoneSearchId?: any;
    page:number;
    limit:number;
}

export interface IDetailPhoneNumber{
    id:string;
}

export interface IPayloadReportPhoneNumber {
	countAgency: boolean| number  ;
	countBother: boolean| number;
	countDues: boolean| number;
	countScam: boolean| number;
	countSpam: boolean| number;
	phoneNumber?: string;
}

export interface IPhoneComment {
    id: string;
    phoneSearchId: string;
    avatar: string;
    nameUser: string
    bodyComment: string
    createdAt: string
    updatedAt: string
    deletedAt: string
}

export interface IPayloadComment {
    phoneSearchId: any;
    nameUser: string;
    bodyComment: string;
}