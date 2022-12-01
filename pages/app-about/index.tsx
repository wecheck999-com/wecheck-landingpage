import { AboutSectionComponent, AppFeaturesSectionComponent,CheckOurSectionComponent, GuildLineSectionComponent } from "components/AppAbout";

import { HeroSectionComopnent } from "components/Home";
import { MainLayout } from "components/Layouts/MainLayout";
import { PageWrapper } from "components/StyledComponents/CommonStyled";
import { NextPageWithLayout } from "models/common";
import Head from "next/head";

const AppAbout: NextPageWithLayout = () => {

    return (
        <PageWrapper>
            <Head>
                <title>Tìm kiếm sđt, số điện thoại, thông tin lừa đảo, môi giới, làm phiền</title>
                <meta name="keywords" content="wecheck999, Tra cưu sdt, tra cứu số điện thoại, thông tin lừa đảo, môi giới, lừa đảo" />
                <meta name="description" content="wecheck999.com, Tìm kiếm thông tin sdt, số điện thoại, thông tin lừa đảo, thông tin môi giới, làm phiền" />
                <meta property="og:title" content="Tra cứu sđt, số điện thoại, thông tin lừa đảo, môi giới, làm phiền" />
                <meta property="og:description" content="wecheck999.com, Tìm kiếm thông tin sdt, số điện thoại, thông tin lừa đảo, thông tin môi giới, làm phiền, ứng dụng chống lừa đảo, làm phiền" />
                <meta property="og:image" content="https://wecheck999.s3.ap-southeast-1.amazonaws.com/WeCheck+(1).png" />
                <meta name="RATING" content="GENERAL" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:url" itemProp="url" content="https:wecheck999.com" />
                <link rel="canonical" href="https://www.wecheck999.com" />
            </Head>
            <HeroSectionComopnent />
            <AboutSectionComponent />
            <AppFeaturesSectionComponent />
            <CheckOurSectionComponent />
            <GuildLineSectionComponent />
        </PageWrapper>
    )
}

AppAbout.Layout = MainLayout;

export default AppAbout;