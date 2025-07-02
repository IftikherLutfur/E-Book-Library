import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Books from "../components/pages/getBooks";
import HomePage from "../components/pages/HomePage";

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
            }
        ]
    }
])

export default router;