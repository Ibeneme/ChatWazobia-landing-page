import "./ContactUs.css";

const ContactUs = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:chatwazobia@gmail.com";
  };

  return (
    <section className="contact-us">
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-description">
        Have questions, need assistance, or want to share your feedback? We’d
        love to hear from you! Whether it's about the features of Chat WaZoBia
        AI or any concerns you might have, feel free to reach out to our team.
        We are committed to providing you with the best support and are always
        here to help you make the most out of your experience with us.
      </p>
      <button className="contact-us-button" onClick={handleContactClick}>
        Email Us
      </button>
    </section>
  );
};

export default ContactUs;
