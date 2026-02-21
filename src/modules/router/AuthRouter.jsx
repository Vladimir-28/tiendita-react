import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../auth/home/Home";
import Error404 from "../error/Error404";
import Error401 from "../error/Error401";
import CustomSidebar from "../auth/components/CustomSidebar";
import Products from "../auth/products/Products";

export default function AuthRouter() {

    return (
        <main className="row m-0">
            <CustomSidebar />
            <div className="col-10 p-4">
                <Routes>
                    <Route path="/" element={<Navigate to="/auth/home" />} />
                    <Route path="/auth/home" element={<Home />} />
                    <Route path="/auth/products" element={ <Products/>} />

                    {/* Fallback */}
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </div>
        </main>
    );
}