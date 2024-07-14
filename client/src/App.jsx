import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";


export default function App() {
  return <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route>
        <Route element={<PrivateRoute/>}>
          <Route path="/Profile" element={<Profile/>} />
        </Route>
    

      </Routes>
    </BrowserRouter>;
}
