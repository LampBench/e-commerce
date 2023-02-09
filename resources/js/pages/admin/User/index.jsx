import React from "react";
import withPermission from "../../../routes/hocs/WithPermission";
function User() {
    return (
        <div className="container">
            <h1>User List</h1>
        </div>
    );
}

export default withPermission("users", "view")(User);