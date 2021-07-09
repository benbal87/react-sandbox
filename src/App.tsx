import React from 'react'
import ItemPage from './components/ItemPage'
import Shop from './components/Shop'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import style from './App.module.scss'

function App() {
    return (
        <Router>
            <div className={ style.App }>
                <Nav />
                <Switch>
                    <Route path="/"
                           exact
                           component={ Home } />
                    <Route path="/about"
                           exact
                           component={ About } />
                    <Route path="/shop"
                           exact
                           component={ Shop } />
                    <Route path="/shop"
                           exact
                           component={ Shop } />
                    <Route path="/shop/:itemId"
                           exact
                           component={ ItemPage } />
                    <Route path="*"
                           component={ NotFound } />
                </Switch>
            </div>
        </Router>
    )
}

export default App
