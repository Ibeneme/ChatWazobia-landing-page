import React, { useState } from "react";
import MinusIcon from "../../Components/Icons/MinusIcon";
import AddIcon from "../../Components/Icons/AddIcon";
import "./FAQPage.css"; // Import the CSS file

const faqs = [
  {
    question: "What is Chat Wazobia AI, and how does it work?",
    answer:
      "Chat Wazobia AI is an advanced language solution designed to provide translation, transcription, and conversational AI services tailored to African languages. It works by leveraging cutting-edge natural language processing (NLP) technology to understand and process text or speech, delivering accurate and context-aware outputs in multiple languages.",
  },
  {
    question: "How accurate is the AI translation and transcription?",
    answer:
      "Chat Wazobia AI achieves high accuracy through its AI models trained on extensive datasets of African and global languages. However, while it handles most use cases effectively, the accuracy may vary depending on the complexity and context of the input.",
  },
  {
    question: "Is there a limit to the languages it supports?",
    answer:
      "Chat Wazobia AI supports over 2000 languages, including regional dialects and indigenous African languages, making it one of the most comprehensive language AI solutions available.",
  },
  {
    question: "Is my data secure with Chat Wazobia AI?",
    answer:
      "Yes, your data is secure. Chat Wazobia AI uses advanced encryption protocols and follows strict data privacy regulations to ensure that your information remains confidential and protected.",
  },
  {
    question: "Is there a mobile app available for Chat Wazobia AI?",
    answer:
      "Coming soon! Chat Wazobia AI will be available on all app stores and Play Store by the 1st of April 2025.",
  },
];

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-header">Frequently Asked Questions</h1>
      <p className="faq-subtext">
        Explore how our users have harnessed the potential of Chat Wazobia AI's
        language solutions and envision how it can enhance your experience as
        well.
      </p>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3 className="faq-title">{faq.question}</h3>
            <span style={{ marginLeft: 12 }}>
              {activeIndex === index ? (
                <MinusIcon
                  width={24}
                  height={24}
                  color={`var(--secondary-color)`}
                />
              ) : (
                <AddIcon
                  width={24}
                  height={24}
                  color={`var(--secondary-color)`}
                />
              )}
            </span>
          </div>
          <span>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </span>{" "}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
