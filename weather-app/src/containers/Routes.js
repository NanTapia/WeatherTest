import React, { useContext } from "react";
import { Router } from "@reach/router";
import { UserContext } from "../providers/UserProvider";
import LogIn from "./LogIn";
import CreateAccount from "./CreateAccount";
import Dashboard from "./Dashboard";

function Routes() {
    const user = useContext(UserContext);

    return (
        user ?
            <Dashboard />
        :
            <Router>
                <LogIn path="/" />
                <CreateAccount path="/createAccount" />
            </Router>
    );
}

export default Routes;