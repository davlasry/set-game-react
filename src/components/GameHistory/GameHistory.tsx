import React, { useContext } from 'react';
import { GameStateContext } from '../../GameProvider';

export function GameHistory() {
  const { history } = useContext(GameStateContext);

  return (
    <div>
      <div>History</div>

      {/*{history.length === 0 ? (*/}
      {/*  <span> No history</span>*/}
      {/*) : (*/}
      {/*  // TODO: create reusable component*/}
      {/*  history.map((row, index) => {*/}
      {/*    return (*/}
      {/*      <div className="history-row" key={index}>*/}
      {/*        <div className="history-row__cards">*/}
      {/*          {row.cards.map((card) => (*/}
      {/*            <BoardCard key={card.id} card={card} width={50} />*/}
      {/*          ))}*/}
      {/*        </div>*/}
      {/*        <div>{row.status}</div>*/}
      {/*      </div>*/}
      {/*    );*/}
      {/*  })*/}
      {/*)}*/}
    </div>
  );
}
