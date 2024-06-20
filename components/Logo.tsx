import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <>
      <Link
        href={"/"}
        className="text-2xl font-bold text-transparent bg-gradient-to-l from-indigo-300 to-cyan-400 bg-clip-text hover:cursor-pointer"
      >
        فرم ساز<span className="px-1 items-center">📃</span>
      </Link>
    </>
  );
}

export default Logo;
