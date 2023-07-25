import { styled } from "styled-components";

export const ReplyWrapper = styled.div`
    background: rgba(255,255,255, 1);
    box-shadow: 0 2px 8px rgba(0,0,0, 0.08),0 1px 2px rgba(0,0,0, 0.1);
    border-radius: 8px;
    padding: 16px 16px 0px;

    .metaData{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 24px;

        .profileWrapper{
            display: flex;
            -webkit-box-align: center;
            align-items: center;

            img{
                flex-shrink: 0;
                -webkit-box-flex: 0;
                flex-grow: 0;
                width: 22px;
                height: 22px;
                border-radius: 100%;
                border: 0px;
                background: rgba(240,240,240, 1);
                margin-right: 10px;
                cursor: pointer;
            }

            .usernameContainer{
                display: inline-flex;
                -webkit-box-align: center;
                align-items: center;
                
                span{
                    color: rgba(140,140,140,1);
                    max-width: 150px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }

        .infoWrapper{
            margin-left: auto;
            display: flex;
            -webkit-box-align: center;
            align-items: center;

            .publishDate{
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                padding: 0px;
                margin-left: 12px;
                color: rgba(191,191,191, 1);      
                
                span{
                    margin: 0 8px;
                }

                .dot{
                    width: 4px;
                    height: 4px;
                    border-radius: 100%;
                    background: rgba(229,229,229, 1);             
                }
            }
        }
    }

    .markdownWrapper{
        position: relative;
        width: 100%;
        overflow: hidden;
        margin-bottom: 12px;

        .replyMarkdownWrapper{
            font-family: Helvetica, arial, sans-serif;
            font-size: 16px;
            line-height: 162%;
            word-break: break-word;
            text-align: justify;
            padding: 0px;
            margin-top: 6px;

            & > :last-child {
                margin-bottom: 0px;
            }

            *{
                margin-bottom: 16px;
                font-size: 16px;
                line-height: 162%;
                -webkit-print-color-adjust: exact;
            }

            p{
                margin: 8px 0px;
            }
        }
    }

    .answerOperation{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 12px 0px 16px;
        border-top: 1px solid rgba(240,240,240, 1);

        & > div:first-of-type {
            margin-left: -9px;
            margin-top: 0px;
            border: none;
            padding: 0px;
        }

        .operationWrapper{
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            position: sticky;
            bottom: 0px;
            border-top: 1px solid rgba(0,10,32,0.11);
            margin-top: 20px;
            z-index: 1000;
            padding: 20px 0px 11px;   
            
            .reactionV2Wrapper{
                margin-left: 10px;   
                
                .reactionWraper{
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    margin-right: 16px;   
                    
                    .reactionBtnInBarWrapper{
                        display: flex;

                        .reactionUpvoteBtnWrapper{
                            display: inline-flex;
                            height: 24px;
                            border-radius: 14px;
                            -webkit-box-pack: center;
                            justify-content: center;
                            -webkit-box-align: center;
                            align-items: center;
                            cursor: pointer;
                            color: rgba(60,60,67,0.6);
                            font-weight: 500;    

                            &:hover{
                                svg{
                                    color: rgba(45,181,93,1);
                                    background-color: rgba(45,181,93,0.08);
                                }
                                span{
                                    color: rgba(45,181,93,1);
                                }
                            }
                            
                            svg{
                                padding: 2px;
                                height: 24px;
                                width: 24px;
                                border-radius: 100%;
                                color: rgba(60,60,67,0.6);                            
                            }

                            span{
                                color: rgba(60,60,67,0.6);
                                margin-left: 4px;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }

            .splitLine{
                margin-right: 8px;
                height: 12px;
                border-left-width: 1px;
                border-left-style: solid;
                border-color: rgba(0,10,32,0.11);
            }

            .baseButtonComponent-OperationButton{
                border: none;
                border-radius: 3px;
                line-height: 20px;
                outline: none;
                user-select: none;
                text-decoration: none;
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
                background-color: transparent;
                padding: 0px;
                margin: 0px 8px;
                color: rgba(140,140,140, 1);
                font-size: 14px;
                vertical-align: text-bottom;

                &:hover{
                    color: rgba(10,132,255,1);
                }

                svg{
                    width: 20px;
                    height: 20px;
                }

                span{
                    margin-left: 4px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }

        .addReplyButton{
            border: none;
            border-radius: 3px;
            line-height: 20px;
            outline: none;
            user-select: none;
            text-decoration: none;
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
            background-color: transparent;
            font-size: 14px;
            padding: 0px;
            color: rgba(140,140,140, 1);   
            
            &:hover{
                color: rgba(10,132,255,1);
            }

            svg{
                height: 18px;
                width: 18px;
            }

            span{
                margin-left: 4px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
`