import React from 'react'
import {
  Loading as Container,
  LoadingPlate,
  LoadingIcon
} from './Style'

const Loading = () => {
  return (
    <Container>
      <LoadingPlate style={{padding: '10px', border: '1px solid black'}}>
        <LoadingPlate>
          <LoadingIcon/>
        </LoadingPlate>
      </LoadingPlate>
    </Container>
  )
}

export default Loading