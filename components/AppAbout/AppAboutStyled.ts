import { Card } from "antd"
import styled from "styled-components"

export const HeroSection = styled.div`
    height: 1024px;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 120px;

`

export const HeroSectionLeft = styled.div`
 
    .box-border{
        border: 15px solid #7572FF;
        /* width: 570px; */
        height: 535px;
        position: relative;
    }
    .hero-section-info {
        position: absolute;
        background-color: #FFFFFF;
        padding: 32px 16px 32px 32px;
        top: 50px;
        bottom: 50px;
        left: -60px;
        right: 45px;
        .title {
            color: #5956E9;
            font-weight: 700;
            font-size: 38.83px;
            text-transform: uppercase;
            margin-bottom: 12px;
        }
        .description {

        }
        .download-text {
            color: #232233;
            font-weight: 600;
            font-size: 25px;
            text-transform: uppercase;
            margin-top: 25px;
        }
        .download-app {
            margin-top: 15px;
            display: flex;
            align-items: center;
            /* justify-content: space-between; */
            img {
                margin-right: 15px;
                cursor: pointer;
            }
        }
    }
`

export const HeroSectionRight = styled.div`
    
`

export const AboutSectionWrapper = styled.div`
     padding: 50px;
     background-color: #E5E5E5;
`

export const AboutSectionHeader = styled.div`
    text-align: center;
    p {
        text-transform: uppercase;
        color: #232233;
        font-weight: 700;
        font-size: 31.25px;
    }
`

export const AboutSectionDescript = styled.p`
    text-align: center;
    margin-bottom: 50px;
`

export const AboutCardWrapper = styled(Card)`
    background: #FFFFFF;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`
export const AppFeatureWrapper = styled.div`
    height: 1350px;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 50px;
`

export const AppFeaturnHeader = styled.div`
    text-align: center;
    p {
        text-transform: uppercase;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 31.25px;
    }
`
export const AppFeatureDescription = styled.div`
  text-align: center;
  color: #ffffff;
  margin-bottom:50px;
    
`

export const AppFeatureCardWrapper = styled.div`
    color: #FFFFFF;
    .title {
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 25px;
        text-transform: uppercase;

    }
    .description {

    }
`

export const WrapperDirectionColumn = styled.div`
  display: flex;
  flex-direction: column;            
  justify-content: space-around;
  height: 100%;
`

export const CheckOurSectionWrapper = styled.div`

  padding-top: 100px;
  padding-bottom: 100px;
  .header {
    text-align: center;
        span {
            text-transform: uppercase;
            color: #232233;
            font-weight: 700;
            font-size: 31.25px;
        }
     }
    .description {
        text-align: center;
        padding: 16px 0 16px 0;
    }
    .slick-slider{
        .slick-prev {
        left: -90px;
        }
        .slick-list {
            .slick-slide {
                /* background-color: red; */
            }
        }
    }
  
`

export const DownloadInfoAppWrapper = styled.div`
    margin-top: 120px;
`

export const RightColWrapper = styled.div`
    display: flex;
    flex-direction: column;            
    justify-content: space-around;
    height: 100%;
    .header-downloadInfo {
        span {
            text-transform: uppercase;
            color: #232233;
            font-weight: 700;
            font-size: 31.25px;
        }
    }
    .download-app {
        display: flex;
        margin-bottom: 25px;
    }
`
export const ReportCardWrapper = styled.div`
    /* Royal blue */
    background: #5851EA;
    /* Effect-1 */
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    color: #FFF;
    height: 100%;
    .total {
        font-weight: 600;
        font-size: 25px;
    }
    .icon {
        svg {
            font-size: 25px;
        }
    }
    .description {
        font-size: 20px;
        text-transform: uppercase;
    }
`

export const GuildLineSectionWrapper = styled.div`
    padding-bottom: 120px;
    background-color: #E5E5E5;
    .guild-line-section-1 {
      height: 477px;
      background-repeat: no-repeat;
      background-size: cover;
      padding-top: 120px;
      position: relative;
      .header {
        color: #ffffff;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 31.25px;
        text-align: center;
      }
      .description {
        text-align: center;
        color: #ffffff;
        padding: 16px 0 16px 0;
        /* width: 500px; */
      }
      .guild-line-video {
        background: linear-gradient(0deg, rgba(88, 81, 234, 0.4), rgba(88, 81, 234, 0.4)), url(.jpg);
        /* Effect-2 */
        height: 319px;
        box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.24);
        border-radius: 10px;
        position: absolute;
        bottom: -150px;
        left: 180px;
        right: 180px;
        text-align: center;
        color: #fff;
        /* width: 100%; */
      }
    }
    .guild-line-section-2 {
        padding-top: 220px;
        padding-bottom: 50px;
        .header-section-2 {
            color: #000000;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 31.25px;
            text-align: center;
        }
        .description-section-2 {
            text-align: center;
            padding: 16px 0 16px 0;
        }
    }
`
