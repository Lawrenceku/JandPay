'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";


export default function Footer() {
  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <>
    <footer id='footer' className="flex flex-col border bg-[#151719] p-4">
          <div id="footer-container" className="flex justify-between">
              <div className="p-4 text-sm">
              <p className="font-medium text-xl">Company</p>
              <p>JandPay</p>
              </div>
              <div className="p-4 text-sm">
              <p className="font-medium text-xl">Support</p>
              <p>Contact us</p>
              <p>FAQs</p>
              </div>
              <div className="p-4 text-sm">
              <p className="font-medium text-xl">Socials</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>LinkedIn</p>
              </div>
              <div className="p-4 text-sm">
              <p className="font-medium text-xl">Legal</p>
              <p>Terms of use</p>
              <p>Privacy policy</p>
              </div>
          </div>
        <p className="flex justify-center text-center text-slate-500">Copyright &copy; {`2023`} Jandpay Inc</p>
    </footer>
    </>
  );
};