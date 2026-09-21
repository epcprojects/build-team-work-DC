export const individualProductOverview = [
  { label: "Audience", value: "Everyone" },
  { label: "Avg Completion Time", value: "3 Hour" },
  { label: "Format", value: "Online Self Paced Training" },
  { label: "Access", value: "Online Access for 90 Days" },
  { label: "Certificate of Completion", value: "Yes" },
  { label: "Certificate Expiry", value: "3 Years" },
  { label: "Wallet Card", value: "Yes" },
  { label: "Audio", value: "Yes" },
  { label: "Language", value: "English & Spanish" },
  { label: "License", value: "Single User" },
] as const;

export const individualProductPoints = [
  "Online 24x7 self paced cyber safety training",
  "Only <strong>$29.99</strong> for an individual",
  "<strong>2 Year</strong> nationally recognized certificate",
  "Free retakes. You are guaranteed a certificate",
  "Receive your cyber safety certificate immediately upon completion",
  "Comprehensive and easy to understand training",
  "Up to 90 days to take and review the training",
  "English and Spanish versions included",
  "30 day money back guarantee",
] as const;

export const complianceProductOverview = [
  { label: "Audience", value: "Everyone" },
  { label: "Avg Completion Time", value: "1 Hour" },
  { label: "Format", value: "Online Self Paced Training" },
  { label: "Access", value: "Online Access for 90 Days" },
  { label: "Certificate of Completion", value: "Yes" },
  { label: "Certificate Expiry", value: "2 Years" },
  { label: "Wallet Card", value: "Yes" },
  { label: "Audio", value: "Yes" },
  { label: "Language", value: "English & Spanish" },
  { label: "License", value: "Multi User" },
] as const;

export const complianceProductPoints = [
  "Group discounts available",
  "No contracts, pay as you go, cumulative discounts",
  "Zero administration: no need to create & administer usernames and passwords",
  "Shared multi-user login for employees",
  "Free retakes. Each employee is guaranteed a certificate",
  "Certificates and transcript scores automatically emailed to account administrator",
  "<strong>2 Year</strong> nationally recognized certificate",
  "Automatically creates and maintains detailed training log in MS Excel",
  "English and Spanish versions included",
  "No expiration date on any seats purchased",
  "30 day money back guarantee",
] as const;

export const individualCourseFeatures = [
  "Online 24x7 self paced training",
  "Only $29.99 for an individual",
  "3 Year certificate upon completion",
  "Free retakes. You are guaranteed a certificate",
  "Receive your Business Essentials certificate immediately upon completion",
  "Comprehensive and easy to understand training",
  "Up to 90 days to take and review the training",
  "English and Spanish versions included",
  "30 day money back guarantee",
] as const;

export const organizationCourseFeatures = [
  "Online 24x7 self paced training",
  "Group discounts available",
  "No contracts, pay as you go, cumulative discounts",
  "Zero administration: no need to create & administer usernames and passwords",
  "Shared multi-user login for employees",
  "Free retakes. Each employee is guaranteed a certificate",
  "Certificates and transcript scores automatically emailed to account administrator",
  "Automatically creates and maintains detailed training log in MS Excel",
  "No expiration date on any seats purchased",
  "English and Spanish versions included",
  "30 day money back guarantee",
] as const;

export const howItWork = [
  "Register for the individual training",
  "Login as your convenience 24x7",
  "Take the training and pass the final exam",
  "You receive a pdf certificate immediately upon passing the final exam",
] as const;

export const howItWorkForOrganization = [
  "Register for the Organizational Training",
  "Login to your administration account and copy the template instructions provided",
  "Paste them in an email to your staff (same instructions for everyone)",
  "Sit back and the certificates for everyone will be emailed to you as they complete their training",
] as const;

const commonOverview: [string, string][] = [
  ["Audience", "Everyone"],
  ["Avg Completion Time", "3 Hours"],
  ["Format", "Online Self Paced Training"],
];

const commonOverviewEnd: [string, string][] = [
  ["Certificate of Completion", "Yes"],
  ["Certificate Expiry", "3 Years"],
  ["Wallet Card", "Yes"],
  ["Audio", "Yes"],
  ["Language", "English & Spanish"],
];

export const individualOverview: [string, string][] = [
  ...commonOverview,
  ["Access", "Online Access for 90 Days"],
  ...commonOverviewEnd,
  ["License", "Single User"],
];

export const individualSteps = [
  "Register for the individual training",
  "Login as your convenience 24x7",
  "Take the training and pass the final exam",
  "You receive a pdf certificate immediately upon passing the final exam",
];

const courseFeatures = [
  "What is Cyber Safety?",
  "Protecting Yourself in Cyber space",
  "The Hackers' Playbook",
  "Key Takeaways",
  "Final Exam",
];
