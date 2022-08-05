import Acivities from "../components/Acivities";
import Report from "../components/Report";
export default function Daily({ time }) {
    const last ="Previous Day"
  return (
    <>
    <Report/>
      {time &&
        time.map(({ title, timeframes, images }) => (
          <Acivities
            title={title}
            current={timeframes.daily.current}
            previous={timeframes.daily.previous}
            last={last}
            key={title}
            images={images}
          />
        ))}
    </>
  );
}
