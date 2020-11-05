import React from "react";
import { Scaffold } from "./components";
import { Edit3, ArrowRight } from "react-feather";

export const Page = () => (
  <Scaffold>
    <div id="pulltab">
      <Edit3 id="edit" />
    </div>
    <div id="slider" className="swipe">
      <div className="swipe-wrap">
        <div id="material">
          <header>
            <h1>kevin hu</h1>
          </header>
        </div>
        <div id="editable">
          <p>Editable</p>
        </div>
      </div>
    </div>
  </Scaffold>
);
