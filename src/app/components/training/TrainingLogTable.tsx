import React from "react";
import ThemeButton, { ButtonType } from "../forms/ThemeButton";
import { ArrowDownIcon } from "@/public/icons";

// Define the structure of each certificate
interface CertificateData {
  dateGranted: string;
  nameOnCertificate: string;
  course: string;
}

// Props for the CertificateTable component
interface TrainingLogTableProps {
  certificates: CertificateData[];
  onDownload: (certificate: CertificateData) => void; // Pass clicked certificate
}

const TrainingLogTable: React.FC<TrainingLogTableProps> = ({
  certificates,
  onDownload,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-160 table-auto md:w-full text-left">
        <thead className="text-xs bg-gray-50 p-3 text-mistBlue font-normal!">
          <tr>
            <th className="p-3 border-gray-200 border-b font-medium">
              Date Granted
            </th>
            <th className="p-3 border-gray-200 border-t-0 border-b font-medium">
              Name On Certificate
            </th>
            <th className="p-3 border-b border-gray-200 font-medium">Course</th>
            <th className="p-3 w-40 border-gray-200 border-b font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {certificates.map((certificate, index) => (
            <tr key={index}>
              <td className="py-2 px-3 border-gray-200 text-gray-900 border-b">
                {certificate.dateGranted}
              </td>
              <td className="py-2 px-3 border-gray-200 text-gray-900 border-b">
                {certificate.nameOnCertificate}
              </td>
              <td className="py-2 px-3 border-gray-200 text-gray-900 border-b">
                {certificate.course}
              </td>
              <td className="py-2 px-3 border-gray-200 text-gray-900 border-b">
                <ThemeButton
                  paddings="px-3 py-2.5"
                  type={ButtonType.PRIMARY_OUTLINE}
                  className="border-0 bg-transparent"
                  icon={<ArrowDownIcon />}
                  onClick={() => onDownload(certificate)} // <-- trigger parent handler
                >
                  <span className="font-semibold text-sm">Download</span>
                </ThemeButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainingLogTable;
