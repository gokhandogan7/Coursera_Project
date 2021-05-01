import { useState, useEffect } from "react"
import { MenuComponent } from './MenuComponent';

import { HeaderComponent } from "./HeaderComponent";
import { FooterComponent } from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomeComponent } from "./HomeComponent";
import { Contact } from "./ContactComponent";
import { DishdetailComponent } from "./DishdetailComponent"
import About from "./AboutUs";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from "react-redux"
import { fetchDishes, fetchComments, fetchPromos ,fetchLeaders} from "../redux/ActionCreators"



function Main({location}) {
  const { dishes, leaders, comments, promotions } = useSelector(state => state)
/*   const res= useSelector(state => state)
  console.log(res) */

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchDishes())
    dispatch(fetchComments())
    dispatch(fetchPromos())
    dispatch(fetchLeaders())

  }, [])





  const HomePage = (props) => {
   
    return (
      <HomeComponent
        dish={dishes.dishes.filter(dish => dish.featured)[0]}
        dishesLoading={dishes.isLoading}
        errMess={dishes.errorMessage}
        promotion={promotions.promotions.filter(promo => promo.featured)[0]}
        promosLoading={promotions.isLoading}
        promosErrMess={promotions.errorMessage}
        leader={leaders.leaders.filter(lead => lead.featured)[0]}
        leaderLoading={leaders.isLoading}
        leaderErrMess={leaders.errorMessage}
      />
    )
  }

  const DishWithId = (props) => {
    
    const {match}=props
    return (
      <DishdetailComponent
        dishesLoading={dishes.isLoading}
        dish={dishes.dishes.filter(dish => dish.id == parseInt(match.params.id, 10))[0]}
        errMess={dishes.errorMessage}
        comments={comments.comments.filter(comment => comment.dishId == parseInt(match.params.id, 10))}
        errMess={comments.errorMessage}
      />
    )
  }

  const AboutUs = () => {
    return (
      <About leaders={leaders.leaders}
      errMess={leaders.errorMessage} 
      leadersLoading={leaders.isLoading}
      
      />
    )
  }

  return (
    <div>
      <HeaderComponent />
      <TransitionGroup>
      <CSSTransition key={location.location.key} classNames="page" timeout={300}>
        <Switch  location={location.location}>

          <Route path="/home" component={HomePage} />

          <Route exact path="/menu" component={() => <MenuComponent dishes={dishes} />} />

          <Route path="/menu/:id" component={DishWithId} />

          <Route exact path="/contactus" component={Contact} />

          <Route exact path="/aboutus" component={AboutUs} />

          <Redirect to="/home" />
        </Switch>
   
        </CSSTransition>
        </TransitionGroup>
      <FooterComponent />
    </div>
  );
}

export default Main;
