import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../auth/Home";

export default function AuthRouter () {

    return( <>
        <Routes>
            <Route path="/" element={ <Navigate to="/home" />} />
            <Route path="/home" element={ <Home/>}/>
        </Routes>
    </> );
}