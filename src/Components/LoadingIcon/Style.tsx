import styled, {keyframes} from "styled-components";
import { LocationFood } from '@styled-icons/zondicons/LocationFood'

export const Loading = styled.div`
  width: 100%;
  padding: calc(25vh);

  display: flex;
  justify-content: center;
`

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const LoadingPlate = styled.div`
  border: 2px solid black;
  border-radius: 50%;
`

export const LoadingIcon = styled(LocationFood)`
  color: black;
  width: 50px;
  padding: 10px;
  

  animation: ${rotation} 2s infinite linear;
`
