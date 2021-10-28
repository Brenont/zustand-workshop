import "./style.css";
import { useRegisterStepper } from "../../store/registerStepper";

export const StepperControls = () => {
  const { current, next, previous, isFirst, isLast, total } =
    useRegisterStepper();

  // console.log(useRegisterStepper.destroy());
  console.log(useRegisterStepper.getState());

  return (
    <div id="stepper-controls-wrapper">
      {!isFirst() && (
        <span className="move-page" onClick={previous}>
          {"<"}
        </span>
      )}
      <span className="page-status">
        {current} / {total}
      </span>
      {!isLast() && (
        <span className="move-page" onClick={next}>
          {">"}
        </span>
      )}
    </div>
  );
};
