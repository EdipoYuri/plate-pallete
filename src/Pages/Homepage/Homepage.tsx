import React from 'react'
import background from '../../Images/background.jpg'
import { 
  Background,
  Content,
  Title,
  Text,
  SocialButtons,
  FacebookButton,
  YoutubeButton,
  TwitterButton
} from './Style'
import { NavLink } from 'react-router-dom'
import { GreenButton } from '../../Components/Buttons'

const Homepage = () => {
  return (
    <Background style={{backgroundImage: `url(${background})`}}>
      <Content>
        <Title>Plate Pallete</Title>

        <Text>
          Stop waisting your time while thinking what to cook.
          We can help you to create your own recipes from
          products which are in your fridge right now!
        </Text>

        <NavLink to="/recipes">
          <GreenButton width="90%">Popular recipes</GreenButton>
        </NavLink>
        

        <SocialButtons>
          <a href="https://www.facebook.com/olya.synytsya">
            <FacebookButton /> 
          </a>
          <a href="https://www.behance.net/olyasynytsya1">
            <YoutubeButton />
          </a>
          <a href="https://www.behance.net/olyasynytsya1">
            <TwitterButton />
          </a>          
        </SocialButtons>
      </Content>
    </Background>
  )
}

export default Homepage