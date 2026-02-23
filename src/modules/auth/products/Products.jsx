import ProductRow from "./components/ProductRow";

export default function Products() {
    return (
        <div className="p-4">
            <h2>Productos</h2>

            <section className="mt-4 d-flex align-items-center">
                <div className="input-group w-50 me-auto">
                    <span className="input-group-text"> <i className="bi bi-search"></i></span>
                    <input className="form-control" placeholder="Buscar..." type="search" name="" id="" />
                </div>
                <button className="btn btn-outline-success">
                    <i className="bi bi-plus-lg me-1"></i>
                    Agregar producto
                </button>
            </section>

            <section className="mt-4">
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Costo unitario</th>
                                <th scope="col">A la venta</th>
                                <th scope="col" className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ProductRow />
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}