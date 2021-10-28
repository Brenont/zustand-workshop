import { useRegisterStepper } from "../../store/registerStepper";
import { PersonalForm, InfoForm, AddressForm, PasswordForm } from "./steps";
import "./style.css";

const formSteps = {
  1: <PersonalForm />,
  2: <InfoForm />,
  3: <AddressForm />,
  4: <PasswordForm />,
};

const Form = () => {
  const current = useRegisterStepper((state) => state.current);

  const stepForm = formSteps[current] || <></>;

  return <div id="form-wrapper">{stepForm}</div>;
};

export { Form };
