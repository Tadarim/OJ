import { styled } from "styled-components";

export const DiscussWrapper = styled.div`
    background-color: rgba(247,248,250, 1);
    padding: 10px 0px;
    min-width: 992px;

    .content-wrapper{
        max-width: 1048px;
        padding: 0 24px;
        margin: 0 auto;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;    

        .main-wrapper{
            flex: 1 1 auto;
            height: 100%;
            max-width: 732px;  

            .detail-wrapper{
                background: rgba(255,255,255, 1);
                box-shadow: 0px 1px 2px rgba(0,0,0, 0.1),0px 2px 8px rgba(0,0,0, 0.08);
                width: 700px;
                padding: 0px 16px;
                margin-bottom: 10px;
                border-radius: 8px;


                .breadcrumb{
                    width: 100%;
                    display: flex;
                    -webkit-box-pack: justify;
                    justify-content: space-between;
                    -webkit-box-align: center;
                    align-items: center;
                    height: 36px;
                    border-bottom-color: rgba(240,240,240, 1);
                    padding: 0px;
                }

                .discuss-content{
                    padding-top: 8px;
                    position: relative;

                    .discuss-title{
                        width: 100%;
                        font-size: 18px;
                        font-weight: 500;
                        line-height: 32px;
                        color: rgba(0,0,0, 1);
                        word-break: break-word;
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;

                        a{
                            display: inline-flex;
                            color: rgba(65,145,255, 1);
                            text-decoration: none;

                            img{
                                width: 32px;
                                height: 32px;
                                display: flex;
                                border-radius: 50%;
                                margin-right: 10px;
                                object-fit: cover;
                                vertical-align: unset;
                                background-color: rgba(191,191,191, 1);
                                cursor: pointer;                            
                            }
                        }

                        span{
                            margin-right: 12px;
                        }
                    }

                    .discussInfo-container{
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;
                        font-size: 12px;
                        margin-top: 10px;

                        & > :not(:last-child) {
                            margin-right: 10px;
                        }

                        a{
                            color: rgba(65,145,255, 1);
                            text-decoration: none;

                            .usernameContainer{
                                display: inline-flex;
                                -webkit-box-align: center;
                                align-items: center;

                                span{
                                    white-space: nowrap;
                                    color: rgba(191,191,191, 1);
                                    font-size: 12px;
                                }
                            }
                        }

                        .infoItem{
                            white-space: nowrap;
                            color: rgba(191,191,191, 1);
                        }

                        .dot{
                            width: 4px;
                            height: 4px;
                            border-radius: 100%;
                            background: rgba(229,229,229, 1);
                        }
                    }

                    .discussZoom-wrapper{
                        margin-bottom: 10px;

                        .markdown-wrapper{
                            position: relative;
        
                            .markdown-content{
                                font-family: Helvetica, arial, sans-serif;
                                font-size: 16px;
                                line-height: 162%;
                                word-break: break-word;
                                text-align: justify;
                                padding: 0px;
                                margin-top: 6px;

                                img{
                                    max-width: 100% !important;
                                    display: block;
                                }

                                p{
                                    margin: 8px 0px;  
                                }

                                *{
                                    font-size: 16px;
                                    line-height: 162%;
                                    -webkit-print-color-adjust: exact;
                                }

                                h1{
                                    font-weight: bold;
                                    font-size: 22px;
                                    color: rgba(0,0,0, 1);                              
                                }

                                h1,h2,h3,h4,h5,h6{
                                    -webkit-font-smoothing: antialiased;
                                    cursor: text;
                                    position: relative;
                                    color: rgba(0,0,0, 1);
                                    margin-top: 20px;
                                    margin-bottom: 16px;
                                    line-height: 100%;                              
                                }

                                hr{
                                    box-sizing: content-box;
                                    border: 0px none;
                                    background-color: rgba(240,240,240, 1);
                                    height: 1px;
                                    padding: 0px;
                                    margin: 24px 0px;
                                }
                            }
                        }
                    }

                    .discussAction-wrapper{
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;
                        border-top: 1px solid rgba(0,10,32,0.11);
                        position: sticky;
                        margin: 0px -16px;
                        padding: 14px 16px;
                        bottom: 0px;
                        background-color: rgba(255,255,255, 1);
                        border-radius: 0px 0px 8px 8px;

                        .reactionWrapper{
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
                                            color:rgb(45,181,93) !important;
                                        }
                                    
                                        span{
                                            color:rgb(45,181,93) !important;
                                        }
                                    }
                                    &.active{
                                        svg{
                                            color:rgb(45,181,93) !important;
                                        }
                                    
                                        span{
                                            color:rgb(45,181,93) !important;
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

                        .splitLine{
                            margin-right: 8px;
                            height: 12px;
                            border-left-width: 1px;
                            border-left-style: solid;
                            border-color: rgba(0,10,32,0.11);
                        }

                        .baseButton{
                            background-color: rgba(45,181,93, 1);
                            border-radius: 8px;
                            font-weight: 500;
                            border: none;
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
                            color: rgba(255,255,255, 1);
                            font-size: 14px;
                            margin-left: auto;
                            margin-right: 16px;
                            line-height: 22px;
                            padding: 5px 16px !important;

                            svg{
                                height: 16px;
                                width: 16px;                          
                            }

                            span{
                                margin-left: 4px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                        }
                    }
                }
            }

            .mdEditor-wrapper{
                background: rgba(255,255,255, 1);
                position: fixed;
                left: 0px;
                right: 0px;
                bottom: 0px;
                box-shadow: 0 -1px 10px 0 rgba(0,0,0, 0.08);
                display: flex;
                flex-direction: column;
                z-index: 1001;
                transition-property: transform, opacity, height;
                transition-duration: 0.3s;
                pointer-events: auto;
                opacity: 1;
                transform: translateY(0%);
                max-height: 100vh;
                cursor: auto;           
            }

            .sorting-wrapper{
                background: rgba(255,255,255, 1);
                box-shadow: 0px 1px 2px rgba(0,0,0, 0.1),0px 2px 8px rgba(0,0,0, 0.08);
                margin-bottom: 10px;
                padding: 10px 15px;
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                justify-content: space-between;
                border-radius: 8px;

                .answer-count{
                    font-size: 12px;
                    color: rgba(191,191,191, 1);             
                }

                button{
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
                    font-size: 12px;
                    padding: 0px;
                    color: rgba(140,140,140, 1);
                }
            }

            .zoom-wrapper{
                margin-bottom: 10px;

                .list-wrapper{
                    width: 100%;
                    margin-bottom: 10px;
                }
            }

            .pagination-wrapper{
                display: flex;
                justify-content: center;
            }
        }

        .aside-wrapper{
            flex: 0 0 auto;
            width: 256px;
            margin-left: 20px;

            .card-wrapper{
                background: rgba(255,255,255, 1);
                border-radius: 3px;
                box-shadow: 0px 1px 2px rgba(0,0,0, 0.1),0px 2px 8px rgba(0,0,0, 0.08);
                width: 100%;
                padding: 20px 15px;
                font-size: 14px;
                border-radius: 8px;
                margin-bottom: 8px;

                .meta-wrapper{
                    width: 100%;

                    .meta{
                        margin-bottom: 15px;
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;
                        -webkit-box-pack: justify;
                        justify-content: space-between;
                        line-height: 22px;

                        .metaHeader{
                            line-height: 18px;
                            color: rgba(140,140,140, 1);
                        }

                        .metaValue{
                            font-family: FetteMittelschrift;
                            background: rgba(247,247,247, 1);
                            color: rgba(38,38,38, 1);
                            border-radius: 3px;
                            padding: 0px 8px;
                            line-height: 22px;                      
                        }
                    }
                }

                .divider{
                    width: 100%;
                    height: 1px;
                    background: rgba(240,240,240, 1);
                    margin: 15px 0px;
                }

                .tags-header{
                    line-height: 18px;
                    color: rgba(140,140,140, 1);
                }

                .basicTag:not(:last-of-type) {
                    margin-right: 10px;
                }

                .basicTag{
                    user-select: none;
                    font-size: 12px;
                    line-height: 20px;
                    display: inline-flex;
                    -webkit-box-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    justify-content: center;
                    text-decoration: none;
                    transition-property: color, background-color;
                    transition-duration: 0.3s;
                    white-space: nowrap;
                    cursor: pointer;
                    color: rgba(38,38,38, 1);
                    background-color: rgba(0,10,32,0.05);
                    padding: 0px 6px;
                    min-width: 40px;
                    border-radius: 10px;
                    margin-top: 10px;
                }
            }
        }
    }
`