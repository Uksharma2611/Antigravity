'use client';

import { useState } from 'react';
import styles from './Sidebar.module.css';

const navItems = [
  { icon: 'dashboard', label: 'Dashboard', active: true },
  { icon: 'analytics', label: 'Analytics', active: false },
  { icon: 'group', label: 'Users', active: false },
  { icon: 'inventory_2', label: 'Products', active: false },
  { icon: 'shopping_cart', label: 'Orders', active: false },
  { icon: 'settings', label: 'Settings', active: false },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      {/* Brand */}
      <div className={styles.brand}>
        <div className={styles.logoIcon}>
          <span className="material-symbols-rounded" style={{ fontSize: 28, color: 'var(--primary-container)' }}>
            blur_on
          </span>
        </div>
        {!collapsed && (
          <div className={styles.brandText}>
            <span className={styles.brandName}>Luminal</span>
            <span className={styles.brandTag}>PRO</span>
          </div>
        )}
        <button
          className={styles.collapseBtn}
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle sidebar"
          id="sidebar-toggle"
        >
          <span className="material-symbols-rounded">
            {collapsed ? 'chevron_right' : 'chevron_left'}
          </span>
        </button>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navSection}>
          {!collapsed && <span className={styles.navLabel}>Main Menu</span>}
          <ul className={styles.navList}>
            {navItems.map((item, idx) => (
              <li key={item.label}>
                <button
                  className={`${styles.navItem} ${activeIndex === idx ? styles.navItemActive : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  id={`nav-${item.label.toLowerCase()}`}
                >
                  <span className={`material-symbols-rounded ${styles.navIcon}`}>
                    {item.icon}
                  </span>
                  {!collapsed && <span className={styles.navText}>{item.label}</span>}
                  {activeIndex === idx && <div className={styles.activeIndicator} />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* User Profile */}
      <div className={styles.userSection}>
        <div className={styles.userAvatar}>
          <span className={styles.avatarInitial}>A</span>
          <div className={styles.onlineIndicator} />
        </div>
        {!collapsed && (
          <div className={styles.userInfo}>
            <span className={styles.userName}>Alex Rivera</span>
            <span className={styles.userRole}>System Architect</span>
          </div>
        )}
        {!collapsed && (
          <button className={styles.moreBtn} id="user-menu-btn" aria-label="User menu">
            <span className="material-symbols-rounded" style={{ fontSize: 18 }}>more_horiz</span>
          </button>
        )}
      </div>
    </aside>
  );
}
