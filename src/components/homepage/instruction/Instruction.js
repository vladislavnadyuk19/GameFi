import React from "react";
import InstructionItem from "./InstructionItem";
import { Link } from "react-router-dom";

import "./instruction.css";

function Instruction() {
  return (
    <section className="instruction">
      <div className="container-s">
        <div className="instruction__title">HOW TO JOIN</div>
        <ul className="instruction__list">
          <InstructionItem icon={"instruction-gf"} title={"Get $GAFI"}>
            Get $GAFI on <Link to={"#"}>KuCoin</Link> ,{" "}
            <Link to={"#"}>Gate.io</Link> , or <Link to={"#"}>PancakeSwap</Link>{" "}
            to participate in IDOs on GameFi.org.
          </InstructionItem>
          <InstructionItem icon={"instruction-stake"} title={"Stake $GAFI"}>
            Access <Link to={"#"}> Gamefi.org/Staking </Link> to stake $GAFI.
            Refer to staking ranks: <Link to={"#"}>t.co/NTWmR9FdRc</Link>
          </InstructionItem>
          <InstructionItem icon={"instruction-apply"} title={"Get $GAFI"}>
            Get $GAFI on KuCoin, Gate.io, or PancakeSwap to participate in IDOs
            on GameFi.org.
          </InstructionItem>
          <InstructionItem icon={"instruction-check"} title={"Get $GAFI"}>
            Get $GAFI on KuCoin, Gate.io, or PancakeSwap to participate in IDOs
            on GameFi.org.
          </InstructionItem>
        </ul>
      </div>
    </section>
  );
}

export default Instruction;
