import { styled } from "styled-components";

export const RightWrapper = styled.div`
    .right-content{
      width: 332px;
      display: flex;
      justify-content: right; 
      
      .btns{
        display: flex;

        .btn{
            line-height: 50px;
            text-align: center;
            cursor: pointer;
        }

        .middle{
            color: rgba(140,140,140, 1);
            margin: 0px 15px;
        }
      }
    }
    
`