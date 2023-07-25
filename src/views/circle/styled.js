import { styled } from "styled-components";

export const CircleWrapper = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    z-index: 0;

    .content-wrapper{
        flex: 1 1 auto;
        background-color: rgba(247,248,250, 1);
        padding: 10px 0px;
        min-width: 992px;

        .content{
            max-width: 1048px;
            padding: 0px 24px;
            margin: 0px auto;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;

            .main-wrapper{
                flex: 1 1 auto;
                height: 600px;
                max-width: 734px;

                .tab-header{
                    display: flex;
                    height: 32px;
                    margin-bottom: 10px;
                    padding: 0px;
                    margin-top: 0px;

                    .tab-item{
                        color: rgba(60,60,67,0.6);
                        height: 100%;
                        display: flex;
                        -webkit-box-align: center;
                        align-items: center;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 32px;
                        border-bottom: 2px solid transparent;
                        cursor: pointer;
                        position: relative;
                        transition: all 0.4s ease 0s;
                        margin-right: 32px; 

                        &.active{
                            color: rgba(38,38,38, 1);
                            font-weight: 500; 
                            border-bottom: 2px solid rgba(38,38,38, 1);   
                        }
                    }
                }

                .desc-wrapper{
                    display: flex;
                    flex-direction: column;
                    position: relative;

                    .search-wrapper{
                        position: absolute;
                        top: -42px;
                        right: 113px;

                        .searchInput-wrapper{
                            position: relative;

                            .input-container{
                                display: inline-flex;
                                position: relative;

                                &:hover{
                                    input{
                                        border-color: rgba(10,132,255);    
                                    }
                                    svg{
                                        color: rgba(10,132,255);
                                    }
                                }

                                input{
                                    width: 250px;  
                                    transition: border-color 0.3s ease 0s;
                                    border-width: 1px;
                                    border-style: solid;
                                    border-image: initial;
                                    outline: none;
                                    font-size: 14px;
                                    line-height: 20px;
                                    border-radius: 3px;
                                    padding: 6px 34px 6px 8px;
                                    color: rgba(38,38,38, 1);
                                    background: transparent;
                                    border-color: rgba(223,223,223, 1);
                                    height: 20px;
                                }

                                svg{
                                    color: rgba(191,191,191, 1);
                                    transition: color 0.3s ease 0s;
                                    width: 20px;
                                    height: 20px;
                                    cursor: pointer;
                                    position: absolute;
                                    top: 50%;
                                    transform: translateY(-50%);
                                    right: 8px;                             
                                }
                            }
                        }
                    }

                    .button{
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
                        background-color: rgba(45,181,93, 1);
                        color: rgba(255,255,255, 1);
                        font-size: 14px;
                        padding: 6px 12px;
                        position: absolute;
                        top: -42px;
                        right: 0px;
                        border-radius: 16px;

                        svg{
                            height: 18px;
                            width: 18px;
                            flex: 0 0 auto;
                        }

                        span{
                            margin-left: 4px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }

                    .tags-container{
                        display: flex;
                        flex-wrap: wrap;
                        padding: 0px;
                        margin: 10px 0 16px 0;

                        .tags-item{
                            padding: 0px 8px;
                            font-size: 12px;
                            height: 24px;
                            line-height: 20px;
                            font-weight: 400;
                            color: rgba(0,122,255, 1);
                            cursor: pointer;
                            display: flex;
                            -webkit-box-align: center;
                            align-items: center;
                            background-color: rgba(0,10,32,0.05);
                            border-radius: 12px;
                            margin: 2px 10px 2px 0px;     
                            
                            &.active{
                                color: rgba(255,255,255, 1);
                                background-color: rgba(0,122,255, 1);
                            }
                        }
                    }

                    .pagination{
                        display: flex;
                        justify-content: center;
                    }
                }
            }

            .aside-wrapper{
                flex: 0 0 auto;
                width: 285px;
                margin-left: 10px;
            }
        }

        .mdEditorWrapper{
            background: rgba(255,255,255, 1);
            position: fixed;
            left: 0px;
            right: 0px;
            bottom: 0px;
            box-shadow: 0 -1px 10px 0 rgba(0,0,0, 0.08);
            display: flex;
            flex-direction: column;
            transition-property: transform, opacity, height;
            transition-duration: 0.3s;
            pointer-events: auto;
            opacity: 1;
            transform: translateY(0%);
            height: 50vh;
            cursor: auto;
        }
    }
`