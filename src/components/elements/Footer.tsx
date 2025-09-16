import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-br from-slate-700 via-slate-600
     to-slate-800 text-white py-6"
    >
      <div className="max-w-6xl mx-auto px-6 text-center text-[16px] space-y-2">
        <p>
          For registration & referral related concerns, reach us at{" "}
          <a
            href="mailto:support@scdxyz.com"
            className="text-blue-400 hover:underline"
          >
            support@acdnepal.com
          </a>
        </p>
        <p>
          For event related queries, reach out to{" "}
          <a
            href="mailto:help@scdxyz.com"
            className="text-blue-400 hover:underline"
          >
            help@acdnepal.com
          </a>
        </p>
        <p>
          © Copyright <span className="font-bold">AWSSCDNEPAL</span>. Some
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
