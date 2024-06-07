import "./App.css";
import BlogDetails from "./blog/BlogDetails";
import BlogLeftSide from "./blog/BlogLeftSide";
import BlogLeftSidebar from "./blog/BlogLeftSidebar";
import BlogList from "./blog/BlogList";
import BlogRightSide from "./blog/BlogRightSide";
import BlogRightSidebar from "./blog/BlogRightSidebar";
import DemoApp from "./demo-page/index";
import PageNotFound from "./Pages/404";
import ComingSoon from "./Pages/ComingSoon";
import Download from "./Pages/Download";
import FAQ from "./Pages/FAQ";
import ForgetPwd from "./Pages/ForgetPwd";
import Review from "./Pages/Review";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ThankYou from "./Pages/ThankYou";
import React,{ useEffect} from "react";
import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import { Route, Switch } from "react-router-dom";
import ColorPicker from "./Services/ColorPicker";

function App() {
  useEffect(() => {
    let timer= setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () =>{ clearTimeout(timer)}
  }, []);
 localStorage.setItem("color","color-1");
  return (
    <div className="App">
      <ColorPicker />
   
      <Switch
      >
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={DemoApp} />
        <Route
          path={`${process.env.PUBLIC_URL}/home-one`}
          component={HomeOne}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/home-two`}
          component={HomeTwo}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/home-three`}
          component={HomeThree}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/blog-details`}
          component={BlogDetails}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/blog-list`}
          component={BlogList}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/blog-left-sidebar`}
          component={BlogLeftSidebar}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/blog-right-sidebar`}
          component={BlogRightSidebar}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/blog-leftside`}
          component={BlogLeftSide}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/blog-rightside`}
          component={BlogRightSide}
        />
        <Route path={`${process.env.PUBLIC_URL}/sign-in`} component={SignIn} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/sign-up`}
          component={SignUp}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/forget-password`}
          component={ForgetPwd}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/thank-you`}
          component={ThankYou}
        />
        <Route path={`${process.env.PUBLIC_URL}/review`} component={Review} />
        <Route
          path={`${process.env.PUBLIC_URL}/404`}
          component={PageNotFound}
        />
        <Route path={`${process.env.PUBLIC_URL}/faq`} component={FAQ} />
        <Route
          path={`${process.env.PUBLIC_URL}/download`}
          component={Download}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/coming-soon`}
          component={ComingSoon}
        />
        <Route component={PageNotFound} />
      </Switch>
      
    </div>
  );
}

export default App;
