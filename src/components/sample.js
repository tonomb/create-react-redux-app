//on the component you need yo connect 
import React from 'react'
import { connect } from 'react-redux'

function Component (props){
		return()
}

//which pieces of state to pass into the component
function mapStateToProps(state){
	return {
		movies: state.movies,
	}
}

export default connect(mapStateToProps, {actions})(Component)