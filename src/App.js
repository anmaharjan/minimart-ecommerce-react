import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./view/home/Home";
import Register from "./view/register/Register";
import Login from "./view/login/Login";
import Item from "./view/item/Item";
import Logout from "./component/logout/Logout";
import Profile from "./view/profile/Profile";
import Cart from "./view/cart/Cart";
import Checkout from "./view/checkout/Checkout";
import OrderHistory from "./view/order/OrderHistory";
import OrderDetail from "./view/order/OrderDetail";

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/register" element = {<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path = "/item/:id" element={<Item/>}/>
              {/*assuming id will be passed with token*/}
              <Route path = "/logout" element={<Logout/>}/>
              <Route path = "/cart" element={<Cart/>}/>
              <Route path = "/checkout" element={<Checkout/>}/>
              <Route path = "/order-history" element={<OrderHistory/>}/>
              <Route path = "/order/:id" element={<OrderDetail/>}/>
              <Route path = "/profile" element={<Profile/>}/>
              {/*<Route path = "/approve-sellers" element={<ApproveSeller/>}/>*/}
              {/*<Route path = "/approve-reviews" element={<ApproveReview/>}/>*/}


          </Routes>
      </BrowserRouter>
  );
}

export default App;
