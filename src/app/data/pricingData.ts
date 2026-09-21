export const pricingTableData = [
  { range: "1 - 9", price: "$29.99", isCustom: false },
  { range: "10 - 24", price: "$24.99", isCustom: false },
  { range: "25 - 49", price: "$23.99", isCustom: false },
  { range: "50 - 99", price: "$22.99", isCustom: false },
  { range: "100 - 200", price: "$19.99", isCustom: false },
  {
    range: "200+",
    price: "See Custom Quote above",
    isCustom: true,
    link: "#",
  },
] as const;

export const individualPricingFeatures = [
  "Online 24x7 self paced cyber safety training",
  "Only $29.99 for an individual",
  "2 Year nationally recognized certificate",
  "Free retakes. You are guaranteed a certificate",
  "Receive your cyber safety certificate immediately upon completion",
  "Comprehensive and easy to understand training",
  "Online 24x7 self paced training",
  "Up to 90 days to take and review the training",
  "Spanish version included",
] as const;

export const organizationalPricingFeatures = [
  "Group discounts available",
  "No contracts, pay as you go, cumulative discounts",
  "Zero administration: no need to create & administer usernames and passwords",
  "Shared multi-user login for employees",
  "Free retakes. Each employee is guaranteed a certificate",
  "Certificates and transcript scores automatically emailed to account administrator",
  "3 Year nationally recognized certificate",
  "Automatically creates and maintains detailed training log in MS Excel",
  "English and Spanish versions",
  "No expiration date on any seats purchased",
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
