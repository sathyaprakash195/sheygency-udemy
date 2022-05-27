import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import MarketingSrategies from "./MarketingSrategies";
import WhyMarketing from "./WhyMarketing";

function Home() {
  return (
    <Layout>
      <div className="px-32 sm:px-2">
        <Intro />
        <MarketingSrategies />
        <WhyMarketing />
      </div>
    </Layout>
  );
}

export default Home;
