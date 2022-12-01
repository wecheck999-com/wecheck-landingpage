import styled from "styled-components";


export const CardWrapper = styled.div`
    /* White */
    text-align: center;
    background: #FFFFFF;
    /* Effect-1 */
    padding: 29px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

`


export const CardAvartarWrapper = styled.div`
    text-align: center;
    position: relative;
    width: 100%;
    height: 150px;
`
export const CardAvatar = styled.div`
    /* height: 220px; */
    width: 120px;
    height: 120px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 25px;
    position: absolute;
    left: 25%;
    right: 20px;
`

export const CardContent = styled.div`  
    text-align: center;
    margin-bottom: 25px;
    .title {
        font-weight: 700;
        font-size: 31.25px;
        line-height: 47px;
        /* identical to box height, or 151% */
        text-transform: uppercase;
        /* Black */
        color: #232233;
      
    }
    .subtitle {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        text-transform: uppercase;
        color: #6C6C72;
        margin-bottom: 14px;
    }
    .description {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #6C6C72;
    }
`
export const CardAction = styled.div`
    .action-groups {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`