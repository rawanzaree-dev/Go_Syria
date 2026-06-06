export default function SingleTour({priceFrom}) {
  return (
    <div className="booking">
      <div className="first-phrase">
        <p>Save Up to 35%</p>
      </div>
      <div className="content">
        <div className="booking-label">Booked 42 times yesterday</div>
        <div className="book-now">
          <div className="price">
            <p>${priceFrom}</p>
            <span>per person</span>
          </div>
          <button>Book Now</button>
        </div>
        <div className="second-phrase">
          <i class="bi bi-calendar-check"></i>
          Reserve now and pay later to book your spot and pay nothing today
        </div>
      </div>
    </div>
  );
}