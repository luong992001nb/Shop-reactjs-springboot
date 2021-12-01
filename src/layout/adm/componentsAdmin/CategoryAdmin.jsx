import { Link } from "react-router-dom";
const CategoryAdmin = ({category})=>{

return(
    <>
                <tr>
                    <Link to="addcategory" className="btn btn-primary btn-lg btn-block btn btn-success" role="button" aria-pressed="true">ADD CATEGORY</Link>
                </tr>
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name Category</th>
    </tr>
  </thead>
  <tbody>
  {category && category.map((item, index) => {
                            return (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>                                 
                                    <button type="button" class="btn btn-warning">
                                        <Link to={`${item.id}/edit`}>
                                        <i class="far fa-edit"></i> EDIT</Link></button>
                                </tr>
                            );
                        })}

  </tbody>
</table>

</>
);
}
export default CategoryAdmin;