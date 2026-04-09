/* ── i18n toggle ── */
const i18n = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    'hero.greeting': "Hello, I'm",
    'hero.title': 'Data Analytics \u00b7 AI Engineering \u00b7 Cloud Automation',
    'hero.sub': 'Oxford & Melbourne-trained data scientist building intelligent systems<br>that turn complexity into clarity.',
    'hero.cta1': 'View Projects',
    'hero.cta2': 'Get in Touch',

    'stats.projects': 'Projects Shipped',
    'stats.industries': 'Industries',
    'stats.degrees': 'Degrees',

    'about.label': '01 / About',
    'about.heading': 'Building at the intersection of<br><em>data, AI, and impact.</em>',
    'about.p1': "I'm a data analytics and AI professional with hands-on experience building analytics pipelines, machine-learning and NLP models, and deploying AI workflows on cloud platforms. My work spans consulting, transport, finance, health, and real estate \u2014 always focused on translating data into operational improvements.",
    'about.p2': 'With an MSc from <strong>Oxford</strong> (Cohort Dux) and a Master of Business Analytics from <strong>Melbourne Business School</strong> (Ranked 2nd), I bring rigorous quantitative training to every project. CFA Level I holder. Bilingual Chinese-English.',

    'edu.ox.name': 'University of Oxford',
    'edu.ox.degree': 'MSc Modelling for Global Health',
    'edu.ox.detail': 'Data Science \u00b7 High Distinction \u00b7 2024\u20132025',
    'edu.mbs.name': 'Melbourne Business School',
    'edu.mbs.degree': 'Master of Business Analytics',
    'edu.mbs.detail': 'Data Science \u00b7 High Distinction \u00b7 2023',
    'edu.uom.name': 'University of Melbourne',
    'edu.uom.degree': 'Bachelor of Commerce',
    'edu.uom.detail': 'Actuarial Studies \u00b7 Distinction \u00b7 2020\u20132022',

    'exp.label': '02 / Experience',
    'exp.heading': "Where I've <em>made impact.</em>",

    'exp.genex': `
      <div class="timeline-date">Jun\u2013Sep 2025</div>
      <div class="timeline-content">
        <h3>Data Analyst <span class="timeline-type">Contract</span></h3>
        <h4>Genex Consulting \u00b7 Melbourne</h4>
        <ul>
          <li>Optimised SQL queries reducing query time ~40%, stabilising Power BI refreshes for transport analytics</li>
          <li>Built Python + SQL pipelines aggregating congestion metrics across 100K+ daily records</li>
          <li>Developed interactive Power BI dashboards with DAX and drill-downs</li>
        </ul>
      </div>`,
    'exp.moru': `
      <div class="timeline-date">Mar\u2013Aug 2025</div>
      <div class="timeline-content">
        <h3>Research Assistant <span class="timeline-type">Oxford</span></h3>
        <h4>MORU \u2014 Mahidol Oxford Tropical Medicine Research Unit</h4>
        <ul>
          <li>Designed AI chatbot architecture for AMR data collection (LINE UI + REDCap + Python backend)</li>
          <li>Applied NLP and image recognition achieving 99% data accuracy, reducing manual cleaning by 80%</li>
          <li>First author on upcoming JMIR research publication</li>
        </ul>
      </div>`,
    'exp.aike': `
      <div class="timeline-date">Oct 2021\u2013Sep 2024</div>
      <div class="timeline-content">
        <h3>Data Analyst <span class="timeline-type">Part-time</span></h3>
        <h4>AIKE International \u00b7 Melbourne</h4>
        <ul>
          <li>Analytics for residential projects across a ~$50M portfolio, achieving 250% five-year ROI</li>
          <li>NLP sentiment analysis on 10,000+ online property comments for market intelligence</li>
          <li>Automated data extraction and reporting, reducing manual prep time by ~70%</li>
        </ul>
      </div>`,
    'exp.mbs_fellow': `
      <div class="timeline-date">Sep 2023\u2013Jan 2024</div>
      <div class="timeline-content">
        <h3>Business Analyst Fellow</h3>
        <h4>Centre for Business Analytics, Melbourne Business School</h4>
        <ul>
          <li>Built ML models (logistic regression, XGBoost) evaluating ad regulation impact, R\u00b2 up to 0.84</li>
          <li>Designed A/B testing frameworks with automated pipelines for training data preparation</li>
        </ul>
      </div>`,
    'exp.downer': `
      <div class="timeline-date">Aug\u2013Sep 2023</div>
      <div class="timeline-content">
        <h3>Data Analyst</h3>
        <h4>Downer Analytics Lab \u00b7 Melbourne</h4>
        <ul>
          <li>Audited stock data across 24 asphalt plants using SQL and R, identifying ~AUD 200K annual savings</li>
          <li>Developed automated Power BI dashboards and anomaly detection scripts</li>
        </ul>
      </div>`,
    'exp.gs': `
      <div class="timeline-date">Feb\u2013Mar 2023</div>
      <div class="timeline-content">
        <h3>Quantitative Analyst Intern <span class="timeline-type">Remote</span></h3>
        <h4>Goldman Sachs \u00b7 New York</h4>
        <ul>
          <li>Constructed pricing models for European options using the Black-Scholes formula in C++</li>
          <li>Computed and summarised pricing results with OOP design</li>
        </ul>
      </div>`,

    'proj.label': '03 / Projects',
    'proj.heading': 'Selected <em>works.</em>',
    'proj.featured': 'Featured',
    'proj.github': 'View All on GitHub \u2192',

    'skills.label': '04 / Skills',
    'skills.heading': 'Technical <em>toolkit.</em>',
    'skills.g1': 'Programming & Data',
    'skills.g2': 'Cloud & MLOps',
    'skills.g3': 'Analytics & ML',
    'skills.g4': 'Visualization & BI',
    'skills.g5': 'Frontend & Tools',
    'skills.g6': 'Domain & Certs',

    'contact.label': '05 / Contact',
    'contact.heading': "Let's build<br><em>something great.</em>",
    'footer': '\u00a9 2026 Jerry Yang. Crafted with intention.',
  },

  zh: {
    'nav.about': '\u5173\u4e8e',
    'nav.experience': '\u7ecf\u5386',
    'nav.projects': '\u9879\u76ee',
    'nav.skills': '\u6280\u80fd',
    'nav.contact': '\u8054\u7cfb',

    'hero.greeting': '\u4f60\u597d\uff0c\u6211\u662f',
    'hero.title': '\u6570\u636e\u5206\u6790 \u00b7 AI\u5de5\u7a0b \u00b7 \u4e91\u7aef\u81ea\u52a8\u5316',
    'hero.sub': '\u725b\u6d25\u4e0e\u58a8\u5c14\u672c\u8bad\u7ec3\u7684\u6570\u636e\u79d1\u5b66\u5bb6\uff0c\u6784\u5efa\u667a\u80fd\u7cfb\u7edf<br>\u5c06\u590d\u6742\u95ee\u9898\u8f6c\u5316\u4e3a\u6e05\u6670\u6d1e\u5bdf\u3002',
    'hero.cta1': '\u67e5\u770b\u9879\u76ee',
    'hero.cta2': '\u8054\u7cfb\u6211',

    'stats.projects': '\u5df2\u4ea4\u4ed8\u9879\u76ee',
    'stats.industries': '\u884c\u4e1a\u8986\u76d6',
    'stats.degrees': '\u5b66\u4f4d',

    'about.label': '01 / \u5173\u4e8e\u6211',
    'about.heading': '\u5728<em>\u6570\u636e\u3001AI\u4e0e\u5f71\u54cd\u529b</em>\u7684<br>\u4ea4\u6c47\u5904\u6df1\u8015\u3002',
    'about.p1': '\u6211\u662f\u4e00\u540d\u6570\u636e\u5206\u6790\u4e0eAI\u4e13\u4e1a\u4eba\u58eb\uff0c\u62e5\u6709\u6784\u5efa\u6570\u636e\u7ba1\u7ebf\u3001\u673a\u5668\u5b66\u4e60\u4e0eNLP\u6a21\u578b\u3001\u4ee5\u53ca\u5728\u4e91\u5e73\u53f0\u90e8\u7f72AI\u5de5\u4f5c\u6d41\u7684\u5b9e\u6218\u7ecf\u9a8c\u3002\u5de5\u4f5c\u6db5\u76d6\u54a8\u8be2\u3001\u4ea4\u901a\u3001\u91d1\u878d\u3001\u5065\u5eb7\u548c\u623f\u5730\u4ea7\u7b49\u884c\u4e1a\uff0c\u59cb\u7ec8\u4e13\u6ce8\u4e8e\u5c06\u6570\u636e\u8f6c\u5316\u4e3a\u8fd0\u8425\u6539\u8fdb\u3002',
    'about.p2': '\u62e5\u6709<strong>\u725b\u6d25\u5927\u5b66</strong>\u7855\u58eb\u5b66\u4f4d\uff08\u5e74\u7ea7\u7b2c\u4e00\uff09\u548c<strong>\u58a8\u5c14\u672c\u5546\u5b66\u9662</strong>\u5546\u4e1a\u5206\u6790\u7855\u58eb\uff08\u5e74\u7ea7\u7b2c\u4e8c\uff09\uff0c\u4e3a\u6bcf\u4e2a\u9879\u76ee\u5e26\u6765\u4e25\u8c28\u7684\u5b9a\u91cf\u8bad\u7ec3\u3002CFA\u4e00\u7ea7\u6301\u8bc1\u4eba\u3002\u4e2d\u82f1\u53cc\u8bed\u3002',

    'edu.ox.name': '\u725b\u6d25\u5927\u5b66',
    'edu.ox.degree': '\u5168\u7403\u5065\u5eb7\u5efa\u6a21\u7855\u58eb',
    'edu.ox.detail': '\u6570\u636e\u79d1\u5b66 \u00b7 \u6700\u4f18\u7b49 \u00b7 2024\u20132025',
    'edu.mbs.name': '\u58a8\u5c14\u672c\u5546\u5b66\u9662',
    'edu.mbs.degree': '\u5546\u4e1a\u5206\u6790\u7855\u58eb',
    'edu.mbs.detail': '\u6570\u636e\u79d1\u5b66 \u00b7 \u6700\u4f18\u7b49 \u00b7 2023',
    'edu.uom.name': '\u58a8\u5c14\u672c\u5927\u5b66',
    'edu.uom.degree': '\u5546\u5b66\u5b66\u58eb',
    'edu.uom.detail': '\u7cbe\u7b97\u5b66 \u00b7 \u4f18\u7b49 \u00b7 2020\u20132022',

    'exp.label': '02 / \u5de5\u4f5c\u7ecf\u5386',
    'exp.heading': '\u6211\u7684<em>\u5f71\u54cd\u529b\u3002</em>',

    'exp.genex': `
      <div class="timeline-date">2025\u5e746\u20139\u6708</div>
      <div class="timeline-content">
        <h3>\u6570\u636e\u5206\u6790\u5e08 <span class="timeline-type">\u5408\u540c</span></h3>
        <h4>Genex Consulting \u00b7 \u58a8\u5c14\u672c</h4>
        <ul>
          <li>\u4f18\u5316SQL\u67e5\u8be2\uff0c\u67e5\u8be2\u65f6\u95f4\u51cf\u5c11\u7ea640%\uff0c\u7a33\u5b9aPower BI\u4ea4\u901a\u5206\u6790\u62a5\u8868\u5237\u65b0</li>
          <li>\u6784\u5efaPython + SQL\u7ba1\u7ebf\uff0c\u805a\u5408\u6bcf\u65e510\u4e07+\u6761\u62e5\u5835\u6307\u6807\u6570\u636e</li>
          <li>\u5f00\u53d1\u5e26DAX\u548c\u94bb\u53d6\u529f\u80fd\u7684\u4ea4\u4e92\u5f0fPower BI\u4eea\u8868\u76d8</li>
        </ul>
      </div>`,
    'exp.moru': `
      <div class="timeline-date">2025\u5e743\u20138\u6708</div>
      <div class="timeline-content">
        <h3>\u7814\u7a76\u52a9\u7406 <span class="timeline-type">\u725b\u6d25</span></h3>
        <h4>MORU \u2014 \u739b\u5e0c\u9686\u725b\u6d25\u70ed\u5e26\u533b\u5b66\u7814\u7a76\u5355\u4f4d</h4>
        <ul>
          <li>\u8bbe\u8ba1AI\u804a\u5929\u673a\u5668\u4eba\u67b6\u6784\uff0c\u7528\u4e8e\u6297\u83cc\u7d20\u8010\u836f\u6570\u636e\u91c7\u96c6\uff08LINE UI + REDCap + Python\u540e\u7aef\uff09</li>
          <li>\u5e94\u7528NLP\u548c\u56fe\u50cf\u8bc6\u522b\uff0c\u6570\u636e\u51c6\u786e\u7387\u8fbe99%\uff0c\u51cf\u5c11\u4eba\u5de5\u6e05\u6d17\u5de5\u4f5c80%</li>
          <li>JMIR\u7814\u7a76\u8bba\u6587\u7b2c\u4e00\u4f5c\u8005</li>
        </ul>
      </div>`,
    'exp.aike': `
      <div class="timeline-date">2021\u5e7410\u6708\u20132024\u5e749\u6708</div>
      <div class="timeline-content">
        <h3>\u6570\u636e\u5206\u6790\u5e08 <span class="timeline-type">\u517c\u804c</span></h3>
        <h4>AIKE International \u00b7 \u58a8\u5c14\u672c</h4>
        <ul>
          <li>\u4e3a\u7ea65000\u4e07\u6fb3\u5143\u4f4f\u5b85\u9879\u76ee\u7ec4\u5408\u63d0\u4f9b\u5206\u6790\uff0c\u5b9e\u73b0\u4e94\u5e74250% ROI</li>
          <li>\u5bf910,000+\u7ebf\u4e0a\u623f\u4ea7\u8bc4\u8bba\u8fdb\u884cNLP\u60c5\u611f\u5206\u6790\uff0c\u63d0\u4f9b\u5e02\u573a\u60c5\u62a5</li>
          <li>\u81ea\u52a8\u5316\u6570\u636e\u63d0\u53d6\u548c\u62a5\u544a\u751f\u6210\uff0c\u51cf\u5c11\u7ea770%\u7684\u4eba\u5de5\u51c6\u5907\u65f6\u95f4</li>
        </ul>
      </div>`,
    'exp.mbs_fellow': `
      <div class="timeline-date">2023\u5e749\u6708\u20132024\u5e741\u6708</div>
      <div class="timeline-content">
        <h3>\u5546\u4e1a\u5206\u6790\u7814\u7a76\u5458</h3>
        <h4>\u5546\u4e1a\u5206\u6790\u4e2d\u5fc3\uff0c\u58a8\u5c14\u672c\u5546\u5b66\u9662</h4>
        <ul>
          <li>\u6784\u5efaML\u6a21\u578b\uff08\u903b\u8f91\u56de\u5f52\u3001XGBoost\uff09\u8bc4\u4f30\u5e7f\u544a\u76d1\u7ba1\u5f71\u54cd\uff0cR\u00b2\u8fbe0.84</li>
          <li>\u8bbe\u8ba1A/B\u6d4b\u8bd5\u6846\u67b6\u548c\u81ea\u52a8\u5316\u8bad\u7ec3\u6570\u636e\u51c6\u5907\u7ba1\u7ebf</li>
        </ul>
      </div>`,
    'exp.downer': `
      <div class="timeline-date">2023\u5e748\u20139\u6708</div>
      <div class="timeline-content">
        <h3>\u6570\u636e\u5206\u6790\u5e08</h3>
        <h4>Downer Analytics Lab \u00b7 \u58a8\u5c14\u672c</h4>
        <ul>
          <li>\u5ba1\u8ba124\u4e2a\u6ca5\u9752\u5de5\u538224\u4e2a\u5de5\u5382\u7684\u5e93\u5b58\u6570\u636e\uff0c\u8bc6\u522b\u7ea620\u4e07\u6fb3\u5143\u5e74\u8282\u7701</li>
          <li>\u5f00\u53d1\u81ea\u52a8\u5316Power BI\u4eea\u8868\u76d8\u548c\u5f02\u5e38\u68c0\u6d4b\u811a\u672c</li>
        </ul>
      </div>`,
    'exp.gs': `
      <div class="timeline-date">2023\u5e742\u20133\u6708</div>
      <div class="timeline-content">
        <h3>\u91cf\u5316\u5206\u6790\u5b9e\u4e60\u751f <span class="timeline-type">\u8fdc\u7a0b</span></h3>
        <h4>\u9ad8\u76db\u96c6\u56e2 \u00b7 \u7ebd\u7ea6</h4>
        <ul>
          <li>\u4f7f\u7528C++\u7684Black-Scholes\u516c\u5f0f\u6784\u5efa\u6b27\u5f0f\u671f\u6743\u5b9a\u4ef7\u6a21\u578b</li>
          <li>\u4ee5\u9762\u5411\u5bf9\u8c61\u8bbe\u8ba1\u8ba1\u7b97\u5e76\u6c47\u603b\u5b9a\u4ef7\u7ed3\u679c</li>
        </ul>
      </div>`,

    'proj.label': '03 / \u9879\u76ee\u4f5c\u54c1',
    'proj.heading': '\u7cbe\u9009<em>\u4f5c\u54c1\u3002</em>',
    'proj.featured': '\u7cbe\u9009',
    'proj.github': '\u5728GitHub\u67e5\u770b\u5168\u90e8 \u2192',

    'skills.label': '04 / \u6280\u80fd',
    'skills.heading': '\u6280\u672f<em>\u5de5\u5177\u7bb1\u3002</em>',
    'skills.g1': '\u7f16\u7a0b\u4e0e\u6570\u636e',
    'skills.g2': '\u4e91\u8ba1\u7b97\u4e0eMLOps',
    'skills.g3': '\u5206\u6790\u4e0e\u673a\u5668\u5b66\u4e60',
    'skills.g4': '\u53ef\u89c6\u5316\u4e0eBI',
    'skills.g5': '\u524d\u7aef\u4e0e\u5de5\u5177',
    'skills.g6': '\u9886\u57df\u4e0e\u8bc1\u4e66',

    'contact.label': '05 / \u8054\u7cfb',
    'contact.heading': '\u8ba9\u6211\u4eec\u4e00\u8d77<br><em>\u521b\u9020\u7cbe\u5f69\u3002</em>',
    'footer': '\u00a9 2026 Jerry Yang. \u7528\u5fc3\u6253\u9020\u3002',
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];
  const toggle = document.getElementById('langToggle');
  toggle.textContent = lang === 'en' ? '\u4e2d\u6587' : 'EN';
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

  /* data-i18n  \u2014  textContent */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });

  /* data-i18n-html  \u2014  innerHTML (for <em>, <strong>, <br>) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  /* data-i18n-block  \u2014  full innerHTML swap for timeline items / project cards */
  document.querySelectorAll('[data-i18n-block]').forEach(el => {
    const key = el.getAttribute('data-i18n-block');
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  /* hero sub uses innerHTML for <br> */
  const heroSub = document.querySelector('[data-i18n="hero.sub"]');
  if (heroSub && dict['hero.sub']) heroSub.innerHTML = dict['hero.sub'];

  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('langToggle');
  toggle.addEventListener('click', () => {
    setLang(currentLang === 'en' ? 'zh' : 'en');
  });

  /* restore saved preference */
  const saved = localStorage.getItem('lang');
  if (saved === 'zh') setLang('zh');
});
