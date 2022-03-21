import { render, waitFor } from '@testing-library/react';

import TransactionsList from '.';
import { Transaction } from '../../types/Transaction';

const transactions: Transaction[] = [
  {
    id: 1,
    description: 'Você pagou estacionamento',
    image: 'https://via.placeholder.com/200x200',
    datetime: '2022-03-15T18:25:43.511Z',
    money: 13.56,
    moneyFormatted: 'R$ 13,56',
    type: 'output',
  },
];

describe('TransactionList', () => {
  it('should check if property values are correct', async () => {
    const list = render(<TransactionsList transactions={transactions} />);

    const dataImage = await waitFor(
      () => list.getByTestId('image-data') as HTMLImageElement
    );
    const dataDesc = await waitFor(() => list.getByTestId('description-data'));
    const dataDateTime = await waitFor(() => list.getByTestId('datetime-data'));
    const dataMoney = await waitFor(() => list.getByTestId('money-data'));
    const newDateTime = new Date(dataDateTime.innerHTML);

    expect(dataImage.src).toContain('via.placeholder.com');
    expect(dataDesc.textContent).toContain('estacionamento');
    expect(newDateTime instanceof Date).toBe(true);
    expect(dataMoney.textContent).toContain('R$');
  });

  it('should check if class is correct', async () => {
    const list = render(<TransactionsList transactions={transactions} />);
    const dataMoney = await waitFor(() => list.getByTestId('money-data'));

    expect(dataMoney.classList.contains('out')).toBe(true);
  });
});
