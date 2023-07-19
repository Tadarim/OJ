import { styled } from "styled-components";

export const SwipperWrapper = styled.div`
    margin-top: 10px;

    .swipper-container{
        
        width: 100%;
        height: 148px;

        &:hover .slick-dots li button{
            transform: scale(1.63);
        }

        .swipper-slide{
           width: 100%;
           height: 100%;
           border-radius: 10px;
           overflow: hidden; 
        }

        .swipper-slide img{
            width: 100%;
        }
        
            .slick-dots li {
                width: 15px !important ;
            }

            .slick-dots li.slick-active > button {
                border-radius: 50% !important;
                background: rgba(38, 38, 38, 0.75) !important;
                cursor: pointer !important;
            }

            .slick-dots li button{
                width: 8px !important ;
                height: 8px !important;
                border-radius: 50% !important;
                box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 16px, rgba(0, 0, 0, 0.1) 0px 2px 4px !important;
                background: rgba(60, 60, 67, 0.3) !important;
                cursor: pointer !important;
            }
        

        
    }
`