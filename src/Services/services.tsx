const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
const urlFilters = 'https://www.themealdb.com/api/json/v1/1/filter.php?'

export const searchRecipe = async (name: string) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    const json = await response.json()
    return json.meals
  } catch (error) {
    console.error(error)
  }
}

export const getRecipeData = async (id: string) => {
  try {
    const response = await fetch(`${url}${id}`)
    const json = await response.json()
    return json.meals[0]
  } catch (error) {
    console.error(error)
  }
}

export const getRandomRecipe = async () => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    const json = await response.json()
    return json.meals[0]
  } catch (error) {
    console.error(error)
  }
}

export const getListOfFilters = async (filter) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${filter}=list`)
    const json = await response.json()
    return json.meals
  } catch (error) {
    console.error(error)
  }
}

export const searchRecipeByFilter = async (filter, search) => {
  try {
    const response = await fetch(`${urlFilters}${filter}=${search}`)
    const json = await response.json()
    return json.meals
  } catch (error) {
    console.error(error)
  }
}