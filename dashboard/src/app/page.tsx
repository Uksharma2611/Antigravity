import styles from './page.module.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import StatCards from '@/components/StatCards/StatCards';
import RevenueChart from '@/components/RevenueChart/RevenueChart';
import TrafficChart from '@/components/TrafficChart/TrafficChart';
import TopProducts from '@/components/TopProducts/TopProducts';
import TransactionsTable from '@/components/TransactionsTable/TransactionsTable';

export default function Home() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main} role="main">
        <Header />
        <div className={styles.content}>
          {/* KPI Stats */}
          <section className={styles.section} id="kpi-section" aria-label="Key Performance Indicators">
            <StatCards />
          </section>

          {/* Revenue Chart */}
          <section className={styles.section} id="revenue-section" aria-label="Revenue Overview">
            <RevenueChart />
          </section>

          {/* Traffic + Products Row */}
          <section className={styles.chartsRow} id="charts-row" aria-label="Traffic and Product Analytics">
            <TrafficChart />
            <TopProducts />
          </section>

          {/* Transactions */}
          <section className={styles.section} id="transactions-section" aria-label="Recent Transactions">
            <TransactionsTable />
          </section>
        </div>
      </main>
    </div>
  );
}
