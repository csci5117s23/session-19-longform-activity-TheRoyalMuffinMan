import { useState } from "react";
import "../style/flashcard.css";

export default function FlashCard(props) {
    // False -> Front, True -> Back
    const [flipped, setFlipped] = useState(false);

    return (
        <div 
            className={`${flipped ? 'flipped' : 'not-flipped'}`}
            onClick={e => setFlipped(!flipped)}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {props.front}
                </div>
                <div className="flip-card-back">
                    {props.back}
                </div>
            </div>
        </div>
    );
}