import { Button } from "antd";
import styled from "styled-components";
import { device } from "./device";

export const ContainerWrapper = styled.div`
     width: 100%;
        margin-left: auto;
        box-sizing: border-box;
        margin-right: auto;
        display: block;
        @media ${device.laptop} { 
        max-width: 1024px;
    }

    @media ${device.desktop} {
        max-width: 1440px;
    }
 
`
export const PageWrapper = styled.div`
    /* padding-top: 15px; */
    /* padding-bottom: 15px; */
    /* background-color: #FFFFFF; */
`

export const WrapperFooterModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`

export const ButtonCancel=styled(Button)`
    width: 104px;
    height: 32px;
    background: #D9D9D9;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    color: #002766;
    font-size: 14px;
    line-height: 22px
`
export const ButtonOk=styled(Button)`
    width: 104px;
    height: 32px;
    background: #1890FF;
    border: 1px solid #5D5FEF;
    border-radius: 4px;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 22px
`