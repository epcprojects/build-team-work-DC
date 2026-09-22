import React from "react";
import { EmailIcon, PhoneIcon } from "@/public/icons";
import Image from "next/image";
import { Images } from "../../ui/images";
import Link from "next/link";

const companyInfo = {
  logo: "/images/footer_logo.svg",
  address: ["5114 Balcones Woods Dr", "Suite 307, #331", "Austin, TX 78759"],
  phone: "+1 (512) 402-5963",
  email: "info@buildteamwork.com",
};

const navLinks = {
  company: [
    { name: "Home", href: "/" },
    { name: "Contact Us", href: "/contact" },
    { name: "Affiliate Program", href: "/affiliates" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  services: [
    { name: "Business Essentials", href: "/business-essentials" },
    {
      name: "Employee Excellence",
      href: "/employee-excellence",
    },
    { name: "Emotional Intelligence", href: "/emotional-intelligence" },
    { name: "Healthy Body and Mind", href: "/healthy-body-and-mind" },
    { name: "Frequently Asked Questions", href: "/faqs" },
  ],
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li>
    <a
      href={href}
      className="font-medium text-sm hover:underline underline-offset-4 text-white text-decoration-none mb-3 inline-block"
    >
      {children}
    </a>
  </li>
);

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-semibold text-lg mb-5 text-white uppercase">
    {children}
  </h3>
);

const Footer = () => {
  return (
    <footer className="bottom-0 w-full">
      <div className="py-12 md:px-0 px-2 bg-midNight">
        <div className="container max-w-8xl mx-auto md:px-8 px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            <div className="">
              <div className="">
                <Link
                  href="/"
                  className="mb-4 inline-block relative"
                  aria-label="Homepage"
                >
                  <Image
                    src={companyInfo.logo}
                    className="h-12 sm:w-[500px] w-[300px]"
                    width={500}
                    height={100}
                    alt="Cyber Safety Training logo"
                  />
                </Link>
                <address className="font-normal mb-3 text-white text-sm not-italic">
                  {companyInfo.address.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </address>
                <a
                  href={`tel:${companyInfo.phone.replace(/\D/g, "")}`}
                  className="font-medium flex mb-3 gap-1 items-center text-sm text-contact"
                  aria-label={`Call us at ${companyInfo.phone}`}
                >
                  <PhoneIcon />
                  <span className="text-white ms-4 text-decoration-none">
                    {companyInfo.phone}
                  </span>
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="font-medium flex gap-1 items-center mb-3 text-sm text-contact"
                  aria-label={`Email us at ${companyInfo.email}`}
                >
                  <EmailIcon />
                  <span className="text-white text-decoration-none ms-3">
                    {companyInfo.email}
                  </span>
                </a>
              </div>
            </div>

            <div className="">
              <div className="footer-links lg:ps-8">
                <SectionHeader>Company</SectionHeader>
                <ul className="footer-links-ul">
                  {navLinks.company.map((link) => (
                    <FooterLink key={link.href} href={link.href}>
                      {link.name}
                    </FooterLink>
                  ))}
                </ul>
              </div>
            </div>

            <div className="">
              <SectionHeader>Products / Services</SectionHeader>
              <ul className="footer-links-ul">
                {navLinks.services.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.name}
                  </FooterLink>
                ))}
              </ul>
            </div>
            <div className="">
              <div className="lg:ps-8">
                <SectionHeader>We accept</SectionHeader>
                <Image
                  src={Images.footerImages.paymentOptions}
                  alt="Payment options accepted"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 px-2 bg-navyBlue">
        <div className="container max-w-8xl mx-auto md:px-8 px-4">
          <p className="font-normal text-center md:text-start text-white text-sm py-3">
            © Copyright {new Date().getFullYear()} Digital Compliance, All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
