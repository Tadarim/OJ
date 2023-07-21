import { styled } from "styled-components";

export const CommentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: auto;
    background: rgba(255,255,255, 1);
    border-right: 1px solid rgba(240,240,240, 1);

    .content-wrapper{
        padding: 0px 20px;

        .content{
            display: flex;
            -webkit-box-align: stretch;
            align-items: stretch;
            flex-direction: column;
            min-height: 100%;
        }
    }

    .pagination{
        width: 100%;
        margin: 15px 0px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
    }
`