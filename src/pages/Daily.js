import Acivities from "../components/Acivities";

export default function Daily({ time }) {
    const last ="Previous Day"
  return (
    <>

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
