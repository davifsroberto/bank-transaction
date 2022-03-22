import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { toast } from 'react-toastify';

import { api } from '../../services/api';
import { currencyFormatUtils } from '../../utils/currency.util';
import { dateFormateUtils } from '../../utils/date.utils';
import { Transaction } from '../../types/Transaction';
import { SearchTransaction } from '../../types/DescriptionTransaction';
import {
  hasDescriptionHelper,
  switchTransaction,
} from './helpers/find-transactions.helper';

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  filteredTransactions: Transaction[];
  onFindTransaction: (searchTransaction: SearchTransaction) => void;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export default function TransactionsProvider({
  children,
}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);

  useEffect(() => {
    getTransactions();
  }, []);

  async function getTransactions(): Promise<void> {
    try {
      await api.get('transactions').then((response) => {
        response.data.map((transaction: Transaction) => {
          transaction.datetime = dateFormateUtils(transaction.datetime);
          transaction.moneyFormatted = currencyFormatUtils(transaction.money);
        });

        setTransactions(response.data);
        setFilteredTransactions(response.data);
      });
    } catch (error) {
      console.error(error);

      toast.error('Ocorreu um erro desconhecido, tente novamente mais tarde.');
    }
  }

  function onFindTransaction(searchTransaction: SearchTransaction): void {
    if (!searchTransaction.description && !searchTransaction.type)
      return setFilteredTransactions(transactions);

    const filtered = transactions.filter((transaction: Transaction) => {
      if (!searchTransaction.type)
        return hasDescriptionHelper(transaction, searchTransaction);

      return switchTransaction(transaction, searchTransaction);
    });

    setFilteredTransactions(filtered);
  }

  return (
    <TransactionsContext.Provider
      value={{ filteredTransactions, onFindTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(): TransactionsContextData {
  const context = useContext(TransactionsContext);

  return context;
}
