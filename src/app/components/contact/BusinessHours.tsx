import React from "react";

type ScheduleItem = {
  day: string;
  hours: string;
};

type BusinessHoursProps = {
  data: ScheduleItem[];
};

const BusinessHours: React.FC<BusinessHoursProps> = ({ data }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.day}>
          <td>
            <span className="font-medium md:text-base text-sm text-mirage me-4">
              {item.day}
            </span>
          </td>
          <td>
            <span className="md:text-base text-sm font-normal text-mirage">{item.hours}</span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BusinessHours;
