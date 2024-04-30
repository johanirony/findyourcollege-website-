import About from "./pages/About"
import Btech from "./pages/Btech"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import { RouterProvider, createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom"
import Medical from "./pages/Medical"
import LLB from "./pages/LLB"
import MBA from "./pages/MBA"


import Page from "./components/Page"
import BvpBtech from "./pages/BvpBtech"
import AissmsBtech from "./pages/AissmsBtech"
import DyBtech from "./pages/DyBtech"
import JspmBtech from "./pages/JspmBtech"
import KjBtech from "./pages/KjBtech"
import ModernBtech from "./pages/ModernBtech"
import Pccoe from "./pages/Pccoe"
import Pesmcoe from "./pages/Pesmcoe"
import Pvg from "./pages/Pvg"



function App() {
 
  const router = createBrowserRouter(
    [
      {path:"/", element:<Home/>},
      {path:"/contact", element:<Contact/>},
      {path:"/btech", element:<Btech/>},
      {path:"/about", element:<About/>},
      {path:"/medical", element:<Medical/>},
      {path:"/llb", element:<LLB/>},
      {path:"/mba", element:<MBA/>},
      {path:"/btech/bvp", element:<BvpBtech/>},
      {path:"/btech/aissms", element:<AissmsBtech/>},
      {path:"/btech/dypatil", element:<DyBtech/>},
      {path:"/btech/jspm", element:<JspmBtech/>},
      {path:"/btech/kj", element:<KjBtech/>},
      {path:"/btech/modern", element:<ModernBtech/>},
      {path:"/btech/pccoe", element:<Pccoe/>},
      {path:"/btech/pes", element:<Pesmcoe/>},
      {path:"/btech/pvg", element:<Pvg/>},
      {path:"/btech/rv", element:<JspmBtech/>},
      {path:"/btech/rajiv", element:<JspmBtech/>},
      {path:"/btech/sinhagad", element:<JspmBtech/>},
      {path:"/btech/srm", element:<JspmBtech/>},
      {path:"/btech/viit", element:<JspmBtech/>},
      {path:"/btech/vit", element:<JspmBtech/>},
      {path:"/btech/mitadt", element:<JspmBtech/>},
      {path:"/btech/mitalandi", element:<JspmBtech/>},
      {path:"/btech/mitpune", element:<JspmBtech/>},
      {path:"/btech/mitwpu", element:<JspmBtech/>},
      {path:"/btech/symbiosis", element:<JspmBtech/>},
      // {path:"/bvp",element:<Page heading={pageData.heading}  />}
     
      

    ]
   

    )
  
 

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
