import styled from "styled-components";

export const  SearchWrapper = styled.div`
    .guide-search {
        color: #333;
        font-weight: 500;
        width: 300px;
        cursor: pointer;
    }
    margin-top: 40px;

`

export const SearchForm = styled.div`
    margin-top: 20px;
`
export const SearchFormItemWrapper = styled.div`
    display: flex;
    align-items: center;
    .label {
        margin-right: 10px;
        min-width: 60px;
    }
    .ant-select-selector {
        border-radius: 5px !important;
    }
    .ant-input {
        border-radius: 5px;
    }
`                           
export const ActionSearchWrapper =styled.div`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`