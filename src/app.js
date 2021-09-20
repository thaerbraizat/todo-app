import React from "react";
import ToDo from "./components/todo";
import SettingsContext from './context/handleState'

function App() {
  return (
    <SettingsContext>
      <ToDo />
    </SettingsContext>
  );
}

export default App;