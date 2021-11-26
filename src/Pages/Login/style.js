import styled from "styled-components";

export const AreaLogin = styled.div`

    background-color: #fff;
    padding: 30px;
    max-width:300px;
    margin:auto;
    margin-top: 20px;
    text-align: center;
    boder-radius: 5px;
    box-shadow: 0px 0px 10px #9b2d1f;

    h1{
        font-size:20px;
        margin-top: 20px;              

    }


    .form--input{
        text-align: left;
        margin:auto;
        

        label{
            margin-top: 10px;
            display:block;
        }

        input{
            margin-bottom: 20px;
            padding: 6px;
            font-size: 14px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 240px;
            transition: 0,3s;

            &:hover{
                border: 1px solid #9b2d1f;
            }

        }
        
    }

    .logo{
        flex: 1;

        img{
            width: 110px;
        }

    .footerLoging{
        font-size: 13px;

        a{
            font-weight: bold;
            margin-left: 5px;
            color:c#4e129;
            transition: 0,4s;
            cursor: pointer;

            &:hover{
                color: #fffff;
            }
        }
    }

`;
