import styled from 'styled-components'

export const Banner = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background-size: auto 100vh;
  background-repeat: no-repeat;
  background-position: center;
`

export const Title = styled.h2`
  margin: 30px;
  font-size: 30px;
`

export const SearchBar = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const SearchField = styled.input`
  width: 50%;
  height: 50px;

  border: 0;
  border-radius: 5px 0 0 5px;
  padding-left: 20px;

  font-size: 18px;
  outline: none;
  padding-left: 30px;
`

export const CardList = styled.div`
  max-width: 80%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Cards = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const FilterDropdown = styled.select`
  background: none;
  font-weight: bold;
  color: #292929;
  border: none;
  font-size: 18px;
  padding-left: 5px;
`

export const SearchDropdown = styled.select`
  width: 50%;
  height: 50px;

  border: 0;
  border-radius: 5px 0 0 5px;
  padding-left: 20px;

  font-size: 18px;
  outline: none;
  padding-left: 30px;
`