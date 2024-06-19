"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [homePageMsg, setHomePageMsg] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/", {
        headers: {},
      })
      .then((res) => {
        const data = res.data;
        setHomePageMsg(`${data.message} My name is ${data.name} :)`);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <h1>{homePageMsg}</h1>
    </div>
  );
}

export default HomePage;
