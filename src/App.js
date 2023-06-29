import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  const Test = () => {
    return (
      <div>
        <h1>I'm test</h1>
      </div>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='test' element={<Test />}/>
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
