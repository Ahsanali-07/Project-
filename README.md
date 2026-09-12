# CircularX — Circular Packaging & Materials Exchange

**Team Dinosaur** — Azifa Shaikh, Palak Keswani, Bhavy Chauhan, Devesh Rawat

A B2B marketplace where manufacturers, retailers, warehouses and recyclers can
list, discover, and reuse surplus packaging materials instead of sending them
to landfill — cardboard, wooden pallets, plastics, paper, containers and more.

> "Turn surplus into opportunity and waste into a resource."

This repo currently contains the **frontend landing page / marketplace UI**
described in the hackathon problem statement. It is a working prototype with
mock data — the Flask + SQLite backend it's designed to plug into does not
exist yet (see [Backend integration](#backend-integration-next-step) below).

---

## What's implemented

- **Navbar** — Home / Listings / Directory / For Sale / About / Contact links
  (routed as plain paths for now — those pages don't exist yet, this is a
  single-page app), a **Sell Materials** button, a working **cart** icon with
  live item-count badge, and a **Login / Signup** button.
- **Cart drawer** (Amazon-style slide-in panel) — add materials from any
  listing card, adjust quantity in MOQ steps, remove items, see a live
  subtotal. Persisted to `localStorage` so it survives a page refresh.
- **Marketplace** — search by keyword, filter by category / condition / price
  / minimum quantity / location, sort by price/quantity/distance, paginated
  "Load More" listing grid. Each material card shows category, condition,
  quantity available, MOQ, price, seller, location + distance, and a verified
  badge — matching the fields called out in the problem statement (section 6.1).
- **Category quick-filters**, a **flow strip** (Surplus → Listing → Match →
  Exchange → Reuse), a **How It Works** section split by buyer/seller flow,
  a **Sustainability Impact Dashboard** (materials reused, waste diverted,
  cost savings, CO₂ avoided — section 6.7), and a **Why CircularX** section.
- Fully responsive (mobile nav drawer, stacking grids) and designed to read
  as a premium/enterprise B2B product (Balebid-style: dense information,
  trust signals, utility-first layout) rather than a generic template.

## Tech stack

| Layer      | Choice                                             |
|------------|-----------------------------------------------------|
| Frontend   | React 19 + Vite                                     |
| Icons      | [lucide-react](https://lucide.dev) (open-source, tree-shakable) |
| Fonts      | Google Fonts — Sora (display) + Inter (body)        |
| State      | React Context (`CartContext`) + `localStorage`      |
| Styling    | Plain CSS with design tokens (`src/index.css`), no framework |
| Backend *(planned)* | Python Flask, REST API                     |
| Database *(planned)*| SQLite (prototype) → Postgres (scale)      |

Why React over the plain HTML/CSS/JS in the original doc: component reuse
(one `MaterialCard`, one `CartContext`) makes it much faster to wire real API
data in later without rewriting the UI — swap `src/data/materials.js` for a
`fetch()` call and everything downstream (filtering, sorting, cart) keeps
working unchanged.

## Project structure

```
src/
  components/       UI building blocks (Navbar, CartDrawer, Marketplace, ...)
  context/
    CartContext.jsx cart state: add/remove/update qty, persisted to localStorage
  data/
    materials.js     mock listings — replace with API data later
  App.jsx             page composition
  App.css             all component styling (design tokens live in index.css)
  index.css            CSS variables, reset, global typography
```

## Running locally

```bash
npm install
npm run dev       # starts Vite dev server (default: http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

Requires Node 18+.

## Backend integration (next step)

The UI is already shaped around the data model in the problem statement, so
wiring a real backend mainly means replacing the mock layer:

1. Build the Flask REST API: `GET /materials` (with query params for search/
   filter/sort), `POST /materials` (create listing), `POST /requests` (cart
   checkout → purchase request), `GET /impact` (dashboard metrics).
2. Replace `src/data/materials.js` with a `fetch`/`axios` call in
   `Marketplace.jsx` (ideally via a small `api/` module + React Query or
   plain `useEffect`).
3. Add auth (JWT or session) for the Login/Signup button and gate the
   "Sell Materials" flow behind it.
4. Build out the pages the navbar already links to: `/listings`, `/directory`,
   `/for-sale`, `/about`, `/contact`, `/sell`, `/login` — this is a single
   page today, so the natural next step is React Router.
5. Wire the "Send Purchase Request" button in the cart drawer to
   `POST /requests` and drive it through the `Requested → Confirmed →
   Completed` status flow described in the problem statement.

## Future scope (from the problem statement)

AI-powered material classification, demand-supply prediction, route
optimization, real-time logistics tracking, payment gateway integration,
business verification & trust ratings, verified-lifecycle carbon footprint
calculation, automated notifications, and circularity analytics per business.

## Notes for judges

Sample listings, seller names, and impact numbers on this page are
illustrative mock data for demo purposes, not live figures.
