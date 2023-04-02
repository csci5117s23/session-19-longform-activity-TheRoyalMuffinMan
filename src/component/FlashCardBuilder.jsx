import { useState } from "react";
import "../style/flashcardbuilder.css";

export default function FlashCardBuilder({ setList }) {
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (front.length === 0 || back.length === 0) {
            return;
        }

        setList(oldList => {
            return [
                ...oldList, 
                {
                    key: oldList[oldList.length - 1].key + 1,
                    front: front,
                    back: back
                }
            ]
        });
    }

    return (
        <form className="card-form" onSubmit={handleSubmit}>
            <div className="input-section">
                <label htmlFor="front">Front</label>
                <input name="front" id="front" onChange={e => setFront(e.target.value)} required/>
            </div>
            <div className="input-section">
                <label htmlFor="back">Back</label>
                <input name="back" id="back" onChange={e => setBack(e.target.value)} required/>
            </div>
            <button>Submit</button>
        </form>
    );
}