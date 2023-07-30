import { styled } from "styled-components";

export const BottomWrapper = styled.div`
                position: relative;
            
                .question-fast-picker-wrapper{
                    border-top: 1px solid rgba(240,240,240,1);
                    width: 100%;
                    font-size: 13px;
                    background: rgba(255,255,255,1);
                    
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


                    .question-fast-picker{
                        width:calc(100% - 10px) ;
                        padding: 10px 0 10px 10px;
                        display: flex;
                        -webkit-box-pack: justify;
                        -ms-flex-pack: justify;

                        .picker-handlers{
                            display: flex;
                            -webkit-box-pack: end;
                            justify-content: space-around;
                            -webkit-box-flex: 1;
                            flex-grow: 1;
                            min-width: 0;
                            transition: transform 0.3s,-webkit-transform 0.3s;
                        
                            .space-filler{
                                flex-basis: 30px;
                                flex-shrink: 1;
                                min-width: 15px;
                            }
                            
                            .picker-pagination-handlers{
                                display: flex;
                                -webkit-box-pack: justify;
                                justify-content: space-between;

                                .pagination-screen{
                                    -webkit-box-flex: 1;
                                    flex-grow: 1;
                                    width: 80px;
                                    text-align: center;
                                    align-self: center;
                                    line-height: 1;
                                }

                                a:last-of-type{
                                    button{
                                      span{
                                        margin-left: 0 !important;
                                      } 
                                      svg{
                                        margin-left: 4px;
                                      }
                                    }
                                }
                                
                            }
                        }
                    }
                }
`