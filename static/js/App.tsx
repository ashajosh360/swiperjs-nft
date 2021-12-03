import "./App.scss";
import "animate.css";
import { Provider } from "react-redux";
import store from "./renderer/redux/stores/store";

import Main from "./Main";
function App() {  
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
