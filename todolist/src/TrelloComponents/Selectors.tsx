import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function Selectors() {
  const [minutes , setMinutes] = useRecoilState(minuteState);

    const onMinutesChange = (e: React.FormEvent<HTMLInputElement>) =>{
        setMinutes(Number(e.currentTarget.value))
    }

    const hours = useRecoilValue(hourSelector);

  return (
    <>
      <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes" />
      <input value={hours} type="number" placeholder="Hours" />
    </>
  );
}

export default Selectors;
