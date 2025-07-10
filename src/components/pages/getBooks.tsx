import { useState } from "react";
import { useGetBooksQuery } from "../../redux/api/baseApi"
import BookTable from "../module/bookTable"

export default function Books() {

  const [page, setPage] = useState(1);
  const limit = 10;
  

  const { data, isLoading, isError, refetch } = useGetBooksQuery({ page, limit })
  console.log({ data })

  if (isLoading) {
    return <h1>Loading......</h1>
  }

  if (isError) {
    return <h1>Something went wrong!</h1>
  }

  
  // refetch();
   const totalPages = data?.meta?.totalPages || 1;

  return (
    <div className="">
      <div className="my-5">
        <BookTable
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          refetch={refetch} books={data?.data || []}

        />
      </div>
    </div>
  )
}
