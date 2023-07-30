import { styled } from "styled-components";

export const RankingItemWrapper = styled.div`
    margin-top: 10px;
    position: relative;
    z-index: 0;
    display: flex;
    padding: 6px 0px;


    .number{
        margin-right: 12px;
        transform: translateY(2px);
        font-size: 14px;
        line-height: 20px;
        min-width: 10px;
        font-family: TypoRound;
        font-style: italic;
        font-weight: 700;
       
        color: rgba(60,60,67,0.3);

        &.light{
            color: rgba(255,161,22, 1);
        }
    }

    .contentContainer{
        flex: 1 1 auto;
        overflow: hidden;

        .titleContainer{
            display: flex;
            -webkit-box-align: center;
            align-items: center; 

            img{
                vertical-align: middle;
                border-style: none;
            }

            .item-title{
                font-size: 16px;
                line-height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                flex: 1 1 auto;
                font-weight: 500;
                color: rgba(38,38,38, 1);
            }

            .newTag{
                width: 16px;
                height: 16px;
                margin-left: 25px; 
            }

            .avatar{
                margin-right: 4px;
                width: 24px;
                height: 24px;
                border-radius: 50%;
            }
        }

        .desc{
            font-size: 13px;
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            height: 20px;
            color: rgba(60,60,67,0.3);
            margin-top: 2px;
        }
    }
`