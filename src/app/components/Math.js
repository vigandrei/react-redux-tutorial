import React from 'react'

export const Math = (props) => {
  return (
    <div>
            <div className="row">
                <div className="col-xs-12">
                </div>
            </div>
            <div className="row">
                <div className="col-xs-6">
                    <p>Count: {props.math.result}</p>
                    
                </div>
            </div>
        </div>
  )
}


