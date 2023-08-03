import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { action, Trending } from "./urls";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

export default function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={Trending} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
    </div>
  );
}
