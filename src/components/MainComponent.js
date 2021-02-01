import React, { useState } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Footer from "./FooterComponent";
import ContactComponent from "./ContactComponent";
import { Switch, Route, Redirect} from "react-router-dom";
import { useSelector } from "react-redux";

function Main() {
  const { dishes, promotions, leaders, comments } = useSelector(
    (state) => state
  );

  const HomePage = () => {
    return (
      <Home
        dish={dishes.filter((dish) => dish.featured)}
        promotion={promotions.filter((promotion) => promotion.featured)}
        leader={leaders.filter((leader) => leader.featured)}
      />
    );
  };

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        selectedDish={
          dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        dishId={match?.params?.dishId}
      />
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/aboutus" component={() => <About leaders={leaders} />} />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contactus" component={ContactComponent} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
