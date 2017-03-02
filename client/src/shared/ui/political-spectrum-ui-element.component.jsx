import React from "react";

import PoliticalSpectrumSlider from "./political-spectrum-slider.component.jsx";

class PoliticalSpectrumUIElement extends React.Component {
  
  constructor( props ){

    super( props );

    this.state = {
      value: "0",
    };
    
    this.max = 12;
    this.min = this.max * -1;
    this.handleChange = ( ev ) => {
       const value = ev.target.value;
       this.setState({
          value: value
       })
    }
  }

  componentWillUpdate(){
    // this.setState({
    //   color: this.getColor( this.state.value, this.max )
    // });
  }

  render(){
    return (
      <PoliticalSpectrumSlider value={this.state.value} color={this.state.color} max={this.max.toString(10)} min={this.min.toString(10)} handleChange={this.handleChange}/>
    )
  }
}

export default PoliticalSpectrumUIElement;