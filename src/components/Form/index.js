import { useStepper } from "../../store/stepper";
import { Button } from "../Button";
import { PersonalForm, InfoForm, AddressForm, PasswordForm } from "./steps";
import "./style.css";

const formSteps = {
  1: PersonalForm,
  2: InfoForm,
  3: AddressForm,
  4: PasswordForm,
};

const Form = () => {
  const { current, isLast } = useStepper();

  const StepForm = formSteps[current] || <></>;

  return (
    <div id="form-wrapper">
      {<StepForm />}
      {isLast() && <Button on>Cadastrar perfil</Button>}
    </div>
  );
};

export { Form };
