import { styled } from "styled-components";

export const RightWrapper = styled.div`
    .right-content{
      width: 332px;
      height: 100%;
      display: flex;
      justify-content: right; 
      align-items: center;
      
      .content-wrapper{
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

        .avatar-wrapper{
          height: 22px;
          line-height: 22px;
          color: rgba(140,140,140, 1);
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;

          & > span{
            padding: 2px;
            text-decoration: none;
            display: inline-block;

            .ant-badge-dot{
              transform: none !important;
            }

            img{
              border-radius: 50%;
              height: 24px;
              width: 24px;
              object-fit: cover;
              display: block;
              vertical-align: middle;
              border-style: none;
            }
          }

          .popper-container{
            background-color: #bfa;
            width: 200px;
            height: 200px;
            position: absolute;
            top: 45px;
            left: -10rem;
            z-index: 9999;
            background-color: rgb(255,255,255);
            box-shadow: 10px 10px 5px rgba(0,0,0,0.1);
            border-radius: .5rem;
            padding: 1rem;

            .popper{
              display: flex;
              width: 264px;
              flex-direction: column;

              .header-wrapper{
                display: flex;
                align-items: center;
                padding-top: .25rem;
                padding-bottom: 1rem;
                padding-left: 1px;
                padding-right: 1px;
                flex-shrink: 0;

                > a{
                  width: 3.5rem;
                  height: 3.5rem;
                  display: flex;
                  cursor: pointer;
                  background-color: transparent;
                  color: inherit;
                  text-decoration: inherit;

                  img{
                    width: 3.5rem;
                    height: 3.5rem;
                    border-radius: 9999px;
                  }
                }

                .username-container{
                  color: 38 38 38;
                  padding-left: .75rem;

                  a{
                    display: flex;
                    align-items: center;
                    font-size: 1.25rem;
                    line-height: 1.75rem;
                    font-weight: 600;
                  }
                }

               
              } 

              .main-wrapper{
                  margin-top: 1rem;
                  font-size: .875rem;
                  line-height: 1.25rem;

                  .item-wrapper{
                    margin-top: 0.5rem;
                    padding: 0.5rem;
                    border-radius: 5px;
                    color:rgb(38,38,38);
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    .item{
                      color: #262626bf;
                    }

                    .item-text{
                      margin-left: 0.5rem;
                      flex: 1;
                    }
                  }
                }
            }
          }
        }
      }
    }
    
`