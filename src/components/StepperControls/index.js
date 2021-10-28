import { useStepper } from "../../store/stepper";
import "./style.css";
import { useRegisterStepper } from "../../store/registerStepper";

export const StepperControls = () => {
  const { isFirst, isLast, current, total, next, previous } = useStepper();

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
