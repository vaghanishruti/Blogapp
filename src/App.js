import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Protect from "./components/Protect";
import Adminprotected from "./components/Adminprotected";
import Home from "./usercomponents/Home";
import User from "./usercomponents/User";
import Userlogin from "./usercomponents/Userlogin";
import Admin from "./admincomponents/Admin";
import Adminlogin from "./admincomponents/Adminlogin";
import AdminDeshboard from "./admincomponents/Admindeshboard";
import Categories from "./admincomponents/Categories";
import Footer from "./usercomponents/Footer";
import Ourblog from "./usercomponents/Ourblog";
import Alluserblog from "./usercomponents/Alluserblog";
import SingleBlog from "./usercomponents/SingleBlog";

function App() {
  return (
    <Router>
      <Home />
      <Switch>
        <Route exact path="/">
          <Alluserblog />
        </Route>
        <Route exact path="/blog/:id">
          <SingleBlog />
        </Route>
        <Route exact path="/user">
          <User />
        </Route>
        <Route exact path="/user/login">
          <Userlogin />
        </Route>

        <Route path="/user/blog">
          <Protect>
            <Ourblog />
          </Protect>
        </Route>

        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/admin/login">
          <Adminlogin />
        </Route>
        <Route path="/admin/categories">
          <Categories />
        </Route>
        <Route path="/admin/deshboard">
          <Adminprotected>
            <AdminDeshboard />
          </Adminprotected>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
