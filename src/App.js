import React from "react";
import "./App.css";

/* Page Imports */
import HomePage from "./pages/Home/HomePage";
import RegisterPage from "./pages/Register/RegisterPage";
import LoginPage from "./pages/Login/LoginPage";
import ServicePage from "./pages/Service/ServicePage";
import AddServicePage from "./pages/Service/AddServicePage";
import UpdateServiceList from "./pages/Service/UpdateServiceList";
import UpdateServicePage from "./pages/Service/UpdateServicePage";
import ReservationPage from "./pages/Reservation/ReservationPage";
// import ProfilePage from "./pages/Profile/ProfilePage";
import TransactionPage from "./pages/Transacation/TransactionPage";
import PageNotFound from "./components/PageNotFound";

/* for router */
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* for apollo client */
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Apollo Setup
const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/service" component={ServicePage} />
          <Route exact path="/addservice" component={AddServicePage} />
          <Route exact path="/editservice" component={UpdateServiceList} />
          <Route
            exact
            path="/editservice/:serviceid"
            component={UpdateServicePage}
          />
          {/* <Route exact path="/reservation" component={ReservationPage} /> */}
          <Route
            exact
            path="/reservation/:serviceid"
            component={ReservationPage}
          />
          {/* <Route exact path="/profile" component={ProfilePage} /> */}
          <Route exact path="/transaction" component={TransactionPage} />
          <Route component={PageNotFound}></Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
