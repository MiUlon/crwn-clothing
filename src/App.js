import Home from './routes/home/home.component';
import { Routes, Route, Outlet } from 'react-router-dom';

const App = () => {

  const Navigation = () => {
    return (
      <div>
        <div>
          <h1>I'm navigation bar</h1>
        </div>
        <Outlet />
      </div>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
}

export default App;
