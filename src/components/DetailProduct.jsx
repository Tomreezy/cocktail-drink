import { useGetByAlcoholicQuery } from "../services"


const DetailProduct=({id})=>{
    const{data}=useGetByAlcoholicQuery(useGetByAlcoholicQuery)

    const eachDrink=data?.drinks.find((item)=> item.idDrink==id)
    console.log(eachDrink)
    return (
        <div className="m-10 grid sm:grid-cols-2">
            <div className=" rounded-md overflow-hidden">
                <img className="w-full object-cover " src={eachDrink.strDrinkThumb} />
            </div>
            <div className="text-center flex flex-col ">
                <p>{eachDrink.strDrink}</p>
                <p>$ {eachDrink.idDrink}</p>
            </div>
        </div>
    )
}

export default DetailProduct