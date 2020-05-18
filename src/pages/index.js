import React from 'react'

import BlogRoll from '../components/BlogRoll'
import Header from '../components/Header'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <section>
          <div className="container">
          <div className="row">
            <BlogRoll />
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}