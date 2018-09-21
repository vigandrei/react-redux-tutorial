import React from "react";
import { connect } from 'react-redux'

import { User } from './User';
import { Main } from './Main';

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Main changeUserName={() => this.props.setName('ana')}
                      changeUserAge={() => this.props.setAge(40)}     
                />
                
                <User user={this.props.user}  />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
            setName: (name) => {
                dispatch({
                    type: 'SET_NAME',
                    payload: name
                
                })
            },
            setAge: (age) => {
                dispatch({
                    type: 'SET_AGE',
                    payload: age
                
                })
            }
            }
        
        
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

