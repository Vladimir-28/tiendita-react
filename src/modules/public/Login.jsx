import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({setSession}){
    const navigate = useNavigate();

    const changeSession = () => {
        sessionStorage.setItem("token", "test.token.tiendita");
        setSession(true);
        navigate("/auth/home");
    }

    useEffect(() => {
        if(!!sessionStorage.getItem("token")){
            navigate("/auth/home")
        }
    }, [])

    return( <main className="d-flex align-items-center justify-content-center">
        <div className="card border-0 rounded4 shadow" style={{width: 400}}>
            <div className="card-body">
                <p className="fw-bold">Inicio de sesión</p>
                <form action="" className="mt-4 row g-3">
                    <div className="col-12">
                        <label htmlFor="">Usuario o correo electrónico</label>
                        <input type="text" name="" id="" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="">Contraseña</label>
                        <input type="password" name="" id="" className="form-control" />
                    </div>
                    <div className="col-12 text-center">
                        <button onClick={() => changeSession()} className="btn btn-primary col-12">Iniciar sesión</button>
                        <p className="my-3">Ó</p>
                        <Link className="btn btn-outline-primary col-12" to="/register">Registrarme</Link>
                        <p className="mb-0 mt-3">
                            <Link to="/recovery"> ¿Olvidaste tu Contraseña?</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </main> );
}