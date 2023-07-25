import { styled } from "styled-components";

export const HomeWrapper = styled.div`
    .content-container{
       padding-left: calc(100vw - 100%);
        display: flex;
        flex-direction: column;
        background: rgba(247,248,250, 1); 
    
        .container{
            width: 1120px;
            display: flex;
            justify-content: center;
            margin: 12px auto 0;
            border-color: #bfa;
            height: 100%;

            .content-left{
                width: 824px;

                .loadMoreButton{
                    border: none;
                    line-height: 20px;
                    outline: none;
                    user-select: none;
                    text-decoration: none;
                    -webkit-box-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    justify-content: center;
                    transition-property: color, box-shadow, background-color, opacity;
                    transition-duration: 0.3s;
                    overflow: hidden;
                    cursor: pointer;
                    opacity: 1;
                    font-size: 14px;
                    padding: 6px 12px;
                    display: block;
                    width: 208px;
                    border-radius: 5px;
                    background: rgba(0,10,32,0.05);
                    color: rgba(38,38,38,0.75);
                    margin: -16px auto 40px;
        
                    span{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }           
            }

            .content-right{
                width: 285px;
                margin-left: 10px;
            }
        }
  
    }
`