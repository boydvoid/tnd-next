import React, { Component } from "react";
import PBtn from "../Components/PBtn/PBtn";
import Input from "../Components/Input/Input";
import IconNav from "../Components/IconNav/IconNav";
import api from "../utils/api";
import Navlinks from "../Components/Navlinks/Navlinks";
import NavNext from "../Components/NavNext/NavNext";
// to class
// class Blogs extends Component{
//   render(){
//     return()
//   }
// }
const Freebies = props => {
  // useEffect(() => {
  //   //api call
  // }, []);
  // return (
  //   <div className="freebies">
  //     <NavNext />
  //     <IconNav />
  //     <div className="container">
  //       <div className="row">
  //         {props.loggedIn ? (
  //           <div className="col-xl-12">
  //             <PBtn onClick={props.logout}>Logout</PBtn>
  //           </div>
  //         ) : (
  //           <div className="col-xl-12">
  //             <form className="login-form" action="/api/login" method="POST">
  //               <Input
  //                 className="form-control"
  //                 type="text"
  //                 placeholder="Username"
  //                 name="username"
  //               />
  //               <Input
  //                 className="form-control"
  //                 type="password"
  //                 placeholder="Password"
  //                 name="password"
  //               />
  //               <PBtn type="submit">Get Freebies</PBtn>
  //             </form>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Freebies;
