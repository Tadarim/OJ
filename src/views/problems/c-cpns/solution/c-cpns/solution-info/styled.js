import { styled } from "styled-components";

export const InfoWrapper = styled.div`
    width: 100%;
    background-color: #bfa;
    overflow-y: auto;

    .info{
        background: rgba(255,255,255, 1);
        height: 100%;
        display: flex;
        flex-direction: column;

        .operations-wrapper{
            position: relative;
            height: 40px;
            display: flex;
            -webkit-box-pack: center;
            justify-content: flex-start;
            -webkit-box-align: center;
            align-items: center;
            border-bottom: 1px solid rgba(240,240,240, 1);
            background: unset;
            transition: height 0.2s ease-in 0s, background 0.2s ease-out 0s;
            overflow: hidden;

            .closeButton{
                margin-left: 20px;
                border: none;
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
                box-shadow: inset 0px 0px 0px 1px rgba(223,223,223, 1);
                background-color: transparent;
                color: rgba(38,38,38, 1);
                font-size: 14px;
                padding: 3px 13px;
                position: absolute;
                top: 50%;
                left: 0px;
                transform: translate(0px, -50%);
                margin-left: 17px;
                border-radius: 4px;    
                
                span{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;                
                }
            }
        }

        .main-wrapper{
            flex: 1 1 0%;
            position: relative;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            border-left: 1px solid rgba(240,240,240, 1);
            -webkit-box-align: center;
            align-items: center; 

            .main{
                padding: 0px 10px;
                height: 100%;
                width: 90%;

                .main-content-wrapper{
                    .header-wrapper{
                        display: flex;
                        flex-direction: column;
                        margin-top: 15px;
                        padding-bottom: 14px;
                        border-bottom: 1px solid rgba(240,240,240, 1);

                        .title-wrapper{
                            display: flex;
                            -webkit-box-align: center;
                            align-items: center;    
                            
                            & > a{
                                height: 23px;

                                .avatar-wrapper{
                                    padding: 2px;
                                    text-decoration: none;
                                    display: inline-block;
                                    position: relative;

                                    img{
                                        border-radius: 50%;
                                        height: 19px;
                                        width: 19px;
                                        object-fit: cover;
                                        display: block;
                                    }
                                }
                            }

                            .title{
                                color: rgba(38,38,38, 1);
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                font-size: 16px;
                                margin-left: 8px;
                            }
                        }

                        .infos-wrapper{
                            display: flex;
                            -webkit-box-align: center;
                            align-items: center;
                            margin-top: 4px;
                            line-height: 20px;
                            white-space: nowrap;
                            flex-wrap: wrap;

                            & > *{
                                margin-top: 8px;
                            }

                            .username-container{
                                display: inline-flex;
                                -webkit-box-align: center;
                                align-items: center;

                                .name-wrap{
                                    color: rgba(140,140,140, 1);
                                    font-size: 12px;
                                }
                            }

                            .dot{
                                width: 4px;
                                height: 4px;
                                border-radius: 100%;
                                background: rgba(229,229,229, 1);
                            }

                            .publish-item{
                                color: rgba(140,140,140, 1);
                                font-size: 12px;
                                margin-left: 8px;
                                margin-right: 8px;
                            }

                            .tag{
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
                                color: rgba(90,183,38, 1);
                                background-color: rgba(222,240.6,211.6, 1);
                                padding: 0px 6px;
                                min-width: 40px;
                                border-radius: 10px;
                                font-weight: bold;
                                white-space: nowrap;
                                margin-left: 8px;                           
                            }
                        }
                    }

                    .content-wrapper{
                        font-family: Helvetica, arial, sans-serif;
                        font-size: 16px;
                        line-height: 162%;
                        word-break: break-word;
                        text-align: justify;
                        position: relative;
                        padding: 10px 0px;

                        *{
                            font-size: 16px;
                            line-height: 162%;
                            -webkit-print-color-adjust: exact;
                            margin-bottom: 16px;
                        }

                        p{
                            margin: 8px 0px;
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
                    }
                }
            }
        }
    }
`