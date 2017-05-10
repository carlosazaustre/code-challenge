import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import request from './request';
import { ARTICLES_QUERY } from './queries';

import Header from './commons/Header';
import Footer from './commons/Footer';
import ArticleList from './articles/ArticleList';
import ArticleDetail from './articles/ArticleDetail';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route exact path="/" render={() => <ArticleList articles={this.state.articles} />} />
            <Route path="/:id" component={ArticleDetail} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
