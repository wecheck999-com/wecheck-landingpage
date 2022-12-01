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
                <title>Tìm kiếm thông tin lừa đảo, chống lừa đảo, chặn các cuộc gọi làm phiền</title>
                <meta name="keywords" content="Tìm kiếm thông tin qua số điện thoại, Chặn cuộc gọi, lua dao, spam cuoc goi, ung dung chong lua dao, FE credit, bao ve cuoc goi" />
                <meta name="description" content="Khonglamphien, Ứng dụng chống lừa đảo người dùng, spam cuộc gọi, hạn chế lừa đảo, bảo vệ người dùng, Tìm kiếm thông tin điện thoại, Xem chi tiết số điện thoại lừa đảo, Xem cách hoạt động lừa đảo mới" />
                <meta property="og:title" content="Ứng dụng chống lửa đảo - Tìm kiếm thông tin qua số điện thoại" />
                <meta property="og:description" content="Tìm kiếm số điện thoại lừa đảo, tin nhắn lừa đảo, ứng dụng lừa đảo, các hoạt động lừa đảo mới, ngăn chặn các phương thức lừa đảo" />
                <meta property="og:image" content="https://wecheck999.s3.ap-southeast-1.amazonaws.com/WeCheck+(1).png" />
                <meta name="RATING" content="GENERAL" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:url" itemProp="url" content="https:khonglamphien.com" />
                <link rel="canonical" href="https://www.khonglamphien.com" />
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