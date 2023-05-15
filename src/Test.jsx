
import React ,{useEffect, useState} from "react";

const Test =()=>{

    const [value,setValue] = useState([0]);
    const clickHandler =() =>{
        fetch("https://dummyjson.com/products")
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            // const data1= JSON.stringify(data);
           const products = data.products;

        //    products.map((curr,idx)=>{
        //     console.log(curr.title);
        //    })
        
             setValue(products);
        })
    }
    useEffect(()=>{
        clickHandler();
    },[]);
    //  const orgvalue = JSON.stringify(value,null,2);
    return(
        <>
    {/* <select>
         {
            value.map((currn,idx)=>
            <option key={idx}>{currn.id}-{currn.title}</option>
            )
         }

    </select> */}
        {JSON.stringify(value)}
        <table border="1">
        <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Discount</td>
            <td>Rating</td>
            <td>BrandName</td>
            
        </tr>
        {
            value.map((item,idx)=>(
          <tr key={idx}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.discountPercentage}</td>
            <td>{item.rating}</td>
            <td>{item.brand}</td>        
         </tr>   
            ))
        }


        </table>
              <button onClick={clickHandler}>Get Data</button>
        
        </>
    );
}
export default Test;


// fetch("https://dummyjson.com/products")
// .then(response=>{return response.json();})
// .then(data=>{console.log(data);
//    const title = data.products[0].title;
//    console.log(title);

// });