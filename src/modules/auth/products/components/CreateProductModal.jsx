export default function CreateProductModal() {

    return (
        <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="createProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border-0 rounded-4">
                    <div className="modal-body">
                        <h4>Registrar producto</h4>
                        <hr />
                        <form action="" className="row g-3">
                            <div className="col-12">
                                <label htmlFor=""> <small>Nombre del producto</small> </label>
                                <input type="text" name="" id="" className="form-control" />
                            </div>
                            <div className="col-8">
                                <label htmlFor=""> <small>Marca</small> </label>
                                <input type="text" name="" id="" className="form-control" />
                            </div>
                            <div className="col-4">
                                <label htmlFor=""> <small>C. Unitario</small> </label>
                                <input type="number" name="" id="" className="form-control" />
                            </div>
                        </form>
                            <div className="text-end mt-3">
                                <button className="btn btn-secondary me-2" data-bs-dismiss="modal"> <i className="bi bi-ban me-1"></i> Cancelar</button>
                                <button className="btn btn-success"> <i className="bi bi-save m-1"></i> Guardar</button>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}