import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import Counter from '../components/demo/Counter'

const NavBar = () => (
    <>
        <Link to="/"><button type="button">Home</button></Link>
        <Link to="/hello"><button type="button">Hello</button></Link>
        <Link to="/counter"><button type="button">Counter</button></Link>
    </>
)

const Home = () => (<><NavBar /><h1>home</h1></>)
const Hello = () => (<><NavBar /><h1>Hello</h1></>)
const NoMatch = () => (<><NavBar /><h1>404</h1></>)

const DemoCounter = () => (
    <>
        <NavBar />
        <h1>Counter</h1>
        <Counter />
    </>
)

const Routes = (): React.ReactElement => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hello" component={Hello} />
            <Route path="/counter" component={DemoCounter} />
            <Route component={NoMatch} />
        </Switch>
    </div>
)

export default Routes
