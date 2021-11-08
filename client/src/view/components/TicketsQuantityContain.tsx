import { FC } from 'react';
import { Ticket } from './Ticket';
import '../../../src/css/custom.css';
import 'materialize-css/dist/css/materialize.min.css';

export type TicketsQuantityContainProps = {
  EventName?: string,
};

const tickets = [
  {
    id: '1',
    number: '001',
    encash: true
  },
  {
    id: '2',
    number: '002',
    encash: true
  },
  {
    id: '3',
    number: '003',
    encash: true
  },
  {
    id: '4',
    number: '004',
    encash: true
  },
  {
    id: '5',
    number: '005',
    encash: true
  },
  {
    id: '6',
    number: '006',
    encash: false
  },
  {
    id: '7',
    number: '007',
    encash: true
  },
  {
    id: '8',
    number: '008',
    encash: false
  }
];

export const TicketsQuantityContain: FC<TicketsQuantityContainProps> = ({ EventName }) => {
  const ticketsArr = tickets.map(ticket => {
    return (
      <Ticket key={ticket.id} number={ticket.number} encash={ticket.encash} />
    );
  });
  return (
    <div>
      <div className="row">
        <h3 className="center-align">{EventName}</h3>
        </div>
      <div className="row">{ticketsArr}</div>
    </div>
  );
};
