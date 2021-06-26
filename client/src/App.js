import './css/App.css';
import './helper/responsive';
import Nav from './helper/nav';
import PostForm from "./postForm";
import AnimatedCursor from "react-animated-cursor"
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import login from "./auth/login.js";
import signup from "./auth/signup.js";
// import Cart from "./components/Cart.jsx";
import contactus from "./contact";
import Home from "./home.jsx";
import notfound from "./helper/notfound.js";
import sketch from "./sketch";
// import Addproduct from "./components/products/Addproduct.jsx";
// import Editproduct from "./components/products/editProduct";
import dashboardA from "./admin/Dashboard";
import about from "./About";
import TopMenu from "./helper/nav";
import submitted from "./submitted";
import addByAdmin from "./auth/addByAdmin";
import Footer from "./helper/footer"
import dashboardB from "./users/userDashboard";
import Payment from "./services/payment";

// import Checkout from "./components/checkout/Checkout.js";
 function App() {
    function forceUpdateHandler(){
        window.location.reload(false);
          }
          

     return (
        <>

            {/*<PostForm />*/}
     {/*<Nav />*/}






            <Router>
                <div>

                <AnimatedCursor  
                    innerSize={10}
                    outerSize={10}
                    color='193, 11, 111'
                    outerAlpha={0.2}
                    innerScale={0.7}
                    outerScale={5}/>

                    <ToastContainer />
                    <TopMenu />
                    <Switch>
                        {/*<Route*/}
                        {/*    path="/products/product_details/:id"*/}
                        {/*    component={ProductPage}*/}
                        {/*></Route>*/}
                        {/*<Route path="/cart/:id?" component={Cart}></Route>*/}
                        {/*<Route*/}
                        {/*    path="/manageProducts/Addproduct"*/}
                        {/*    component={Addproduct}*/}
                        {/*></Route>*/}
                        {/*<Route*/}
                        {/*    path="/manageProducts/Editproduct/:id"*/}
                        {/*    component={Editproduct}*/}
                        {/*></Route>*/}

                        <Route path="/dashboardA" component={dashboardA}></Route>
                        <Route path="/dashboardB" component={dashboardB}></Route>

                        <Route path="/payment" component={Payment}></Route>

                        {/*<Route path="/checkout" component={Checkout}></Route>*/}

                        {/*<Route path="/products" component={products}></Route>*/}

                        <Route path="/contact-us" component={contactus} 
                        // onClick={forceUpdateHandler}
                        />

                        <Route path="/submitted" component={submitted} 
                        // onClick={forceUpdateHandler}
                        />
                        <Route path="/notfound" component={notfound}/>
                        <Route path="/login" component={login} 
                        // onClick={forceUpdateHandler}
                        />
                        <Route path="/signup" component={signup}/>
                        <Route path="/sketch" component={sketch}/>
                        <Route path="/about" component={about}/>

                       
                        <Route path="/addByAdmin" component={addByAdmin}/>
                        <Route path="/" exact component={Home}/>
                        <Redirect to="/notfound"/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>

        </>
  )
}
export default App;
