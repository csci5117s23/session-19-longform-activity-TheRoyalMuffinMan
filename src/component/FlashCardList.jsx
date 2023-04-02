import FlashCard from "./FlashCard";

export default function FlashCardList({ list }) {
    return (
        <main 
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gridGap: "1.25rem",
                padding: "1.5rem 0.5rem"
            }}
        >
            {list.map(card => 
                <FlashCard 
                    key={card.key}
                    front={card.front} 
                    back={card.back}
                />)}
        </main>
    );
}