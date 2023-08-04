import { styled } from "styled-components";

export const BodyWrapper = styled.div`  
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    position: relative;

                .comment-header{
                    display: flex;
                    width: 100%;
                    -webkit-box-pack: justify;
                    justify-content: space-between;
                    margin-bottom: 10px;

                    .avatar-wrapper{
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;
                        
                        img{
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                        }

                        .userName-wrapper{
                            display: inline-flex;
                            -webkit-box-align: center;
                            align-items: center;
                            margin-left: 8px;

                            span{
                                color: rgba(89,89,89, 1);
                                font-size: 14px;
                            }
                        }
                    }

                    .right-wrapper{
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;
                        font-size: 14px;
                        color: rgba(191,191,191, 1);
                        line-height: 30px;

                        .dot{
                            width: 4px;
                            height: 4px;
                            border-radius: 100%;
                            background: rgba(223,223,223, 1);
                            margin: 0px 8px;
                        }
                    }
                }
                
                .comment-content{
                    font-size: 12px;
                    line-height: 20px;
                    color: rgba(89,89,89, 1);

                    a{
                        color: rgb(0,122,255);
                    }
                }

                .comment-toolbar{
                    display: flex;
                    margin: 5px 0px 0px;

                    button{
                        vertical-align: middle;
                        -webkit-box-pack: center;
                        justify-content: center;
                        -webkit-box-align: center;
                        align-items: center;
                        border-radius: 3px;
                        line-height: 20px;
                        transition: all 0.18s ease-in-out 0s;
                        cursor: pointer;
                        color: rgba(140,140,140, 1);
                        background: transparent;
                        height: 24px;
                        padding: 0px 7px;
                        font-size: 12px;
                        display: flex;
                        user-select: none;
                        box-shadow: none;

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

                        .btnContent{
                            opacity: 1;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }

                    .upvoteBtn{
                        &.active{
                            
                        }
                    }
                }
`