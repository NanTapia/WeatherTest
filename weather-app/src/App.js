import React from "react";
import './App.css';
import AuthUserProvider from './providers/UserProvider'
import Routes from "./containers/Routes";

function App() {
  return (
      <AuthUserProvider>
          <Routes />
      </AuthUserProvider>
  );
}

export default App;
