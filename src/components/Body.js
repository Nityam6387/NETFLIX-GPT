import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login.js";
import Browse from "./Browse.js";


const Body = () => {

    const appRouter = createBrowserRouter(
        [
        {
            path: "/",
            element: <Login />,
        },

        {
            path: "/browse",
            element: <Browse />,
        },
    ]
)

// const dispatch = useDispatch();
// const navigate = useNavigate();


    return(
      <RouterProvider router={appRouter} />
    )
}

export default Body;