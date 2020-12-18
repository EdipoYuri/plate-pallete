import React from 'react'
import './global.css'
import { Bar } from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

import ExploreRecipes from './Pages/ExploreRecipes/ExploreRecipes'
import Homepage from './Pages/Homepage/Homepage'
import HowItWorks from './Pages/HowItWorks/HowItWorks'
import Recipe from './Pages/Recipe/Recipe'

const Popular = () => {
  return <h1>Receitas populares</h1>
}

const PageLink = styled(NavLink)`
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;

  color: black;
  text-decoration: none;

  border-bottom: 3px solid transparent;
  
  &:hover {
    border-bottom: 3px solid var(--color-secondary);
  }

  &:first-child{
    font-size: 24px;
  }
`

const App = () => {
  return (
    <Router>
      <Bar>
        <PageLink
          exact to='/'
          activeStyle={{
            fontWeight: 'bold',
            borderBottom: '3px solid var(--color-secondary)'
          }}
        >
          Plate Pallete
        </PageLink>

        <PageLink
          to='/how-it-works'
          activeStyle={{
            fontWeight: 'bold',
            borderBottom: '3px solid var(--color-secondary)'
          }}
        >
          How it works
        </PageLink>

        <PageLink
          to='/recipes'
          activeStyle={{
            fontWeight: 'bold',
            borderBottom: '3px solid var(--color-secondary)'
          }}
        >
          Explore recipes
        </PageLink>
      </Bar>

      <Switch>
        <Route path='/how-it-works'>
          <HowItWorks />
        </Route>
        <Route path='/recipes'>
          <ExploreRecipes />
        </Route>
        <Route path='/popular'>
          <Popular />
        </Route>
        <Route path='/recipe'>
          <Recipe />
        </Route>
        <Route exact path='/'>
          <Homepage />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App
