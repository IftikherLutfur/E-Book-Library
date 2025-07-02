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
    <div className="pt-20">
      <div className="mt-10">
        <BookTable books={data?.data || []} 
          onEdit={(book) => console.log("Edit", book)}
          onDelete={(book) => console.log("Delete", book)}
          onBorrow={(book) => console.log("Borrow", book)}
        />
      </div>
    </div>
  )
}
