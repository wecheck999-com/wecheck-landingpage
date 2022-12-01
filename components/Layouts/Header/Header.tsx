
import { ContainerWrapper } from "../../StyledComponents/CommonStyled"
import { HeaderWrapper, InfoWrapper, NavbarWrapper, TopHeader, TopHeaderLeft, TopHeaderRight } from "./HeaderStyled"
import { FacebookOutlined, GithubOutlined, InstagramOutlined, MailOutlined, PhoneOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'
import { Button } from "antd"
import { useRouter } from 'next/router';

export const Header = () => {
    const router = useRouter()

    return <HeaderWrapper>
        <ContainerWrapper>
            <TopHeader>
                <TopHeaderLeft>
                    <InfoWrapper><MailOutlined /> <span><a className="mail-item" href= "mailto:telesaleapp@gmail.com?subject = Feedback&body = Message">telesaleapp@gmail.com</a></span></InfoWrapper>
                    <InfoWrapper><PhoneOutlined /> <span><a className="phone-item"href="tel:+4733378901">(+84) 568296727</a></span></InfoWrapper>
                </TopHeaderLeft>
                <TopHeaderRight>
                    {/* <Button type="text" >
                        <FacebookOutlined />
                    </Button>
                    <Button type="text" >
                        <InstagramOutlined />
                    </Button>
                    <Button type="text">
                        <TwitterOutlined />
                    </Button> */}
                    <Button type="text">
                        <GithubOutlined href="https://github.com/khonglamphien"></GithubOutlined>
                    </Button>
                </TopHeaderRight>
            </TopHeader>
            <NavbarWrapper>
                    <Button type="text" className={router?.pathname === '/' ? "nav-item active" : "nav-item"}  onClick={()=> router.push('/')}>
                        TRANG CHỦ
                    </Button>
                    <Button type="text" className={router?.pathname === '/app-report' ? "nav-item active" : "nav-item"} onClick={()=> router.push('/app-report')}>
                        ỨNG DỤNG
                    </Button>
                    <Button type="text" className={router?.pathname === '/message' ? "nav-item active" : "nav-item"} onClick={()=> router.push('/message')}>
                        LIÊN KẾT LỪA ĐẢO
                    </Button>
                    <Button type="text" className="nav-item" >
                        TIN NHẮN LỪA ĐẢO
                    </Button>
                    <Button type="text" className="nav-item">
                        LỪA ĐẢO MỚI
                    </Button>
                    <Button type="primary" className="btn-download" onClick={()=> router.push('/app-about')}>
                        TẢI APP 
                    </Button>
            </NavbarWrapper>
        </ContainerWrapper>
    </HeaderWrapper>
}

