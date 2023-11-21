import "./ProgressBar.scss";

const ProgressBar = ({ pasoActual }) => {
  return (
    <div className="progress-bar">
      <div
        className={`progress-step ${pasoActual >= 1 ? "completed" : ""}`}
      ></div>
      <div
        className={`progress-step ${pasoActual >= 2 ? "completed" : ""}`}
      ></div>
      <div
        className={`progress-step ${pasoActual >= 3 ? "completed" : ""}`}
      ></div>
    </div>
  );
};

export default ProgressBar;