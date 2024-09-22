import dummy from './dummy_schedule.json';
import ScheduleItem from './ScheduleItem';

const ScheduleList = () => {
  return (
    <div className="relative mx-[16px] max-w-[364px] mx-auto">
      {dummy.map((v) => (
        <ScheduleItem key={v.id} schedule={v} />
      ))}
    </div>
  );
};

export default ScheduleList;
