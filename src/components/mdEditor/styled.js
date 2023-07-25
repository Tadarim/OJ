import { styled } from "styled-components";

export const EditorWrapper = styled.div`
    flex: 1.44474  0 0px;
    box-shadow: 0 -1px 10px 0 rgba(0,0,0, 0.08);
    padding: 10px 0;
    display: flex;
    flex-direction: column;

    .editor{
        background: rgba(255,255,255, 1);
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        cursor: auto;
        width: 100%;
        /* height: 100%; */
        inset: 0px; 

        .header{
            margin-bottom: 10px;
            pointer-events: auto;
            /* flex: 1 1 auto; */

            .title{
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                padding: 0px 15px;
                border-bottom: 1px solid rgba(240,240,240, 1);
                height: 60px;
                
                input{
                    margin-right: 15px;
                    flex: 1 1 0px;
                    font-size: 16px;
                    padding: 10px 0px;
                    font-weight: bold;
                    border: none;
                    outline: none;
                    background: transparent;
                }

                .cancelBtn{
                    margin-right: 15px;
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
                    box-shadow: inset 0px 0px 0px 1px rgba(223,223,223, 1);
                    background-color: transparent;
                    color: rgba(38,38,38, 1);
                    font-size: 12px;
                    padding: 4px 8px;
                }

                .publishBtn{
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
                    background-color: rgba(45,181,93, 1);
                    color: rgba(255,255,255, 1);
                    font-size: 12px;
                    padding: 4px 8px;
                }
            }

            .tags{
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                border-bottom: 1px solid rgba(240,240,240, 1);
                padding: 6px 4px;
                white-space: nowrap;
                flex-wrap: wrap;

                .tagsItem{
                    color: rgba(89,89,89, 1);
                    flex: 0 0 auto;
                    display: inline-flex;
                    -webkit-box-align: center;
                    align-items: center;
                    font-size: 12px;
                    line-height: 14px;
                    padding: 9px 12px;
                    border-radius: 16px;
                    background: rgba(247,247,247, 1);
                    border: none;
                    user-select: none;

                    svg{
                        color: rgba(191,191,191, 1);
                        margin-left: 5px;
                        cursor: pointer;
                        transition: color 0.3s ease 0s; 
                        width: 14px;
                        height: 14px;
                    }
                }

                .selectorWrap{
                    height: 32px;
                    border-radius: 16px;
                    background-color: rgba(0,10,32,0.05);
                    display: flex;
                    padding: 0px 10px;
                    -webkit-box-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    justify-content: center;
                    cursor: pointer;
                    font-size: 12px;
                    color: rgba(38,38,38,0.75);
                    position: relative;
                    margin-right: 15px;

                    &.active{
                        svg{
                            transform: rotate(0.5turn);
                        }
                    }

                    .icon{
                        width: 14px;
                        height: 14px;
                        border-radius: 7px;
                        margin-right: 8px;
                        font-size: 12px;
                        line-height: 12px;
                        text-align: center;
                        color: rgba(255,255,255, 1);
                        background-color: rgba(0,122,255, 1);
                    }

                    svg{
                        width: 12px;
                        height: 12px;
                        margin-left: 4px;
                    }

                    .topic-list-box{
                        background: rgba(255,255,255, 1);
                        pointer-events: auto;
                        position: absolute;
                        z-index: 999;
                        bottom: -5px;
                        left: 50%;
                        transform: translate(-50%, 100%);
                        border: 1px solid rgba(240,240,240, 1);
                        border-radius: 3px;
                        box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 8px 0px; 
                        flex: 1 1 0%;
                        overflow: auto;
                        padding: 8px;   
                        
                        .list-item{
                            height: 32px;
                            width: 130px;
                            color: rgba(0,0,0, 1);
                            font-size: 14px;
                            display: flex;
                            -webkit-box-align: center;
                            align-items: center;
                            padding: 0px 8px;
                            cursor: pointer;
                            user-select: none;
                            position: relative;
                            z-index: 0;
                        }
                    }

                    .tags-list-box{
                        background: rgba(255,255,255, 1);
                        pointer-events: auto;
                        position: absolute;
                        z-index: 999;
                        bottom: -5px;
                        left: 60%;
                        transform: translate(-50%, 100%);
                        border: 1px solid rgba(240,240,240, 1);
                        border-radius: 3px;
                        box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 8px 0px; 
                        flex: 1 1 0%;
                        overflow: auto;
                        padding: 8px;   
                        
                        .list-item{
                            height: 32px;
                            width: 100px;
                            color: rgba(0,0,0, 1);
                            font-size: 14px;
                            display: flex;
                            -webkit-box-align: center;
                            align-items: center;
                            padding: 0px 8px;
                            cursor: pointer;
                            user-select: none;
                            position: relative;
                            z-index: 0;
                        }
                    }
                }
            }
        }

        .main{
            flex:  1 1 auto;
            .ql-editor{
               height: 100%;
            }
        }
    }
`