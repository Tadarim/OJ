import { styled } from "styled-components";

export const CaptchaWrapper = styled.div`
    padding-top: 30px;

    .logo-container{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin-bottom: 24px;

        img{
            width: 172px;
        }
    }

    .input-container{
        margin-bottom: 16px;

        .input{
            margin-bottom: 0px;
            font-weight: normal;
            display: inline-flex;
            position: relative;
            width: 100%;

            input{
                width: 100%;
                font-size: 16px;
                border-width: 1px;
                border-style: solid;
                border-image: initial;
                border-color: rgba(229,229,229, 1);
                color: rgba(38,38,38, 1);
                background: rgba(255,255,255, 1);
                outline: none;
                transition: all 0.3s ease 0s;
                line-height: 24px;
                border-radius: 8px !important;
                padding: 10px 14px;
                        
                    &::placeholder{
                        font-size: 16px;
                    }

                    &:focus{
                        border-color: rgba(0,122,255, 1);
                        box-shadow: rgba(0, 122, 255, 0.3) 0px 0px 0px 2px;
                    }
                }
                        
                input.error{
                    border-color: rgba(239,71,67, 1) !important;
                    box-shadow: none !important;
                }
                        
                .captchaBtn{
                    position: absolute;
                    right: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 16px;
                    transition: color 0.3s ease 0s, opacity 0.3s ease 0s;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    opacity: 1;
                    cursor: pointer;
                    color: rgba(0,122,255, 1);
                }

                .captchaBtn.disabled{
                    color: rgba(38,38,38,0.75);
                }
        }

        .errorMsg{
            color: rgba(239,71,67, 1);
            font-size: 12px;
            line-height: 18px;
            word-break: break-word;
            margin-top: 5px;
            margin-bottom: 1em;

            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
        }
    }
   
    button{
        border: none;
        outline: none;
        user-select: none;
        text-decoration: none;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        overflow: hidden;
        width: 100%;
        cursor: pointer;
        opacity: 1;
        color: rgba(255,255,255, 1);
        font-size: 16px;
        padding: 10px 12px;
        margin: 8px 0px 16px;
        background: rgb(36, 37, 40);
        border-radius: 8px;
        line-height: 24px;
        transition: background 0.3s ease 0s;
        font-weight: 500;

        &:hover{
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), rgb(36, 37, 40) !important;
            color: rgba(255,255,255, 1);
        }
    }

            
`