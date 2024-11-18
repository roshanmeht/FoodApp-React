import React, { lazy, Suspense ,useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Body from './component/Body';
//import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import ResturantMenu from './component/ResturantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
//import UserAbout from './component/AboutClass';
import UserInfo from './common/GlobalData';
import ReduxStore from './common/ReduxStore';
import { Provider } from 'react-redux';
import Cart from './component/Cart';
//here we loaded about component in lazy mode
const Rk = lazy(() => import('./component/AboutClass'));


const Applayout = () => {
const [userName , setuserName]= useState('Rakesh')
    return (
        <Provider store={ReduxStore}>
        <UserInfo.Provider value={{user:'Roshan'}}>
        <div id='parent'>
            <Header />
            <Outlet />
            {/* <Body /> */}
        </div>
        </UserInfo.Provider>
        </Provider>
    )
}

let routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense fallback={<h1 className='my-[100px]'>Loading... please wait</h1>}><Rk /></Suspense>
                // element:<UserAbout />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/resturant/:res-id',
                element: <ResturantMenu />
            },
            {
                path:'/cart',
                element:<Cart/>
            }

        ]

    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routerConfig} />);