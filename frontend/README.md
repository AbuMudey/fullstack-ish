# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Render:
https://fullstack-1fmj.onrender.com/

//
beskriva vad Content Delivery Networks och monitorering är, vad dessa tjänster har för fördelar samt ge exempel på tjänster som kan användas för detta

Content Delivery Networks (CDN) är geografiskt distribuerade nätverk av servrar som lagrar och levererar innehåll (data). Genom att lagra kopior av innehåll på servrar i olika delar av världen kan en CDN minska laddningstiden genom att låta användare hämta data från en server som är fysiskt nära dem, istället för från en central server som kan vara långt borta.
Exempelvis hämtar jag information från en server i Sverige går det betydligt snabbare än att hämta niformation från en server i Japan.
Amazon CloudFront är ett exempel på en CDN tjänst.

Monitorering  är som det låter. Det är att övervaka en applikation eller server för att säkerställa att den fungerar korrekt. Genom monitorering kan man upptäcka problem i realtid, Monitorering sker vanligtvis via mjukvara som loggar händelser, kontrollerar resurser och skickar varningar när något avviker från det normala.
Exempel på tjänster Datalog, Prometheus och New Relic

Både CDN och Monitorering är viktiga delar av en webbaserad applikation eller tjänst. CDN förbättrar användarupplevelsen genom att öka hastighet och tillgänglighet, medan monitorering hjälper dig att säkerställa att applikationen alltid är uppe och presterar som den ska.