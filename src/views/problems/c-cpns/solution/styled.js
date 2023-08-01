import { styled } from "styled-components";

export const SolutionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: auto;
    background: rgba(255,255,255, 1);
    border-right: 1px solid rgba(240,240,240, 1);

    .search-wrapper{
        min-height: 36px;
        padding: 5px 16px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        flex-wrap: nowrap;
        border-bottom: 1px solid rgba(240,240,240, 1);

        svg{
            width: 18px;
            height: 18px;
            color: rgba(140,140,140, 1);
            cursor: pointer;
        }

        .search{
            border: none;
            outline: none;
            font-size: 12px;
            line-height: 14px;
            flex: 1 1 auto;
            padding: 4px;
            background: transparent;
        }

        button{
            border: none;
            border-radius: 3px;
            line-height: 20px;
            outline: none;
            user-select: none;
            text-decoration: none;
            display: inline-flex;
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

            &:hover{
                box-shadow: none;
                background-color: rgba(38.25,153.85,79.05, 1);
                color: rgba(255,255,255, 1);
            }

            svg{
                color: rgba(255,255,255, 1);
                width: 16px;
                height: 16px;
            }

            span{
                margin-left: 2px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }

    .tags-wrapper{
        display: flex;
        overflow: hidden;
        padding: 4px 0px;

        .tags{
            margin: 4px 6px;

            .tags-content{
                user-select: none;
                font-size: 12px;
                line-height: 20px;
                display: inline-flex;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: center;
                justify-content: center;
                text-decoration: none;
                transition-property: color, background-color;
                transition-duration: 0.3s;
                white-space: nowrap;
                cursor: pointer;
                
                color: rgba(38,38,38,1);
                
                background-color: rgba(0,10,32,0.05);
                padding: 0px 6px;
                min-width: 40px;
                border-radius: 999px;

                &.active{
                   color: rgba(10,132,255, 1); 
                   background-color: rgba(206,230.4,255, 1);
                }
            }
        }
    }

    .articleList{
        width: 100%;
    }

    .pagination{
        width: 100%;
        margin: 15px 0px;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
    }
`