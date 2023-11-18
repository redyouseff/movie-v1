import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "./app.css"
import { useState } from 'react';
const Header=({search})=>{
  
    const doChange=(word)=>{
       search(word)

    }
    return(
        <Row>
        <div className='head' >
          <Container className='my-4 '>
         <Form >
          <div className=''>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Col sm="12" className='text-center'>
          <Form.Control onChange={(e)=>{doChange(e.target.value)}} type="text" placeholder="اسم الفيلم" />
          </Col>
         
         
        
          
        </Form.Group>
       
        </div>
      </Form>
      </Container>
      </div>
       </Row>
    )
}
export default Header;