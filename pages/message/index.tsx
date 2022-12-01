import { MainLayout } from '../../components/Layouts/MainLayout'
import { ContainerWrapper, PageWrapper } from '../../components/StyledComponents/CommonStyled'
import { NextPageWithLayout } from '../../models/common'
import { Col, Input, Row, Select, Tooltip, Table, Button } from 'antd'
import { ActionSearchWrapper, SearchForm, SearchFormItemWrapper, SearchWrapper } from 'components/StyledComponents/SearchStyled'
import { CaretDownOutlined, SearchOutlined, SettingOutlined, ReloadOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table';
import { ViewWrapper } from 'components/Home/HomePageStyled'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector,  } from "app/hooks";
import {getPhoneReportList,getSearchReportList, updatePhoneSearch} from 'features/phone-report-slice';
import {  ISearchPhonePayload } from 'models/phone-report'
import { IMessageResponse } from 'models/message'
import { getMessageList, selectMessage } from 'features/message-slice'

interface DataType {
    key: string;
    phoneNumber: string;
    roamingPrice: number;
    type: string;
    phoneType: string;
    status: string;
    tags: string[];
}
interface IPagination {
    page: number;
    limit: number;
}

const MessagePage: NextPageWithLayout = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();
    const {loading, messageList} = useAppSelector(selectMessage);
    const [pagination, setPagination] = useState<IPagination>({ page: 1, limit: 50 })
    const [search, setSearch] = useState<string>("");
    const columns: ColumnsType<IMessageResponse> = [ 
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            width:80,
            align:'center',
            render: (text, object, index) => ((pagination.page-1) * pagination.limit) +  index + 1
        },
        {
            title: 'Link',
            dataIndex: 'body',
            key: 'body',
            render: text => <a>{text}</a>,
            width:200,
        },
       
        {   
            title: 'Mô tả',
            dataIndex: 'keyWordSpam',
            key: 'keyWordSpam',
            render: text => <a>{text}</a>,
        },
        // {
        //     title: <SettingOutlined />,
        //     dataIndex: 'action',
        //     key: 'action',
        //     width:200,
        //     render: (_, record,) => <a  onClick={()=>router.push({
        //         pathname:`/phone-number-details/${record.id}`,
        //         query: { phoneNumber: record.phoneNumber }
        //       })}>Xem chi tiết</a>,
        // },
    ]
   
    const onChangePagination=(page:number, pageSize:number)=> {
        setPagination({page:page, limit: pageSize})
    }

    useEffect(() => {
        var payload:ISearchPhonePayload ={
            page: pagination.page,
            limit:pagination.limit,
        }
        dispatch(getMessageList(payload))
    },[]);

   const handleSearch =()=> {
        var payload:ISearchPhonePayload ={
            phoneNumber: search?search: "0",
            page: pagination.page,
            limit:pagination.limit,
        }
        dispatch(getSearchReportList(payload));
        if(search) {
            dispatch(updatePhoneSearch({"phoneNumber": search })) 
        }
    }
    const handleClear =  () =>{
        setPagination({ page: 1, limit: 50 })
        let payload:ISearchPhonePayload ={
            page: 1,
            limit: 50,
        }
        dispatch(getMessageList(payload))
    }
    return (
        <PageWrapper>
            <ContainerWrapper>
                <SearchWrapper>
                    <Tooltip placement="bottom" title={'Nhập link cần tìm vào ô tìm kiếm. Nhấn vào nút tìm kiếm để tiến hành tìm kiếm link'}>
                        <div className="guide-search">
                            HƯỚNG DẪN TÌM KIẾM <CaretDownOutlined />
                        </div>
                    </Tooltip>
                    <SearchForm>
                        <Row gutter={[16, 16]}>
                            <Col md={12}>
                                <SearchFormItemWrapper>
                                    <span className="label">Tìm link: </span>
                                    {/* <Select
                                        placeholder="Đầu số"
                                        style={{ width: 120, marginRight: 10 }}
                                        options={[
                                            {
                                                value: 'all',
                                                label: 'Tất cả',
                                            },]}
                                    >

                                    </Select> */}
                                    <Input size='large' placeholder="Link cần tìm" onChange={(event) => setSearch(event.target.value)} />
                                </SearchFormItemWrapper>
                            </Col>
                            {/* <Col md={12}>
                                <SearchFormItemWrapper>
                                    <span className="label">Loại số: </span>
                                    <Select
                                        placeholder="Đầu số"
                                        style={{ width: '100%', marginRight: 10 }}
                                        options={[
                                            {
                                                value: 'all',
                                                label: 'Tất cả',
                                            },]}
                                    >

                                    </Select>

                                </SearchFormItemWrapper>
                            </Col> */}

                        </Row>
                        <ActionSearchWrapper>
                            <Button type="primary" loading={loading} icon={<SearchOutlined />} onClick={()=> handleSearch()}>
                                TÌM KIẾM
                            </Button>
                            <Button  icon={<ReloadOutlined />} onClick={()=> handleClear()}>
                                Làm mới
                            </Button>
                        </ActionSearchWrapper>
                    </SearchForm>
                </SearchWrapper>
                <ActionSearchWrapper>
                    <span>KẾT QUẢ TÌM KIẾM</span>
                </ActionSearchWrapper>
                <ViewWrapper>
                    <Table loading={loading} columns={columns} dataSource={messageList ? messageList : []} pagination={{
                        current:pagination.page,
                        pageSize: pagination.limit,
                        onChange: onChangePagination
                    }} />
                </ViewWrapper>
            </ContainerWrapper>
        </PageWrapper>
    )
}

MessagePage.Layout = MainLayout;

export default MessagePage;


