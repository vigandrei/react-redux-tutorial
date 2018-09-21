import React, { Component } from 'react'
import { connect } from 'react-redux'

import App from './AppUser';
import AppMath from '../containers/AppMath'

export class MainApp extends Component {
 
  render() {
    return (
      <div>
        <App />
       
        <AppMath />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    user: state.user,
    math: state.math
})

const mapDispatchToProps = (dispatch) =>{
    return {
        
            // setName: (name) => {
            //     dispatch(setName(name))
            // },
            // setAge: (age) => {
            //     dispatch(setAge(age))
            // },addNumber: (number) => {
            //     dispatch(addNumber(number))
            // },
            // subtractNumber: (number) => {
            //     dispatch(subtractNumber(number))
            // }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp)
