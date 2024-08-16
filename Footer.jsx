import React from "react";

const Footer = () => {
  const productList = ["Market", "Etherium based blockchain", "Donation"];
  const contactList = [
    "support@cryptoking.com",
    "info@example.com",
    "Contact us",
  ];
  const usefullLink = ["Home", "About Us", "Company Bio"];
  return (
    <footer className="text-center text-white bg-gray-900 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              BizzBlock
            </h6>
            <p>
              Etherium based blockchain solutions for businesses.
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            {productList.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful Links
            </h6>
            {usefullLink.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-6 text-center">
        <span className="font-semibold">© 2024 BizzBlock. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;