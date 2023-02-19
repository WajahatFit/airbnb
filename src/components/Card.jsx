import star from "../images/star.png";
export default function Card({ data }) {
  return (
    <div className="card--container">
      <div className="card">
        <img src={data.img} alt="card-img" className="card--img" />
        <div className="card--stats">
          <img src={star} alt="star" />
          <span>{data.rating}</span>
          <span className="grey">({data.reviewCount}) ·</span>
          <span className="grey">{data.country}</span>
        </div>
        <p>{data.title}</p>
        <p>
          <span className="bold">FROM {data.price}€</span> / night
        </p>
      </div>
    </div>
  );
}
