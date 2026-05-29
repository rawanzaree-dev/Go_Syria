import newsLetterImage from "../../images/news-letter.jpg";
import "./news-letter.css";

export default function NewsLetter() {
    return (
        <div className="news-letter">
            <div className="container">
                <div className="image">
                    <img src={newsLetterImage} alt="News Letter Section (Qassioun Mount)" />
                </div>
                <div className="content">
                    <h2>Your Syria Itinerary Is Waiting</h2>
                    <p>Recieve a curated 48-hour itinerary featuring the most iconic 
                        experiences in Dubai, straight to your inbox</p>
                    <form>
                        <input type="email" name="email" className="email" placeholder="Your Email"/>
                        <button>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}