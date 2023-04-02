import { useState } from "react";
import Header from "./component/Header";
import FlashCardList from "./component/FlashCardList";
import FlashCardBuilder from "./component/FlashCardBuilder";

export default function App() {
    const [list, setList] = useState([{key: 0, front: "Whats your favorite color?", back: "Green"}]);

    return (
        <div 
            style={{
                minHeight: "100vh",
                background: "#F5F5F5",
                display: "flex",
                flexDirection: "column",
                fontFamily: "'Oxygen', sans-serif"
            }}
        >
            <Header />
            <FlashCardList list={list}/>
            <FlashCardBuilder setList={setList} />
        </div>
    );
}