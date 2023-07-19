import { styled } from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: auto;
    background: rgba(255,255,255, 1);
    border-right: 1px solid rgba(240,240,240 , 1);

    .problem-default{
        padding: 0 20px;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;

        /* 滚动条整体 */
        &::-webkit-scrollbar {
            height: 5px;
            width: 5px;
        }
        /* 两个滚动条交接处 -- x轴和y轴 */
        &::-webkit-scrollbar-corner {
            background-color: transparent;
        }

        /* 滚动条滑块 */
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            background: rgba(247,248,250,1);
        }

        /* 滚动条轨道 */
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #fff;
        }

        .problem-title{ 
            margin: 16px 0px 0px;
            h4{
                line-height: 16px;
                font-weight: 500;
                color: rgba(38,38,38,1); 
                                
                a{
                    color: rgba(38,38,38, 1);
                    text-decoration: none;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: pre;
                }
            }

            .title-bottom{
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                color: rgba(140,140,140, 1);
                margin-top: 12px;
                font-size: 12px;
                line-height: 12px;
                user-select: none;
                padding: 0px 0px 16px;
                border-bottom: 1px solid rgba(229,229,229, 1);

                span{
                    margin-right: 10px;
                    color: rgba(89,89,89,1);
                }
            }
        }

        .problem-desc{
            margin-bottom: 10px;
            .desc-content{
                margin: 1em 0;
                font-size: 13px;

                p{
                    font-size: inherit;
                    margin-top: 0;
                    margin-bottom: 1em;
                }

                pre{
                    white-space: pre-wrap;
                    background: rgba(0,10,32,0.05);
                    padding: 10px 15px;
                    color: rgba(0,0,0,1);
                    line-height: 1.6;
                    font-size: 13px;
                    border-radius: 3px;
                    margin-top: 0;
                    margin-bottom: 1em;
                    overflow: auto;
                    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
                    margin: 1em 0px;
                } 

                strong{
                    font-weight: bolder;
                }

                ul{
                    margin-top: 0;
                    margin-bottom: 1em;
                    margin-left: 30px ;
                }

                code{
                    background: rgba(0,10,32,0.05);
                    color: rgba(0,0,0,1);
                    padding: 2px 4px;
                    font-size: 13px;
                    border-radius: 3px;
                    font-family: monospace;
                }
            }
        }

        .problem-codeTemplate{
            white-space: pre-wrap;
            background: rgba(0,10,32,0.05);
            padding: 10px 15px;
            color: rgba(0,0,0,1);
            line-height: 1.6;
            font-size: 13px;
            border-radius: 3px;
            margin-top: 0;
            margin-bottom: 1em;
            overflow: auto;
        }
    }
`