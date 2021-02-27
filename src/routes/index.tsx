import React from 'react'
import {Redirect, Route as RouteComponent, Switch} from 'react-router'
import navRoutes from './navRoutes'

export { default as navRoutes } from './navRoutes'

export type Link = {
  label: string
  path: string
}

export type Route = Link & {
  component: React.ReactElement
}


const Routes = (): React.ReactElement => (
    <Switch>
        {navRoutes.map(route => <RouteComponent
            key={route.path}
            exact={route.path === '/'}
            path={route.path}
            component={route.component}
        />)}
        <Redirect to='/' />
    </Switch>
)

export default Routes
