import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto mt-[90px] py-3 sm:py-4 border-t  border-black flex items-center justify-center sm:justify-between flex-col sm:flex-row">
      <p className="text-base lg:text-lg">&copy; {year} Edusity. All rights reserved.</p>

      <div className="flex gap-5">
        <p className="cursor-pointer text-base lg:text-lg">Terms of Services</p>
        <p className="cursor-pointer text-base lg:text-lg">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
