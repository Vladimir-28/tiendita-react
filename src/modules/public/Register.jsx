import { Link } from "react-router-dom";

export default function Register() {
    return (<main className="d-flex align-items-center justify-content-center">
        <div className="card border-0 rounded4 shadow" style={{ width: 400 }}>
            <div className="card-body">
                <p className="fw-bold">Registro</p>
                <form action="" className="mt-4 row g-3">
                    <div className="col-12">
                        <label htmlFor="">Usuario</label>
                        <input type="text" name="" id="" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="">Correo electrónico</label>
                        <input type="text" name="" id="" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="">Contraseña</label>
                        <input type="password" name="" id="" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="">Confirmar contraseña</label>
                        <input type="password" name="" id="" className="form-control" />
                    </div>
                    <div className="col-12 text-center">
                        <button className="btn btn-primary col-12">Registrarme</button>
                        <p className="mb-0 mt-3">
                            <Link to="/login" >¿Ya tienes cuenta? Inicia sesión aquí</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </main>);
}