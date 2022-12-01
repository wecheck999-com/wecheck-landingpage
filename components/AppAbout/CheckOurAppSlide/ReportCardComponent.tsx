import { LikeOutlined } from "@ant-design/icons";
import { ReactElement } from "react";
import { ReportCardWrapper } from "../AppAboutStyled";


interface ReportCardProp {
    icon: ReactElement;
    total: Number;
    textDescription: string;
}

export const ReportCardComponent = (props:ReportCardProp )=> {

    const {icon, total, textDescription} = props;

    return (
        <ReportCardWrapper>
            <div className="icon">{icon}</div>
            <div className="total">{total.toString()}</div>
            <div className="description">{textDescription}</div>
        </ReportCardWrapper>
    );
}