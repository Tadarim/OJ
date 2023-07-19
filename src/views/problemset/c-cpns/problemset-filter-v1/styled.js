import { styled } from "styled-components";

export const FilterV1Wrapper = styled.div`
    display: flex;
    margin-bottom: .25rem;
    font-size: 16px;
    position: relative;

    .filter-list-v1{
            display: flex;
            overflow: hidden;
            flex-wrap: nowrap;
            margin-left: -10px;
            margin-top: -10px;
            margin-bottom: -10px;

            position: relative;

            .filter-item{
                display: flex;
                align-items: center;
                margin: 10px;

                .item-link{
                    background-color: transparent;
                    color: inherit;
                    -webkit-text-decoration: inherit;
                    text-decoration: inherit;
                    display: inline-flex;
                    align-items: center;

                    .item-tag{
                        color: rgb(38 38 38);
                        white-space: nowrap;
                    }

                    .item-num{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #3c3c4399;
                        font-weight: 400;
                        font-size: .75rem;
                        line-height: 1rem;
                        padding-left: .375rem;
                        padding-right: .375rem;
                        background-color: #000a200d;
                        border-radius: 10px;
                        height: 18px;
                        margin-left: .25rem;
                    }
                }
            }
    }

    .filter-list-v1.isExpand{
        flex-wrap: wrap !important;
        }

    .more-btn-container{
            color: #3c3c4399;
            align-self: flex-end;
            display: flex;

            position: absolute;
            right: 0;
            bottom: -7px;

            .btn-left{
                z-index: 2;
                background-image: linear-gradient(to left,#fff,#fff0);
                width: 1.5rem;
                height: 2.25rem;
            }

            .btn{
                font-weight: 400;
                padding-left: .125rem;
                background-color: rgba(247,248,250, 1);
                display: flex;
                align-items: center;
                cursor: pointer;
                height: 2.25rem;
                .desc{
                    flex-grow: 1;
                    text-align: right;
                }
            }
        }
`