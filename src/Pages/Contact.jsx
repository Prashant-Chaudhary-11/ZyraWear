export const Contact = () => {
    const faqs = [
        {
            question: "How do I place an order?",
            answer: "To place an order, browse products, add them to your cart, and proceed to checkout. You can pay online or choose cash on delivery if available."
        },
        {
            question: "What payment methods are accepted?",
            answer: "We accept Credit/Debit cards, Net Banking, UPI, and popular Wallets. Cash on delivery is also available for selected locations."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive a tracking link via email/SMS. You can also check the order status in your account dashboard."
        },
        {
            question: "What is your return policy?",
            answer: "You can return items within 7 days of delivery if they are unused and in original condition. Refunds will be processed within 5–7 business days."
        },
        {
            question: "How do I contact customer support?",
            answer: "You can reach us via live chat, email at support@myshop.com, or call our toll-free number 1800-123-4567."
        }
    ];

    return (
        <div className="">
            <div className="faqContainer">
                <h6 className="secondaryColor topSmallHeading mb-4">The FAQs</h6>
                <h2>Help Center</h2>
                <p>Everything you need to know about the products and billing.</p>
            </div>

            <div className="row mx-0 faqContainerSecond">
                <div className="col-4 ps-0">
                    <h6 className="secondaryColor topSmallHeading mb-4">Support</h6>
                    <h2>FAQs</h2>
                    <p>
                        Everything you need to know about the products and billing.
                        Can't find the answer you're looking for? Please chat with our support team.
                    </p>
                </div>
                <div className="col-8">
                    <div className="accordion accordion-flush" id="faqAccordion">
                        {faqs.map((faq, index) => (
                            <div className="accordion-item border-0 mb-2" key={index}>
                                <h2 className="accordion-header border-0" id={`heading${index}`}>
                                    <button
                                        className={`accordion-button bg-white shadow-none border-0 fw-medium ${index !== 0 ? "collapsed" : ""}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`}
                                        aria-expanded={index === 0 ? "true" : "false"}
                                        aria-controls={`collapse${index}`}
                                    >
                                        {faq.question}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${index}`}
                                    className={`accordion-collapse border-0 collapse text-muted fw-light ${index === 0 ? "show" : ""}`}
                                    aria-labelledby={`heading${index}`}
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="subscriptionContainer m-4 rounded-4">
                <div className="row mx-0">
                    <div className="col-md-6">
                        <h2>Join 2,000+ Subscribers</h2>
                        <p>Subscribe to our newsletter for the latest updates and exclusive offers.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="position-relative">
                            <input className="customInputNoIcon me-2 w-75" type="text" placeholder="Enter your email" />
                            <button className="btn btn-dark rounded-circle customButtonNoIcon"><i class="fa-solid fa-paper-plane"></i></button>
                        </div>
                        <span class="small text-muted ">We care about your data in our privacy policy.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
