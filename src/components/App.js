import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import PlanYourVisit from './PlanYourVisit'
import Collections from './Collections'

import './App.css'

function App() {
  return (
    <>
      {/* <Router>
        <Switch>
          <Route path="/">
            <PlanYourVisit />
          </Route>
          <Route path="/planyourvisit">
            <PlanYourVisit />
          </Route>
          <Route path="/collections">
            <Collections />
          </Route>
        </Switch>
      </Router> */}

      <div>
        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home111</Link>
                </li>
                <li>
                  <Link to="/about">Aboutttttt222222</Link>
                </li>
                <li>
                  <Link to="/users">Users333</Link>
                </li>
              </ul>
            </nav> */}
            <Switch>
              <Route path="/plan-yours-visit">
                <PlanYourVisit />
              </Route>
              <Route path="/collections">
                <Collections />
              </Route>
              <Route path="/">
                <PlanYourVisit />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

      
    </>
  )
}

export default App
