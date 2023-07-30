import { styled } from "styled-components";

export const FilterWrapper = styled.div`

        margin: 1rem 0 ;
        
        padding: .75rem 0;
        overflow: hidden;

        display: flex;
        align-items: center;

        position: relative;

        svg{
            width: 20px;
            height: 20px;
            margin-right: 1rem;
        }

        a{
            position: relative;
            
            background-color: transparent;
            color: inherit;
            -webkit-text-decoration: inherit;
            text-decoration: inherit;

            .item{
                padding: 10px 1rem;
                background-color: #000a200d;
                color: #262626bf;
                font-size: 18px;
                line-height: 1.25;
                border-radius: 9999px;
                white-space: nowrap;
                display: flex;
                align-items: center;
            }

            .item.active{
                box-shadow: 0 0 #0000 , 0 0 #0000,0 0 #0000 ,0 0 #0000,0px 1px 3px #0000000a,0px 4px 12px #00000014;
                color: rgb(255 255 255); 
                background-color: rgb(38 38 38); 
            }
        }

        a:not(:first-child){
            margin-left: 1rem;
        }
    
`