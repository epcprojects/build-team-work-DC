import React from "react";

interface FeatureListProps {
  title: string;
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ title, features }) => {
  return (
    <div className="md:p-6 p-5">
      <h3 className="font-semibold uppercase text-lg md:text-xl mb-3 md:mb-6 text-mirage">
        {title}
      </h3>
      <ul className="custom-list pricing text-base text-mirage flex flex-col gap-1 md:gap-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
