import { Pagination, Row} from "react-bootstrap";
import ReactPaginate from 'react-paginate';
const PaginationComponant=({getpage,pageCount})=>{
        
    const handlePageClick=(e)=>{
       getpage(e.selected +1)

    }

   
    return(
      
        <ReactPaginate
        breakLabel="..."
        nextLabel=" التالى >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< السابق"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}  


      />
    

    )
}
export default PaginationComponant;