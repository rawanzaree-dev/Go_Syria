import Rating from "./Rating";

export default function TourItem({tour}) {
    return (
        <div className="card">
            <img src={tour.image} alt={tour.title}/>
            <div className="content">
                <h2>{tour.title}</h2>
                <p className="duration">
                    {tour.duration}
                    <span> . Pickup available</span>
                </p>
                <Rating rating={tour.rating} reviews={tour.reviews}/>
                <div className="price">
                    <p>From ${tour.priceFrom}</p>
                    <span>per person</span>
                </div>
                <button className="card-btn">See More</button>
                <div className="label">Adventure</div>
            </div>
        </div>
    );
}