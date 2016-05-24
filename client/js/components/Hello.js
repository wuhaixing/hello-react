import React from 'react'
import moment from 'moment'

class Hello extends React.Component {
	render() {
		const {date} = this.props;
		return <div className="hello">
				<p>
			        Hello, <input type="text" placeholder="Your name here" />!
			    </p>
			    <p>
			        {moment(date).format('YYYY年MM月DD日 HH:mm:ss')}
			    </p>
			    <a href='http://dajiaoshou.com'>Hello!</a>
			   </div>
	}
}

export default Hello