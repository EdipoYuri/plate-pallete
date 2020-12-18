import styled from 'styled-components'

export const Page = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% 200px;
`

export const CardContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;

  margin-bottom: 20px;
`

export const Card = styled.div`
  width: 300px;
  padding: 10px;

  text-align: center;
  font-size: 16px;

  img{
    margin-top: 30px;
    margin-bottom: 30px;
    width: 100px;
  }

  h3{
    margin-bottom: 5px;
  }

  div{
    margin-bottom: 20px;
    font-size: 14px;
  }

  &:hover{
    -webkit-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.34);
    -moz-box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.34);
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.34);
  }
`