'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import styles from './TrafficChart.module.css';

const data = [
  { name: 'Direct', value: 35, color: '#558dff' },
  { name: 'Organic', value: 28, color: '#e248ff' },
  { name: 'Referral', value: 22, color: '#ffb692' },
  { name: 'Social', value: 15, color: '#66d9a0' },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; payload: { color: string } }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || !payload[0]) return null;
  const d = payload[0];
  return (
    <div className={styles.tooltip}>
      <span className={styles.tooltipDot} style={{ background: d.payload.color }} />
      <span className={styles.tooltipName}>{d.name}</span>
      <span className={styles.tooltipVal}>{d.value}%</span>
    </div>
  );
}

export default function TrafficChart() {
  const total = data.reduce((s, d) => s + d.value, 0);

  return (
    <div className={styles.card} id="traffic-chart-card">
      <div className={styles.cardHeader}>
        <h2 className={styles.title}>Traffic Sources</h2>
        <button className={styles.periodBtn} id="traffic-period-btn">
          This Month
          <span className="material-symbols-rounded" style={{ fontSize: 16 }}>expand_more</span>
        </button>
      </div>

      <div className={styles.chartWrap}>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={68}
              outerRadius={95}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
              cornerRadius={4}
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        {/* Center label */}
        <div className={styles.centerLabel}>
          <span className={styles.centerValue}>{total}%</span>
          <span className={styles.centerText}>Total</span>
        </div>
      </div>

      <div className={styles.legend}>
        {data.map((d) => (
          <div key={d.name} className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: d.color }} />
            <span className={styles.legendName}>{d.name}</span>
            <span className={styles.legendVal}>{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
