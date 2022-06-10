import { Col, Container,Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const HomeSelection =()=>{
    let navigate = useNavigate()
    return(
        <>
        <Container>
        <Row className=" align-items-center">
        
          <Col className="viagogo" onClick={()=>{navigate("/viagogo")}}>
            <h2>VIAGOGO</h2>
          </Col>
        
          <Col className="tickettek"onClick={()=>{navigate("/tickettek")}}>
          <h2>TICKETEK</h2>
          </Col>
          
        
        </Row>
      </Container>

        </>
    )
}


export default HomeSelection