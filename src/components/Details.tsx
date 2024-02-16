import "./Details.css";

interface props {
  currUser: {
    avatar: string;
    details: { city: string; company: string; position: string };
    id: number;
    name: string;
  };
}

export default function Details({ currUser }: props) {
  return (
    <div className="details-container">
      <div className="details-list">
        <img src={currUser.avatar} alt={''} className="detail-img" />
        <div className="detail-header">{currUser.name}</div>
        <div className="details">
        {currUser.details ? (<>
            <div className="detail">city: {currUser.details.city}</div>
            <div className="detail">company:  {currUser.details.company}</div>
            <div className="detail">position:  {currUser.details.position}</div>
          </>) : ("")}
        </div>
      </div>
    </div>
  );
}
