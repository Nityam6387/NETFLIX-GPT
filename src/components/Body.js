import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";


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