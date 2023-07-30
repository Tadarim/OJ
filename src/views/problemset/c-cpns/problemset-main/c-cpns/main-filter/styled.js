import { styled } from "styled-components";

export const MainFilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;

    .main-filter{
        gap: 1rem;
        flex-wrap: wrap;
        width: 100%;
        display: flex;
              
        .item-container{
            flex: 1 1 0%;
            position: relative;

            &.active{
               button:first-of-type > svg{
                    transform: rotate(180deg);
                    transition-timing-function: cubic-bezier(.4,0,.2,1);
                    transition-duration: .3s;
                }

                .list{
                    display: block;
                }

                .tags-list-container{
                    display: block;
                }
            }

            .tags-list-container{
                width: max-content;
                max-width: 20rem;
                width: 300px;
                background-color: rgb(255,255,255);
                margin-top: .25rem;
                padding: .625rem;
                display: none;
                box-shadow: 0 0 #0000, 0 0 #0000,0 0 #0000, 0 0 #0000,0px 1px 3px #0000000a,0px 6px 16px #0000001f;
                border-radius: .5rem;
                position: absolute;
                z-index: 10;

                .tags-list{
                    overflow: hidden;

                    .btns-container{
                        margin-top: .625rem;
                        padding-left: .5rem;
                        padding-right: .5rem;
                        padding-bottom: .125rem;
                        padding-top: .125rem;
                        display: flex;
                        justify-content: space-between;

                        .left-btn{
                            color: rgb(0 122 255);
                            cursor: pointer;
                            float: left;
                            font-size: 16px;
                        }
                    }
                }
            }
        }

        .search-container{
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            flex: 4 4 0%;
                   

            .search{
                flex: 2 2 0%;
                border-radius: 0.375rem;
                position: relative;

                .svg{
                    display: flex;
                    align-items: center;
                    color: rgb(140,140,140);
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    top: -0.25rem;
                    pointer-events: none;

                    svg{
                        overflow: hidden;
                        width: 1.25rem;
                        height: 1.25rem;
                        margin-left: 0.75rem;
                    }
                }

                input{
                    font-size: 16px;
                    background-color: #000a200d;
                    border-style: none;
                    border-radius: .375rem;
                    color: #262626bf;
                    width: 85%;
                    outline: 2px solid #0000;
                    outline-offset: 2px;
                    line-height: 1.5rem;
                    padding-right: .75rem;
                    padding-left: 2.25rem;
                    padding-bottom: .5rem;
                    padding-top: .5rem;

                    &:focus{
                        background-color: #000a201a;
                    }

                    &::placeholder{
                        font-size: 16px;
                        color: rgb(191,191,191);
                    }
                }

            }

            .btn{
                padding-left: .625rem;
                display: inline-flex;
                align-items: center;
                cursor: pointer;
                flex: 1 1 0%;
                margin-left: auto;
                font-size: 16px;

                .svg{
                    background-image: linear-gradient(to bottom,#50d57f,#2db55d);
                    box-shadow: 0 0 #0000,0 0 #0000, 0 0 #0000, 0 0 #0000, 0 4px 12px 0 #2db55d66;
                    border-radius: 50%;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 2rem;
                    height: 2rem;

                    svg{
                        overflow: hidden;
                        color: rgb(255,255,255);
                        width: 20px;
                        height: 20px;
                        margin: 0;
                    }
                }

                .desc{
                    display: inline;
                    margin-top: -0.25rem;
                    padding-left: .625rem;
                    color: rgb(45 181 93);
                }
            }
        }

       
    } 
    .search-tags-wrapper{
            display: flex;
            flex-wrap: nowrap;
            margin-top: 0.75rem;
            justify-content: space-between;

            .search-tags-item-wrapper{
                display: flex;
                flex-wrap: wrap;
                margin-left: -.25rem;
                margin-right: -.25rem;

                .search-tags-item{
                    display: inline-flex;
                    align-items: center;
                    padding: 3px 0.5rem;
                    margin: 0.25rem;
                    font-size: .75rem;
                    background-color: #000a200d;
                    border-radius: 5px;
                    white-space: nowrap;
                    color: rgb(38,38,38);
                    line-height: 1.5;

                    .item-text-wrapper{
                        .item-text{
                            color: rgb(38,38,38)
                        }
                    }

                    .item-remove{
                        transition-duration: .15s;
                        transition-property: all;
                        transition-timing-function: cubic-bezier(.4,0,.2,1);
                        cursor: pointer;

                        svg{
                            color: #3c3c434d;
                            width: 0.875rem;
                            height: 0.875rem;
                            margin-left: 0 !important;
                        }
                    }
                }
            }

            .restart-wrapper{
                display: flex;
                align-items: center;
                align-self: flex-end;
                outline: 2px solid #0000;
                outline-offset: 2px;
                color: #3c3c4399;
                line-height: 20px;
                white-space: nowrap;
                margin-bottom: .375rem;

                svg{
                    width: 1rem;
                    height: 1rem;
                }

                span{
                    margin: 0 0.25rem;
                }
            }
        }
`