import React from 'react'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Body from '../components/Body'
import '../css/blog-home.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Nav />
        <Body />
      </div>
    )
  }
}