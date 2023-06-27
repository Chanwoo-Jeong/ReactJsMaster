import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function Selectors() {
  const [minutes , setMinutes] = useRecoilState(minuteState);

    const onMinutesChange = (e: React.FormEvent<HTMLInputElement>) =>{
        setMinutes(Number(e.currentTarget.value))
    }

    const [hours , setHours ] = useRecoilState(hourSelector);

    const onHoursChange = (e: React.FormEvent<HTMLInputElement>) =>{
        setHours(Number(e.currentTarget.value))
    }
  return (
    <>
      <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes" />
      <input value={hours} onChange={onHoursChange} type="number" placeholder="Hours" />
    </>
  );
}

export default Selectors;
