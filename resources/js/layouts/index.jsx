import React from "react";

function ClientLayout(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ClientLayout;