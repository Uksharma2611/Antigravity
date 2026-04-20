'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styles from './RevenueChart.module.css';

const data = [
  { month: 'Jan', revenue: 18500, projected: 20000 },
  { month: 'Feb', revenue: 22300, projected: 22000 },
  { month: 'Mar', revenue: 19800, projected: 23000 },
  { month: 'Apr', revenue: 27400, projected: 25000 },
  { month: 'May', revenue: 25600, projected: 27000 },
  { month: 'Jun', revenue: 31200, projected: 29000 },
  { month: 'Jul', revenue: 29100, projected: 31000 },
  { month: 'Aug', revenue: 35800, projected: 33000 },
  { month: 'Sep', revenue: 33400, projected: 35000 },
  { month: 'Oct', revenue: 39200, projected: 37000 },
  { month: 'Nov', revenue: 42100, projected: 40000 },
  { month: 'Dec', revenue: 48350, projected: 43000 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload) return null;
  return (
    <div className={styles.tooltip}>
      <span className={styles.tooltipLabel}>{label}</span>
      {payload.map((entry) => (
        <div key={entry.dataKey} className={styles.tooltipRow}>
          <span
            className={styles.tooltipDot}
            style={{
              background:
                entry.dataKey === 'revenue' ? '#558dff' : 'rgba(226, 72, 255, 0.6)',
            }}
          />
          <span className={styles.tooltipKey}>
            {entry.dataKey === 'revenue' ? 'Actual' : 'Projected'}
          </span>
          <span className={styles.tooltipValue}>
            ${entry.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function RevenueChart() {
  return (
    <div className={styles.card} id="revenue-chart-card">
      <div className={styles.cardHeader}>
        <div>
          <h2 className={styles.title}>Revenue Overview</h2>
          <p className={styles.subtitle}>Projected vs actual growth over 12 months</p>
        </div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: '#558dff' }} />
            <span>Actual</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: 'rgba(226, 72, 255, 0.6)' }} />
            <span>Projected</span>
          </div>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#558dff" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#558dff" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="projectedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e248ff" stopOpacity={0.1} />
                <stop offset="100%" stopColor="#e248ff" stopOpacity={0.0} />
              </linearGradient>
              <filter id="glowFilter">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid
              stroke="rgba(66, 70, 85, 0.1)"
              strokeDasharray="0"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8c90a0', fontSize: 11, fontFamily: 'Inter' }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8c90a0', fontSize: 11, fontFamily: 'Inter' }}
              tickFormatter={(val) => `$${val / 1000}k`}
              dx={-5}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="projected"
              stroke="rgba(226, 72, 255, 0.4)"
              strokeWidth={2}
              fill="url(#projectedGradient)"
              strokeDasharray="6 4"
              dot={false}
              activeDot={{ r: 4, fill: '#e248ff', stroke: '#10131a', strokeWidth: 2 }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#558dff"
              strokeWidth={2.5}
              fill="url(#revenueGradient)"
              dot={false}
              activeDot={{ r: 5, fill: '#558dff', stroke: '#10131a', strokeWidth: 2 }}
              filter="url(#glowFilter)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
