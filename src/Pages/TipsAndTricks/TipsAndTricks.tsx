import React from 'react'
import {
  Page,
  Banner,
  Description
} from './Styles'

import { FilledButton } from '../../Components/Buttons'
import background from '../../Images/tips-banner2.jpg'

function TipsAndTricks(){
  return(
    <Page>
      <Banner style={{backgroundImage:`url(${background})`}}>
        <Description>
          <h2>Priceless advice</h2>
          <h1>How can you mix spices?</h1>
          <h1>How spices can ruin your dish?</h1>
          <p>
            This tips and many others you can find in our blog, where<br/>
            people share their experience and results in cooking!
          </p>
          <FilledButton 
            color="var(--color-secondary)"
            height="40px" 
            shadow="true"
          >
            Read Blog
          </FilledButton>
        </Description>
      </Banner>
    </Page>
  )
}

export default TipsAndTricks