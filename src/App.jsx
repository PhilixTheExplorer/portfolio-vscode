import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Titlebar from "./components/Titlebar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Titlebar />
      <Sidebar />
      <Footer />
    </Router>
  );
}

export default App;
