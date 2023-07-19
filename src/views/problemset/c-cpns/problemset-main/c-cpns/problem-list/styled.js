import { styled } from "styled-components";

export const ProblemListWrapper = styled.div`
            transition-duration: .15s;
            transition-property: opacity;
            transition-timing-function: cubic-bezier(.4,0,.2,1);
            width: 100%;

            .problemset-list{
                border-spacing: 0;
                width: 100%;

                .list-header-container{
                    border-radius: rgb(240 240 240);
                    border-bottom-width: 1px;
                    width: 100%;
                    
                    .list-header{
                        display: flex;
                        flex: 1 0 auto;

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