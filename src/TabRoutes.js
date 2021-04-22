import React from 'react'
import {
    HashRouter,
    Switch,
    Route,
  } from "react-router-dom";

const Form1Page = React.lazy(() => import("./Screen1") );
const Form2Page = React.lazy(() => import("./Screen2"));
// const EditUser = React.lazy(()=> import("../components/EditUser"));
 const List = React.lazy(() => import("./list"));

const TabRoutes = () => {
    return (
        <HashRouter>
                  <React.Suspense fallback={<div>Loading...</div>}>
                          <Switch>
                                <Route
                                    exact
                                    path="/"
                                    name="Form1 Page"
                                    render={(props) => <Form1Page {...props} />}
                                />
                                  <Route
                                    exact={true}
                                    path="/form2"
                                    name="Form 2 page"
                                    render={(props) => <Form2Page {...props} />}
                                />
                                {/* <Route
                                   exact={true}
                                    path="/edituser"
                                    name="Edit User"
                                    render={(props) => <EditUser {...props}/>}
                                /> */}
                                <Route
                                   exact={true}
                                    path="/list"
                                    name="List"
                                    render={(props) => <List {...props}/>}
                                />
                            </Switch>
                   </React.Suspense>
             </HashRouter>
    )
}

export default TabRoutes;
