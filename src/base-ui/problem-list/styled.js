import { styled } from "styled-components";

export const ProblemListWrapper = styled.div`
    transition-duration: .15s;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    width: 100%;
    background-color: #fff;

            .problemset-list{
                border-spacing: 0;
                width: 100%;

                .list-header-container{
                    border-bottom: 1px solid rgb(240,240,240);
                    width: 100%;
                    height: 50px;
                    
                    .list-header{
                        display: flex;
                        flex: 1 0 auto;
                        align-items: center;
                        height: 100%;

                        .header-item-container{
                            flex: 2 2 auto;
                            color: #3c3c4399;
                            font-weight: 400;

                            &:first-child{
                                flex: 3 3 auto;
                            }

                            .header-item{
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                .header-desc{
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    font-size: 16px;
                                }
                            }
                        }
                    }
                }

                .list-main{
                    width: 100%;
                }
            }
`