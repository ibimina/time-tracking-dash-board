

import Acivities from "../components/Acivities";
import Report from "../components/Report";

export default function Monthly({time}) {
    const last = "Last Month"
  return (
    <>
 
      {time &&
        time.map(({ title, timeframes, images }) => (
          <Acivities
            title={title}
            current={timeframes.monthly.current}
            previous={timeframes.monthly.previous}
            last={last}
            key={timeframes.monthly.current}
          images={images}
          />
        ))}
    </>
  );
}
