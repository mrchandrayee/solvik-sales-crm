# Solvik — Sales CRM Dashboard

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/solvik-sales-crm/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive, no-build Sales CRM dashboard reconstructed from the supplied 6-second screen recording.

## Run locally
Open `index.html` in a modern browser. No npm install or build step is needed.

Optional local server:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## Views implemented
- **Overview:** Sales Overview, headline KPIs, revenue trend, hot deals, team quota, stage mix
- **Pipeline:** Qualification, Proposal, Negotiation and Closing kanban columns, search, stage filter, deal details and stage updates
- **Customers:** Customer directory, segment filters, search, relationship cards and detail dialogs
- **Schedule:** Weekly calendar, meetings, follow-ups and new-event interaction
- **Finance:** Revenue performance and recent transaction list
- **Growth:** Revenue by segment, lead-source donut, new-customer and win-rate panels
- **Projects:** Project cards and delivery progress

## Interactions
- Navigate between all seven sections using top tabs or left rail
- Change revenue period in Overview and Growth
- Search and filter deals/customers
- Open deal/customer detail panels
- Move a deal between pipeline stages
- Add a new deal (and export deal/customer/finance data as CSV)
- Toggle light/dark theme
- Modal dialogs, toast feedback and responsive mobile layout

## Video source fragment
`src/ui.ts` contains the legible `src/ui.ts` fragment transcribed from the video:
- box/target measurements (`W`, `H`, `L`, `R`, `T`, `B`)
- `clip()` helper using `inset(... round 999px)`
- direction check `L > prev[0]`
- two GSAP tweens that animate the leading/trailing edges with `0.55s` / `0.36s` and `power3.inOut` / `power3.out`

The recording exposes only this short TypeScript snippet, not the original full repository. It is kept as a source reference and is not imported into the dependency-free demo.

## Demo data / production note
Company names, people, deal values, metrics, dates, activity and project progress are representative sample data based on the screen content. This is a front-end prototype only: no CRM database, authentication, email, calendar sync, payments or external APIs are connected. Changes are local to the browser session.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
