'use client';

import styles from './StatCards.module.css';

interface StatCardData {
  id: string;
  icon: string;
  label: string;
  value: string;
  change: number;
  subtitle: string;
  accentColor: 'primary' | 'secondary' | 'tertiary' | 'error';
}

const stats: StatCardData[] = [
  {
    id: 'stat-revenue',
    icon: 'account_balance_wallet',
    label: 'Total Revenue',
    value: '$48,350',
    change: 12.5,
    subtitle: 'vs last month',
    accentColor: 'primary',
  },
  {
    id: 'stat-users',
    icon: 'group',
    label: 'Active Users',
    value: '12,845',
    change: 5.2,
    subtitle: 'Real-time sessions',
    accentColor: 'secondary',
  },
  {
    id: 'stat-orders',
    icon: 'shopping_bag',
    label: 'New Orders',
    value: '1,245',
    change: -2.1,
    subtitle: 'Processed today',
    accentColor: 'tertiary',
  },
  {
    id: 'stat-conversion',
    icon: 'trending_up',
    label: 'Conversion Rate',
    value: '3.24%',
    change: 0.5,
    subtitle: 'Campaign performance',
    accentColor: 'primary',
  },
];

export default function StatCards() {
  return (
    <div className={styles.grid}>
      {stats.map((stat, idx) => (
        <div
          key={stat.id}
          className={styles.card}
          id={stat.id}
          style={{ animationDelay: `${idx * 80}ms` }}
        >
          {/* Neon accent bar */}
          <div className={`${styles.accentBar} ${styles[stat.accentColor]}`} />

          <div className={styles.cardHeader}>
            <div className={`${styles.iconWrap} ${styles[`icon_${stat.accentColor}`]}`}>
              <span className="material-symbols-rounded" style={{ fontSize: 20 }}>
                {stat.icon}
              </span>
            </div>
            <span className={styles.label}>{stat.label}</span>
          </div>

          <div className={styles.valueRow}>
            <span className={styles.value}>{stat.value}</span>
            <div className={`${styles.changeBadge} ${stat.change >= 0 ? styles.positive : styles.negative}`}>
              <span className="material-symbols-rounded" style={{ fontSize: 14 }}>
                {stat.change >= 0 ? 'trending_up' : 'trending_down'}
              </span>
              <span>{stat.change >= 0 ? '+' : ''}{stat.change}%</span>
            </div>
          </div>

          <span className={styles.subtitle}>{stat.subtitle}</span>

          {/* Glass sheen effect */}
          <div className={styles.glassSheen} />
        </div>
      ))}
    </div>
  );
}
