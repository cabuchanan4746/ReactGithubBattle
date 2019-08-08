import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//Define component:
class App extends React.Component {
	render() {
		return (
			<div>
				Hello World!
			</div>
		)
	}
}


//Use component..under hood it creates a brand new React element.
ReactDOM.render(
	//React element
	//Where to render the element to
	<App/>,
	document.getElementById('app')

)