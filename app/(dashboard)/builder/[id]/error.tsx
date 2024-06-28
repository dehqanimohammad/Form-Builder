"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";

function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-y-2">
      <h2>ی مشکلی پیش اومد!!!!!!</h2>
      <Button asChild>
        <Link href={"/"}>برگشت به خانه</Link>
      </Button>
    </div>
  );
}

export default ErrorPage;
