import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link,useParams } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const Details=()=>{
    const param=useParams();
    const[movieD,setmovieD]=useState([])
    
    const Details= async()=>{
    
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=54f949a3d833ac2a7c12b74e5562bab5&language=ar`)
      
       setmovieD(res.data)
     
      
      
      }
     useEffect(()=>{
        Details();

     },[])

    return(
<>
<Row>
    <div className="d-flex mt-3">
        <Col sm="5" >
            
            <div className="d-flex  ">
            <Zoom>
            <img src={`https://image.tmdb.org/t/p/w500`+movieD.poster_path} style={{width:300, height:190, borderRadius:20}} alt="no photo" >
          
        </img>
        </Zoom>
        </div>
        </Col>
        <Col sm="7">
            <div className=" justify-content-center">

           
        <p style={{color:"white"}}>اسم الفيلم  : {movieD.original_title}</p>
        <p style={{color:"white"}}> تاريخ الفيلم : {movieD.original_title}</p>
        <p style={{color:"white"}}> عدد اتلمقيمين : {movieD.vote_count}</p>
        <p style={{color:"white"}}> تاريخ الفيلم : {movieD.release_date}</p>
        <p style={{color:"white"}}> التقيم : {movieD.vote_average}</p>
        </div>
        </Col>
        


       
      
           
        
        

         

    </div>
   

</Row>
<Row className="m-3">
        <Col sm="12">
            <p style={{color:"white"}}> قصه الفيلم :</p>
            <p>
            {movieD.tagline}
            </p>

        </Col>
    </Row>
    <Row className="m-3">
        <Col sm="12" className="d-flex justify-content-center m-3">
    <a href={movieD.homepage} >
    <Button  className="m-3"> مشاهده الفيلم </Button>
    </a>
       
       
        
        
          <Link to={"/"}>
               
          <Button className="m-3 "> عوده للصفحه الرئيسيه</Button>
               </Link>
            
          
   
           
           
         


        </Col>
    </Row>
</>
    )
}
export default Details;