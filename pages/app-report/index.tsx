import { MainLayout } from '../../components/Layouts/MainLayout';
import {
  ContainerWrapper,
  PageWrapper,
} from '../../components/StyledComponents/CommonStyled';
import { NextPageWithLayout } from '../../models/common';
import { Col, Input, Row, Select, Tooltip, Table, Button, Image } from 'antd';
import {
  ActionSearchWrapper,
  SearchForm,
  SearchFormItemWrapper,
  SearchWrapper,
} from 'components/StyledComponents/SearchStyled';
import {
  CaretDownOutlined,
  SearchOutlined,
  SettingOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { ViewWrapper } from 'components/Home/HomePageStyled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  getPhoneReportList,
  getSearchReportList,
  updatePhoneSearch,
} from 'features/phone-report-slice';
import { IPhoneReport, ISearchPhonePayload } from 'models/phone-report';
import { getAppReportList, selectAppReport } from 'features/app-report-slice';
import { IAppReport } from 'models/app-report';

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

const AppReport: NextPageWithLayout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, appReportList } = useAppSelector(selectAppReport);
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    limit: 50,
  });
  const [search, setSearch] = useState<string>('');
  const columns: ColumnsType<IAppReport> = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: 80,
      align: 'center',
      render: (text, object, index) =>
        (pagination.page - 1) * pagination.limit + index + 1,
    },
    {
      title: 'App',
      dataIndex: 'appName',
      key: 'appName',
      render: (text, record) => (
        <div>
          <Image
            width={50}
            src={record?.appImage}
          />
          <a style={{marginLeft: '20px'}}>{text}</a>
        </div>
      ),
    },
    {
      title: 'Mô tả',
      dataIndex: 'appDescription',
      key: 'appDescription',
      render: (text) => <a>{text}</a>,
    },
    // {
    //     title: <SettingOutlined />,
    //     dataIndex: 'action',
    //     key: 'action',
    //     width:200,
    //     render: (_, record,) => <a  onClick={()=>router.push({
    //         pathname:`/phone-number-details/${record.id}`,
    //         query: { phoneNumber: record.appName }
    //     })}>Xem chi tiết</a>,
    // },
  ];

  const onChangePagination = (page: number, pageSize: number) => {
    setPagination({ page: page, limit: pageSize });
  };

  useEffect(() => {
    var payload: ISearchPhonePayload = {
      page: pagination.page,
      limit: pagination.limit,
    };
    dispatch(getAppReportList(payload));
  }, []);

  const handleSearch = () => {
    var payload: ISearchPhonePayload = {
      phoneNumber: search ? search : '0',
      page: pagination.page,
      limit: pagination.limit,
    };
    dispatch(getSearchReportList(payload));
    if (search) {
      dispatch(updatePhoneSearch({ phoneNumber: search }));
    }
  };
  const handleClear = () => {
    setPagination({ page: 1, limit: 50 });
    let payload: ISearchPhonePayload = {
      page: 1,
      limit: 50,
    };
    dispatch(getPhoneReportList(payload));
  };
  return (
    <PageWrapper>
      <ContainerWrapper>
        <SearchWrapper>
          <Tooltip
            placement='bottom'
            title={
              'Nhập tên app cần tìm vào ô tìm kiếm. Nhấn vào nút tìm kiếm để tiến hành tìm kiếm app'
            }
          >
            <div className='guide-search'>
              HƯỚNG DẪN TÌM KIẾM <CaretDownOutlined />
            </div>
          </Tooltip>
          <SearchForm>
            <Row gutter={[16, 16]}>
              <Col md={12}>
                <SearchFormItemWrapper>
                  <span className='label'>Tìm app: </span>
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
                  <Input
                    size='large'
                    placeholder='App cần tìm'
                    onChange={(event) => setSearch(event.target.value)}
                  />
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
              <Button
                type='primary'
                loading={loading}
                icon={<SearchOutlined />}
                onClick={() => handleSearch()}
              >
                TÌM KIẾM
              </Button>
              <Button icon={<ReloadOutlined />} onClick={() => handleClear()}>
                Làm mới
              </Button>
            </ActionSearchWrapper>
          </SearchForm>
        </SearchWrapper>
        <ActionSearchWrapper>
          <span>KẾT QUẢ TÌM KIẾM</span>
        </ActionSearchWrapper>
        <ViewWrapper>
          <Table
            loading={loading}
            columns={columns}
            dataSource={appReportList ? appReportList : []}
            pagination={{
              current: pagination.page,
              pageSize: pagination.limit,
              onChange: onChangePagination,
            }}
          />
        </ViewWrapper>
      </ContainerWrapper>
    </PageWrapper>
  );
};

AppReport.Layout = MainLayout;

export default AppReport;
