import { styled } from "styled-components";

export const AsideCardWrapper = styled.div`
    margin-top: 10px;
    /* width: 100%; */
    background: rgba(255,255,255, 1);
    border-radius: 8px;
    box-shadow: 0px 1px 2px rgba(0,0,0, 0.1),0px 2px 8px rgba(0,0,0, 0.08);
    min-width: 200px;
    padding: 16px 16px 4px;

    .title{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
       
        h1{
           font-size: 16px;
            line-height: 20px;
            color: rgba(38,38,38,0.75); 
            font-weight: 500; 
            margin-bottom: 10px;
        }

        .title-right{
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            margin-left: auto;
        }
        
    }
`