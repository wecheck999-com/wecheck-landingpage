import { AppFeatureDescription, AppFeatureWrapper, AppFeaturnHeader, WrapperDirectionColumn } from "./AppAboutStyled"
import backgroundImage from 'assets/images/bg-section-feature.png';
import { Col, Row } from "antd";
import { ContainerWrapper } from "components/StyledComponents/CommonStyled";
import { AppFeatureCard } from "./AppFeatureCard/AppFeatureCard";
import commentIcon from 'assets/icons/comment.svg';
import Image from "next/image";
import appImage from 'assets/images/app-feature.png';
import browserIcon from 'assets/icons/browser.svg';
import vectorIcon from 'assets/icons/vector.svg';
import phoneIcon from 'assets/icons/cell-phone.svg';
import eyeScanner from 'assets/icons/eye-scanner.svg';
import maleTelemarketer from 'assets/icons/male-telemarketer.svg';
export const AppFeaturesSectionComponent = () => {
    return (
        <AppFeatureWrapper style={{ backgroundImage: `url(${backgroundImage.src})` }}>
            <ContainerWrapper>
                <AppFeaturnHeader>
                    <p>App features</p>
                </AppFeaturnHeader>
                <AppFeatureDescription>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                    </span>
                </AppFeatureDescription>
                <Row justify="center">
                    <Col md={8}>
                        <AppFeatureCard title="Full free chat" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={commentIcon.src} textAlign="center" />
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col md={8}>
                        <WrapperDirectionColumn>
                            <AppFeatureCard
                                title="Unlimiter features"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                icon={browserIcon.src}
                                textAlign="right"
                            />
                            <AppFeatureCard
                                title="Awsome ui design"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                icon={vectorIcon.src}
                                textAlign="right"
                            />
                        </WrapperDirectionColumn>

                    </Col>
                    <Col md={8}>
                        <div>
                            <Image src={appImage.src} width={380} height={700} alt='' />
                        </div>
                    </Col>
                    <Col md={8}>
                        <WrapperDirectionColumn>
                            <AppFeatureCard
                                title="Iso & androind version"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                icon={phoneIcon.src}
                                textAlign="left"
                            />
                            <AppFeatureCard
                                title="Retina ready greaphics"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                icon={eyeScanner.src}
                                textAlign="left"
                            />
                        </WrapperDirectionColumn>

                    </Col>
                </Row>
                <Row justify="center">
                    <Col md={8}>
                        <AppFeatureCard title="24/7 support by real pepole" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." icon={maleTelemarketer.src} textAlign="center" />
                    </Col>
                </Row>
            </ContainerWrapper>
        </AppFeatureWrapper>
    )
}