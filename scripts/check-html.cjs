const http = require('http');
const url = 'http://127.0.0.1:4321/';
http.get(url, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const checks = {
      lang: data.includes('lang="es-AR"'),
      h1: data.includes('<h1 '),
      main: data.includes('<main id="main"'),
      heroFondoHero: data.includes('fondo_hero'),
      preload: data.includes('rel="preload" as="image" href="/fondo_hero'),
      canonical: data.includes('rel="canonical"'),
      ogType: data.includes('og:type'),
      twitterCard: data.includes('twitter:card'),
      jsonLd: data.includes('application/ld+json'),
      faviconSvg: data.includes('favicon.svg'),
      skipLink: data.includes('skip-link'),
      accountingService: data.includes('AccountingService'),
      noGoogleFonts: !data.includes('fonts.googleapis.com'),
      noGstatic: !data.includes('fonts.gstatic.com'),
      noFondoWebp: !data.includes('fondo.webp'),
      hamburger: data.includes('aria-expanded="false"'),
      menuControls: data.includes('aria-controls="primary-nav"'),
      heroHref: /href="#servicios"/.test(data),
      mainId: data.includes('id="main"'),
    };
    for (const k of Object.keys(checks)) {
      console.log((checks[k] ? 'OK   ' : 'FAIL ') + k);
    }
  });
});
