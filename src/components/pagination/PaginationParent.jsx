import React, { useState } from 'react'
import PaginationChild from "./PaginationChild"

const PaginationParent = () => {

    // created a dummy data to load on click of next page
    const dummyData = Array.from({ length : 100} , (_,index) => ({
        id : index +1,
        name: `Product ${index+1}`,
    }))

    const [currentPage, setCurrentPage] = useState(1);
    // load only 10 set of item on every click of next button
    const itemsPerPage = 10;
    // (current page is 1 * itemPerpage is 10 = 10)
    const indexOfLastItem = currentPage * itemsPerPage ; 
    // (10-10 = 0)
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // It shows only 10 product items on screen , on every click of page next
    const currentListOfItems =dummyData.slice(indexOfFirstItem, indexOfLastItem);

    console.log(currentListOfItems,indexOfFirstItem,indexOfLastItem);

const handlePageChange = (currentPage) => {
    console.log("current ", currentPage);
    setCurrentPage(currentPage)
}

// console.log("currentPage", currentPage);
  return (
    <div>
        <h1>Pagination</h1>
        <ul className='list-items'>

            {/* display 10 product data on screen */}
            {currentListOfItems.map((item) => (
                <li key={item.id}> {item.name}</li>
            ))}
        </ul>
        <PaginationChild
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / itemsPerPage)} 
        onPageChange={handlePageChange}
        />
      
    </div>
  )
}

export default PaginationParent
