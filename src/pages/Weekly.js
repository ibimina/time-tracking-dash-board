

import Acivities from "../components/Acivities";
import Report from "../components/Report";
export default function Weekly({time}) {
 const last ="Last Week"
  return (
    <>
   
      {time &&
        time.map(({ title, timeframes, images }) => (
          <Acivities
            title={title}
            current={timeframes.weekly.current}
            previous={timeframes.weekly.previous}
            last={last}
            key={timeframes.weekly.previous}
            images={images}
          />
        ))}
    </>
  );
}
