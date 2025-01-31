import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import ImageGallery from './components/ImageGallery/ImageGallery.jsx'
import Quote from './components/QuoteGenerator/Quote.jsx'
import Temp from './components/TempConverter/Temp.jsx'
import Todo from './components/ToDoApp/Todo.jsx'
import Home from './components/Home/Home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />} >
      <Route path='/' element={<Home />}/>
      <Route path='/gallery' element={<ImageGallery/>}/>
      <Route path='/quote' element={<Quote/>}/>
      <Route path='/temperature' element={<Temp/>}/>
      <Route path='/todo' element={<Todo/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
