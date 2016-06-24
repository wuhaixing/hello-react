import React from 'react'
import moment from 'moment'

class Hello extends React.Component {
	constructor(props) {
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {value:''}
	}
	clickHandler(event) {
	  // console.log(event); // => nullified object.
	  // console.log(event.type); // => "click"
	  // var eventType = event.type; // => "click"

	  // setTimeout(function() {
	  //   console.log(event.type); // => null
	  //   console.log(eventType); // => "click"
	  // }, 0);

	  // this.setState({clickEvent: event}); // Won't work. this.state.clickEvent will only contain null values.
	  // this.setState({eventType: event.type});
	  if(this.props.onButtonClick) {
	  	if(this._nameInput) {
	  		this.props.onButtonClick(this._nameInput.value);
	  	} else {
	  		this.props.onButtonClick();
	  	}
	  }
	}
	handleChange(event) {
    	this.state.value = event.target.value;
    }
	render() {
		const {date} = this.props;
		return <div className="hello">
				<p>
			        Hello, <input type="text" placeholder="Your name here" 
			        			value={this.state.value}
			        			ref= {(ref) => this._nameInput = ref }
			        			onChange = {this.handleChange}/>!
			    </p>			    
			    <p>
			        {moment(date).format('YYYY年MM月DD日 HH:mm:ss')}
			    </p>
			    <button onClick={this.clickHandler}>Click!</button>
			   </div>
	}
}

export default Hello

