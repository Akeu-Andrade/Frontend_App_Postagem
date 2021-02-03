import React from "react";
//import { isAuthenticated} from './auth';

import {BrowserRouter, Switch, Route} from "react-router-dom";

import Main from "./pages/main";
import Post from "./pages/post";
import createPost from "./pages/createPost";
import login from "./componentes/login.component";
import registrar from "./componentes/register.component";


// const PrivateRoute = ({component: Component, ... rest }) => (
//     <Route {...rest} render={props => (
//         isAuthenticated() ? (
//             <Component { ... props} />
//         ) : (
//             <Redirect to={{pathname: '/', state: { from: props.location} }}/>
//         )
//     )} />
// )npm 

const Routes = () => (  
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/posts/:id" component={Post} />
            <Route path="/login" component={login} />
            <Route path="/registrar" component={registrar} />
            {/* <PrivateRoute path="/login" component={() => <h2>Voce está logado!</h2>}/> */}
            <Route path="/createpost" component={createPost} />
        </Switch>
    </BrowserRouter>
);

export default Routes;