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
import Head from "next/head";
import settings from "../data/settings.json";
import jsonDataPhone from "../data/jsonDataPhone.json";
import { wrapper } from 'app/store'
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
            title: 'S??? thu?? bao',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            render: (text, record) => <a onClick={()=>router.push({
                pathname:`/phone-number-details/${record.id}`,
                query: { phoneNumber: record.phoneNumber }
            })}>{text}</a>,
            width:200,
        },
        {
            title: 'S??? l?????t t??m ki???m',
            dataIndex: 'countSearch',
            key: 'countSearch',
            width:200,
            align:'center',
            render: text => <a>{text}</a>,
        },
        {   
            title: 'M?? t???',
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
                    })}>Xem chi ti???t </a>
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
				message.success('T??? c??o th??nh c??ng!')
				setTitleModal(null)
				form.resetFields()
				setIsModalOpen(false);
			}
		}).catch(error =>{
			setTitleModal(null)
			form.resetFields()
			setIsModalOpen(false);
			message.success('T??? c??o th??i b???i!')
		})
	}

	};
	useEffect(() => {
    let payload:ISearchPhonePayload ={
            page: pagination.page,
            limit:pagination.limit,
        }
        dispatch(getPhoneReportList(payload))
    },[]);


    return (
        <>
        <Head>
            <title>{settings?.title}</title>
            <meta name='description' content={settings?.description} />
            <meta name='keywords' content={settings?.keywords} />
            <meta property='og:title' content={settings?.OgTitle} />
            <meta property='og:description' content={settings?.OgDescription} />
            <meta property='og:image' content={settings?.OgIamge} />
            <meta property='og:url' itemProp='url' content={settings?.OgUrl} />
            <meta property='og:type' content='website' />
            <meta name='RATING' content='GENERAL' />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonDataPhone) }}
            />
            <meta name="google-site-verification" content="7p5afqCwe02AvGGLhFbNf7Fq_bTFIyPHqmansRDZkxU" />
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <PageWrapper>
            <ContainerWrapper>
                <SearchWrapper>
                    <Tooltip placement="bottom" title={'Nh???p s??? ??i???n tho???i c???n t??m v??o ?? t??m ki???m. Nh???n v??o n??t t??m ki???m ????? ti???n h??nh t??m ki???m s??? ??i???n tho???i'}>
                        <div className="guide-search">
                            H?????NG D???N T??M KI???M <CaretDownOutlined />
                        </div>
                        <h1 style={{opacity:0, color:"#E5E5E5"}}>Khonglamphien.com</h1>
                    </Tooltip>
                    <SearchForm>
                        <Row gutter={[16, 16]}>
                            <Col md={12}>
                                <SearchFormItemWrapper>
                                    <span className="label">T??m s???: </span>
                            
                                    <Input size='large' placeholder="S??? c???n t??m" onChange={(event) => setSearch(event.target.value)} />
                                </SearchFormItemWrapper>
                            </Col>
                        </Row>
                        <ActionSearchWrapper>
                            <Button type="primary" loading={loading} icon={<SearchOutlined />} onClick={()=> handleSearch()}>
                                T??M KI???M
                            </Button>
                            <Button  icon={<ReloadOutlined />} onClick={()=> handleClear()}>
                                L??m m???i
                            </Button>
                        </ActionSearchWrapper>
                    </SearchForm>
                </SearchWrapper>
                <ActionSearchWrapper>
                    <span>K???T QU??? T??M KI???M</span>
                </ActionSearchWrapper>
                <ViewWrapper>
                    <Table  rowKey="Id"  loading={loading} columns={columns} dataSource={phoneReportList ? phoneReportList : []} pagination={{
                        current:pagination.page,
                        pageSize: pagination.limit,
                        onChange: onChangePagination
                    }} />
                </ViewWrapper>
            </ContainerWrapper>
            <Modal title={`T??? c??o s??? thu?? bao: ${titleModal} `} open={isModalOpen} onCancel={handleCancel} footer={false} >
            <Form 
                onFinish={reportPhoneNumber}
                scrollToFirstError
                layout="vertical"
				form={form}
            >
				<Row gutter={[16, 16]}>
					<Col xxl={12} xl={12} sm={12} xs={24}>
						<Form.Item initialValue={false} name='countScam' valuePropName='checked'>
							<Checkbox>L???a ?????o</Checkbox>
						</Form.Item>
						<Form.Item initialValue={false} name='countBother' valuePropName='checked'>
							<Checkbox>L??m phi???n</Checkbox>
						</Form.Item>
						<Form.Item initialValue={false} name='countAgency' valuePropName='checked'>
							<Checkbox>M??i gi???i</Checkbox>
						</Form.Item>
						</Col>
					<Col xxl={12} xl={12} sm={12} xs={24}>
						<Form.Item initialValue={false} name='countDues' valuePropName='checked'>
							<Checkbox>????i n???</Checkbox>
						</Form.Item>
						<Form.Item initialValue={false}name='countSpam' valuePropName='checked'>
							<Checkbox>Kh??c</Checkbox>
						</Form.Item>
					</Col>
				</Row>
				<WrapperFooterModal>
					<ButtonCancel onClick={handleCancel}>H???y</ButtonCancel>
					<ButtonOk  loading={loadingCreateChart} htmlType='submit'>T??? c??o</ButtonOk>           
				</WrapperFooterModal>
                </Form>
            </Modal>
        </PageWrapper>
        </>
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

Home.Layout = MainLayout;
Home.getInitialProps = wrapper.getInitialPageProps(
    ({ dispatch }) =>
    async () => {
    var payload:ISearchPhonePayload ={
        page: 1,
        limit:50,
    }
        await dispatch(getPhoneReportList(payload))
    }
);
export default Home;
