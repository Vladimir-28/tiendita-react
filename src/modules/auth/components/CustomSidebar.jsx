import { NavLink, useNavigate } from "react-router-dom";

export default function CustomSidebar({ setSession }) {
    const navigate = useNavigate();
    const closeSession = () => {
        sessionStorage.removeItem("token");
        setSession(false);
        navigate("/");
    }

    return (
        <div className="col-2 bg-body-tertiary shadow p-4">
            <div className="d-flex flex-column" style={{ height: "100%" }}>
                <h5 className="mb-4"> <i className="fs-3 bi bi-shop me-2"></i>Tiendita</h5>

                <NavLink to="/auth/home" className={({ isActive }) => `text-start btn mb-3 btn${isActive ? '' : "-outline"}-primary`}>
                    <i className="me-1 bi bi-house"></i>Inicio
                </NavLink>
                <NavLink to="/auth/products" className={({ isActive }) => `text-start btn mb-3 btn${isActive ? '' : "-outline"}-primary`}>
                    <i className="me-1 bi bi-bag"></i>Productos
                </NavLink>
                <NavLink to="/auth/brands" className={({ isActive }) => `text-start btn btn${isActive ? '' : "-outline"}-primary`}>
                    <i className="me-1 bi bi-bookmark"></i>Marcas
                </NavLink>
                <button onClick={() => closeSession()} className="btn btn-outline-danger mt-auto text-start">
                    <i className="me-1 bi bi-box-arrow-left"></i>Cerrar sesión
                </button>
            </div>
        </div>
    );
}