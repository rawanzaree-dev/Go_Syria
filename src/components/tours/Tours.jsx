import "./tours.css";
import TourItem from "./TourItem";

export default function Tours({toursList}) {
    return (
        <div className="tours">
            <div className="container">
                {toursList.map((tour) =>
                        <TourItem tour={tour} />
                    )
                }
            </div>
        </div>
    );
}