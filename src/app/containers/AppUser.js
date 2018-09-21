import React from "react";
import { connect } from 'react-redux'

import { User } from '../components/User';
import { MainUser } from '../components/MainUser';

import { setName, setAge } from "../actions/userActions";

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <MainUser changeUserName={() => this.props.setName('ana')}
                      changeUserAge={() => this.props.setAge(40)}     
                />
                <br/>
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
                    dispatch(setName(name))
                },
                setAge: (age) => {
                    dispatch(setAge(age))
                }
            }
        
        
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

