import { CheckCircleOutlined } from "@ant-design/icons"
import { Avatar, Card } from "antd"
import Meta from "antd/lib/card/Meta"
import { AboutCardWrapper } from "../AppAboutStyled"

interface AppAboutCardProps {
    title: string;
    description: string;
}

export const AppAboutCardComponet = (props: AppAboutCardProps) => {
    const { title, description } = props;

    return (<AboutCardWrapper>
        <Meta
            avatar={<CheckCircleOutlined style={{ color: '#5956E9' }} size={20} />}
            title={title}
            description={description}
        />
    </AboutCardWrapper>)
}