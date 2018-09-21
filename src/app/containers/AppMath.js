import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Math } from '../components/Math';
import { MainMath } from '../components/MainMath'

import { addNumber, subtractNumber} from '../actions/mathActions'

export class AppMath extends Component {
  
  render() {
    return (
        <div className="container">
        <MainMath
            addNumber = {() => this.props.addNumber(1)}
            subtractNumber = {() => this.props.subtractNumber(1)}
        />
        <br/>
        <Math math={ this.props.math } />
      </div>
    )
  }
  
}

const mapStateToProps = (state) => ({
    math: state.math
})

const mapDispatchToProps = (dispatch) => {
    return {
        addNumber: (number) => {
            dispatch(addNumber(number))
        },
        subtractNumber: (number) => {
            dispatch(subtractNumber(number))
        }
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMath)
