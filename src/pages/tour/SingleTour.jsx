import { useParams } from "react-router-dom";
import { toursList } from "../../data";
import Rating from "../../components/tours/Rating";
import Booking from "./Booking";
import Footer from "../../components/footer/Footer";
import "./single-tour.css";

export default function SingleTour() {
  const { id } = useParams(),
    tour = toursList.find((t) => t.id === +id);

  return (
    <>
      <div className="tour-page">
        <div className="breadcrumbs">
          Syria <i className="bi bi-chevron-right"></i>
          Things To Do In Syria <i className="bi bi-chevron-right"></i>
          Tour
        </div>
        <div className="adventure-label">Adventure</div>
        <h1>Syria: {tour.title}</h1>
        <div className="info">
          <Rating rating={tour.rating} reviews={tour.reviews} />
          <div className="provider">
            Activity Provider: <span>Rawan Zaree</span>
          </div>
        </div>
        <div className="img-and-booking-wrapper">
          <img src={tour.image} alt={tour.title} />
          <Booking priceFrom={tour.priceFrom} />
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quasi,
          placeat fugiat soluta voluptatem exercitationem maiores omnis
          consequuntur quisquam ut non explicabo harum. Ratione harum id nam
          esse illo soluta deleniti nihil facilis animi sint quisquam expedita
          amet, velit architecto rem autem quis nulla aliquid sapiente debitis,
          nobis voluptatibus quas.
        </div>
        <div className="activity">
          <h2>About This Activity</h2>
          <div className="content">
            <div className="item">
              <i className="bi bi-calendar3" style={{ color: "#007a3d" }}></i>
              <div className="text">
                <h3>Free Cancellation</h3>
                <p>Cancel up to 24 hours in advance to recieve a full refund</p>
              </div>
            </div>
            <div className="item">
              <i
                className="bi bi-calendar-plus-fill"
                style={{ color: "#247abe" }}
              ></i>
              <div className="text">
                <h3>Reserve now & pay later</h3>
                <p>
                  Keep your travel plan flexible -- book your spot and pay
                  nothing
                </p>
              </div>
            </div>
            <div className="item">
              <i className="bi bi-virus" style={{ color: "#f55c3f" }}></i>
              <div className="text">
                <h3>Covid 19 precautions</h3>
                <p>
                  Special health and safety measures are in place. Check your
                  activity voucher once you book for full details.
                </p>
              </div>
            </div>
            <div className="item">
              <i
                className="bi bi-clock-history"
                style={{ color: "#9973a2" }}
              ></i>
              <div className="text">
                <h3>Duration 4 - 7 hours</h3>
                <p>Check availability to see staring times.</p>
              </div>
            </div>
            <div className="item">
              <i
                className="bi bi-person-check-fill"
                style={{ color: "#7b7a80" }}
              ></i>
              <div className="text">
                <h3>Live tour guide</h3>
                <p>English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
