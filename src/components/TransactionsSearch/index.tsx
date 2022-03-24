import { useEffect, useState } from 'react';

import { useTransactions } from '../../hooks/useTransactions';
import { Container, Input, Select } from './styles';

export default function TransactionsSearch() {
  const { onFindTransaction } = useTransactions();

  const [typeTransaction, setTypeTransaction] = useState<string>('');
  const [descTransaction, setDescTransaction] = useState<string>('');

  useEffect(() => {
    onFindTransaction({ type: typeTransaction, description: descTransaction });
  }, [typeTransaction, descTransaction]);

  function handleTypeTransaction(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    setTypeTransaction(event.target.value);
  }

  function handleDescTransaction(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    if (event.target.value !== descTransaction)
      setDescTransaction(event.target.value);
  }

  return (
    <Container>
      <Input
        onChange={handleDescTransaction}
        data-testid="description-search"
        placeholder="Buscar movimentação..."
      />

      <Select onChange={handleTypeTransaction} data-testid="type-search">
        <option value="">Todas</option>
        <option value="input">Entrada</option>
        <option value="output">Saída</option>
      </Select>
    </Container>
  );
}
