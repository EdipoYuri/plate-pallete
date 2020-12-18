import styled from "styled-components"

export const Page = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
`

export const Banner = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  align-items: center;

  background-size: 100vw auto;
  background-repeat: no-repeat;
  background-position: center;
`

export const Description = styled.div`
  margin-left: 100px;
  
  & > p {
    font-size: 18px;
    margin-bottom: 20px;
  }
`