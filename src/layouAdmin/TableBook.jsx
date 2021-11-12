import Table from 'react-bootstrap/Table'
import LoadBook from './LoadBook';
const TableBook = ({books,onRemove})=>{
    return(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>TÊN SÁCH</th>
            <th>THỂ LOẠI</th>
            <th>GIÁ SÁCH</th>
            <th>ẢNH</th>
            <th>TÙY CHỌN</th>
          </tr>
        </thead>
        <LoadBook books={books} onRemove={onRemove}/>
      </Table> 

    );
};
export default TableBook;