import { Col, Row } from "antd"
import { ContainerWrapper } from "components/StyledComponents/CommonStyled"
import { CheckOurSectionWrapper, DownloadInfoAppWrapper, RightColWrapper } from "./AppAboutStyled"
import { CheckOurAppSlide } from "./CheckOurAppSlide/CheckOurAppSlide"
import gravitySceneIphone12 from 'assets/images/gravity-scene-iphone12.png';
import Image from "next/image";
import googlePlay from 'assets/images/google-play.png'
import appStore from 'assets/images/app-store.png'
import { ReportCardComponent } from "./CheckOurAppSlide/ReportCardComponent";
import { DownloadOutlined, LikeFilled, StarFilled } from "@ant-design/icons";

export const CheckOurSectionComponent = () => {



    return (
        <CheckOurSectionWrapper>
            <ContainerWrapper>
                <div className="header">
                    <span>Checkout Our App Interface Look</span>
                </div>
                <div className="description">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</span>
                </div>
                <CheckOurAppSlide />
                <DownloadInfoAppWrapper>
                    <Row>
                        <Col md={12}>
                            <RightColWrapper>
                                <div>
                                    <div className="header-downloadInfo"><span>Download App Now</span></div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
                                    </div>
                                    <Row className="download-app">
                                        <Col xs={24} md={12}>
                                            <Image src={googlePlay.src} width={150} height={45} alt='download apk file' />
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <Image src={appStore.src} width={150} height={45} alt='download app file' />
                                        </Col>
                                    </Row>
                                </div>
                                <Row gutter={[8,8]}>
                                    <Col xs={24} md={8}><ReportCardComponent icon={<DownloadOutlined />} total={20000} textDescription={"Download"} /></Col>
                                    <Col xs={24} md={8}>
                                        <ReportCardComponent icon={<LikeFilled />} total={29852} textDescription={"LIke"} />
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <ReportCardComponent icon={<StarFilled />} total={1500} textDescription={"5 star rating"} />
                                    </Col>
                                </Row>
                            </RightColWrapper>
                        </Col>
                        <Col md={12}>
                            <Image src={gravitySceneIphone12.src} alt='' height={480} width={516} />
                        </Col>
                    </Row>
                </DownloadInfoAppWrapper>

            </ContainerWrapper>
        </CheckOurSectionWrapper>
    )
}

