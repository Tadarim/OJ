import { styled } from "styled-components";

export const SubmissionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: auto;
    background: rgba(255,255,255, 1);
    border-right: 1px solid rgba(240,240,240, 1);

       
    .container{
        overflow:auto ;
        -webkit-box-flex: 1;
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


        .submissions{
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            min-width: 540px;

            .result-container{
                margin-bottom: 15px;

                .container{
                    width: 100%;
                    padding: 15px;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    background-color: rgba(247,247,247,1);
                    border: 1px solid rgba(240,240,240,1);
                    border-radius: 4px;
                

                    .result{
                        margin-bottom: 10px;
                        color: rgba(140,140,140,1);
                        font-size: 12px;
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;

                        .result-info-wrapper{
                            flex-wrap: wrap;
                            align-items: center;
                            display: flex;
                            -webkit-box-align: center;

                            .result-info{
                                display: flex;
                                -webkit-box-align: baseline;
                                align-items: baseline;
                                flex: 1 1 0px;

                                .error{
                                    height: 24px;
                                    background-color: rgba(245.2,245.8,245.6,1);
                                    color: rgba(143,38,35.5,1);
                                    margin: 0 8px;
                                    border: 0;
                                    border-radius: 12px;
                                    padding: 0 8px;
                                    font-size: 12px;
                                    line-height: 14px;
                                    display: flex;
                                    -webkit-box-align: center;
                                    align-items: center;

                                    &:hover{
                                        background-color: rgba(251.8,218.2,217.4);
                                    }
                                }
                            }
                        }
                    }

                    .error-container{
                        margin-bottom: 10px;
                        color: rgba(140,140,140,1);
                        font-size: 12px;
                        background-color: rgba(251.8,218.2,217.4, 1);
                        border-radius: 3px;
                        position: relative;
                        overflow: hidden;

                        .content-wrapper{
                            cursor: pointer;
                            display: flex;
                            padding: 7px 10px;
                            overflow: auto;

                            &::-webkit-scrollbar{
                                display: none;
                            }

                            .error{
                                color: rgba(239,71,67, 1);
                                font-size: 12px;
                                white-space: pre;
                                font-family: monospace;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                }
            }

            .table-container{
                white-space: nowrap;
                box-shadow: 0 2px 8px rgba(0,0,0, 0.08),0 1px 2px rgba(0,0,0, 0.1);
                color: rgba(38,38,38, 1);
            }
        }
    }
`