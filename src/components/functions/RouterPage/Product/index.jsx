import Layout from "../Layout"
import {useParams} from "react-router-dom"
const Product= ()=>{
    const params = useParams();
    const array = [{id:1,name:"stolica", price:"100e"},{id:2,name:"Banana", price:"20e"},{id:3,name:"sto", price:"500e"},{id:4,name:"kauc", price:"1000e"}]
    return<Layout>
        {array[params.productId] ? 
        <div id={array[params.productId].id}>
            <p>{array[params.productId].name}</p>
            <p>{array[params.productId].price}</p>
        </div>
        : <p>Product not found</p>
        }
    </Layout>
}
export default Product