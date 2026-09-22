import React from "react";

type TrainingSideSectionProps = {
  category?: string;
  topic?: string;
  about?: string;
  avgCompletionTime?: string;
  format?: string;
  access?: string;
  license?: string;
  pdfLink?: string;
};

const InfoSection: React.FC<{ title: string; content?: string }> = ({
  title,
  content,
}) => {
  if (!content) return null; // Only render if there's content
  return (
    <div className="mb-4">
      <h5 className="text-sm font-semibold uppercase mb-1 text-black">
        {title}
      </h5>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  );
};

const TrainingSideSection: React.FC<TrainingSideSectionProps> = ({
  category,
  topic,
  about,
  avgCompletionTime,
  format,
  access,
  license,
  pdfLink,
}) => {
  return (
    <div className="col-span-12 md:col-span-4">
      <h2 className="text-3xl md:block hidden text-primary font-bold text-center invisible">
        Cyber Safety Training
      </h2>
      <div className="p-4 md:p-6 pt-8 md:pt-8 md:mt-4 bg-gray-200">
        {category && <InfoSection title="Category" content={category} />}
        {topic && <InfoSection title="Topic" content={topic} />}
        {about && <InfoSection title="ABOUT" content={about} />}
        {avgCompletionTime && (
          <InfoSection
            title="Avg Completion Time"
            content={avgCompletionTime}
          />
        )}
        {format && <InfoSection title="Format" content={format} />}
        {access && <InfoSection title="Access" content={access} />}
        {license && <InfoSection title="License" content={license} />}

        {pdfLink && (
          <div className="mb-4">
            <h5 className="text-sm font-semibold uppercase mb-1 text-black">
              ADOBE PDF READER
            </h5>
            <a
              href={pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Get Adobe PDF Reader"
              className="bg-[url('/images/products/training/get_adobe_reader.png')] block bg-no-repeat bg-contain h-10"
            ></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingSideSection;
