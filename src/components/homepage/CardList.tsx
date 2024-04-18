import React from "react";
import { cardData } from "./CardsData";
import CardHome from "./CardHome";

export default function CardList() {
  const sortedCardData = [...cardData].sort((a, b) => a.order - b.order);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="hidden md:block md:col-span-1">
        {sortedCardData
          .filter((card) => card.order % 3 === 1)
          .map((card) => (
            <CardHome key={card.order} color={card.color}>
              {card.layout}
            </CardHome>
          ))}
      </div>
      <div className="hidden md:block md:col-span-1">
        {sortedCardData
          .filter((card) => card.order % 3 === 2)
          .map((card) => (
            <CardHome key={card.order} color={card.color}>
              {card.layout}
            </CardHome>
          ))}
      </div>
      <div className="hidden md:block md:col-span-1">
        {sortedCardData
          .filter((card) => card.order % 3 === 0)
          .map((card) => (
            <CardHome key={card.order} color={card.color}>
              {card.layout}
            </CardHome>
          ))}
      </div>
      <div className="md:hidden">
        {sortedCardData.map((card) => (
          <CardHome key={card.order} color={card.color}>
            {card.layout}
          </CardHome>
        ))}
      </div>
    </div>
  );
}
