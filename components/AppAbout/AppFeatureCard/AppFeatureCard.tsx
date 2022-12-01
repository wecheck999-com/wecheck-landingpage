import { AppFeatureCardWrapper } from "../AppAboutStyled"
import Image from "next/image"

interface AppFeatureCardProp {
    icon:string;
    title:string;
    description: string;
    textAlign: any;
}
export const AppFeatureCard =(props:AppFeatureCardProp )=> {
    const {icon, title, description,textAlign } = props;

    return (
        <AppFeatureCardWrapper style={{textAlign:textAlign}}>
            <Image src={icon} alt='' width={50} height={50}  />
            <div className="title">{title}</div>
            <p className="description">{description}</p>
        </AppFeatureCardWrapper>
    )
}