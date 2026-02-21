export default function CustomSidebar() {
    return (
        <div className="col-2 bg-body-tertiary shadow p-4">
            <div className="d-flex flex-column" style={{ height: "100%" }}>
                <h5 className="mb-4"> <i className="fs-3 bi bi-shop me-2"></i>Tiendita</h5>
                <button className="btn btn-outline-primary mb-3 text-start"><i className="me-1 bi bi-house"></i>Inicio</button>
                <button className="btn btn-outline-primary mb-3 text-start"><i className="me-1 bi bi-bag"></i>Productos</button>
                <button className="btn btn-outline-primary mb-3 text-start"><i className="me-1 bi bi-bookmark"></i>Marcas</button>
                <button className="btn btn-outline-danger mt-auto text-start"><i className="me-1 bi bi-box-arrow-left"></i>Cerrar sesión</button>
            </div>
        </div>
    );
}