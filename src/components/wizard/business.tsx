import { Business } from '@/components/wizard/constant';

type BusinessSelectorProps = {
  businesses: Business[];
  selectedBusiness: string;
  onSelect: (businessId: string) => void;
};

export const BusinessSelector = ({
  businesses,
  selectedBusiness,
  onSelect
}: BusinessSelectorProps) => {
  return (
    <div>
      <h2 className="font-heading text-3xl leading-[1.1] sm:text-2xl md:text-5xl flex items-center justify-center pb-7">
        What business!
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {businesses.map(({ id, name, popularity }) => (
          <span
            key={id}
            className={`cursor-pointer transition-all hover:opacity-100 ${
              selectedBusiness === id
                ? 'text-blue-800 font-bold opacity-100'
                : 'text-gray-700 opacity-50'
            }`}
            style={{
              fontSize: `${0.5 + popularity / 15}rem`,
            }}
            onClick={() => onSelect(id)}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};
