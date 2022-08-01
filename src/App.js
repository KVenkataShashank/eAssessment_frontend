import DashboardNavbar from "./components/navigation/navbars/DashboardNavbar";
import Footer from "./components/navigation/footers/Footer";
import { Routes, Route } from "react-router-dom";
import DashboardRouter from "./components/routers/DashboardRouter";
import "./components/dashboards/questions/styles/bulma-switch.css"
import "./components/dashboards/questions/styles/bulma-checkradio.css"
import "./components/dashboards/questions/styles/style.css"

function App() {
  return (
    <div>
      <DashboardNavbar/>
      <Routes>
        <Route path="/dashboard/*" element={<DashboardRouter/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
