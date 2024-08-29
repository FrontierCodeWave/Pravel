import './history.css';

interface HistoryItemProps {
  location: string;
  title: string;
  date: string;
  energe: string;
  used: boolean;
}

const HistoryItem = ({
  location,
  title,
  date,
  energe,
  used,
}: HistoryItemProps) => {
  return (
    <li className={`flex ${used ? 'used' : undefined} text-gray-600`}>
      <div className="w-[60px] text-primary text-[14px] font-semibold">
        {location}
      </div>
      <div className="flex-1 ml-4">
        <h2 className="font-bold text-[17px] text-gray-900">{title}</h2>
        <span className="font-semibold text-[15px] text-gray-500">{date}</span>
      </div>
      <div>
        <div className="flex items-center">
          <i
            className={`ico_pravel ico${used ? '_used' : ''}_energy32 mr-[6px]`}
          />
          <span className="text-[14px] font-semibold text-gray-900 mr-1">
            에너지
          </span>
          <span className="text-[16px] font-semibold text-primary">
            {energe}%
          </span>
        </div>
      </div>
    </li>
  );
};

interface HistoryProps {
  title: string;
}

const History = ({ title }: HistoryProps) => {
  const history = [
    {
      id: 1,
      location: '이천',
      title: '도자기 축제 참여하기',
      date: '23.12.12',
      energe: '30',
      used: true,
    },
  ];

  return (
    <div className="px-4 mt-[26px]">
      <h1 className="font-semibold text-[14px] text-gray-700">{title}</h1>
      <ul className="mt-[30px]">
        {history.map((value) => (
          <HistoryItem key={value.id} {...value} />
        ))}
      </ul>
    </div>
  );
};

export default History;
