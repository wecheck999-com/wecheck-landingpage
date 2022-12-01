import { Col, Row } from "antd"
import { ContainerWrapper } from "components/StyledComponents/CommonStyled"
import { HeroSection, HeroSectionLeft, HeroSectionRight } from "components/AppAbout/AppAboutStyled";
import Image from 'next/image'
import bgherosection from 'assets/images/bg-hero-section.png'
import phoneImage from 'assets/images/hero-phone.png';
import googlePlay from 'assets/images/google-play.png'
import appStore from 'assets/images/app-store.png'

export const HeroSectionComopnent = () => {

    return <HeroSection style={{
        backgroundImage: `url(${bgherosection.src})`,
    }}>
        <ContainerWrapper>
            <Row justify="center" gutter={[64, 32]} style={{ alignItems: "center" }}>
                <Col span={12}>
                    <HeroSectionLeft>
                        <div className='box-border'>
                            <div className="hero-section-info">
                                <p className="title">A Great App Makes Your Life Better</p>
                                <p className="description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                <p className="download-text">Download App Now</p>
                                <div className="download-app">
                                    <div>
                                        <Image src={googlePlay.src} width={150} height={45} alt='download apk file' />
                                    </div>
                                    <div>
                                        <Image src={appStore.src} width={150} height={45} alt='download app file' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </HeroSectionLeft>
                </Col>
                <Col span={12}><HeroSectionRight>
                    <Image src={phoneImage.src} alt='' height={725} width={500} /></HeroSectionRight></Col>
            </Row>
        </ContainerWrapper>

    </HeroSection>
} 