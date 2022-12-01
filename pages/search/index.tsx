import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Select, Tooltip } from "antd";
import { MainLayout } from "components/Layouts/MainLayout"
import { ContainerWrapper, PageWrapper } from "components/StyledComponents/CommonStyled";
import { ActionSearchWrapper, SearchForm, SearchFormItemWrapper, SearchWrapper } from "components/StyledComponents/SearchStyled";
import { NextPageWithLayout } from "models/common"
import {  Table, } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    phoneNumber: string;
    roamingPrice: number;
    type: string;
    phoneType: string;
    status: string;
    tags: string[];
}

const SearchPage: NextPageWithLayout = () => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Số thuê bao',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Giá/phí hòa mạng',
            dataIndex: 'roamingPrice',
            key: 'roamingPrice',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Loại thuê bao',
            dataIndex: 'type',
            key: 'type',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Loại số',
            dataIndex: 'phoneType',
            key: 'phoneType',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
            key: 'status',
            render: text => <a>{text}</a>,
        },
    ]
    return <PageWrapper>
        <ContainerWrapper>
            <SearchWrapper>
                <Tooltip placement="bottom" title={'123123123123'}>
                    <div className="guide-search">
                        HƯỚNG DẪN TÌM KIẾM <CaretDownOutlined />
                    </div>
                </Tooltip>
                <SearchForm>
                    <Row gutter={[16, 16]}>
                        <Col md={12}>
                            <SearchFormItemWrapper>
                                <span className="label">Tìm số: </span>
                                <Select
                                    placeholder="Đầu số"
                                    style={{ width: 120, marginRight: 10 }}
                                    options={[
                                        {
                                            value: 'all',
                                            label: 'Tất cả',
                                        },]}
                                >

                                </Select>
                                <Input placeholder="Số cần tìm" />
                            </SearchFormItemWrapper>
                        </Col>
                        <Col md={12}>
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
                        </Col>

                    </Row>
                    <ActionSearchWrapper>
                        <Button type="primary" icon={<SearchOutlined />}>
                            TÌM KIẾM
                        </Button>
                    </ActionSearchWrapper>
                </SearchForm>
            </SearchWrapper>
            <ActionSearchWrapper>
                <span>KẾT QUẢ TÌM KIẾM</span>
            </ActionSearchWrapper>
            <div>
            <Table  columns={columns} dataSource={[]} />
            </div>



        </ContainerWrapper>

    </PageWrapper>
}

SearchPage.Layout = MainLayout;
export default SearchPage
