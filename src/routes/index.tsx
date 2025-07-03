import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Books from "../components/pages/getBooks";
import HomePage from "../components/pages/HomePage";
import AddBooks from "../components/pages/addBooks";
import GetBorrow from "../components/pages/getBorrow";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: HomePage
            },
            {
                // index: true,
                path: '/books',
                Component: Books
            },
            {
                path: '/addBooks',
                Component: AddBooks
            },
            {
                path: '/borrow',
                Component: GetBorrow
            }
        ]
    }
])

export default router;