import { useGetBooksQuery } from "../../redux/api/baseApi"
import type IBook from "../../types"

export default function Books() {

    const {data, isLoading, isError} = useGetBooksQuery(undefined)

    console.log({data, isLoading, isError})
    if(isLoading){
        <h1>Loading......</h1>
    }

return (
    <div className="pt-20">

    <div className="mt-10">
    {data?.data?.map((book: IBook)=>
        <div key={book._id}>
       <h1>{book.title}</h1>
        </div>
    )}
    </div>
    </div>
)
}