import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
// import App from './App.jsx'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contect from './Components/Contect/Contect.jsx';
import Mobile from './Components/Mobile/Mobile.jsx';
import Laptop from './Components/Laptop/Laptop.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';
import UsersDitels from './Components/UsersDitels/UsersDitels.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostesDitels from './Components/PostsDitels/PostesDitels.jsx';

const UserData=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index:true, Component:Home},
      {path:"about",Component:About},
      {path:"contect",Component:Contect},
      {path:"mobile",Component:Mobile},
      {path:"laptop", Component:Laptop},
      {
        path:'users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
      },
      {
        path:"users2",
        element:<Suspense>
          <Users2 UserData={UserData}></Users2>
        </Suspense>
      },
      {
        path:"user/:userid",
        loader:({params})=>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        Component:UsersDitels
      },
      {
        path:"posts",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        Component:Posts
      },
      {
        path:"posts/:postsid",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsid}`),
        Component:PostesDitels
      },
    ]
  },
   {
        path:"*",
        element:<h3>Not Found: 404 Status</h3>
      }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
