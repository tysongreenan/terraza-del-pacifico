async page => {
  const ABS = '/Users/tyson/SEO-SWY/reports/TDP/capture';
  const BASE = 'https://terrazadelpacifico.com';

  const PAGES = [
    ['home', '/'],
    ['habitaciones', '/habitaciones'],
    ['habitaciones-superior', '/habitaciones/superior'],
    ['habitaciones-estandar', '/habitaciones/estandar'],
    ['habitaciones-junior-suite', '/habitaciones/junior-suite'],
    ['habitaciones-villas', '/habitaciones/villas'],
    ['restaurante', '/restaurante'],
    ['eventos', '/eventos'],
    ['eventos-bodas', '/eventos/bodas'],
    ['eventos-otros', '/eventos/otros'],
    ['eventos-surf-nights', '/eventos/surf-nights'],
    ['experiencias', '/experiencias'],
    ['galeria', '/galeria'],
    ['sobre-nosotros', '/sobre-nosotros'],
    ['politicas', '/politicas'],
    ['blog', '/blog'],
    ['blog-newsletter-febrero', '/blog/newsletter-febrero'],
  ];

  const results = [];
  for (const [slug, path] of PAGES) {
    try {
      await page.goto(BASE + path, { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(2500);
      try { await page.waitForSelector('h1', { timeout: 4000 }); } catch (e) {}

      await page.screenshot({ path: `${ABS}/screenshots/${slug}.png`, fullPage: true });

      const data = await page.evaluate(() => {
        const txt = (el) => (el ? el.innerText.trim().replace(/\s+/g, ' ') : '');
        return {
          url: location.href,
          title: document.title,
          desc: (document.querySelector('meta[name=description]') || {}).content || '',
          h1: [...document.querySelectorAll('h1')].map((h) => h.innerText.trim()),
          outline: [...document.querySelectorAll('h1,h2,h3')].map((h) => h.tagName + ': ' + txt(h)),
          imgs: [...document.querySelectorAll('img')].map((i) => i.getAttribute('src')).filter(Boolean),
          ctas: [...new Set([...document.querySelectorAll('a,button')].map((b) => b.innerText.trim()).filter((t) => t && t.length < 40))],
          text: document.body.innerText,
        };
      });
      data.slug = slug;
      results.push(data);
    } catch (e) {
      results.push({ slug, url: BASE + path, error: e.message });
    }
  }
  return JSON.stringify(results);
}
