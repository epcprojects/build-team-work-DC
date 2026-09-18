import React from "react";

type Contact = {
  label: string;
  email: string;
};

type ContactSectionProps = {
  contacts: Contact[];
  iconPath?: string;
};

const ContactSection: React.FC<ContactSectionProps> = ({
  contacts,
  iconPath = "/images/contactUsPageImages/emailIcon.svg",
}) => {
  return (
    <>
      {contacts.map(({ label, email }) => (
        <div key={email} className="mb-4 flex flex-col gap-1">
          <p className="text-base mb-1 font-semibold text-mirage">{label}</p>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-sm"
          >
            <img src={iconPath} alt={`${label} icon`} />
            {email}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactSection;
