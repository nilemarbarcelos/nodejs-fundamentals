import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface FetchTransaction {
  transactions: Transaction[];
  balance: {
    income: number;
    outcome: number;
    total: number;
  };
}

class FetchTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): FetchTransaction {
    const transactions = this.transactionsRepository.all();
    const balance = this.transactionsRepository.getBalance();

    return { transactions, balance };
  }
}

export default FetchTransactionService;
