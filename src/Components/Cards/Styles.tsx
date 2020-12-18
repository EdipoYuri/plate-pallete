import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  width: 220px;
  min-height: 230px;
  margin: 0 20px;
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
`

export const Image = styled.div`
  width: 220px;
  height: 180px;
  border-radius: 10px;

  background-repeat: no-repeat;
  background-size: 220px 180px;

  color: white;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const Bottom = styled.div`
  width: 220px;
  min-height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ImgInfos = styled.div`
  padding-bottom: 10px;
  display: flex;

  &:first-child{
    margin-left: 10px;
  }

  &:last-child{
    margin-right: 10px;
  }
`

export const SaveButton = styled.button`
  background: none;
  border: none;
  font-size: 15px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:hover{
    cursor: pointer;
    font-weight: bold;
  }
`