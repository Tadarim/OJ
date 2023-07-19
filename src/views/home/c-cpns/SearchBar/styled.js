import { styled } from "styled-components";

export const SearchWrapper = styled.div`
    box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 3px, rgba(0, 0, 0, 0.08) 0px 2px 8px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgba(255,255,255, 1);
    border: 1px solid rgba(255,255,255, 1);
    border-radius: 8px;
    height: 46px;
    padding: 0px 11px 0px 16px;
    margin-bottom: 10px;
    box-sizing: border-box;
    transition: all 0.2s ease 0s;

    &:hover{
        border-color: rgba(0,122,255,0.3);
    }

    svg{
        color: rgba(191,191,191, 1);
        width: 22px;
        height: 22px;
    }

    input{
        margin: 0px 8px;
        flex: 1 0 0px;
        box-shadow: none;
        outline: none;
        background: rgba(255,255,255, 1);

        &::placeholder{
            font-size: 14px;
            color: rgb(191,191,191);
        }
    }
`