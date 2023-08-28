import Header from "./components/Header"
import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import history from "./components/history";

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route exact path='/home' element={<Header/>}></Route>
      </Routes>
    </Router>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Navigate to="home" replace={true}></Navigate>}></Route>
    //     <Route path="home" element={<div><Header></Header><Outlet></Outlet></div>}>
    //       <Route path="" element={<div className="absolute left-1/2 top-1/2">Hello</div>}></Route>
    //     </Route>
    //     <Route path="*" element={<Navigate to="home" replace={false}></Navigate>}></Route>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
