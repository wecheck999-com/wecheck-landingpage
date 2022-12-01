import { GuildLineSectionWrapper } from "./AppAboutStyled"
import guildLineImage from 'assets/images/guild-line-section-bg.png';
import { ContainerWrapper } from "components/StyledComponents/CommonStyled";
import { Col, Row } from "antd";
import { CardInfoComponent } from "./CardInfoComponent/CardInfoComponent";

export const GuildLineSectionComponent = () => {

    return (
        <GuildLineSectionWrapper>
            <div className="guild-line-section-1" style={{ backgroundImage: `url(${guildLineImage.src})` }}>
                <ContainerWrapper>
                    <div className="header">
                        how to use the app perfectly
                    </div>
                    <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                    </div>
                    <div className="guild-line-video">
                        Video
                    </div>
                </ContainerWrapper>
            </div>
            <div className="guild-line-section-2">
                <ContainerWrapper>
                    <div className="header-section-2">
                        how to use the app perfectly
                    </div>
                    <div className="description-section-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                    </div>
                    <Row gutter={[64, 16]}>
                        <Col xs={24} md={8}>
                            <CardInfoComponent />
                        </Col>
                        <Col xs={24} md={8}>
                            <CardInfoComponent />
                        </Col>
                        <Col xs={24} md={8}>
                            <CardInfoComponent />
                        </Col>
                    </Row>
                </ContainerWrapper>

            </div>
        </GuildLineSectionWrapper>
    )
}