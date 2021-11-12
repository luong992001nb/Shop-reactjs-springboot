import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
const LoadBook = ({ books,onRemove}) => {
    return (
        <tbody>
            {books && books.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.theloai}</td>
                        <td>{item.price}</td>
                        <td><Image src={item.avatar} rounded /></td>

                        <td className="text-center">
                            <Button onClick={()=>onRemove(item.id)}  variant="danger">DELETE</Button>
                            <Button variant="warning">EDIT</Button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
};
export default LoadBook