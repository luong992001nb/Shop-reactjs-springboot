import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { Col } from 'reactstrap';

const TabForm = () => {


     
    const onHandleSubmit = ()=>{

    }

    return (
        <Form>
            <h1>Thông Tin Sách</h1>
            <Form.Group as={Row}>
                <Form.Label column sm="2">Tên Sách:</Form.Label>
                <Col sm="10">
                    <Form.Control  type="text" />
                </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row}>
                <Form.Label column sm="2">Thể Loại:</Form.Label>
                <Col sm="10">
                    <Form.Control  type="text" />
                </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row}>
                <Form.Label column sm="2">Giá Sách:</Form.Label>
                <Col sm="10">
                    <Form.Control  type="text" />
                </Col>
            </Form.Group>
            <br />
            <Form.Group as={Row}>
                <Form.Label  column sm="2">Ảnh Bìa:</Form.Label>
                <Col sm="10">
                <Form.Control type="file"  />
                </Col>
            </Form.Group>
            <br />
            <Button onClick={onHandleSubmit} variant="success">ADD</Button>{'  '}
            <Button variant="warning" disabled>EDIT</Button>
        </Form>
    );
}
export default TabForm;