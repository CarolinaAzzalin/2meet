
import styled from "styled-components";


export const AreaHeader = styled.div`
    height: 60px;
    background-color: #9b2d1f;
    color: #fff;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;

    .container{
        padding: 7px 20px;
        display: flex;
        align-items: center;
    }

        .logo{
            flex: 1;

            img{
                width: 110px;
            }

        }

        nav{
            display:flex;

            ul{
                display: flex;
              }
            
              li{
                  list-style: none;
                  margin-left: 20px;

                  a{
                      text-decoration:none;
                      color: #fff;
                      display:flex;
                      align-items: center;

                      &:hover{
                        color: #c38178;
                      }
                      

                  }
              }
            
            .avatar{
                display: flex;
                align-items: center;

                img{
                    width: 35px;
                    border-radius: 20px;
                    margin-left: 20px;
                    margin-right: 10px;
                    cursor:pointer;
                }

                label{
                    font-size: 14px;
                    cursor: pointer;
                    color: #ccc;
                }

                @media screen and (max-width: 600px){
                    label{
                        display: none;
                        
                    }
                }

`;