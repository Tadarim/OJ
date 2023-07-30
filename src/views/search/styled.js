import { styled } from "styled-components";

export const SearchWrapper = styled.div`
    .search-header-wrapper{
        background-color: rgba(255,255,255,1);
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .search-input-wrapper{
            width: 880px;
            margin: 0 auto;
            padding-top: 2.5rem;
            padding-bottom: 2.25rem;

            .search-input{
                width: 560px;
                border-radius: .375rem;
                position: relative;

                .search-icon-wrapper{
                    position: absolute;
                    bottom: 0;
                    top: 0;
                    left: 0;
                    display: flex;
                    padding-left: .75rem;
                    align-items: center;
                    pointer-events: none;

                    .search-icon{
                        color:rgb(140 140 140)

                        svg{
                            overflow: hidden;
                            width: 1rem;
                            height: 1rem;
                        }
                    }
                }

                input{
                    width: 100%;
                    height: 2.5rem;
                    padding: 0.375rem 2.25rem;
                    outline: 2px solid #0000;
                    outline-offset: 2px;
                    color: rgb(38 38 38);
                    background-color: #000a200d;
                    border-style: none;
                    border-radius: 9999px;
                }
            }
        }

        .search-tab-wrapper{
            width: 880px;
            margin: 0 auto;

            button:first-of-type{
                margin-left: 0;
            }

            button{
                margin-left: 2.5rem;
                background-color: #fff;
                cursor: pointer;
                
                .item-wrapper{
                    display: flex;
                    align-items: center;
                    position: relative;
                    color: rgb(38,38,38);
                    transition-duration: .15s;
                    transition-property: all;
                    transition-timing-function: cubic-bezier(.4,0,.2,1);

                    .line{
                        border-radius: 5px;
                        background-color: rgb(255,255,255);
                        width: 100%;
                        height: 0.125rem;
                        position: absolute;
                        left: 0;
                        bottom: -0.5rem;
                    }

                    svg{
                        overflow: hidden;
                        width: 1.5rem;
                        height: 1.5rem;
                        vertical-align: middle;
                    }

                    span{
                        margin-left: .5rem;
                    }
                }


                 &.active{
                    .line{
                        background-color: rgb(38,38,38); 
                    }
                }

            }
        }
    }

    .problemList-wrapper{
        padding-top: 2.5rem;
        background-color: rgb(247,248,250);
        max-width: 880px;
        margin: 0 auto;
        
    }
`