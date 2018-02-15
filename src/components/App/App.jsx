import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from 'components/App/Layout'
import Home from 'components/Home/Home'
import Schedule from 'components/Schedule/Schedule'

function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/schema" component={Schedule} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App
