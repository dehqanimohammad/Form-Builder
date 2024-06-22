"use client";

import { BsFileEarmarkPlus } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { resolve } from "path";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
});

type formSchemaType = z.infer<typeof formSchema>

function CreateFormBtn() {
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit (values: ) {

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>ساخت فرم جدید</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>ساخت فرم</DialogHeader>
        <div></div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormBtn;
