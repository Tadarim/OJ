import { styled } from "styled-components";

export const ProblemWrapper = styled.div`
    display: flex;
    height: 50px;
    font-size: 16px;

    &:nth-child(odd){
        background-color: rgb(255 255 255);    
    }

    &:nth-child(even){
        background-color: rgb(247 248 250);
    }

    .main-item-title{
        flex: 3 3;
        display: flex;
        justify-content: center;
        align-items: center;

        .title{
            display: flex;
            align-items: center;
            justify-content: center; 
        }
    }

    .main-item-solution{
        flex: 2 2 ;
        display: flex;
        justify-content: center;
        align-items: center;

        .solution{
            margin-left: -1rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
                            
    }

    .main-item-difficulty{
        flex: 2 2 ;
        display: flex;
        justify-content: center;
        align-items: center;
                        
        .difficulty{
            display: flex;
            align-items: center;
            justify-content: center; 
        }
                            
    }
`