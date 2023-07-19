import { styled } from "styled-components";

export const HomeWrapper = styled.div`
    .content-container{
       padding-left: calc(100vw - 100%);
        display: flex;
        flex-direction: column;
        background: rgba(247,248,250, 1); 
    
        .container{
            width: 1120px;
            display: flex;
            justify-content: center;
            margin: 12px auto 0;
            border-color: #bfa;
            height: 100%;

            .content-left{
                width: 824px;
            }

            .content-right{
                width: 285px;
                margin-left: 10px;
            }
        }
  
    }
`