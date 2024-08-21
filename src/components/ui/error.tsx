interface ErrorProps {
  title: string;
  message: string;
  onConfirm?: () => void; // Optional callback function
}

const Error: React.FC<ErrorProps> = ({ title, message, onConfirm }) => {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
      {onConfirm && (
        <div id="confirmation-actions">
          <button onClick={onConfirm} className="button">
            Okay
          </button>
        </div>
      )}
    </div>
  );
};

export default Error;
