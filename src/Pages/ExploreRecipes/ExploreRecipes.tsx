import React, { useEffect, useState } from 'react'

import {searchRecipe, getRandomRecipe, searchRecipeByFilter, getListOfFilters} from '../../Services/services'
import FoodCard from '../../Components/Cards/Card'
import { FilledButton } from '../../Components/Buttons'

import {
  Banner,
  Title,
  SearchField,
  FilterDropdown,
  SearchDropdown,
  SearchBar,
  Cards,
  CardContainer
} from './Styles'
import Loading from '../../Components/LoadingIcon/Loading'
import recipes from '../../Images/recipes-banner.jpg'

const ExploreRecipe = () => {
  const [loading, setLoading] = useState(true)
  const [recipeList, setRecipeList] = useState([])
  const [filter, setFilter] = useState('recipe')
  const [categoryFilter, setCategoryFilter] = useState([])
  const [areaFilter, setAreaFilter] = useState([])
  const [ingredientFilter, setIngredientFilter] = useState([])
  const [searchText, setSearchText] = useState('')
  const [dropdownSearch, setDropdownSearch] = useState('')

  useEffect(() => {
    GetRandomRecipes()
    GetFilters()
  }, [])

  async function GetRandomRecipes(){
    setLoading(true)
    setRecipeList([])
    for (let index = 0; index < 12; index++) {
      try {
        const recipe = await getRandomRecipe()
        await setRecipeList(recipeList => [...recipeList, recipe])
      } catch (error) {
        console.error(error)
      }
    }
    setLoading(false)
  }

  async function GetFilters(){
    const categories = await getListOfFilters('c')
    setCategoryFilter(categories)

    const areas = await getListOfFilters('a')
    setAreaFilter(areas)

    const ingredients = await getListOfFilters('i')
    setIngredientFilter(ingredients)
  }

  async function SearchRecipe(){
    setLoading(true)

    if(searchText === '' && dropdownSearch === ''){
      GetRandomRecipes()
    }else{
      if(searchText !== ''){
        try {
          const recipe = await searchRecipe(searchText)
          await setRecipeList(recipe)
        } catch(error){
          console.error(error)
        }
      }else{
        try{
          const recipe = await searchRecipeByFilter(filter, dropdownSearch)
          await setRecipeList(recipe)
        } catch(error){
          console.error(error)
        }
      }
    }
    
    setSearchText('')
    setLoading(false)
  }

  function ChangeFilter(filter) {
    setFilter(filter)

    if(filter === 'c')
      setDropdownSearch(categoryFilter[0].strCategory)
    else if(filter === 'a')
      setDropdownSearch(areaFilter[0].strArea)
    else if(filter === 'i')
      setDropdownSearch(ingredientFilter[0].strIngredient)
  }
  
  return (
    <Cards>
      <Banner style={{backgroundImage: `url(${recipes})`}}>
        <Title style={{margin: 0}}>Explore Recipes</Title>
        <h3>Searching by 
          <FilterDropdown 
            name='search-type' 
            id='search-type' 
            onChange={(event) => {
              ChangeFilter(event.target.value)
            }}
          >
            <option value="recipe" selected>recipe name</option>
            <option value="c">categories</option>
            <option value="a">area</option>
            <option value="i">ingredient</option>
          </FilterDropdown>
        </h3>

        <SearchBar>
          {filter === 'recipe' 
            ? (
              <SearchField 
                placeholder='what do you have in fridge?' 
                onChange={(event) => {setSearchText(event.target.value)}} 
                value={searchText}
              />
            ) : (
              <SearchDropdown onChange={(event) => {setDropdownSearch(event.target.value)}}>
                {filter === 'c' ? categoryFilter.map((item, index) => 
                  <option value={item[Object.keys(item)[0]]} key={index}>{item[Object.keys(item)[0]]}</option>
                ) : ''}

                {filter === 'a' ? areaFilter.map((item, index) => 
                  <option value={item[Object.keys(item)[0]]} key={index}>{item[Object.keys(item)[0]]}</option>
                ) : ''}

                {filter === 'i' ? ingredientFilter.map((item, index) => 
                  <option value={item.strIngredient} key={index}>{item.strIngredient}</option>
                ) : ''}
              </SearchDropdown>
            )
          }

          <FilledButton color='var(--color-secondary)' onClick={() => SearchRecipe()}>Find recipe</FilledButton>
        </SearchBar>
      </Banner>
      
      {recipeList == null ? <div>Recipe not found :/</div> : 
        loading ? <Loading/> :
          <>
            <Title>Recipes that you might like :)</Title>
            <CardContainer>
              {recipeList.map((item, index) => 
                <FoodCard
                  key={index}
                  imgLink={item.strMealThumb}
                  title={item.strMeal}
                  idMeal={item.idMeal} 
                />
                )
              }
            </CardContainer>
          </>
      }
    </Cards>
  )
}

export default ExploreRecipe