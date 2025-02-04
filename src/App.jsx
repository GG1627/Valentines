import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import SheSaidYesScreen from "./components/SheSaidYesScreen";
// import SheSaidYesScreen from "./components/SheSaidYesScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/she-said-yes" element={<SheSaidYesScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
