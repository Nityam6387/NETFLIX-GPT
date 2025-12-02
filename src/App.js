import { Provider } from "react-redux";
import Body from "./components/Body.js";
import appStore from "./utils/appStore.js";

function App() {

//     const appRouter = createBrowserRouter(
//         [
//         {
//             path: "/",
//             element: <Login />,
//         },

//         {
//             path: "/browse",
//             element: <Browse />,
//         },
//     ]
// )
 

  return ( 
    <Provider store={appStore}> 
       <Body />    
    </Provider>
  );
}

export default App;
