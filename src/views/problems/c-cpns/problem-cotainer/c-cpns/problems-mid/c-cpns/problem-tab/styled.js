import { styled } from "styled-components";

export const TabWrapper = styled.div`
                    width: 100%;
                    display: flex;
                    -webkit-box-pack: start;
                    justify-content: flex-start;
                    flex: 0 0 auto;
                    color: rgba(140,140,140,1);
                    background: rgba(247,247,247,1);
                    overflow: hidden;
                    position: relative;

                    .tab-item-container{
                        height: 40px;
                        font-size: 12px;
                        flex: 0 0 120px;
                        
                        cursor: pointer;
                        text-overflow: ellipsis;
                        white-space: pre;
                        overflow: hidden;

                        position: relative;

                        &.active{
                            color:rgba(38,38,38,1);
                            background: rgba(255,255,255, 1);
                        }

                        a{
                            max-width: 120px;
                            max-height: 40px;
                            display: flex;
                            flex: 1 1 0%;
                            color: inherit;
                            text-decoration: none;

                            .tab-item{
                                display: flex;
                                -webkit-box-pack: center;
                                justify-content: center;
                                position: relative;
                                color: inherit;
                                -webkit-box-flex: 1;
                                flex-grow: 1;
                                width: 100%;
                                line-height: 16px;
                                padding: 12px; 
                               
                                svg{
                                    width: 16px;
                                    height: 16px;
                                    margin-right: 2px;
                                    vertical-align: middle;
                                    fill: currentcolor;
                                }
                            }
                        }
                    }

`