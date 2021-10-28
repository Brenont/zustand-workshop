import "./style.css";

export const StepperControls = () => {
  return (
    <div id="stepper-controls-wrapper">
      <span className="move-page">{"<"}</span>
      <span className="page-status">1 / 4</span>
      <span className="move-page">{">"}</span>
    </div>
  );
};
