import { styled } from "styled-components";

export const LeftWrapper = styled.div`
        display: flex;
        flex-wrap: nowrap;
        -webkit-box-align: center;
        align-items: center;
        margin-bottom: 0px;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;

        .logo{
            height: 28px !important;
            width: 66.5px !important;

            img{
                vertical-align: middle;
                border-style: none;
                width: 100%;
                height: 100%;
            }
        }

    
        .bar-item:not(:first-child){
            position: relative;
            height: 26px;
            width: 38px;
            font-family: "PingFang SC";
            font-style: normal;
            line-height: 24px;
            font-weight: 400;
            font-size: 18px;
            margin-left: 35.5px;
            color: rgba(38,38,38, 0.75);
            cursor: pointer;
            list-style: none;
            text-align: center;

            a{
                display: block;
                height: 100%;
                width: auto;
                line-height: inherit;
                color: rgba(38,38,38,0.75)!important; 
            }

            
        }

    
`