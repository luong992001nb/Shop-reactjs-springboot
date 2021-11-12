import { Row, Col } from 'reactstrap';
import Image from 'react-bootstrap/Image'
const Head = () => {
    return (
        <div>
            <Row className="pt-5 pb-2">
                <Col sm="8"><h1>Wellcome Book Store</h1></Col>
                <Col sm="4">
                    <Image src="https://i.imgur.com/FocAwFS.png" />
                </Col>
            </Row>
        </div>
    )
}
export default Head;