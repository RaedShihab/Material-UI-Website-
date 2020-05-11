import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './ui/header';
import theme from './ui/theme';

const Home = (props)=> {
  // const [state, setState] = React.useState(true);

  // React.useEffect(()=>console.log('useEffect', state), [state])
  return <div>
    {/* <button onClick={()=> setState(!state)}>switch</button> */}
    Home
    </div>
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/services" component={()=><div>services</div>}/>
          <Route exact path="/softwareServices" component={()=><div>softwareServices</div>}/>
          <Route exact path="/mobileDevelopment" component={()=><div>mobileDevelopment</div>}/>
          <Route exact path="/webDevelopment" component={()=><div>webDevelopment</div>}/>
          <Route exact path="/revelution" component={()=><div>revelution</div>}/>
          <Route exact path="/contact" component={()=><div>contact</div>}/>
          <Route exact path="/estimate" component={()=><div>estimate</div>}/>
          <Route exact path="/about" component={()=><div>about</div>}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
