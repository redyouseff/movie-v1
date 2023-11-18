import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./app.css"
const ITem=({data,id})=>{
 

    return(
         
              
                    <Col sm="3">
                      <Link to={`/movie/${id}`}>
                    <Card style={{ width: '100%', height:'300px' }} className='my-2'>
      <Card.Img style={{ width: '100%', height:'100%' }} variant="top" src={`https://image.tmdb.org/t/p/w500`+data} />
     
    </Card>
    </Link>
                    </Col>
                        
                   
          
    )
}
export default ITem;
