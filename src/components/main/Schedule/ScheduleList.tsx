import dummy from './dummy_schedule.json';
import ScheduleItem from './ScheduleItem';

const ScheduleList = () => {
  return (
    <div className="mx-[16px]">
      {dummy.map((v) => (
        <ScheduleItem key={v.id} schedule={v} />
      ))}
    </div>
  );
};

export default ScheduleList;
