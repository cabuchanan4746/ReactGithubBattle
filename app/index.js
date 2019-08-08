import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'

//Define component:
class App extends React.Component {
	render() {
		return (
			<div>
				<Popular />
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