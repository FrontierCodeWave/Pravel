import TravelRecordDetailComponent from '@/components/record/TravelRecordDetailComponent';

interface TravelRecordDetailProps {
  params: {
    id: string;
  };
}

const TravelRecordDetail = ({ params: { id } }: TravelRecordDetailProps) => {
  const data = {
    id: Number(id),
    url: 'travel1.png',
    title: '제주 서귀포',
    startDate: '2021-08-01',
    endDate: '2021-08-03',
  };

  return <TravelRecordDetailComponent {...data} />;
};

export default TravelRecordDetail;
