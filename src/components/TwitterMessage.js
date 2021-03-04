import React from "react"

class TwitterMessage extends React.Component {
	constructor(props) {
		super()
		this.state = {
			userInput: "",
			counter: props.maxChars
		}
	}
	handleChange = (e) => {
		this.setState({
			userInput: e.target.value,
			counter: this.state.counter - e.target.value.length
		})
	}
	render() {
		return (
			<div>
				<strong>Your message:</strong>
				<input
					type="text"
					onChange={this.handleChange}
					value={this.state.userInput}
					name="message"
					id="message"
				/>
				<p> the remaining characters {this.state.counter}</p>
			</div>
		)
	}
}

export default TwitterMessage