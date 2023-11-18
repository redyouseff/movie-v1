import { Row } from "react-bootstrap";
import ITem from "./Item.js";
import Flip from 'react-reveal/Flip';

const ItemList=({data,page})=>{
    return(
        <Row> 
                  {
                    data.length>=1 ? (data.map((Item)=>{
                       
                        return(
                            
                           <ITem key={data.id} data={Item.poster_path} id={Item.id} ></ITem>
                        
                        )
                    })):null
                  }
                 
                  
        </Row>
          
     
    )
}
export default ItemList;