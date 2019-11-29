import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PlanYourVisit from './PlanYourVisit'
import Collections from './Collections'
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/plan-your-visit">
            <PlanYourVisit />
          </Route>
          <Route path="/collections">
            <Collections />
          </Route>
          <Route path="/">
            <PlanYourVisit />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
