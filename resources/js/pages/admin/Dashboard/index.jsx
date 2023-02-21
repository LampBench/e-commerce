import React from "react";
import withPermission from "../../../routes/hocs/WithPermission";
function Dashboard() {
    return (
        <div className="container">
            <h1>Dashboard</h1>
        </div>
    );
}

export default withPermission("dashboard", "view")(Dashboard);