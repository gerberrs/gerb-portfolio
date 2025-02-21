import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projectss from './pages/Projectss';
import BlogSelf from './pages/BlogSelf';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}> 
          <Route index element={<AboutMe />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Projectss" element={<Projectss />} />
          <Route path="BlogSelf" element={<BlogSelf />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
