import { Container, TransactionListItem } from './styles';
import { Transaction } from '../../types/Transaction';

type TransactionProps = {
  transactions: Transaction[];
};

export default function TransactionsList({ transactions }: TransactionProps) {
  return (
    <Container>
      {transactions.map((transaction: Transaction) => (
        <TransactionListItem key={transaction.id}>
          <img
            data-testid="image-data"
            src={transaction.image}
            alt="Transação"
          />

          <span data-testid="description-data">{transaction.description}</span>

          <section>
            <strong
              data-testid="money-data"
              className={transaction.type === 'output' ? 'out' : ''}
            >
              {transaction.moneyFormatted}
            </strong>

            <small data-testid="datetime-data">{transaction.datetime}</small>
          </section>
        </TransactionListItem>
      ))}
    </Container>
  );
}
