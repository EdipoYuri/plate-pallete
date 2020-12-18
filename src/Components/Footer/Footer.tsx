import React from 'react'
import {
  Footer as Container,
  Links,
  Center,
  SubscribeContainer,
  SubscribeButton,
  EmailField,
  SocialButtons,
  FacebookButton,
  YoutubeButton,
  TwitterButton
} from './Styles'

const Footer = () => {
  return (
    <Container>
      <div>
        <Links>Privacity policy</Links>
        <Links>Term and conditions</Links>
        <Links>About</Links>
      </div>

      <Center>
        <h2>PLATE PALLETE</h2>

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

        <SubscribeContainer>
          <EmailField placeholder="name@email.com" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </SubscribeContainer>

        <h6>
          2019 IQPC. All rights reserved.
        </h6>
      </Center>
      
      <div>
        <Links>Our app</Links>
        <Links>Recipe creation FAQs</Links>
        <Links>Contact</Links>
      </div>
    </Container>
  )
}

export default Footer