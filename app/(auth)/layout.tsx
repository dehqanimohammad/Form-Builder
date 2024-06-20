import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="items-center justify-center flex flex-col pt-24">
      <h1 className="mb-10 font-bold text-4xl">
        سلام
        <span className="px-3 items-center rotate">👋</span>
        <br />
        این مکان بعدا تغییر زبان خواهد داد
      </h1>
      {children}
    </div>
  );
}

export default layout;
