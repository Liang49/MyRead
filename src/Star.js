import React,  { Component } from "react";

class Star extends Component {
  constructor() {
    super()
    this.state = {
      rating: [],
      hover: []
  }
    this.hoverStars.bind(this)
    this.clearStars.bind(this)
    this.updateStars.bind(this)
  }

  hoverStars(event) {
    event.preventDefault() 
    this.setState({hover: event.currentTarget.id})
  }
  
  clearStars(event) {
    event.preventDefault() 
    this.setState({hover: []})
  }

  updateStars(event) {
    event.preventDefault() 
    this.setState({rating: event.currentTarget.id})
  }
  
  renderStars() {
    let stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
        key={i}
    	id={i + 1}
    onMouseOver={this.hoverStars.bind(this)}
    onMouseLeave={this.clearStars.bind(this)}
	onClick={this.updateStars.bind(this)}
>
<svg width="20" height="50" viewBox="0 0 100 60">
            <path d="M49 73.5L22.55 87.406l5.05-29.453-21.398-20.86 29.573-4.296L49 6l13.225 26.797 29.573 4.297-21.4 20.86 5.052 29.452z" 
              fill={i < this.hover || i < this.state.rating ? "gold" : "#fff"}
            stroke="gold" 
            strokeWidth="12">
            </path>
          </svg>
        </span>
      )
    }
    return stars
  }
  
  
render() {
  return(
    <div>
     {this.renderStars()}
    </div>
    		
    
    );
}
}



export default Star