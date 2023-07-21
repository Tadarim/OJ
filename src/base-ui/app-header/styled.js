import { styled } from "styled-components";

export const HeaderWrapper = styled.div`
        width: 100%;
        min-width: 992px;
        padding-left: calc(100vw- 100%);
        background: rgba(255,255,255, 1);
        box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 3px, rgba(0, 0, 0, 0.08) 0px 4px 12px;
        position: relative;
        display: flex;
        -webkit-box-align: stretch;
        align-items: stretch;
        justify-content: center;
        -webkit-box-pack: center;


        .top{
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            max-width: 85rem;
            min-width: 992px;
            color: rgba(38,38,38,0.75);
            justify-content: space-between;
            -webkit-box-pack: justify;
            position: relative;
        }
`