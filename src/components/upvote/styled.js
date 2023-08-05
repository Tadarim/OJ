import { styled } from "styled-components";

export const UpvoteWrapper = styled.div`
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
`