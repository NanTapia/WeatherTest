import React from "react";
import './App.css';
import AuthUserProvider from './providers/UserProvider'
import Application from "./containers/Application";

function App() {
  return (
      <AuthUserProvider>
          <Application />
      </AuthUserProvider>
  );
}

export default App;
