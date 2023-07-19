import { styled } from "styled-components";

export const DiscussWrapper = styled.div`
    display: flex;
    padding: 12px 0;
    border-bottom: 2px rgba(247,248,250,1) solid;

    .img-link{
        width: 200px;
        height: 120px;
        margin-right: 16px;

        img{
            width: 200px;
            height: 120px;
            margin-right: 16px;
            object-fit: cover;
            border-radius: 13px;
        }
    }

    .content{
        flex: 1 1 0%;

        .discuss-header{
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            justify-content: space-between;

            .header-main{
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                overflow: hidden;

                .avatar{
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    margin-right: 8px;
                }

                .title-action{
                    font-size: 18px;
                    line-height: 22px;
                    font-weight: 500;
                    color: rgba(38,38,38,0.75);
                    margin-right: 5px;
                }

                .title-link{
                    font-size: 18px;
                    line-height: 22px;
                    font-weight: 500;
                    color: rgba(38,38,38, 1);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: pre;
                    margin-right: 10px;
                    flex: 1 1 0%;
                }
            }

            .header-time{
                font-size: 12px;
                line-height: 18px;
                color: rgba(223,223,223, 1);
                flex: 0 0 auto;
            }
        }

        .discuss-content{
            font-size: 16px;
            line-height: 20px;
            color: rgba(60,67,67,0.6);
            -webkit-line-clamp: 2;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            margin: 16px 0px 18px;
        }

        .discuss-tags{
            display: flex;

            .discuss-btn{
                font-size: 13px;
                overflow: hidden;
                text-overflow: ellipsis;
                color: rgba(45,181,93, 1);
                background: rgba(45,181,93, 0.15);
                height: 24px;
                line-height: 20px;
                padding: 2px 8px;
                border-radius: 12px;
                margin-right: 10px;
                white-space: nowrap;
                max-width: 120px;
            }

            .text-tag{
                font-size: 13px;
                overflow: hidden;
                text-overflow: ellipsis;
                color: rgba(60,60,67,0.6);
                background: rgba(0,10,32,0.05);
                height: 24px;
                line-height: 20px;
                padding: 2px 8px;
                border-radius: 12px;
                margin-right: 10px;
                white-space: nowrap;
                max-width: 120px;
            }
        }
    }
`