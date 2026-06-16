import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FAQItem[] = [
  {
    question: "What type of cuisine do you serve?",
    answer: (
      <p>
        We serve a unique <strong>Blasian fusion</strong> — combining the bold
        flavours of Caribbean spice with the rich comfort of Asian soul food.
      </p>
    ),
  },
  {
    question: "Where is Meeny’s Kitchen & Grill located?",
    answer: (
      <p>
        We are based in <strong>Northampton, Kingsland Gardens</strong>.
        <br />
        <a
          href="https://share.google/FjxQZkPXvRANq6zKw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#67C24A] transition-colors hover:text-[#74d455]"
        >
          View us on Google Maps →
        </a>
      </p>
    ),
  },
  {
    question: "Do you offer pickup and delivery?",
    answer: (
      <p>
        Yes — we offer <strong>both pickup and delivery</strong>. You can choose
        your preferred option when placing your order.
      </p>
    ),
  },
  {
    question: "What are your opening hours?",
    answer: (
      <div>
        <p className="mb-2 font-medium text-white">
          Our regular weekly hours are:
        </p>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Monday – Friday</li>
          <li>6:00am – 10:00am</li>
          <li>3:00pm – 9:00pm</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How do I place an order on the website?",
    answer: (
      <p>
        Simply head to the <strong>Menu</strong>, select the items you’d like,
        and add them to your cart.
        <br />
        If you choose delivery, you’ll be asked to enter your address before
        confirming your order.
      </p>
    ),
  },
];

const Help: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070A] text-white">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,.03) 3px)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex rounded-full border border-[#67C24A]/20 bg-[#67C24A]/10 px-4 py-2 text-sm font-medium text-[#67C24A]">
            Frequently Asked Questions
          </div>

          <h1 className="text-5xl font-extrabold">
            Need <span className="text-[#67C24A]">Help?</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Find answers to common questions about ordering, delivery,
            collection, and Meeny's Kitchen & Grill.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1118] shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-medium text-white transition-colors hover:bg-white/5"
                >
                  <span>{faq.question}</span>

                  <span
                    className={`text-[#67C24A] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-6 py-5 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Section Divider */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </main>
  );
};

export default Help;