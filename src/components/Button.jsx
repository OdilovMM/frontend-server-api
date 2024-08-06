import { useNavigation } from "react-router-dom";

const Button = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-infinity"></span> sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default Button;
