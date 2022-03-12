import React from 'react';
import { observer } from 'mobx-react-lite';

function GameHistory() {
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

export default observer(GameHistory);
