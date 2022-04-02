import { useEffect, useState } from "react";
import axios from "axios";

interface CardsProp {
  card: string;
  suit: string;
}

export const Cards = () => {
  const [cards, setCards] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`api/hand`);
      setCards(res.data.cards);
    };
    getData();
  }, []);

  return (
    <section>
      {cards.length === 0 && <p>Loading...</p>}
      {cards.length > 0 &&
        cards.map((card: CardsProp, index: number) => (
          <p key={index}>
            Card {index + 1}: {card.card} of {card.suit}
          </p>
        ))}
    </section>
  );
};
