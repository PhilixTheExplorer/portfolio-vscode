import { BrowserRouter as Router } from "react-router-dom";
import Titlebar from "./components/Titlebar";
import Statusbar from "./components/Statusbar";
import Activitybar from "./components/Activitybar";

function App() {
  return (
    <Router>
      <Titlebar />
      <Activitybar />
      <Statusbar />
    </Router>
  );
}

export default App;
