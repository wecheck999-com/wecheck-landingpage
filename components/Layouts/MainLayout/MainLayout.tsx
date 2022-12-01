import { Content} from 'antd/lib/layout/layout';
import { LayoutProps } from '../../../models/common';
import { Header } from '../Header';
import {Footer} from '../Footer';
import { HeaderWrapper } from '../Header/HeaderStyled';
import { LayoutWrapper } from './MainLayoutStyled';


export const MainLayout = ({ children }: LayoutProps) => {

    return <LayoutWrapper>
        <Header />
        <Content style={{marginTop:130}}>  {children}</Content>
        <Footer />
    </LayoutWrapper>
}

