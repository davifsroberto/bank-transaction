import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TransactionsProvider from './hooks/useTransactions';
import { GlobalStyle } from './styles/global';
import Transactions from './components/Transactions';

export function App() {
  return (
    <TransactionsProvider>
      <>
        <Transactions />

        <GlobalStyle />

        <ToastContainer />
      </>
    </TransactionsProvider>
  );
}
