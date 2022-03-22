import { SearchTransaction } from '../../../types/DescriptionTransaction';
import { Transaction } from '../../../types/Transaction';

export function hasDescriptionHelper(
  transaction: Transaction,
  searchTransaction: SearchTransaction
): boolean {
  return transaction.description
    .toLowerCase()
    .includes(searchTransaction.description.toLowerCase());
}

export function switchTransaction(
  transaction: Transaction,
  searchTransaction: SearchTransaction
): boolean {
  switch (isInputHelper(searchTransaction.type)) {
    case true:
      return (
        isInputHelper(transaction.type) &&
        hasDescriptionHelper(transaction, searchTransaction)
      );

    case false:
      return (
        !isInputHelper(transaction.type) &&
        hasDescriptionHelper(transaction, searchTransaction)
      );
  }

  function isInputHelper(type: string): boolean {
    return type !== 'output' && type !== '';
  }
}
