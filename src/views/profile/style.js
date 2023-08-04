import { styled } from "styled-components";

export const ProfileWrapper = styled.div`
    flex: 1 1 0%;
    width: 816px;
    display: flex;
    padding: 0px 36px 72px;
    margin: 24px auto 0px;

    .main-wrapper{
        display: flex;
        flex-direction: column;
        width: 100%;

        .main{
            box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 6px, rgba(0, 0, 0, 0.02) 0px 4px 8px, rgba(0, 0, 0, 0.02) 0px 6px 12px;
            padding: 1.5rem;
            background-color: rgb(255,255,255);
            border-radius: .5rem;

            .form-wrapper{
                width: 100%;
                
                form{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;

                    .avatar-wrapper{
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        img{
                            border-radius: 9999px;
                            width: 6.25rem;
                            height: 6.25rem;
                            max-width: 100%;
                        }
                    }

                    .options-wrapper{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 1.5rem;

                        .item{
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-start;

                            .item-title{
                                color: #262626bf;
                                font-weight: 400;
                                min-height: 21px;
                                display: flex;
                                gap: .25rem;
                                align-items: center;
                                margin-bottom: .5rem;
                            }
                        }
                    }

                    .text-wrapper{
                        width: 100%;
                        display: flex;
                        position: relative;
                        flex-direction: column;
                        justify-content: flex-start;

                        .item-title{
                            display: flex;
                            align-items:center;
                            margin-bottom: .5rem;
                            min-height: 21px;
                            font-weight: 400;
                            color: #262626bf;
                            gap: .25rem;
                        }
                    }

                    .submit-button{
                        display: flex;
                        justify-content: flex-end;

                        button{
                            display: inline-flex;
                            align-items: center;
                            font-weight: 400;
                            color: rgb(255,255,255);
                            padding: 0.5rem 1.5rem;
                            background-color: rgb(45,181,93);
                            border-radius: 5px;
                            white-space: nowrap;
                        }
                    }
                } 
            }

            .record-wrapper{
                width: 100%;
                margin-top: 80px;

                .record{
                    display: flex;
                    -webkit-box-pack: justify;
                    justify-content: space-between;
                    flex-wrap: nowrap;
                    padding: 20px;
                    background: rgba(255,255,255, 1);
                    box-shadow: 0 5px 10px rgba(0,0,0, 0.1);
                    border-radius: 3px;

                    .left-wrapper{
                        flex: 1 1 auto;
                    }

                    .right-wrapper{
                        flex: 0 0 220px;
                        flex-direction: column;
                        align-self: flex-end;
                        
                        .numbers-wrapper{
                            width: 160px;
                            margin: auto 20px;
                            padding: 10px;
                            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                            
                            .row{
                                display: flex;
                                -webkit-box-pack: justify;
                                justify-content: space-between;
                                font-size: 12px;
                                line-height: 17px;
                                margin-bottom: 15px;
                                -webkit-box-align: center;
                                align-items: center;
                                color: rgba(38,38,38, 1);

                                .left{
                                    display: flex;
                                    -webkit-box-align: center;
                                    align-items: center;

                                    .greenBlock{
                                        width: 12px;
                                        height: 12px;
                                        border-radius: 3px;
                                        margin-right: 5px;
                                        background: rgba(90,183,38, 0.6);
                                    }
                                    .redBlock{
                                        width: 12px;
                                        height: 12px;
                                        border-radius: 3px;
                                        margin-right: 5px;
                                        background: rgba(239,71,67, 0.6);
                                    }
                                    .greyBlock{
                                        width: 12px;
                                        height: 12px;
                                        border-radius: 3px;
                                        margin-right: 5px;
                                        background: rgba(89,89,89, 0.6);
                                    }
                                }
                            }

                            .greyRow{
                                display: flex;
                                -webkit-box-pack: justify;
                                justify-content: space-between;
                                font-size: 12px;
                                line-height: 17px;
                                margin-bottom: 15px;
                                -webkit-box-align: center;
                                align-items: center;
                                color: rgba(191,191,191, 1);

                                .left{
                                    display: flex;
                                    -webkit-box-align: center;
                                    align-items: center;                                
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`