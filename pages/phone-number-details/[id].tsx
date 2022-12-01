import React, { useEffect, useState } from 'react';
import { MainLayout } from '../../components/Layouts/MainLayout';
import {
  ContainerWrapper,
  PageWrapper,
} from '../../components/StyledComponents/CommonStyled';
import { ViewWrapper } from 'components/Home/HomePageStyled';
import {
  FormCommentWrapper,
  TitleChart,
  TitlePhoneNumber,
  ViewChart,
  ViewCommentWrapper,
} from 'components/StyledComponents/PhoneNumberDetailStyled';
import { UserOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  IDetailPhoneNumber,
  IPayloadComment,
  IPhoneReport,
  ISearchPhoneCommentPayload,
} from 'models/phone-report';
import {
  createCommentPhone,
  getChartPhoneNumber,
  getDetailPhoneNumber,
  getListCommentPhone,
  selectPhoneReport,
} from 'features/phone-report-slice';
import { Column } from '@ant-design/plots';
import {
  Col,
  Input,
  Row,
  Select,
  Tooltip,
  Table,
  Button,
  List,
  Form,
  Comment,
  message,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
const { TextArea } = Input;
interface IDataChart {
  type: string;
  ratio: number;
}
interface IPagination {
  page: number;
  limit: number;
}
const initDataChart: IDataChart[] = [
  {
    type: 'Lừa đảo',
    ratio: 0,
  },
  {
    type: 'Làm phiền',
    ratio: 0,
  },
  {
    type: 'Môi giới',
    ratio: 0,
  },
  {
    type: 'Đòi nợ',
    ratio: 0,
  },
  {
    type: 'Khác',
    ratio: 0,
  },
];

const PhoneNumberDetail = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const {
    loading,
    phoneDetailList,
    phoneCommentList,
    loadingCreateCommentPhone,
  } = useAppSelector(selectPhoneReport);
  const dispatch = useAppDispatch();
  const [data, setData] = useState(initDataChart);
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    limit: 50,
  });
  const [form] = Form.useForm();
  const config = {
    data,
    xField: 'type',
    yField: 'ratio',
    barWidthRatio: 0.5,
    fill: 'red',
    meta: {
      type: {
        alias: '',
      },
      ratio: {
        alias: 'Mức độ',
      },
    },
  };

  const columns: ColumnsType<IPhoneReport> = [
    {
      title: 'Số thuê bao',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      render: (text) => <a>{text}</a>,
      width: 200,
    },
    {
      title: 'Số lượt tìm kiếm',
      dataIndex: 'countSearch',
      key: 'countSearch',
      width: 200,
      align: 'center',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Hậu thuẫn',
      dataIndex: 'backerBy',
      key: 'backerBy',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Mô tả',
      dataIndex: 'phoneDesription',
      key: 'phoneDesription',
      render: (text) => <a>{text}</a>,
    },
  ];

  const onFinish = (values: IPayloadComment) => {
    let payloadComment = { ...values };
    if (router.query?.id) {
      payloadComment.phoneSearchId = router.query?.id;
      dispatch(createCommentPhone(payloadComment))
        .unwrap()
        .then((res) => {
          message.success('Bình luận thành công!');
          let newPayloadPhone: ISearchPhoneCommentPayload = {
            phoneSearchId: router.query?.id,
            page: pagination.page,
            limit: pagination.limit,
          };
          dispatch(getListCommentPhone(newPayloadPhone));
          form.resetFields();
        })
        .catch((error) => {
          message.error('Bình luận thất bại!');
          form.resetFields();
        });
    }
  };
  // GET CHART
  useEffect(() => {
    if (!router.query.phoneNumber) return;
    let payload = {
      id: router.query?.phoneNumber,
    };
    dispatch(getChartPhoneNumber(payload))
      .unwrap()
      .then()
      .then((res: any) => {
        if (res) {
          let newDataChart: IDataChart[] = [
            {
              type: 'Lừa đảo',
              ratio: res?.countScam,
            },
            {
              type: 'Làm phiền',
              ratio: res?.countBother,
            },
            {
              type: 'Môi giới',
              ratio: res?.countAgency,
            },
            {
              type: 'Đòi nợ',
              ratio: res?.countDues,
            },
            {
              type: 'Khác',
              ratio: res?.countSpam,
            },
          ];
          setData(newDataChart);
        }
      });
  }, [router.query?.phoneNumber]);
  //GET DETAIL PHONE NUMBER
  useEffect(() => {
    if (!router.query.id) return;
    let payload = {
      id: router.query?.id,
    };
    dispatch(getDetailPhoneNumber(payload));
  }, [router.query?.id]);

  // GET LIST PHONE COMMENTS
  useEffect(() => {
    if (!router.query.id) return;
    let payloadPhone: ISearchPhoneCommentPayload = {
      phoneSearchId: router.query?.id,
      page: pagination.page,
      limit: pagination.limit,
    };
    dispatch(getListCommentPhone(payloadPhone));
  }, [router.query?.id]);
  return (
    <PageWrapper>
      <ContainerWrapper>
        <ViewWrapper>
          <TitlePhoneNumber>Chi tiết thuê bao</TitlePhoneNumber>
          <Table
            loading={loading}
            columns={columns}
            dataSource={phoneDetailList ? [phoneDetailList] : []}
            pagination={false}
          />
          {/* start chart */}
          <ViewChart>
            <TitleChart>Biểu đồ thống kê</TitleChart>
            <Column {...config} height={200} />
          </ViewChart>
          {/* end chart */}
        </ViewWrapper>
        <ViewCommentWrapper>
          {phoneCommentList && (
            <List
              className='comment-list'
              header={`${phoneCommentList.length} bình luận`}
              itemLayout='horizontal'
              dataSource={phoneCommentList}
              renderItem={(item) => (
                <li>
                  <Comment
                    author={item?.nameUser}
                    avatar={item?.avatar}
                    content={<p style={{backgroundColor:'#fff', padding:'10px'}}>{item?.bodyComment}</p>}
                    datetime={
                      <Tooltip title={item?.createdAt}>
                        <span>
                          {moment(item?.createdAt).format(
                            'DD/MM/YYYY HH:mm:ss'
                          )}
                        </span>
                      </Tooltip>
                    }
                  />
                </li>
              )}
            />
          )}
          <Comment
            content={
              <FormCommentWrapper>
                <Form layout={`vertical`} onFinish={onFinish} form={form}>
                  <Form.Item
                    name={'nameUser'}
                    rules={[{ required: true, message: 'Vui lòng nhập tên' }]}
                  >
                    <Input placeholder='Tên' prefix={<UserOutlined />}/>
                  </Form.Item>
                  <Form.Item
                    name={'bodyComment'}
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nội dung bình luận',
                      },
                    ]}
                  >
                    <TextArea rows={4} placeholder="Nội dung bình luận" />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      htmlType='submit'
                      loading={loadingCreateCommentPhone}
                      type='primary'
                      style={{float:'right'}}
                    >
                      Bình luận
                    </Button>
                  </Form.Item>
                </Form>
              </FormCommentWrapper>
            }
          />
        </ViewCommentWrapper>
      </ContainerWrapper>
    </PageWrapper>
  );
};
PhoneNumberDetail.Layout = MainLayout;
export default PhoneNumberDetail;
