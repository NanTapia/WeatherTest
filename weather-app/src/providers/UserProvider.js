import React, { Component, createContext } from "react";
import { auth, generateUserDocument  } from "../firebase";

export const UserContext = createContext({ user: null });

class AuthUserProvider extends Component {
    state = {
        user: null
    };

    componentDidMount = async () => {
        await auth.onAuthStateChanged(async userAuth => {
            const user = await generateUserDocument(userAuth);
            this.setState({ user });
        });
    };

    render() {
        const { user } = this.state;

        return (
            <UserContext.Provider value={user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
export default AuthUserProvider;