import { Col, Row } from "antd"
import { ContainerWrapper } from "components/StyledComponents/CommonStyled"
import { AboutSectionDescript, AboutSectionHeader, AboutSectionWrapper } from "./AppAboutStyled"
import Image from "next/image";
import imageApp from 'assets/images/about-app-android-smartphone.png';
import { AppAboutCardComponet } from "./AppAboutCard/AppAboutCardComponent";

export const AboutSectionComponent = () => {

    return (<AboutSectionWrapper>
        <ContainerWrapper>
            <AboutSectionHeader>
                <p>About Our App</p>
            </AboutSectionHeader>
            <AboutSectionDescript>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </AboutSectionDescript>
            <Row>
                <Col md={12}>
                    <Image src={imageApp.src} width={386} height={526} alt='' />
                </Col>
                <Col md={12}>
                    <Row gutter={[0,32]}>
                        <Col md={24}>
                            <AppAboutCardComponet title="Creative design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit." />
                        </Col>
                        <Col md={24}>       
                            <AppAboutCardComponet title="Easy to use" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit." />
                        </Col>
                        <Col md={24}>
                            <AppAboutCardComponet title="Best user experince" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit." />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </ContainerWrapper>
    </AboutSectionWrapper>)
}

