import { useParams } from "react-router-dom"
import DetailProduct from "../components/DetailProduct"




const Eachproduct = ()=>{
    const{id}=useParams()

    return (
        <div>
            <DetailProduct id={id} />
        </div>
    )
}

export default Eachproduct