<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Recharts-3-22b5bf?style=for-the-badge" alt="Recharts" />
</p>

# ✨ Luminal Pro — Analytics Dashboard

A premium, dark-themed analytics dashboard built with **Next.js 16**, **React 19**, and the **"Luminous Obsidian"** design system generated via [Stitch MCP](https://stitch.google.com). Features glassmorphism, neon glow effects, editorial typography, and interactive data visualizations.

---

## 🖥️ Preview

| Dashboard Overview | Charts & Data |
|---|---|
| KPI stat cards, revenue area chart | Traffic donut, top products bar chart, transactions table |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.17
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🏗️ Project Structure

```
dashboard/
├── src/
│   ├── app/
│   │   ├── globals.css              # Design system tokens & utilities
│   │   ├── layout.tsx               # Root layout with SEO metadata
│   │   ├── page.tsx                 # Dashboard page composition
│   │   └── page.module.css          # Page layout styles
│   └── components/
│       ├── Sidebar/                 # Collapsible navigation sidebar
│       │   ├── Sidebar.tsx
│       │   └── Sidebar.module.css
│       ├── Header/                  # Top bar with search & notifications
│       │   ├── Header.tsx
│       │   └── Header.module.css
│       ├── StatCards/               # 4 KPI metric cards
│       │   ├── StatCards.tsx
│       │   └── StatCards.module.css
│       ├── RevenueChart/            # Revenue area chart (Recharts)
│       │   ├── RevenueChart.tsx
│       │   └── RevenueChart.module.css
│       ├── TrafficChart/            # Traffic sources donut chart
│       │   ├── TrafficChart.tsx
│       │   └── TrafficChart.module.css
│       ├── TopProducts/             # Top products bar chart
│       │   ├── TopProducts.tsx
│       │   └── TopProducts.module.css
│       └── TransactionsTable/       # Recent transactions table
│           ├── TransactionsTable.tsx
│           └── TransactionsTable.module.css
├── public/                          # Static assets
├── next.config.ts                   # Next.js configuration
├── tsconfig.json                    # TypeScript config
└── package.json
```

---

## 🎨 Design System — "Luminous Obsidian"

The design system was generated using **Stitch MCP** and follows the *"Luminous Obsidian"* creative direction.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--surface` | `#10131a` | Base background |
| `--surface-container-low` | `#191c22` | Card backgrounds |
| `--surface-container-high` | `#272a31` | Elevated elements |
| `--primary` | `#b0c6ff` | Primary text accents |
| `--primary-container` | `#558dff` | Primary interactive elements |
| `--secondary-container` | `#e248ff` | Purple accent highlights |
| `--tertiary-container` | `#eb6a19` | Orange accents |
| `--on-surface` | `#e1e2eb` | Primary text |
| `--on-surface-variant` | `#c2c6d7` | Secondary text |

### Typography

- **Headlines**: [Manrope](https://fonts.google.com/specimen/Manrope) — Geometric, premium feel
- **Body & Labels**: [Inter](https://fonts.google.com/specimen/Inter) — High legibility for data
- **Icons**: [Material Symbols Rounded](https://fonts.google.com/icons)

### Design Principles

1. **No-Line Rule** — Boundaries defined by tonal shifts, not borders
2. **Glass & Gradient** — Glassmorphism with `backdrop-filter: blur(20px)`
3. **Ambient Shadows** — Neon-tinted glows instead of dark drop shadows
4. **Ghost Borders** — `outline-variant` at 15% opacity when boundaries are needed

---

## 📊 Components

### Sidebar
- Collapsible with smooth animation
- Active nav item with gradient glow indicator
- User profile section with online status

### Header
- Glassmorphic sticky navigation bar
- Search with keyboard shortcut hint (`⌘K`)
- Notification and message badges

### Stat Cards
- 4 KPI cards: Revenue, Users, Orders, Conversion Rate
- Neon accent bars with colored glows
- Trend badges (positive/negative)
- Glass sheen overlay effect

### Revenue Chart
- Area chart with 12-month data
- Dual series: Actual (solid) vs Projected (dashed)
- SVG glow filter on data lines
- Glassmorphic custom tooltip

### Traffic Sources
- Donut/pie chart with center percentage label
- 4 traffic sources with color-coded legend
- Period selector dropdown

### Top Products
- Horizontal bar chart with gradient colors
- 5 product entries
- Mini stats footer (Best Seller, Total Sales)

### Transactions Table
- 7 recent orders with customer avatars
- Pill-shaped status badges with dot indicators
- Color-coded statuses: Paid, Shipped, Pending, Cancelled

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2.4 | React framework (App Router) |
| [React](https://react.dev) | 19.2.4 | UI library |
| [TypeScript](https://typescriptlang.org) | 5.x | Type safety |
| [Recharts](https://recharts.org) | 3.8.1 | Data visualization |
| CSS Modules | — | Scoped component styles |
| [Stitch MCP](https://stitch.google.com) | — | Design system generation |

---

## 📝 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📄 License

This project is private and proprietary.

---

<p align="center">
  Built with ❤️ using <strong>Stitch MCP</strong> × <strong>Next.js</strong>
</p>
