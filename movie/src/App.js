import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Header from './componant/Header.js';
import Item from './componant/Item.js';
import "./componant/app.css"
import axios from "axios"
import ItemList from './componant/itemList.js';
import { useEffect, useState } from 'react';
import PaginationComponant from './componant/pagination.js';
import {BrowserRouter,Routes,Route, Router} from"react-router-dom"
import Details from './componant/details.js';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';


function App() {
  const [movie,setmovie]=useState([])
  const [pageCount,setpageCount]=useState()
  const getData= async()=>{
    
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=54f949a3d833ac2a7c12b74e5562bab5&&language=ar")
    setmovie(res.data.results)
    setpageCount(res.data.total_pages)
  
  
  }
  const getpage= async(page)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=54f949a3d833ac2a7c12b74e5562bab5&&language=ar&&page=${page}`)
    setmovie(res.data.results)
   
    

  }
 
  

  useEffect(()=>{
    getData();

   
    
  },[])
  const search= async(word)=>{
    if(word===""){
      getData();
    }
    else{
     
        const arr= await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=54f949a3d833ac2a7c12b74e5562bab5&language=ar`)
        setmovie(arr.data.results);
        console.log(movie)
        setpageCount(arr.data.total_pages)
     
     }

  }


 return(
  <div>
      <Header  search={search}></Header>
      <Container className='my-3'>
        <BrowserRouter>
       <Routes>
      <Route path='/' element={       <Zoom> <ItemList data={movie} ></ItemList>    </Zoom> }></Route>
       <Route path='/movie/:id'  element={<Details></Details>}></Route>
       </Routes>
        </BrowserRouter>
     
      </Container>
      <Container >
      <PaginationComponant getpage={getpage} pageCount={pageCount}></PaginationComponant>
      </Container>
      

  </div>

 )
  ;
}

export default App;
