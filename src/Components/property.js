import "./property.css";
import React from "react";
import { propertyList } from "./propertyList";


const Property = () => {
  return (
    <>
      {propertyList && propertyList.length > 0 &&
        propertyList.map((e, i) => (
          <div className="property">
            <div className="property-box">
              <div className="property-img">
                <img src={e.img} width={"100%"} height={"180rem"} alt="Image"/>
              </div>
              <div className="property-child-wrap">
                <div className="property-type">{e.type}</div>
                <div className="property-cost">{e.cost}</div>
                <div className="property-add">{e.add}</div>
                <div className="property-des">{e.des}</div>
                <button className="propertyButton">Submit</button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Property;
