"use client";
import React, { useState } from "react";
import data from "../rentagreement/dummyData";
import AgentList from "./AgentList";
import styles from "./agent.module.css";

const NormalAgent = (props) => {
  // let [limit, setLimit] = useState(5);
  const filteredData = data["Experts"];
  return (
    <div className={styles.agentLayout}>
      <div className="flex flex-col w-[67%] items-center py-2">
        <AgentList featured={false} limit={2} />
        {props.button == true ? (
          <button className="border-2 px-4 py-2 mb-4 w-fit text-base rounded-lg border-black">
            More agents in Hisar
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default NormalAgent;
