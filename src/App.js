import React, { Component,Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom'
import Header from './module/header'
import Sidebar from './module/sideBar'
import ArticleList from './module/mainContent/components/articleList'
import store from './store';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Fragment>
           <Route path="/" exact component={ArticleList} ></Route>
          </Fragment>
        </BrowserRouter>
        <Sidebar />
      </Provider>
    );
  }
}

export default App;

  // <Route path="//:id" exact  component={} ></Route>
  // <Route path="/" exact  component={} ></Route>
