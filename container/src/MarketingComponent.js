import React from "react";
import { mount } from "marketing/MarketingApp";
import { useEffect, useRef } from "react";

const MarketingComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingComponent;
