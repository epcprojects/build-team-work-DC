import React from "react";

interface PricingTier {
  range: string;
  price: string;
  isCustom: boolean;
  link?: string;
}

interface PricingTableProps {
  pricingData: PricingTier[];
}

const PricingTable: React.FC<PricingTableProps> = ({ pricingData }) => {
  return (
    <tbody className="">
      {pricingData.map((tier, index) => (
        <tr key={index} className="border-b border-platinum text-start">
          <th scope="col" className="text-start p-2">
            <span className="font-semibold text-sm md:text-base p-3 text-mirage">
              {tier.range}
            </span>
          </th>
          <th scope="col" className="text-start p-2">
            {tier.isCustom ? (
              <a
                href={tier.link}
                className="font-bold text-sm text-primary"
              >
                {tier.price}
              </a>
            ) : (
              <span className="font-bold md:text-base text-sm text-secondary">
                {tier.price}
              </span>
            )}
          </th>
        </tr>
      ))}
    </tbody>
  );
};

export default PricingTable;
