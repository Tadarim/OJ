import { styled } from "styled-components";

export const ReplyWrapper = styled.div`
        background: rgba(255,255,255, 1);
        box-shadow: inset 0 1px 6px rgba(0,0,0, 0.1);
        padding: 35px 0px 0px;
        margin-top: 10px;
        border-radius: 3px;
        
        .reply-content{
            margin: 0px 15px;
            display: flex;
            flex-direction: column;
        }

        .reply-bottom{
            display: flex;
            height: 55px;
            margin: 0px 15px;
            border-top: 1px solid rgba(240,240,240, 1);
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            position: relative;

            &>button{
                color: rgba(89,89,89, 1);
                position: absolute;
                left: 0px;
                /* top: 50%; */

                border: 0px;
                display: inline-flex;
                vertical-align: middle;
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
                border-radius: 3px;
                line-height: 20px;
                transition: all 0.18s ease-in-out 0s;
                outline: 0px;
                cursor: pointer;
                background: transparent;
                height: 24px;
                padding: 0px 7px;
                font-size: 12px;
                box-shadow: none;

                &:hover{
                    color: rgba(0,0,0, 1);
                    background: rgba(255,255,255, 1);
                    box-shadow: none;
                }
            }

            .btnContent{
                opacity: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    
`