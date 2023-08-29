import Header from "./components/Header";
import Translate from "./components/Translate";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom"
import { GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <>
      {/* <Router history={history}>
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="home"></Navigate>}
          ></Route>
          <Route exact path="home" element={<div><Header /><Outlet></Outlet></div> }></Route>
            <Route path="" element={<div className="absolute left-1/2 top-1/2">Hello</div>}></Route>
        </Routes>
      </Router> */}
    
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace={true}></Navigate>}></Route>
        <Route path="home" element={<div><Header></Header><Outlet></Outlet></div>}>
          <Route path="" element={<Translate/>}></Route>
        </Route>
        <Route path="*" element={<Navigate to="home" replace={false}></Navigate>}></Route>
      </Routes>
    </Router></>
  );
}

export default App;
