import React from 'react'

import {
  Page,
  Card,
  CardContainer
} from './Style'

import { NavLink } from 'react-router-dom'

import Bag from '../../Images/bag.jpg'
import Burger from '../../Images/burger.jpg'
import Plate from '../../Images/plate.jpg'
import { GreenButton } from '../../Components/Buttons'
import WaveBackground from '../../Images/WaveBackground.png'

function HowItWorks(){
  return(
    <Page style={{backgroundImage: `url(${WaveBackground})`}}>
      <h1>How it works?</h1>
      <CardContainer>
        <Card>
          <img src={Bag} alt='Bag icon' />
          <h3>What do you have in fridge?</h3>
          <div>
            Check what do you have in your
            fridge. Write from 1 to 10 words in
            search field and you will find the
            recipes with these products
          </div>
        </Card>

        <Card>
          <img src={Burger} alt='Burger icon' />
          <h3>Choose a recipe</h3>
          <div>
            Choose the best one for you. We want to
            make the process of cooking easier for you
            so we added the videos and some tips
          </div>
        </Card>

        <Card>
          <img src={Plate} alt='Plate icon' />
          <h3>Enjoy your dish!</h3>
          <div>
            After registration you will have your personal
            cabinet where you can add products and
            recipes. Also you will be able to write comments
            and share your photos of prepared dishes
          </div>
        </Card>
      </CardContainer>

      <NavLink to="/recipes">
        <GreenButton width="250px">Find a recipe</GreenButton>
      </NavLink>

    </Page>
  )
}

export default HowItWorks