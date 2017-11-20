import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from 'components/App/Layout'
import Home from 'components/Home/Home'

function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" component={Home} />
      </Layout>
    </BrowserRouter>
  )
}

export default App
