"use client";

import { Form } from "@prisma/client";
import React from "react";
import PreviewDialogBtn from "./PreviewDialogBtn";
import SaveFormBtn from "./SaveFormBtn";
import PublishedFormBtn from "./PublishedFormBtn";
import Designer from "./Designer";

function FormBuilder({ form }: { form: Form }) {
  return (
    <main className="flex flex-col w-full">
      <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
        <h2 className="truncate font-medium">
          <span className="text-muted-foreground mr-2"> فرم:</span>
          {form.name}
        </h2>
        <div className="flex items-center gap-2 ">
          <PreviewDialogBtn />
          {!form.published && (
            <>
              <SaveFormBtn />
              <PublishedFormBtn />
            </>
          )}
        </div>
      </nav>
      <div
        className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[800px] bg-accent bg-[url(/graph-paper.svg)]
      dark:bg-[url(/graph-paper-dark.svg)]"
      >
        <Designer />
      </div>
    </main>
  );
}

export default FormBuilder;
