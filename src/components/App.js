import React from 'react';
import SideBar from './SideBar';
import {Route, Switch} from 'react-router-dom'
import ContentWrapper from './ContentWrapper';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound';
function App() {
  return (
    <>
      	<div id="wrapper">
          <SideBar />
          <Switch>
            <Route path="/" exact>
                <ContentWrapper />
            </Route>
            <Route path="/LastMovieInDb"  component={LastMovieInDb}/>
            <Route path="/GenresInDb"  component={GenresInDb}/>
            <Route path="/ContentRowMovies"  component={ContentRowMovies}/>
            <Route component={NotFound} />
          </Switch>
        </div>
    </>
  );
}

export default App;
