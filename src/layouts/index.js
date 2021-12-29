import React from 'react';
import { NavBar } from 'components/molecules/NavBar';
// import { Route, Routes } from 'react-router-dom';
import Home from 'pages/home';
import About from 'pages/about';
import Projects from 'pages/projects';
import Blog from 'pages/blog';
import Contact from 'pages/contact';
// import routes from 'routes';

// MOVE THIS TO CONTROLLER
// const routesList = routes.map(({
//   component: Component,
//   id,
//   url,
// }) => {
//   return (
//     <Route
//       id={id}
//       key={url}
//       path={url}
//       element={<Component />}
//     />
//   );
// });

const Layout = () => (
  <>
    <NavBar />
    {/* <Routes>*/}
    {/* {*/}
    {/*  routes.map(({*/}
    {/*    component: Component,*/}
    {/*    id,*/}
    {/*    title,*/}
    {/*    url,*/}
    {/*  }) => {*/}
    {/*    return (*/}
    {/*      <Route*/}
    {/*        id={id}*/}
    {/*        key={url}*/}
    {/*        path={url}*/}
    {/*        element={<Component title={title}/>}*/}
    {/*      />*/}
    {/*    );*/}
    {/*  })*/}
    {/* }*/}
    <Home />
    <About />
    <Projects />
    <Blog />
    <Contact />
    {/* </Routes>*/}
  </>
);

export default Layout;
