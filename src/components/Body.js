import React, {Component} from 'react'
import BlogRoll from './BlogRoll'

class Body extends Component {
	render(){
		return (
		<div>
		<div className="container">
          <div className="row">
            <BlogRoll />
           </div>
         </div>
         </div>
		)
	}
}

export default Body