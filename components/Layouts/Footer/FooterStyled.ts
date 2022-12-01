import { Footer } from "antd/lib/layout/layout";
import styled from "styled-components";

export const FooterWrapper = styled(Footer)`
    background-color: #232233;
    color: #fff;
    height: auto;
    position: relative;
    width: 100%;
 
`

export const BoxInfoWrapper = styled.div`
    position: relative;
    width: 100%;
    .box-info {
        position: absolute;
        /* White */
        height: 230px;
        background: #FFFFFF;
        border-radius: 30px;
        left: 180px;
        right: 180px;
        top:-130px;
        padding-top: 60px;
        padding-left: 25px;
        /* padding-right: 25px; */
        .info-content {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            span {
                font-weight: 600;
                font-size: 25px;
                line-height: 38px;
                text-transform: lowercase;
                color: #232233;
                margin-left: 15px;
            }
            .content-left {
                display: flex;
                align-items: center;
                /* border-right: 2px solid #000; */
                padding-right: 25px;
            }
            .content-right {
                display: flex;
                align-items: center;
                padding-right: 25px;
            }
        }
    }
`
export const BoxLinkWrapper =styled.div`
    margin-top: 150px;
    .footer-title {
        font-weight: 700;
        font-size: 31.25px;
        line-height: 47px;
        /* identical to box height, or 151% */
        text-transform: uppercase;
        /* White */
        color: #FFFFFF;
    }
`

export const Coppyright = styled.div`
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    /* White */
    color: #FFFFFF;
`

export const MailOutlined = styled.a`
    color: #FFFFFF;

`
export const PhoneOutlined = styled.a`
    color: #FFFFFF;

`