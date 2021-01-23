import React from "react";
import { Provider } from 'react-redux'
import store from "./redux/store";
import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from "./components/IceCreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import JuiceContainer from "./components/JuiceContainer";


function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <CakeContainer />
          <HooksCakeContainer />
          <IceCreamContainer />
          <JuiceContainer />
        </div>
      </Provider>
  );
}

export default App;
