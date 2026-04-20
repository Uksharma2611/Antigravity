'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import styles from './TopProducts.module.css';

const data = [
  { name: 'Quantum Pro', sales: 4280, color: '#558dff' },
  { name: 'Nova Shield', sales: 3450, color: '#7aa5ff' },
  { name: 'Flux Drive', sales: 2890, color: '#e248ff' },
  { name: 'Aether Core', sales: 2340, color: '#f8acff' },
  { name: 'Zenith Pod', sales: 1870, color: '#ffb692' },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; payload: { name: string; color: string } }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || !payload[0]) return null;
  const d = payload[0];
  return (
    <div className={styles.tooltip}>
      <span className={styles.tooltipName}>{d.payload.name}</span>
      <span className={styles.tooltipVal}>{d.value.toLocaleString()} sales</span>
    </div>
  );
}

export default function TopProducts() {
  return (
    <div className={styles.card} id="top-products-card">
      <div className={styles.cardHeader}>
        <h2 className={styles.title}>Top Products</h2>
        <button className={styles.viewAllBtn} id="products-view-all">
          View All
          <span className="material-symbols-rounded" style={{ fontSize: 16 }}>arrow_forward</span>
        </button>
      </div>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }} barSize={12}>
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8c90a0', fontSize: 11, fontFamily: 'Inter' }}
              tickFormatter={(val) => `${val / 1000}k`}
            />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#c2c6d7', fontSize: 12, fontFamily: 'Inter' }}
              width={90}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(85, 141, 255, 0.04)' }} />
            <Bar dataKey="sales" radius={[0, 6, 6, 0]}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Stats row */}
      <div className={styles.statsRow}>
        <div className={styles.miniStat}>
          <span className={styles.miniLabel}>Best Seller</span>
          <span className={styles.miniValue}>Quantum Pro</span>
        </div>
        <div className={styles.miniStat}>
          <span className={styles.miniLabel}>Total Sales</span>
          <span className={styles.miniValue}>14,830</span>
        </div>
      </div>
    </div>
  );
}
