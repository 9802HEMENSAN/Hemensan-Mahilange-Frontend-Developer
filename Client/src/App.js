 
import LandingPage  from "./pages/LandingPage";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
export default App;