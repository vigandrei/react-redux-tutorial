import React from "react";

export const User =(props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                </div>
            </div>
            <div className="row">
                <div className="col-xs-6">
                    <p>User Name: {props.user.name}</p>
                    <p>User Age: {props.user.age}</p>
                </div>
            </div>
        </div>
    );
}
