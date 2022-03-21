import { Container } from './styles';
import TransactionsList from '../TransactionsList';
import TransactionsSearch from '../TransactionsSearch';
import { useTransactions } from '../../hooks/useTransactions';

export default function Transactions() {
  const { filteredTransactions } = useTransactions();

  return (
    <Container>
      <h2 data-testid="page-title">Sua movimentação bancária</h2>

      <TransactionsSearch />

      <TransactionsList transactions={filteredTransactions} />
    </Container>
  );
}
