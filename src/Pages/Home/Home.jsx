import React from "react";
import NavBar from "../../components/NavBar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import OptimalEfficiency from "./components/OptimalEfficiency";
import MachineLearning from "./components/MachineLearning";
import UseCases from "./components/UseCases";
import CodeToEarn from "./components/CodeToEarn";
import Faqs from "./components/Faqs";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Trusted />
      <OptimalEfficiency />
      <MachineLearning />
      <UseCases />
      <CodeToEarn />
      <Faqs />
    </main>
  );
}
