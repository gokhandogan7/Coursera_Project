import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';



function App(props) {


  return (
      <BrowserRouter>
      <Route render={(location)=>{
        return(
          <Main location={location}/>
        )
      }}>
       
        </Route>
      </BrowserRouter>
  );
}

export default App;
