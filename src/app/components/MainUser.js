import React from "react";

export const MainUser = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    {/* <h1>The Main Page</h1> */}
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <div>
                        <button
                            className="btn btn-primary"
                            onClick={() => props.changeUserName('ana')}>Change the UserName
                        </button>
                    </div>
                    <br/>
                    <div>
                        <button
                            className="btn btn-primary"
                            onClick={() => props.changeUserAge('40')}>Change the UserAge
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}