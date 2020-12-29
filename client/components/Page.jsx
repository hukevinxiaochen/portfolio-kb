import React from "react";
import { Edit3, ArrowRight } from "react-feather";

export const EditablePage = (title) => (
  <>
    <div id="pulltab">
      <Edit3 id="edit" />
    </div>
    <div id="slider" className="swipe">
      <div className="swipe-wrap">
        <div id="material">
          <header>
            <h1>{title}</h1>
          </header>
        </div>
        <div id="editable">
          <p>Editable</p>
        </div>
      </div>
    </div>
  </>
);
