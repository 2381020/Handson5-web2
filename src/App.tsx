import RootLayout from "./layout/RootLayout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
 
function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ="/" element={<RootLayout/>}>
        <Route index element ={<Home/>} />
        <Route path="about" element ={<About/>} />
        <Route path="product" element ={<Product/>} />
        <Route path="contact" element ={<Contact/>} />
        <Route path="jobs" element ={<Jobs/>} />
      </Route>
    )
   );
  return (
    <RouterProvider router={router}/>
  )
}

export default App
