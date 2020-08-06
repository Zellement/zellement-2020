import React from 'react'

import { FiToggleLeft, FiToggleRight } from 'react-icons/fi'

const ImageShowHide = class extends React.Component {

	state = { showOld : false }

	toggleImage = () => {
		this.setState({
	      showOld: !this.state.showOld
	    })
	}

	render() {

		const newImage = this.state.showOld ? 'opacity-0' : 'opacity-100';
		const toggleOnIcon = this.state.showOld ? 'hidden' : 'visible';
		const toggleOffIcon = this.state.showOld ? 'visible' : 'hidden';

		return (

			<div>

				<button className="absolute bottom-0 left-0 z-30 p-2 text-orange-100 transition bg-white bg-orange-600 cursor-pointer font-color-font hover:bg-orange-900 focus:outline-none" onClick={this.toggleImage} onKeyDown={this.toggleImage}>
					<span className="display-text">Toggle Designs <FiToggleRight className={"inline " + toggleOnIcon}/> <FiToggleLeft className={"inline " + toggleOffIcon} /></span>
				</button>

				<div className={"absolute-image-holder " + newImage}>

					{this.props.children}

				</div>

			</div>

		)
	}

}

export default ImageShowHide
