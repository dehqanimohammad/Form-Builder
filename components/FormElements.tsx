import { TextFieldFormElement } from "./fields/TextField";

export type ElementsType = "TextField";

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementIstance;

  designerBtnElement: {
    icon: React.ReactElement;
    label: string;
  };

  designerComponent: React.FC;
  formComponent: React.FC;
  popertiesComponent: React.FC;
};

export type FormElementIstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};
export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
};
