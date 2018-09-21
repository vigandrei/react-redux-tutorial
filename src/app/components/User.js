import React from "react";

export class User extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <p>User Name: {this.props.user.name}</p>
                        <p>User Age: {this.props.user.age}</p>
                    </div>
                </div>
            </div>
        );
    }
}
