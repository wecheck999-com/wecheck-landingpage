import { CardAction, CardAvartarWrapper, CardAvatar, CardContent, CardWrapper } from "./CardInfoComponentStyled"
import bgAvatar from 'assets/images/bg-avatar.png';
import { FacebookOutlined, GithubOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Divider } from "antd";

export const CardInfoComponent = ()=> {
    return(
        <CardWrapper>
            <CardAvartarWrapper>
                <CardAvatar style={{ backgroundImage: `url(${bgAvatar.src})`,}}></CardAvatar>
            </CardAvartarWrapper>
            <CardContent>
                <div className="title">Carla Press</div>
                <div className="subtitle">App Developer</div>
                <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</div>
            </CardContent>
            <CardAction>
                <div className="action-groups">
                    {/* <FacebookOutlined />
                    <Divider type="vertical" />
                    <InstagramOutlined />
                    <Divider type="vertical" />
                    <TwitterOutlined />
                    <Divider type="vertical" />
                    <YoutubeOutlined /> */}
                    <GithubOutlined />
                </div>
            </CardAction>
        </CardWrapper>
    )
}