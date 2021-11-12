import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Row, Col } from 'reactstrap';
const ListBook = ({books})=>{
return(
    <Row>
    <Col sm={8}>
        <Row >
            {books && books.map((item,index)=>{
                return(
                    <Col key={index} sm={3}>
                    <Card>
                    <Card.Img variant="top" src={item.avatar} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        {item.theloai}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">$ {item.price}</small>
                    </Card.Footer>
                  </Card>
                    </Col>
                );
            })}

        
        </Row>

      
      
    
    </Col>
    <Col sm={4}>
      <ListGroup>
        <ListGroup.Item variant="primary">The Loai</ListGroup.Item>
        <ListGroup.Item>Thieu Nhi</ListGroup.Item>
        <ListGroup.Item>Tam Ly</ListGroup.Item>
        <ListGroup.Item>Cong Nghe</ListGroup.Item>
        <ListGroup.Item>Khoa Hoc</ListGroup.Item>
      </ListGroup>
    </Col>
  </Row>
);
}

export default ListBook;