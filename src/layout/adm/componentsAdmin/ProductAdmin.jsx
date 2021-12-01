import { Link } from "react-router-dom";
const ProductAdmin = ({ product,onRemove }) => {

    return (
        <>
            <div>
                <tr>
                    <Link to="addproduct" className="btn btn-primary btn-lg btn-block btn btn-success" role="button" aria-pressed="true">ADD PRODUCT</Link>
                </tr>

                <table className="table">
                    <thead className="bg-primary">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Product image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product && product.map((item, index) => {
                            return (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td><img src={item.avatar} alt="" className="img-thumbnail" style={{ height: '70px', width: '50' }} /></td>
                                    <td><button type="button" className="btn btn-danger" onClick={()=>{onRemove(item.id)}}><i class="far fa-trash-alt"></i> DELETE</button>
                                    <p>   </p>
                                    <button type="button" class="btn btn-warning">
                                        <Link to={`${item.id}/edit`}>
                                        <i class="far fa-edit"></i> EDIT</Link></button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </>
    );
}
export default ProductAdmin;