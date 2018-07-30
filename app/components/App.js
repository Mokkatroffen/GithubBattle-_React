const React = require('react');
const ReactRouter = require('react-router-dom');
const Popular = require('./Popular');
const Nav = require('./Nav');
const Battle = require('./Battle');
const Home = require('./Home');
const Results = require('./Results');

const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

class App extends React.Component{
    render(){
        return(
            <Router>
            <div className='container'>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/battle' component={Battle} />
                    <Route path='/battle/results' component={Results}/>
                    <Route path='/popular' component={Popular} />
                    <Route render={function () {
                        return <p>Not Found</p>
                    }} />
                </Switch>

            </div>
            </Router>
        )
    }
}

module.exports = App;