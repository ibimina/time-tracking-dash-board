import elip from "../images/icon-ellipsis.svg"


export default function Acivities({ title, current, previous, last,images }) {
  return (
    <div className="con">
      <div className={`images ${title.toLowerCase()}`}>
       
      </div>
      <div key={title} className="activities">
        <div className="head ">
          <h2 className="title">{title}</h2>
          <img src={elip} alt="ellipsis icon" className="elli" />
        </div>
        <div className="head time">
          <p className="curr">{current}hrs</p>
          <p className="prev">
            {last}-{previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
