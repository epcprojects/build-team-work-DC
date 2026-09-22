interface CheckListProps {
  title?: string;
  items: string[];
  iconColor?: string;
  iconBgColor?: string;
}

const ListOfFeature = ({
  title,
  items,
  iconColor = "#8D1F44",
  iconBgColor = "#FFE5EE",
}: CheckListProps) => {
  return (
    <div>
      {title && (
        <h3 className="font-semibold sm:text-lg text-base text-mirage mb-2 md:mb-3">
          {title}
        </h3>
      )}

      <ul className="mb-6 text-sm md:text-base text-gray-700 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <rect
                x="0.166992"
                y="0.628906"
                width="24"
                height="24"
                rx="12"
                fill={iconBgColor}
              />

              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.2635 8.01894L10.1035 14.9289L8.2035 12.8989C7.8535 12.5689 7.3035 12.5489 6.9035 12.8289C6.5135 13.1189 6.4035 13.6289 6.6435 14.0389L8.8935 17.6989C9.1135 18.0389 9.49349 18.2489 9.92349 18.2489C10.3335 18.2489 10.7235 18.0389 10.9435 17.6989C11.3035 17.2289 18.1735 9.03894 18.1735 9.03894C19.0735 8.11894 17.9835 7.30894 17.2635 8.00894V8.01894Z"
                fill={iconColor}
              />
            </svg>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfFeature;