import React, { useEffect, useState } from 'react'
import { getRecipeData } from '../../Services/services'

import {
  Page,
  Content,
  Header,
  Title,
  Tags,
  Buttons,
  RatingText,
  VideoContainer,
  Video,
  IngredientsContainer,
  Ingredients,
  IngredientInfo,
  Measure,
  Description,
  DescriptionContainer
} from './Styles'

import Loading from '../../Components/LoadingIcon/Loading'

import {
  UncheckBookmark,
  UncheckedHeart,
  UnfilledStar
} from '../../Components/Buttons'

function Recipe(){
  const [recipe, setRecipe] = useState([])
  const [youtubeVideo, setYoutubeVideo] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    let url = window.location.href
    let pos = url.split('/')
    const idT = pos[pos.length - 1]

    CallRecipe(idT)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function CallRecipe(id){
    try {
      const recipe = await getRecipeData(id)
      await setRecipe(recipe)
      setYoutubeVideo('https://www.youtube.com/embed/' + recipe['strYoutube'].split('https://www.youtube.com/watch?v=').pop())
    
      for (let index = 1; index <= 20; index++) {
        if(recipe[`strIngredient${index}`] != null){
          setIngredients(ingredients => [...ingredients, [recipe[`strMeasure${index}`], recipe[`strIngredient${index}`]]])
        }
      }

      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return(
    <Page>
      {isLoading ? <Loading/>: 
      <Content>
        <Header>
          <div>
            <Title style={{ fontSize: '26px' }}>{recipe['strMeal']}</Title>
            <Tags>{recipe['strCategory']} {recipe['strTags'] != null ? '- ' + recipe['strTags'] : ''}</Tags>

            <Buttons>
              <UncheckBookmark style={{ marginLeft: "-6px" }} /> Save
              <UncheckedHeart /> 0
            </Buttons>
          </div>

          <div>
            <RatingText>Based on 0 ratings</RatingText>
            <Buttons>
              <UnfilledStar />
              <UnfilledStar />
              <UnfilledStar />
              <UnfilledStar />
              <UnfilledStar />
            </Buttons>
          </div>
        </Header>

        <VideoContainer>
          <Video title="Recipe preparation video" src={youtubeVideo} />
        </VideoContainer>

        <IngredientsContainer>
          <Title>Ingredients</Title>
          <Ingredients>
            <IngredientInfo>
              {ingredients.map((item, index) => <Measure key={index}>{item[0]}</Measure>
              )}
            </IngredientInfo>

            <IngredientInfo>
              {ingredients.map((item, index) => <div key={index}>{item[1]}</div>
              )}
            </IngredientInfo>
          </Ingredients>
        </IngredientsContainer>

        <DescriptionContainer>
          <Title>Description</Title>
          <Description>{recipe['strInstructions']}</Description>
        </DescriptionContainer>
      </Content>}
    </Page>
  )
}

export default Recipe