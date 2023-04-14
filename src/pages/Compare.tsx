import React from "react";
import Wrapper from "../sections/Wrapper";
import CompareContainer from "../components/CompareContainer";
import { useAppSelector } from "../app/hooks";

const Compare = () => 
{
  const {compareQueue} = useAppSelector (({pokemon})=> pokemon);

  return (
    <div className="compare">
      <CompareContainer pokemon={compareQueue[1]} isEmpty={compareQueue.length<2} />
	    <CompareContainer pokemon={compareQueue[0]} isEmpty={compareQueue.length<1} />
	</div>);
};

export default Wrapper(Compare);
