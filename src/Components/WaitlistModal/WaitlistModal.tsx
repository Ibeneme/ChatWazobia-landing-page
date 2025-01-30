import { useState } from "react";
import "./WaitlistModal.css";

const WaitlistModal = ({ isOpen, onClose, demo }: any) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Simulate a delay of 10 seconds for the loader
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      // Close the modal after 10.5 seconds
      setTimeout(() => {
        //onClose();
        //setShowSuccess(false);
        //setEmail("");
      }, 500); // Close modal after success animation
    }, 10000); // 10 seconds loader delay
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {!showSuccess ? (
          <div>
       <h2>{demo ? 'This is a demo game. Our app is coming soon! Join our waitlist.' : 'Join our waitlist.'}</h2>   <p>Enter your email to join the waitlist for exclusive updates.</p>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              disabled={isSubmitting}
              className="input-mod"
            />
            <>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || !email}
                className="submit-btn"
              >
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </button>

              <button onClick={onClose} className="close-btn">
                Close
              </button>
            </>
          </div>
        ) : (
          <div className="success-message">
            <h3 style={{ color: `var(--primary-color)` }}>Success!</h3>
            <p style={{ textAlign: "center" }}>
              Your email has been added to the waitlist.
            </p>
            <div className="checkmark">✔️</div>
            <button onClick={onClose} className="submit-btn">
              Close{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
