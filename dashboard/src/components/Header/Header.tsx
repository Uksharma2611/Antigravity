'use client';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header} id="main-header">
      <div className={styles.headerLeft}>
        <h1 className={styles.pageTitle}>Dashboard</h1>
        <span className={styles.breadcrumb}>
          <span className={styles.breadcrumbMuted}>Home</span>
          <span className="material-symbols-rounded" style={{ fontSize: 16, color: 'var(--outline)' }}>chevron_right</span>
          <span>Overview</span>
        </span>
      </div>

      <div className={styles.headerRight}>
        {/* Search */}  
        <div className={styles.searchWrapper} id="header-search">
          <span className={`material-symbols-rounded ${styles.searchIcon}`}>search</span>
          <input
            type="text"
            placeholder="Search anything..."
            className={styles.searchInput}
            id="search-input"
          />
          <div className={styles.searchShortcut}>
            <kbd>⌘</kbd><kbd>K</kbd>
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.actionBtn} id="notification-btn" aria-label="Notifications">
            <span className="material-symbols-rounded">notifications</span>
            <span className={styles.badge}>3</span>
          </button>
          <button className={styles.actionBtn} id="messages-btn" aria-label="Messages">
            <span className="material-symbols-rounded">chat_bubble</span>
            <span className={styles.badge}>7</span>
          </button>
          <div className={styles.divider} />
          <button className={styles.profileBtn} id="header-profile-btn">
            <div className={styles.profileAvatar}>
              <span className={styles.profileInitial}>A</span>
            </div>
            <span className="material-symbols-rounded" style={{ fontSize: 18, color: 'var(--outline)' }}>
              expand_more
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
