import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../public/Login";
import Register from "../public/Register";
import PasswordRecovery from "../public/PasswordRecovery";

export default function PublicRouter () {

    return(<>
    <Routes>
        <Route path="/" element={ <Navigate to="/login" />} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/passwordrecovery" element= {<PasswordRecovery/>}/>
    </Routes>
    </>);
}