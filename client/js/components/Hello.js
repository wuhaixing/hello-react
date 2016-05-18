import React from 'react'

class Hello extends React.Component {
	render() {
		const { name } = this.props
		return <div className="hello">Hello {name}</div>
	}
}

export default Hello