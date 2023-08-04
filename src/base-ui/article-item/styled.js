import { styled } from "styled-components";

export const ItemWrapper = styled.div`
    background: rgba(255,255,255, 1);
    padding: 16px;
    box-shadow: 0 1px 2px rgba(0,10,32,0.05),0 2px 8px rgba(0,10,32,0.05);
    transition: box-shadow 0.3s ease-in-out 0s;
    margin-bottom: 10px;
    border-radius: 8px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;

    .img-wrapper{
        width: 200px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        margin-right: 16px;
        flex-shrink: 0;

        img{
            flex-shrink: 0;
            -webkit-box-flex: 0;
            flex-grow: 0;
            border-radius: 6px;
            margin-right: 0px;
            width: 100%;
            height: 120px;
            object-fit: cover;      
        }
    }

    &:hover{
        background: rgba(0,10,32,0.03);
    }

    .content-container{
        width: 0px;
        display: flex;
        flex-direction: column;
        -webkit-box-flex: 1;
        flex-grow: 1;
        -webkit-box-pack: justify;
        justify-content: space-between;

        .main{
            display: flex;
            flex-direction: column;
            -webkit-box-flex: 1;
            flex-grow: 1;
            
            .header{
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                height: 24px;

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

                .title{
                    font-size: 16px;
                    line-height: 22px;
                    font-weight: 500;
                    color: rgba(0,0,0, 1);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }

            .contentWrapper{
                .content-wrap{
                  .tags-wrapper{
                        display: flex;
                        flex-wrap: wrap;
                        padding: 0px;
                        margin-top: 4px;

                        .tags{
                            margin-top: 0px;
                            margin-bottom: 0px;
                            cursor: default;
                            padding: 0px 8px;
                            font-size: 12px;
                            height: 24px;
                            line-height: 20px;
                            font-weight: 400;
                            color: rgba(60,60,67,0.5);
                            display: flex;
                            -webkit-box-align: center;
                            align-items: center;
                            background-color: rgba(0,10,32,0.05);
                            border-radius: 12px;
                            margin: 2px 10px 2px 0px;
                        }
                } 
                    .desc-wrapper{
                        overflow: hidden;
                        -webkit-box-align: center;
                        align-items: center;
                        margin-top: 8px;
                    }

                    .bottom{
                        margin-top: 8px;
                    } 
                } 
            }

           
        }

       .toolbar-wrapper{
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            justify-content: space-between;
            margin-top: 12px;
            margin-left: -9px;

            .toolbar{
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                position: sticky;
                bottom: 0px;
                /* z-index: 1000; */

                .reaction-wrapper{
                    margin-left: 10px;

                    .reaction{
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;
                        margin-right: 16px;

                        .reactionBtn{
                            display: flex;

                            .upvoteBtn{
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

                                &.active{
                                    svg{
                                        color:rgb(45,181,93) !important;
                                    }
                                    
                                    .upvoteBtnText{
                                        color:rgb(45,181,93) !important;
                                    }
                                }

                                svg{
                                    padding: 2px;
                                    height: 20px;
                                    width: 20px;
                                    border-radius: 100%;
                                    color: rgba(60,60,67,0.6);
                                }

                                .upvoteBtnText{
                                    color: rgba(60,60,67,0.6);
                                    margin-left: 4px;
                                    font-size: 14px;
                                }

                                &:hover{
                                    svg{
                                        color: rgba(45,181,93, 1);
                                        background-color: rgba(45,181,93,0.08);
                                    }
                                    
                                    .upvoteBtnText{
                                        color: rgba(45,181,93, 1);
                                    }
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

                button{
                    border: none !important;
                    border-radius: 3px;
                    line-height: 20px;
                    outline: none !important;
                    user-select: none;
                    text-decoration: none;
                    display: inline-flex;
                    -webkit-box-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    justify-content: center;
                    overflow: hidden;
                    cursor: pointer;
                    opacity: 1;
                    background-color: transparent  !important;;
                    padding: 0px;
                    color: rgba(140,140,140, 1);
                    font-size: 14px;
                    vertical-align: text-bottom;
                    margin: 0px 8px;
                    transition: none 0s ease 0s;
                    box-shadow: none;

                    &:hover{
                        color: rgba(0,122,255, 1);
                    }

                    svg{
                        width: 20px;
                        height: 20px;
                    }

                    span{
                        margin-left: 2px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
            }
    }
`