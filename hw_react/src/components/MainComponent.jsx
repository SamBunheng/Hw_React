import React from "react";
import { ProductCardComponent } from "./ProductCard";
import { PlanCardComponent } from "./PlanCardComponent";

const MainComponent = () => {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex justify-center gap-20 ">
        <ProductCardComponent></ProductCardComponent>
        <ProductCardComponent></ProductCardComponent>
        <ProductCardComponent></ProductCardComponent>
        <ProductCardComponent></ProductCardComponent>{" "}
      </section>
      <section className="flex justify-center gap-20">
      <PlanCardComponent></PlanCardComponent>
      <PlanCardComponent></PlanCardComponent>
      <PlanCardComponent></PlanCardComponent>
      <PlanCardComponent></PlanCardComponent>
      </section>
    </div>
  );
};

export default MainComponent;
