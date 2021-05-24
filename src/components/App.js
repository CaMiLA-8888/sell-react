import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFound from '../pages/NotFound'
import ContainerSellerList  from '../pages/ContainerSellerList'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ContainerSellerList}/>{/* 
            <Route exact path="/sellers/detail" component={SellersDetail}/>
            <Route exact path="/sellers/new" component={SellersNew}/>*/}
            <Route component={NotFound}/> 
        </Switch>
    </BrowserRouter>
)

export default App