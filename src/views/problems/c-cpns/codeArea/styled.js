import { styled } from "styled-components";

export const CodeAreaWrapper = styled.div`
    overflow: hidden;
    flex: 1.44474  0 0px;
    display: flex;
    flex-direction: column;
    position: relative;

    svg.isActive{
        transform: rotate(180deg);
    }

    .code-area{
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        z-index: 0;

        .code-area-main-container{
            flex: 1 0 auto;
            position: relative;
            display: flex;
            flex-direction: column;

            .code-area-main{
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                flex-direction: column;
                -webkit-box-flex: 1;
                flex: 1 1 auto;
                        
                .main-header{
                    position: relative;
                    -webkit-box-flex: 0;
                    flex: 0 0 auto;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    min-height: 40px;
                    background: rgba(247,247,247,1);
                    box-shadow: inset 0 -1px rgba(240,240,240,1);

                    .lang-select{
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;

                        .lang-list{
                            display: none;
                            min-width: 114px;
                            margin: 0px;
                            position: absolute;
                            inset: 0px auto auto 0px;
                            transform: translateY(38px);
                            background: rgba(255,255,255, 1);
                            box-shadow: 0 10px 32px rgba(0,0,0, 0.18);
                            overflow: auto;
                            border-radius: 3px;
                            border: 1px solid rgba(223,223,223, 1);
                            z-index: 999;

                            &.isActive{
                                display: block;
                            }

                            div{
                                position: relative;
                                z-index: 0;
                                height: 36px;
                                padding: 5px 12px;
                                box-sizing: border-box;
                                display: flex;
                                -webkit-box-align: center;
                                align-items: center;
                                cursor: pointer;
                                background: transparent;
                                color: rgba(38,38,38, 1);
                            }
                        }

                        button{
                            font-size: 12px;
                            padding: 4px 8px;
                            width: 100px;
                            box-sizing: content-box;
                        }
                    }

                    svg{
                        height: 16px;
                        width: 16px;
                        color: rgba(191,191,191,1);
                    }

                    span{
                        margin-left: 2px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }

                .codemirror-container{
                    flex: 1 1 0px;
                    overflow: hidden auto;
                    border-left: 1px solid rgba(240,240,240, 1);
                }
            }
        }
    }

    .code-area-bottom-container{
        position: relative;
        display: flex;
        -webkit-box-flex: 0;
        flex: 0 0 auto;
        -webkit-box-align: center;
        align-items: center;
        padding: 10px 20px;
        -webkit-box-pack: justify;
        justify-content: space-between;
        z-index: 1;
        font-size: 13px;
        background: rgba(255,255,255,1);
        border-top: 1px solid rgba(240,240,240,1);

        .submit-container{
            display: flex;
            margin-left: auto;

            .submit{
                min-width: 80px;
                background-color: rgba(45,181,93, 1);
                color: rgb(255,255,255);
                padding: 6px 12px;

                span{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
        
`