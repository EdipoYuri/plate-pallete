import styled from 'styled-components'
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle'
import { YoutubeWithCircle } from '@styled-icons/entypo-social/YoutubeWithCircle'
import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle'

export const Background = styled.div`
  max-width: 100%;
  height: calc(100vh - 100px);

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const Content = styled.div`
  width: 500px;
  height: 35%;
  position: absolute;

  display: flex;
  flex-direction:column;
  justify-content: space-evenly;

  top: 35%;
  left: 10%;

  @media(max-width: 550px){
    width: 80%;
    right: 10%;
  }
`

export const Title = styled.h2`
  font-size: 60px;
  letter-spacing: 2px;
`

export const Text = styled.div`
  font-size: 18px;
`

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FacebookButton = styled(FacebookCircle)`
  width: 40px;
  margin-right: 20px;

  color: #A3A4A4;

  &:hover{
    cursor: pointer;
    color: #1E2FAF;
  }
`

export const YoutubeButton = styled(YoutubeWithCircle)`
  width: 35px;
  margin-right: 20px;

  color: #A3A4A4;

  &:hover{
    cursor: pointer;
    color: #FF0000;
  }
`

export const TwitterButton = styled(TwitterWithCircle)`
  width: 35px;
  color: #A3A4A4;

  &:hover{
    cursor: pointer;
    color: #1DA1F2;
  }
`