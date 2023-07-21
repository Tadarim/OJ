import { styled } from "styled-components";

export const ItemWrapper = styled.div`
    display: flex;
    padding: 16px;
    transition: background 0.3s ease 0s;
    color: rgba(65,145,255, 1);
    text-decoration: none;
    border-top: 1px solid rgba(229,229,229, 1);

    &>a{
        flex: 0 0 auto;
        margin-right: 15px;

        img{
            width: 128px;
            height: 96px;
            border-radius: 3px;  
        }
    }

    &:hover{
        background: rgba(0,10,32,0.03);
    }

    .main{

        .header{
            display: flex;
            -webkit-box-align: center;
            align-items: center;

            .avatar-wrapper{
                padding: 2px;
                text-decoration: none;
                display: inline-block;
                position: relative;

                img{
                    border-radius: 50%;
                    height: 20px;
                    width: 20px;
                    object-fit: cover;
                    display: block;             
                }
            }

            .title-wrapper{
                font-size: 14px;
                margin-left: 8px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                flex: 0 1 auto;
                color: rgba(38,38,38, 1);
                padding: 0px;
                font-weight: 500;

                .title-text{
                    color: rgba(38,38,38, 1);
                }
            }
        }

        a{
            padding: 8px 0px;
            display: block;

            .content{
                color: rgba(140,140,140, 1);
                font-size: 12px;
                overflow: hidden;
                flex: 1 1 auto;
                line-height: 16px;
                height: 32px;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                display: -webkit-box;
            }
        }

        .toolbar-wrapper{
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            cursor: auto;
            pointer-events: none;

            .toolbar{
                display: inline-flex;
                -webkit-box-align: center;
                align-items: center;
                font-size: 12px;

                .tool-wrapper{
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    margin-right: 16px;

                    button{
                        box-shadow: none;
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
                        color: rgba(89,89,89, 1);
                        padding: 0px;
                        font-size: 14px;

                        &:hover{
                            box-shadow: none;
                        }

                        &>span{
                            color: rgba(60,60,67,0.6);
                            margin-left: 4px !important;
                        }
                    }
                }
            }
        }
    }
`