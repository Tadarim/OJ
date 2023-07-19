import { styled } from "styled-components";

export const ProblemsWrapper = styled.div`
    position: relative;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    z-index: 1;
    min-height: 0;
    -webkit-font-smoothing: antialiased;
    height: calc(100vh - 56px);

    button{
        border-radius: 3px;
        line-height: 20px;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        transition-property: color, box-shadow, background-color, opacity;
        transition-duration: 0.3s;
        overflow: hidden;
        cursor: pointer;
        opacity: 1;
        box-shadow: inset 0px 0px 0px 1px rgba(223,223,223, 1);
        background-color: transparent;
        color: rgba(38,38,38, 1);
        font-size: 14px;
        padding: 6px 10px;

        &:hover{
            box-shadow: inset 0px 0px 0px 1px rgba(10,132,255, 1);
            -color: rgba(242.75,248.85,255, 1);
            color: rgba(10,132,255, 1);
        }
    }

    .problems{
        flex: 1 1 0%;
        display: flex;
        min-height: 0px;

        .middle-area{
            flex: 0 0 15px;
            position: relative;
            background: linear-gradient(to bottom, rgba(247,247,247,1) 10%,rgba(255,255,255,1) 90%);
        }
    }
`