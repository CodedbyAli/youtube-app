import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./components/Watch";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: '/watch',
        element: <Watch />
      }
    ]
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} >
          <Body />
        </RouterProvider>
      </Provider>
    </>
  );
}

export default App;
