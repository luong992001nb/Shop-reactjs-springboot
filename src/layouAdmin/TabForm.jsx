import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { Col } from 'reactstrap';
import { creat } from '../api/bookAPI';
import {useForm} from 'reacr-hook-from'
const TabForm = () => {

    const onHandleAvatar = (e)=>{
        const file = e.target.files[0];
        anh || (file.preview = URL.createObjectURL(file))
        setAnh(file);
    }
     
    const onHandleSubmit = ()=>{
    setBook({name: ten,theloai,anh.preview,giasach});
    console.log(book);
    creat(book).then(()=>{
     claerFrom();
    });
    }

    return (
        <Form>
            <h1>Thông Tin Sách</h1>
            <Form.Group as={Row}>
                <Form.Label column sm="2">Tên Sách:</Form.Label>
                <Col sm="10">
                    <Form.Control value={ten} onChange={e => setName(e.target.value)} type="text" />
                </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row}>
                <Form.Label column sm="2">Thể Loại:</Form.Label>
                <Col sm="10">
                    <Form.Control value={theloai} onChange={e => setTheloai(e.target.value)} type="text" />
                </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row}>
                <Form.Label column sm="2">Giá Sách:</Form.Label>
                <Col sm="10">
                    <Form.Control value={giasach} onChange={e => setGia(e.target.value)} type="text" />
                </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row}>
                <Form.Label value={anh} column sm="2">Ảnh Bìa:</Form.Label>
                <Col sm="10">
                <Form.Control type="file" onChange={onHandleAvatar} />
                </Col>
            </Form.Group>
            <br />
            <Button onClick={onHandleSubmit} variant="success">ADD</Button>{'  '}
            <Button variant="warning" disabled>EDIT</Button>
        </Form>
    );
}
export default TabForm;