import { styled } from "styled-components";

export const BoxWrapper = styled.div`
    padding: 10px;
    margin: 0px -10px;

    .top-part{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        flex: 0 0 auto;

        .comment-info{
            flex: 1 1 auto;
            display: flex;
            height: 42px;
            -webkit-box-align: center;
            align-items: center;
            font-size: 13px;
            color: rgba(89,89,89, 1);

            .comment-num{
                margin-right: 5px;
                font-size: 20px;
                font-family: FetteMittelschrift, sans-serif;
            }
        }
    }
            
`