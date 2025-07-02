import { createBrowserRouter } from "react-router";
import Root from "../Root";

const router = createBrowserRouter([
{    path:"/",
    Component: Root,
    children:[
        {
            index: true,
            path:'/',
            element:<h1 className="p-10">HELLO</h1>
        }
    ]
}
])

export default router;