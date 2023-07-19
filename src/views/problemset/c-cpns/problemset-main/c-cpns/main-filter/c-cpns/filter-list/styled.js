import { styled } from "styled-components";

export const FilterListWrapper = styled.div`
    .list{
        display: none;
        font-size: 16px;
        min-width: 8.75rem;
        max-width: 15rem;
        z-index: 10;
        transition-duration: .1s;
        transition-timing-function: cubic-bezier(0,0,.2,1);
        transition-property: color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;
        box-shadow: 0 0 #0000, 0 0 #0000 , 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000000a,0px 4px 12px #00000014;
        opacity: 1;
        background-color: rgb(255,255,255);
        padding: .5rem;
        border-radius: .5rem;
        margin-top: .25rem;
        position: absolute;

        .list-item{
            height: 2rem;
            position: relative;
            cursor: pointer;
            color: rgb(38,38,38);
            padding: 0.375rem 3rem 0.375rem .5rem ;

            .option-container{
                height: 1.25rem;
                display: flex;
                align-items: center;

                .option{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
            }
        }
    }    
`