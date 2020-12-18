import styled from 'styled-components'
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle'
import { YoutubeWithCircle } from '@styled-icons/entypo-social/YoutubeWithCircle'
import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle'

export const Footer = styled.div`
  width: 100%;
  height: 300px;

  background-color: var(--color-secondary);

  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
`

export const Links = styled.div`
    cursor: pointer;
    color: white;

    margin-bottom: 25px;
`

export const Center = styled.div`
  width: 25%;
  height: 100%;

  color: white;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const SubscribeContainer = styled.div`
  width: 100%;
`

export const EmailField = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid white;
  border-radius: 0;
  color: white;
  background-color: transparent;
  padding: 0;
  text-align: center;

  &::placeholder{
    color: white;
  }
`

export const SubscribeButton = styled.div`
  width: 100%;
  height: 40px;
  
  color: black;
  background-color: white;
  border: 1px solid white;
  font-weight: bold;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SocialButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const FacebookButton = styled(FacebookCircle)`
  width: 40px;
  margin-right: 20px;

  color: white;

  &:hover{
    cursor: pointer;
    color: #1E2FAF;
  }
`

export const YoutubeButton = styled(YoutubeWithCircle)`
  width: 35px;
  margin-right: 20px;

  color: white;

  &:hover{
    cursor: pointer;
    color: #FF0000;
  }
`

export const TwitterButton = styled(TwitterWithCircle)`
  width: 35px;
  color: white;

  &:hover{
    cursor: pointer;
    color: #1DA1F2;
  }
`