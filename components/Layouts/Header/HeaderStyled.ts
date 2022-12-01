import styled from "styled-components";
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


export const HeaderWrapper = styled(Header)`
    background-color:#5956E9;
    height: auto;
    padding-bottom: 15px;
    position: fixed;
    width: 100%;
    z-index: 999;
`

export const TopHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TopHeaderLeft = styled.div`
    display: flex;
    align-items: center;
`

export const TopHeaderRight = styled.div`
    display: flex;
    align-items: center;
    button {
        color: #FFFFFF;
        font-weight: 400;
    }
`

export const InfoWrapper = styled.div`
    margin-right: 15px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    font-weight: 400;
    svg {
        margin-right: 10px;
    }
    .mail-item {
        color: #FFFFFF;
    }
    .phone-item {
        color: #FFFFFF;
    }
`

export const NavbarWrapper = styled.div`
    width: 100%;
    padding: 10px 5px 10px 0;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .nav-item {
        color: #232233;
        font-weight: 600;
    }
    .active {
        font-weight: bold;
        color: #5956E9;
        span {
            border-bottom: 1px solid #5956E9;
        }
    }
    .btn-download {
        background-color: #5956E9;
        &:hover {
            background-color: #5956E9;
            opacity: 0.8;
        }
    }

`