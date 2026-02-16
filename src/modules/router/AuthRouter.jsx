import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../auth/Home";
import Error404 from "../error/Error404";
import Error401 from "../error/Error401";

export default function AuthRouter () {

    return( <>
        <Routes>
            <Route path="/" element={ <Navigate to="/auth/home" />} />
            <Route path="/auth/home" element={ <Home/>}/>
        
        {/* Fallback */}
        <Route path="*" element={<Error404/>} />
        </Routes>
            </> );
}