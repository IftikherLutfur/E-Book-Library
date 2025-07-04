import { useGetBooksQuery } from "../../redux/api/baseApi"
import BookTable from "../module/bookTable"

export default function Books() {
  const { data, isLoading, isError } = useGetBooksQuery(undefined)

  if (isLoading) {
    return <h1>Loading......</h1>
  }

  if (isError) {
    return <h1>Something went wrong!</h1>
  }

  return (
    <div className="">
      <div className="my-5">
        <BookTable books={data?.data || []} 
          
        />
      </div>
    </div>
  )
}
