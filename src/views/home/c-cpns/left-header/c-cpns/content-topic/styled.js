import { styled } from "styled-components";

export const TopicWrapper = styled.div`
        
            height: 140px; 
            box-shadow: 0 2px 8px rgba(0,0,0, 0.08),0 1px 2px rgba(0,0,0, 0.1);
            background: rgba(255,255,255, 1);
            border-radius: 8px;
            padding: 16px;
            overflow: hidden;
            cursor: pointer;
            width: 373px;

             .topic-title{
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                justify-content: space-between;
                    
                .title-link{
                    font-size: 18px;
                    font-weight: 500;
                    color: rgba(38,38,38, 1);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: pre;
                    line-height: 20px;
                }

                .title-tag{
                    flex: 0 0 auto;
                    color: rgba(255,161,22, 1);
                    font-size: 12px;
                    line-height: 20px;
                    background: rgba(255,161,22, 0.15);
                    border-radius: 12px;
                    padding: 4px 8px;
                }
            }

            .topic-content{
                font-size: 16px;
                -webkit-line-clamp: 2;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                margin: 16px 0px;
                height: 50px;
                color: rgba(38,38,38,0.75);
            }
                   
            .topic-footer{
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                position: relative;
                padding: 3px 0px;

                .topic-footer-avatar{
                    font-size: 0px;
                    display: flex;
                    flex-direction: row-reverse;
                }
                .topic-footer-popularity{
                    font-size: 12px;
                    line-height: 18px;
                    color: rgba(140,140,140, 1);

                    .popularity-number{
                                
                        color: rgba(38,38,38, 1);
                        margin-left: 5px;

                    }
                }
                .topic-footer-link{
                    color: rgba(0,122,255, 1);
                    font-size: 14px;
                    line-height: 20px;
                    position: absolute;
                    right: 0px;
                    cursor: pointer;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    margin-right: -4px;
                }
            }
        
`