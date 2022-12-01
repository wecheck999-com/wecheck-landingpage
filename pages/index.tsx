import { MainLayout } from '../components/Layouts/MainLayout'
import { ButtonCancel, ButtonOk, ContainerWrapper, PageWrapper, WrapperFooterModal } from '../components/StyledComponents/CommonStyled'
import { NextPageWithLayout } from '../models/common'
import { Col, Input, Row, Select, Tooltip, Table, Button , Modal, Form, Checkbox, message  } from 'antd'
import { ActionSearchWrapper, SearchForm, SearchFormItemWrapper, SearchWrapper } from 'components/StyledComponents/SearchStyled'
import { CaretDownOutlined, SearchOutlined, SettingOutlined, ReloadOutlined, EllipsisOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table';
import { ViewWrapper } from 'components/Home/HomePageStyled'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector,  } from "app/hooks";
import {createChartPhoneNumber, getPhoneReportList,getSearchReportList,selectPhoneReport, updatePhoneSearch} from 'features/phone-report-slice';
import { IPayloadReportPhoneNumber, IPhoneReport, ISearchPhonePayload } from 'models/phone-report'
import { wrapper } from "../app/store";
import { ListNumberText } from 'utils/output-onlinestringtools'

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

const Home: NextPageWithLayout = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();
	const [form] = Form.useForm();
    const {loading, phoneReportList, loadingCreateChart} = useAppSelector(selectPhoneReport);
    const [pagination, setPagination] = useState<IPagination>({ page: 1, limit: 50 })
    const [search, setSearch] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState <boolean>(false);
	const [titleModal, setTitleModal] = useState<string|null>(null)
    const columns: ColumnsType<IPhoneReport> = [ 
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            width:80,
            align:'center',
            render: (text, object, index) => ((pagination.page-1) * pagination.limit) +  index + 1
        },
        {
            title: 'Số thuê bao',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            render: (text, record) => <a onClick={()=>router.push({
                pathname:`/phone-number-details/${record.id}`,
                query: { phoneNumber: record.phoneNumber }
            })}>{text}</a>,
            width:200,
        },
        {
            title: 'Số lượt tìm kiếm',
            dataIndex: 'countSearch',
            key: 'countSearch',
            width:200,
            align:'center',
            render: text => <a>{text}</a>,
        },
        {   
            title: 'Mô tả',
            dataIndex: 'backerBy',
            key: 'backerBy',
            render: text => <a>{text}</a>,
        },
        {
            title: <SettingOutlined />,
            dataIndex: 'action',
            key: 'action',
            width:200,
            render: (_, record,) => (
                <div style={{display:'flex', alignItems:"center", gap:'20px'}}>
                    <a  onClick={()=>router.push({
                pathname:`/phone-number-details/${record.id}`,
                query: { phoneNumber: record.phoneNumber }
                    })}>Xem chi tiết </a>
                    <EllipsisOutlined onClick={()=> showModalReportPhoneNumber(record?.phoneNumber)} style={{fontSize:"25px", cursor:"pointer"}} />
                </div>
            ),
        },
    ]
    const onChangePagination=(page:number, pageSize:number)=> {
        setPagination({page:page, limit: pageSize})
    }

	const showModalReportPhoneNumber = (value:string) => {
		setTitleModal(value)
		setIsModalOpen(true);
	};
	
	const handleCancel = () => {
		setTitleModal(null)
		form.resetFields()
		setIsModalOpen(false);
	};
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
        dispatch(getPhoneReportList(payload))
    }

	const reportPhoneNumber = (values: IPayloadReportPhoneNumber) => {
	let payload = {...values}
	if(titleModal){
		payload.phoneNumber = titleModal
		payload.countScam = values.countScam ? 1 : 0
		payload.countBother = values.countBother ? 1 : 0
		payload.countAgency = values.countAgency ? 1 : 0
		payload.countDues = values.countDues ? 1 : 0
		payload.countSpam = values.countSpam ? 1 : 0
		dispatch(createChartPhoneNumber(payload)).unwrap()
        .then(res=>{
			if(res){
				message.success('Tố cáo thành công!')
				setTitleModal(null)
				form.resetFields()
				setIsModalOpen(false);
			}
		}).catch(error =>{
			setTitleModal(null)
			form.resetFields()
			setIsModalOpen(false);
			message.success('Tố cáo thái bại!')
		})
	}

	};
	useEffect(() => {
        // var payload:ISearchPhonePayload ={
        //     page: pagination.page,
        //     limit:pagination.limit,
        // }
        // dispatch(getPhoneReportList(payload))
     
    },[]);


    return (
        <PageWrapper>
            <ContainerWrapper>
                <SearchWrapper>
                    <Tooltip placement="bottom" title={'Nhập số điện thoại cần tìm vào ô tìm kiếm. Nhấn vào nút tìm kiếm để tiến hành tìm kiếm số điện thoại'}>
                        <div className="guide-search">
                            HƯỚNG DẪN TÌM KIẾM <CaretDownOutlined />
                        </div>
                    </Tooltip>
                    <SearchForm>
                        <Row gutter={[16, 16]}>
                            <Col md={12}>
                                <SearchFormItemWrapper>
                                    <span className="label">Tìm số: </span>
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
                                    <Input size='large' placeholder="Số cần tìm" onChange={(event) => setSearch(event.target.value)} />
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
                    <Table loading={loading} columns={columns} dataSource={phoneReportList ? phoneReportList : []} pagination={{
                        current:pagination.page,
                        pageSize: pagination.limit,
                        onChange: onChangePagination
                    }} />
                </ViewWrapper>
                <section style={{marginTop:'80px', backgroundColor:'#E5E5E5', zIndex:99}}>
                        <div style={{marginBottom:"10px", height:'400px', backgroundColor:"#E5E5E5",width:"1300px", position:"absolute"}}></div>
                        <div style={{overflow:'auto', height:'350px', zIndex:1, position:'inherit'}}>
                            {ListNumberText[0].phoneNumber}
                        </div>
                    </section>
            </ContainerWrapper>
            <Modal title={`Tố cáo số thuê bao: ${titleModal} `} open={isModalOpen} onCancel={handleCancel} footer={false} >
            <Form 
                onFinish={reportPhoneNumber}
                scrollToFirstError
                layout="vertical"
				form={form}
            >
				<Row gutter={[16, 16]}>
					<Col xxl={12} xl={12} sm={12} xs={24}>
						<Form.Item initialValue={false} name='countScam' valuePropName='checked'>
							<Checkbox>Lừa đảo</Checkbox>
						</Form.Item>
						<Form.Item initialValue={false} name='countBother' valuePropName='checked'>
							<Checkbox>Làm phiền</Checkbox>
						</Form.Item>
						<Form.Item initialValue={false} name='countAgency' valuePropName='checked'>
							<Checkbox>Môi giới</Checkbox>
						</Form.Item>
						</Col>
					<Col xxl={12} xl={12} sm={12} xs={24}>
						<Form.Item initialValue={false} name='countDues' valuePropName='checked'>
							<Checkbox>Đòi nợ</Checkbox>
						</Form.Item>
						<Form.Item initialValue={false}name='countSpam' valuePropName='checked'>
							<Checkbox>Khác</Checkbox>
						</Form.Item>
					</Col>
				</Row>
				<WrapperFooterModal>
					<ButtonCancel onClick={handleCancel}>Hủy</ButtonCancel>
					<ButtonOk  loading={loadingCreateChart} htmlType='submit'>Tố cáo</ButtonOk>           
				</WrapperFooterModal>
                </Form>
            </Modal>
        </PageWrapper>
    )
}


// Home.getInitialProps = wrapper.getInitialPageProps(store => async (props) => {
//         var payload:ISearchPhonePayload ={
//             page: 1,
//             limit:5,
//         }
//         console.log("hjhj")
//         store.dispatch(getPhoneReportList(payload))
//   });

Home.getInitialProps = wrapper.getInitialPageProps(
    ({ dispatch }) =>
    async () => {
    var payload:ISearchPhonePayload ={
        page: 1,
        limit:5,
    }
        await dispatch(getPhoneReportList(payload))
    }
);

Home.Layout = MainLayout;

export default Home;


