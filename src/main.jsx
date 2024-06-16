import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import {
//    createBrowserRouter,
//    RouterProvider,
//} from "react-router-dom";
import { Towar } from './pages/towar_page.jsx';
import { Towary } from './pages/towary_page.jsx';
import { Webinary } from './pages/webinary_page.jsx';
import { Prelekcje } from './pages/prelekcje_page.jsx';
import { Wyklady } from './pages/wyklady_page.jsx';
import { Rozwoj } from './pages/rozwoj_page.jsx';
import { Kompetencji } from './pages/kompetencji_page.jsx';
import { Brak } from './pages/brak_page.jsx';
import { Naczasie} from './pages/naczasie_page.jsx';

/*import { Kompetencji } from './pages/kompetencji_page.jsx';*/

import { Layout } from './layout/layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



//const router = createBrowserRouter([
//    {
//        path: "/",
//        element: <App />,
//    },
//    {
//        path: "/towar",
//        element: <Layout><Towar /></Layout>,

//    },
//    {
//        path: "/towary",
//        element: <Layout><Towary /></Layout>
//    },
//]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                {/*<Route path='/' element={<App />}></Route>*/}
                <Route path='/towar' element={<Layout />}>
                    <Route index element={<Towar />} />
                </Route>
                <Route path='/towary' element={<Layout />}>
                    <Route index element={<Towary />} />
                </Route>
                <Route path='/webinary' element={<Layout />}>
                    <Route index element={<Webinary />} />
                </Route>
                <Route path='/prelekcje' element={<Layout />}>
                    <Route index element={<Prelekcje/>} />
                </Route>
                <Route path='/wyklady' element={<Layout />}>
                    <Route index element={<Wyklady />} />
                </Route>
                
                <Route path='/rozwoj' element={<Layout />}>
                    <Route index element={<Rozwoj />} />
                </Route>
                <Route path='/kompetencji' element={<Layout />}>
                    <Route index element={<Kompetencji />} />
                </Route>
                <Route path='/brak' element={<Layout />}>
                    <Route index element={<Brak />} />
                </Route>
                <Route path='/naczasie' element={<Layout />}>
                    <Route index element={<Naczasie />} />
                </Route>
            </Routes>
        </BrowserRouter >
    </React.StrictMode>,
)
