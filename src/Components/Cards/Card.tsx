import React from 'react'
import {
  Card,
  Image,
  ImgInfos,
  Bottom,
  SaveButton
} from './Styles'

import{
  UncheckBookmark,
  CheckedHeart
} from '../Buttons'

const FoodCard = (props: CardInfos) => {
  return (
    <Card to={`/recipe/${props.idMeal}`}>
      <Image style={{backgroundImage: `url(${props.imgLink})`}}>
        <ImgInfos>
          <CheckedHeart/> 0
        </ImgInfos>
        <ImgInfos>
          0 min
        </ImgInfos>
      </Image>

      <Bottom>
        <div>
          <h4>{props.title}</h4>
        </div>

        <SaveButton alt='Botão de salvar receita aos favoritos'>
          <UncheckBookmark /> Salvar
        </SaveButton>
      </Bottom>
    </Card>
  )
}

export default FoodCard