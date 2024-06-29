"use client ";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement } from "../FormElements";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "متن",
      helperText: "متن کمکی",
      required: false,
      placeHolder: "متن را اینجا وارد کنید",
    },
  }),
  designerBtnElement: {
    icon: <MdTextFields />,
    label: "متن",
  },
  designerComponent: () => <div>designer</div>,
  formComponent: () => <div>form</div>,
  popertiesComponent: () => <div>properties</div>,
};
