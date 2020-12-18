import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  letter-spacing: 0.06em;
`

export const Content = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media(max-width: 1030px){
    justify-content: center;
  }

  @media(max-width: 550px){
    width: 90%;
  }
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
`

export const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
`

export const Tags = styled.div`
  font-size: 18px;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const RatingText = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
`

export const VideoContainer = styled.div`
  width: 50%;
  height: 300px;

  @media(max-width: 1030px){
    width: 100%;
  }

  @media(max-height: 800px){
    height: 300px;
  }
`

export const Video = styled.iframe`
  width: 100%;
  height: 100%;
`

export const IngredientsContainer = styled.div`
  width: 45%;
  min-width: 300px;
  padding-left: 10px;

  @media(max-width: 1030px){
    width: 100%;
    padding: 0;
    margin: 0;
    margin-top: 20px;
  }
`

export const Ingredients = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`

export const IngredientInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-right: 10px;
`

export const Measure = styled.div`
  font-weight: bold;
`

export const Description = styled.div`
  text-align: justify;
  text-justify: inter-word;
`

export const DescriptionContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`