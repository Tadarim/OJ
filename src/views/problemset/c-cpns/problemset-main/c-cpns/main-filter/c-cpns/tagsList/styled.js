import { styled } from "styled-components";

export const TagsListWrapper = styled.div`   
    max-height: 376px;
    padding-top: .5rem;
    padding-bottom: 1rem;
    overflow: scroll;
    display: flex;
    flex-wrap: wrap;

    .tags-item{
        width: 100%;

        &:not(:first-child){
        padding-top: 0.75rem;
        }

        &.active{
            .item-main{
                max-height: unset !important;
            }

            svg{
                transform: rotate(180deg);
            }  
        }

        .item-title{
            height: 1.25rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .title-text{
                font-size: 16px;
                color: #262626bf;
                float: left;
            }

            .title-svg{
                float: right;
                cursor: pointer;
                svg{
                    color: rgb(140,140,140);
                    transition-property: color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;
                    transition-timing-function: cubic-bezier(.4,0,.2,1);
                    transition-duration: .3s;
                }
            }
        }

        .item-main{
            max-height: 2.25rem;
            overflow: hidden;
            padding-top: 0.25rem;
            display: flex;
            flex-wrap: wrap;
            margin-left: -0.25rem;

            .tags{
                margin: .25rem;
                padding: 0.25rem 0.5rem;
                display: inline-flex;
                align-items: center;
                font-size: 0.8rem;
                background-color: #000a200d;
                border-radius: 9999px;
                color: #3c3c4399;
                cursor: pointer;
                white-space: nowrap;
                line-height: 1.5rem;
                transition-duration: .15s;
                transition-property: all;
                transition-timing-function: cubic-bezier(.4,0,.2,1);
            }
            
            .tags.active{
                color: rgb(255 255 255);
                background-color: rgb(0 122 255);
            }
        }
    }
`