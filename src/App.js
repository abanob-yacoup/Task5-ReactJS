 
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux'
import promiseMW from 'redux-promise'
import reducers from './reducers'
import Home from './containers/home'
import StudentDetails from './containers/student-list';
import NotFound from './components/not-found';
import Header from './components/header';
import AddStudent from './containers/add-student';
import { useState } from 'react';

const createStoreWithMW = applyMiddleware(promiseMW)(createStore);
console.log('applyMiddleWare: ', applyMiddleware)
console.log('promiseMw: ', promiseMW)
console.log('createStore: ', createStore)
const App = (props) => {
  console.log("App component:", props)
  let [isOpen, setIsOpen] = useState(0)
  const notifyModal = () => {
    console.log("notify", isOpen)
    setIsOpen(++isOpen);
  }
  return (
    <Provider store={createStoreWithMW(reducers)}>
      <BrowserRouter>
        <Header onToggle={notifyModal} />
        <AddStudent addClickState={isOpen} />
        <div className="container">
          <Switch>
            <Route path='/student/:id' component={StudentDetails} />
            <Route exact path="/" component={Home} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )

}

export default App;
