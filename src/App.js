import React from 'react';
import {BrowserRouter,
Switch,
Route
} from 'react-router-dom';
import Studentadd from './Student/Studentadd';

import Studentlist from './Student/Studentlist';
import Studentedit from './Student/Stuentedit';

class App extends React.Component{
  render(){
    return(<div>
<BrowserRouter>
<Switch>
  <Route exact path="/">
    <Studentlist/>
  </Route>
  <Route exact path="/student/add"><Studentadd/></Route>
  <Route exact path="/student/edit/:id"><Studentedit/></Route>
  </Switch>
  </BrowserRouter>
    </div>)
  }
}

export default App;