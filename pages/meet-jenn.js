import React, { useState, useEffect } from "react";
import PBtn from "../Components/PBtn/PBtn";
import Input from "../Components/Input/Input";
import IconNav from "../Components/IconNav/IconNav";
import Navlinks from "../Components/Navlinks/Navlinks";
import NavNext from "../Components/NavNext/NavNext";
import Layout from "../Components/Layout/Layout";
function Meet(props) {
  return (
    <Layout>
      <div className="meet">
        <NavNext />
        <IconNav />
      </div>
    </Layout>
  );
}

export default Meet;
