import React from "react";

export const MainMath = (props) => {
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
                            onClick={() => props.addNumber(1)}>Change the Result
                        </button>
                    </div>
                    <br/>
                    <div>
                        <button
                            className="btn btn-primary"
                            onClick={() => props.subtractNumber(1)}>Change the Result
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}