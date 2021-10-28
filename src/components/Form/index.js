import { PersonalForm, InfoForm, AddressForm, PasswordForm } from "./steps";
import "./style.css";

const formSteps = {
  1: <PersonalForm />,
  2: <InfoForm />,
  3: <AddressForm />,
  4: <PasswordForm />,
};

const Form = () => {
  const stepForm = formSteps[1] || <></>;

  return <div id="form-wrapper">{stepForm}</div>;
};

export { Form };
