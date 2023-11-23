import React from "react";
import ContentLeft from "../components/Content/ContentLeft";
import ContentRight from "../components/Content/ContentRight";
import CardGraph from "../components/Card/CardGraph";

export default function Dashboard() {
  return (
    <>
      <div className="w-full max-h-screen bg-slate-100 rounded-3xl flex flex-col px-2 overflow-y-auto">
        <div className="w-full h-4/6 flex flex-row ">
          <ContentLeft />
          <ContentRight />
        </div>
        <div className="w-full h-2/6 px-8 py-2 flex flex-row justify-evenly gap-4 items-center">
          <CardGraph />
          <div className="container mx-auto">Content Bottom2</div>
        </div>
      </div>
    </>
  );
}
