import { styled } from "styled-components";

export const EditorWrapper = styled.div`
        padding: 0px 0px 20px;

        .editor{
            position: relative;
            border-radius: 3px;
            border: 1px solid rgba(229,229,229, 1);
            background: rgba(255,255,255, 1);

            textarea{
                display: block;
                outline: none;
                resize: none;
                width: 100%;
                padding: 7px 10px;
                border: none;
                background: rgba(255,255,255, 1);
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                line-height: 1.5;
                font-size: 12px;
            }

            .tool-bar{
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                border-top: 1px solid rgba(229,229,229, 1);
                padding: 0px 5px 0px 10px;
                height: 31px;
                user-select: none;

                button{
                    border: none;
                    border-radius: 3px;
                    line-height: 20px;
                    outline: none;
                    user-select: none;
                    text-decoration: none;
                    display: inline-flex;
                    justify-content: flex-end;
                    -webkit-box-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    justify-content: center;
                    transition-property: color, box-shadow, background-color, opacity;
                    transition-duration: 0.3s;
                    overflow: hidden;
                    cursor: pointer;
                    opacity: 1;
                    background-color: rgba(45,181,93, 1);
                    color: rgba(255,255,255, 1);
                    font-size: 12px;
                    padding: 0px 4px;
                    margin: 0px 0px 0px 10px;

                    span{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }

                .cancel{
                    background-color: transparent;
                    color: rgba(0,0,0,1);
                }
            }
        }
    
`