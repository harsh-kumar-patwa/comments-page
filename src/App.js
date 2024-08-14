import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Comments Page</h1>
        <CommentForm />
        <CommentList />
      </div>
    </Provider>
  );
}

export default App;