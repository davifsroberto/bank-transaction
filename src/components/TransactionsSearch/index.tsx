import { useEffect, useState } from 'react';

import { useTransactions } from '../../hooks/useTransactions';
import { Container, Input, Select } from './styles';

import React from 'react';

export default function TransactionsSearch() {
  const { onFindTransaction } = useTransactions();

  const [typeTransaction, setTypeTransaction] = useState<string>('');
  const [descTransaction, setDescTransaction] = useState<string>('');

  useEffect(() => {
    onFindTransaction({ type: typeTransaction, description: descTransaction });
  }, [typeTransaction, descTransaction]);

  function handleTypeTransaction(type: string): void {
    setTypeTransaction(type);
  }

  function handleDescTransaction(description: string): void {
    if (description !== descTransaction) setDescTransaction(description);
  }

  return (
    <Container>
      <Input
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          handleDescTransaction((e.target as HTMLInputElement).value);
        }}
        data-testid="description-search"
        placeholder="Buscar movimentação..."
      />

      <Select
        onChange={(e) => {
          handleTypeTransaction(e.target.value);
        }}
        data-testid="type-search"
      >
        <option value="">Todas</option>
        <option value="input">Entrada</option>
        <option value="output">Saída</option>
      </Select>
    </Container>
  );
}
