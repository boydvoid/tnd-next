import React, { useState, useEffect } from "react";
import PBtn from "../Components/PBtn";
import Input from "../Components/Input";
import IconNav from "../Components/IconNav";
import NavNext from "../Components/NavNext";
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
