'use client';

import styles from './TransactionsTable.module.css';

interface Transaction {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Shipped' | 'Cancelled';
  date: string;
}

const transactions: Transaction[] = [
  { id: '#ORD-7291', customer: 'Elena Voss', product: 'Quantum Pro', amount: '$1,249.00', status: 'Paid', date: 'Apr 20, 2026' },
  { id: '#ORD-7290', customer: 'Marcus Chen', product: 'Nova Shield', amount: '$849.50', status: 'Shipped', date: 'Apr 19, 2026' },
  { id: '#ORD-7289', customer: 'Aria Patel', product: 'Flux Drive', amount: '$2,100.00', status: 'Pending', date: 'Apr 19, 2026' },
  { id: '#ORD-7288', customer: 'James Okafor', product: 'Aether Core', amount: '$599.99', status: 'Paid', date: 'Apr 18, 2026' },
  { id: '#ORD-7287', customer: 'Sofia Laurent', product: 'Zenith Pod', amount: '$1,750.00', status: 'Cancelled', date: 'Apr 18, 2026' },
  { id: '#ORD-7286', customer: 'Kai Tanaka', product: 'Quantum Pro', amount: '$1,249.00', status: 'Shipped', date: 'Apr 17, 2026' },
  { id: '#ORD-7285', customer: 'Lena Schulz', product: 'Nova Shield', amount: '$849.50', status: 'Paid', date: 'Apr 17, 2026' },
];

const statusConfig: Record<Transaction['status'], { color: string; dotColor: string }> = {
  Paid: { color: 'rgba(102, 217, 160, 0.12)', dotColor: '#66d9a0' },
  Shipped: { color: 'rgba(85, 141, 255, 0.12)', dotColor: '#558dff' },
  Pending: { color: 'rgba(255, 182, 146, 0.12)', dotColor: '#ffb692' },
  Cancelled: { color: 'rgba(255, 113, 108, 0.12)', dotColor: '#ff716c' },
};

export default function TransactionsTable() {
  return (
    <div className={styles.card} id="transactions-card">
      <div className={styles.cardHeader}>
        <div>
          <h2 className={styles.title}>Recent Transactions</h2>
          <p className={styles.subtitle}>Latest orders and their status</p>
        </div>
        <button className={styles.exportBtn} id="export-btn">
          <span className="material-symbols-rounded" style={{ fontSize: 18 }}>download</span>
          Export
        </button>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table} id="transactions-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr key={tx.id} className={styles.row} style={{ animationDelay: `${0.5 + idx * 0.05}s` }}>
                <td>
                  <span className={styles.orderId}>{tx.id}</span>
                </td>
                <td>
                  <div className={styles.customerCell}>
                    <div className={styles.customerAvatar}>
                      {tx.customer.charAt(0)}
                    </div>
                    <span>{tx.customer}</span>
                  </div>
                </td>
                <td><span className={styles.productName}>{tx.product}</span></td>
                <td><span className={styles.amount}>{tx.amount}</span></td>
                <td>
                  <span
                    className={styles.statusBadge}
                    style={{
                      background: statusConfig[tx.status].color,
                      color: statusConfig[tx.status].dotColor,
                    }}
                  >
                    <span
                      className={styles.statusDot}
                      style={{ background: statusConfig[tx.status].dotColor }}
                    />
                    {tx.status}
                  </span>
                </td>
                <td><span className={styles.date}>{tx.date}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
