import { styled } from "styled-components";

export const ButtonItemWrapper = styled.div`
    width: 100%;

    button{
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        outline: none;
        border: none;
        padding: 0.5rem 0.75rem;
        width: 100%;
        border-radius: 5px;
        white-space: nowrap;
        cursor: pointer;
        text-align: left;
        line-height: 1.5rem;
        color: #262626bf;
        background-color: #000a200d;

        &:hover{
            background-color: #000a201a; 
        }
    }
`