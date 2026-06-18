/**
 * leadership.js
 * Premium Leadership Section — ANS-SITI
 * Handles: carousel, modal open/close, tab switching, dynamic content rendering
 */

'use strict';

/* ═══════════════════════════════════════════
   MEMBER DATA
═══════════════════════════════════════════ */
const LEADERS = [
  {
    initials: 'RN',
    photo: 'ramesh.jpg',
    colorStop: ['rgba(99,179,237,0.25)', 'rgba(147,210,255,0.45)', 'rgba(99,179,237,0.18)'],
    eyebrow: 'Founder · Chairman · Managing Director',
    name: 'Dr. Ramesh Nayaka',
    position: 'Founder, Chairman & Managing Director',
    tagline: 'Bridging the gap between structural research and sustainable built environments.',
    bio: `Dr. Ramesh Nayaka is the visionary founder of Anantashilpa Sustainable Infratech Innovations Pvt. Ltd. With over 15 years of transformative work at the intersection of structural engineering, advanced materials, and environmental sustainability, he has established ANS-SITI as a benchmark for research-driven infrastructure development in India.

His academic and professional journey spans premier research institutions and real-world infrastructure projects, translating cutting-edge material science into durable, eco-conscious structural systems. Dr. Nayaka's work addresses the pressing challenges of climate-resilient construction, waste valorisation, and next-generation building materials.

He leads the organisation's strategic vision, guiding cross-functional teams toward integrated solutions that deliver measurable environmental and socioeconomic impact.`,
    pillars: [
      { icon: '🔬', title: 'Research Focus', desc: 'Structural systems & advanced composite materials' },
      { icon: '🌱', title: 'Sustainability', desc: 'Low-carbon, waste-minimising construction' },
      { icon: '🏛️', title: 'Leadership', desc: 'Translating research into enterprise impact' },
    ],
    education: [
      { year: '2009', title: 'Ph.D. – Structural Engineering & Materials', sub: 'Premier Technical University, India', desc: 'Doctoral research on high-performance concrete incorporating industrial by-products; developed novel mix designs adopted in state infrastructure projects.' },
      { year: '2004', title: 'M.Tech – Structural Engineering', sub: 'National Institute of Technology', desc: 'Specialised in advanced structural analysis, seismic design, and steel-composite systems.' },
      { year: '2002', title: 'B.Tech – Civil Engineering', sub: 'Visvesvaraya Technological University', desc: 'Distinction graduate; gold medal for outstanding academic performance.' },
    ],
    experience: [
      { year: '2015–Present', title: 'Founder & CMD', sub: 'ANS-SITI Pvt. Ltd.', desc: 'Founded and scaled a research-intensive infrastructure enterprise; led delivery of 20+ sustainable infrastructure projects across Karnataka.' },
      { year: '2010–2015', title: 'Senior Research Scientist', sub: 'National Research Institute', desc: 'Led a team of 12 researchers on CSIR-funded projects focusing on geopolymer concrete and fly-ash-based structural elements.' },
      { year: '2007–2010', title: 'Structural Engineer', sub: 'Infrastructure Consulting Firm', desc: 'Designed and reviewed structural systems for industrial buildings, bridges, and water-retaining structures.' },
    ],
    research: [
      {
        title: '📄 Publications',
        items: ['High-Performance Geopolymer Concrete Systems (IJCE, 2019)', 'Fly-Ash Composites for Green Infrastructure (Construction & Building Materials, 2017)', 'Seismic Performance of RC Frames with Industrial By-products (Elsevier, 2015)', '12 peer-reviewed papers in SCI journals'],
      },
      {
        title: '💡 Patents & Technologies',
        items: ['Patent: Alkali-Activated Composite for Load-Bearing Elements (2021)', 'Proprietary mix-design protocol for low-carbon concrete', 'Structural health monitoring methodology for rural bridges', 'Waste valorisation framework adopted by 3 state agencies'],
      },
      {
        title: '🤝 Collaborations',
        items: ['IIT Dharwad – Joint research on sustainable materials', 'CSIR-SERC – Structural testing partnerships', 'Karnataka PWD – Technical advisory for green roads', 'Industry tie-ups with 4 cement and materials companies'],
      },
      {
        title: '🌐 Industry Impact',
        items: ['Solutions deployed in 20+ infrastructure projects', 'CO₂ reduction of ~1,200 tonnes across projects', 'Technology adopted by 3 state-level infrastructure bodies', 'Guest faculty at 5 engineering universities'],
      },
    ],
    achievements: [
      { icon: '🏆', title: 'Best Innovation Award', desc: 'Karnataka State Science & Technology Council, 2022' },
      { icon: '🎓', title: 'Ph.D. Gold Medal', desc: 'Outstanding doctoral thesis in structural engineering' },
      { icon: '💰', title: 'CSIR Research Grant', desc: '₹45 Lakhs for geopolymer concrete research' },
      { icon: '📰', title: '15+ Publications', desc: 'SCI-indexed journals and international conferences' },
      { icon: '🌿', title: 'Green Builder Award', desc: 'Confederation of Indian Industry, 2023' },
      { icon: '🤝', title: 'Industry Partner Recognition', desc: 'IIT Dharwad Technology Commercialisation Cell' },
    ],
    contact: [
      { icon: '✉️', label: 'Email', value: 'ramesh.nayaka@ans-siti.com', href: 'mailto:ramesh.nayaka@ans-siti.com' },
      { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/rameshnayaka', href: '#' },
      { icon: '🔬', label: 'Research Profile', value: 'ResearchGate Profile', href: '#' },
      { icon: '📞', label: 'Office', value: '+91 XXX XXX XXXX', href: 'tel:+91XXXXXXXXXX' },
    ],
  },

  {
    initials: 'AN',
    photo: 'anitha.jpg',
    colorStop: ['rgba(129,230,217,0.25)', 'rgba(180,255,240,0.45)', 'rgba(129,230,217,0.18)'],
    eyebrow: 'Director · Chief Technical Officer',
    name: 'Ms. Anitha Nayak',
    position: 'Director & Chief Technical Officer',
    tagline: 'Driving technical excellence at the frontier of sustainable infrastructure engineering.',
    bio: `Ms. Anitha Nayak leads the technical vision and engineering operations of ANS-SITI as Director and Chief Technical Officer. With a strong academic foundation in Structural Engineering and hands-on leadership of complex infrastructure projects, she is the driving force behind the company's technology roadmap and engineering standards.

Her expertise spans advanced structural design, sustainable materials integration, and the development of innovative construction methodologies that reduce environmental impact without compromising structural integrity. Under her technical leadership, ANS-SITI has delivered infrastructure solutions that consistently exceed regulatory benchmarks.

Ms. Anitha Nayak is deeply committed to creating engineering systems that are not only technically superior but also aligned with the sustainability imperatives of the 21st century.`,
    pillars: [
      { icon: '⚙️', title: 'Technical Vision', desc: 'Advancing structural design & construction tech' },
      { icon: '♻️', title: 'Sustainability', desc: 'Embedding green principles in every design' },
      { icon: '📐', title: 'Precision', desc: 'Uncompromising engineering standards & QA' },
    ],
    education: [
      { year: '2012', title: 'M.Tech – Structural Engineering', sub: 'Visvesvaraya Technological University', desc: 'Specialised in advanced structural analysis, pre-stressed concrete, and sustainable construction systems.' },
      { year: '2010', title: 'B.E. – Civil Engineering', sub: 'VTU-affiliated College', desc: 'First-class honours; final-year project on fibre-reinforced concrete for industrial flooring.' },
    ],
    experience: [
      { year: '2018–Present', title: 'Director & CTO', sub: 'ANS-SITI Pvt. Ltd.', desc: 'Oversees all technical operations; established quality management systems and led design of 15+ infrastructure projects.' },
      { year: '2014–2018', title: 'Lead Structural Engineer', sub: 'Infrastructure Design Consultancy', desc: 'Managed structural design team for commercial, industrial, and water infrastructure projects across South India.' },
      { year: '2012–2014', title: 'Graduate Engineer', sub: 'Construction Technology Firm', desc: 'Site-based structural engineering and quality control for multi-storey RC construction.' },
    ],
    research: [
      {
        title: '📄 Technical Papers',
        items: ['Sustainable Concrete Mix Designs for Tropical Climates (IJSE, 2021)', 'Performance of Recycled Aggregate Structures (ASCE Journal, 2020)', 'Innovative Formwork Systems for Green Buildings (Conference, 2018)'],
      },
      {
        title: '💡 Technologies Developed',
        items: ['Modular precast system for rapid rural housing', 'Low-embodied-carbon structural slab design', 'BIM-integrated quality inspection protocol'],
      },
      {
        title: '🤝 Collaborations',
        items: ['NWDA – Water infrastructure technical advisory', 'Smart Cities Mission – Technical consultant', 'VTU – Guest faculty, Structural Design'],
      },
      {
        title: '🌐 Impact',
        items: ['Technical lead for ₹12 Cr+ project portfolio', '30% material waste reduction across projects', 'Mentored 8 junior engineers to senior roles'],
      },
    ],
    achievements: [
      { icon: '🏅', title: 'Young Engineer Award', desc: 'Institution of Engineers India, Karnataka Chapter 2020' },
      { icon: '📋', title: 'ISO 9001 Implementation', desc: 'Led QMS certification for ANS-SITI operations' },
      { icon: '🏗️', title: 'Best Project Design', desc: 'State-level infrastructure award, 2022' },
      { icon: '📚', title: '8 Technical Papers', desc: 'National and international peer-reviewed publications' },
      { icon: '🌟', title: 'Excellence in Innovation', desc: 'CII Southern Region Recognition, 2023' },
      { icon: '🎯', title: 'Zero Defect Delivery', desc: '100% project completion within quality norms' },
    ],
    contact: [
      { icon: '✉️', label: 'Email', value: 'anitha.nayak@ans-siti.com', href: 'mailto:anitha.nayak@ans-siti.com' },
      { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/anithanayak', href: '#' },
      { icon: '🔬', label: 'Research Profile', value: 'ResearchGate Profile', href: '#' },
      { icon: '📞', label: 'Office', value: '+91 XXX XXX XXXX', href: 'tel:+91XXXXXXXXXX' },
    ],
  },

  {
    initials: 'SV',
    photo: 'vidya.jpg',
    colorStop: ['rgba(196,181,253,0.25)', 'rgba(220,200,255,0.45)', 'rgba(196,181,253,0.18)'],
    eyebrow: 'Director · Chief Operating Officer',
    name: 'Mrs. Sree Vidya',
    position: 'Director & Chief Operating Officer',
    tagline: 'Orchestrating operational excellence to power sustainable growth.',
    bio: `Mrs. Sree Vidya serves as Director and Chief Operating Officer at ANS-SITI, bringing strategic management depth across human resources, finance, and organisational development. Her MBA with specialisation in Human Resource Management and Finance equips her with a dual lens — people-first leadership and fiscally prudent operations.

She has been instrumental in building ANS-SITI's internal capabilities, establishing scalable processes, and creating an organisational culture that values innovation, accountability, and sustainability. Her approach to operations integrates resource optimisation with team empowerment, ensuring that ANS-SITI can deliver ambitious sustainable infrastructure projects efficiently and on schedule.

Mrs. Sree Vidya brings a systems-thinking approach to every operational challenge, translating strategic goals into executable frameworks that align people, processes, and resources.`,
    pillars: [
      { icon: '👥', title: 'People Leadership', desc: 'Building high-performance, values-driven teams' },
      { icon: '📊', title: 'Finance & Strategy', desc: 'Resource optimisation & financial stewardship' },
      { icon: '🔄', title: 'Process Excellence', desc: 'Scalable systems for sustainable operations' },
    ],
    education: [
      { year: '2013', title: 'MBA – HR Management & Finance', sub: 'Bangalore University', desc: 'Dual specialisation; dissertation on organisational change management in infrastructure enterprises.' },
      { year: '2011', title: 'B.Com – Business Administration', sub: 'Mysore University', desc: 'First-class honours; active in corporate affairs and placement committees.' },
    ],
    experience: [
      { year: '2018–Present', title: 'Director & COO', sub: 'ANS-SITI Pvt. Ltd.', desc: 'Leads all operational functions — HR, finance, procurement, and project management support. Scaled team from 8 to 35+ professionals.' },
      { year: '2015–2018', title: 'Operations Manager', sub: 'Infrastructure & Real Estate Firm', desc: 'Streamlined multi-project operations, reduced overhead costs by 22% through process reengineering.' },
      { year: '2013–2015', title: 'HR & Finance Executive', sub: 'Mid-size Engineering Consultancy', desc: 'Managed payroll, recruitment, statutory compliance, and budgeting for 120-person organisation.' },
    ],
    research: [
      {
        title: '📋 Operational Frameworks',
        items: ['Integrated project management system for sustainable construction', 'ESG-aligned procurement policy framework', 'HR capability model for engineering enterprises'],
      },
      {
        title: '💡 Innovations',
        items: ['Digital workflow system reducing admin overhead by 35%', 'Vendor sustainability scoring protocol', 'Employee upskilling roadmap for green construction'],
      },
      {
        title: '🤝 Partnerships',
        items: ['NASSCOM – Digital transformation for SMEs', 'NSDC – Skill development programme partner', 'CII – Women in Leadership initiative'],
      },
      {
        title: '🌐 Impact',
        items: ['Grew workforce 4× while maintaining culture', '₹8 Cr+ procurement managed annually', '98% statutory compliance record maintained'],
      },
    ],
    achievements: [
      { icon: '🏅', title: 'Operations Excellence Award', desc: 'CII Karnataka, 2023' },
      { icon: '👩‍💼', title: 'Women Leader in Infrastructure', desc: 'FICCI FLO Recognition, 2022' },
      { icon: '📈', title: '4× Team Scaling', desc: 'Grew ANS-SITI team from 8 to 35+ professionals' },
      { icon: '💹', title: 'Cost Optimisation', desc: '22% overhead reduction through process reengineering' },
      { icon: '🎯', title: 'Zero Statutory Default', desc: 'Perfect compliance record across all operations' },
      { icon: '🌱', title: 'Green HR Certification', desc: 'Certified ESG-aligned HR practitioner' },
    ],
    contact: [
      { icon: '✉️', label: 'Email', value: 'sreevidya@ans-siti.com', href: 'mailto:sreevidya@ans-siti.com' },
      { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/sreevidya', href: '#' },
      { icon: '🏢', label: 'Professional', value: 'ANS-SITI Corporate Office', href: '#' },
      { icon: '📞', label: 'Office', value: '+91 XXX XXX XXXX', href: 'tel:+91XXXXXXXXXX' },
    ],
  },

  {
    initials: 'MG',
    photo: 'manjunathgouda.jpg',
    colorStop: ['rgba(134,239,172,0.25)', 'rgba(180,255,210,0.45)', 'rgba(134,239,172,0.18)'],
    eyebrow: 'Director · Chief Sustainability Officer',
    name: 'Mr. Manjunathgouda',
    position: 'Director & Chief Sustainability Officer',
    tagline: 'Ensuring every project leaves the planet in a better state than it was found.',
    bio: `Mr. Manjunathgouda leads ANS-SITI's sustainability mandate as Director and Chief Sustainability Officer. With an M.Tech specialisation in Infrastructure Construction and Management, he brings deep technical knowledge of environmental impact assessment, sustainable construction methods, and life-cycle analysis to the organisation.

His role sits at the critical intersection of infrastructure delivery and environmental responsibility — ensuring that every project ANS-SITI undertakes meets rigorous standards for environmental performance, social equity, and long-term ecological impact. He has been the driving force behind the company's ESG framework, green certification processes, and community-centred project design.

Mr. Manjunathgouda believes that true infrastructure development must harmonise with natural systems, and he champions this philosophy across every stage of project planning, execution, and post-completion monitoring.`,
    pillars: [
      { icon: '🌍', title: 'Environmental', desc: 'Net-positive ecological impact on every project' },
      { icon: '🤝', title: 'Social Impact', desc: 'Community-inclusive infrastructure development' },
      { icon: '📏', title: 'Standards', desc: 'Highest ESG and sustainability benchmarks' },
    ],
    education: [
      { year: '2014', title: 'M.Tech – Infrastructure Construction & Management', sub: 'National Institute of Technology Karnataka', desc: 'Specialised in sustainable construction management, environmental impact assessment, and life-cycle costing.' },
      { year: '2012', title: 'B.E. – Civil Engineering', sub: 'VTU-affiliated Institute', desc: 'First-class; final project on green building design and energy efficiency in tropical climates.' },
    ],
    experience: [
      { year: '2019–Present', title: 'Director & CSO', sub: 'ANS-SITI Pvt. Ltd.', desc: 'Established ANS-SITI\'s end-to-end sustainability framework; leads environmental compliance for all projects; authored company ESG policy.' },
      { year: '2016–2019', title: 'Sustainability Engineer', sub: 'Infrastructure Development Authority', desc: 'Environmental impact assessment and sustainability audit for 30+ public infrastructure projects across Karnataka.' },
      { year: '2014–2016', title: 'Site Engineer – Green Projects', sub: 'Green Building Consultancy', desc: 'On-site sustainability monitoring for IGBC-rated commercial and residential projects.' },
    ],
    research: [
      {
        title: '📄 Publications',
        items: ['Carbon Footprint Analysis of Rural Infrastructure (IJEE, 2022)', 'Sustainable Construction Practices for Tier-2 Cities (NICMAR Journal, 2021)', 'Waste-to-Resource Pathways in Civil Construction (Conference, 2020)'],
      },
      {
        title: '💡 Frameworks & Tools',
        items: ['Proprietary Green Infrastructure Scorecard', 'Community Impact Assessment Toolkit', 'Carbon offset calculation model for small-scale infrastructure', 'Life-cycle environmental dashboard'],
      },
      {
        title: '🤝 Collaborations',
        items: ['TERI – Sustainable urban infrastructure research', 'MoEFCC – Environmental compliance advisory', 'IGBC – Green certification facilitation', 'UN-Habitat – Urban resilience project'],
      },
      {
        title: '🌐 Impact',
        items: ['100% of ANS-SITI projects meet or exceed ECBC norms', 'Waste diversion rate of 85%+ on major projects', '1,200+ tonnes CO₂ equivalent avoided', 'ESG framework adopted by 2 partner organisations'],
      },
    ],
    achievements: [
      { icon: '🌿', title: 'Sustainability Champion', desc: 'Karnataka State Environment Board, 2023' },
      { icon: '🏅', title: 'Green Infrastructure Award', desc: 'Indian Green Building Council, 2022' },
      { icon: '🌍', title: 'UN SDG Champion', desc: 'Recognition for SDG 11 & 13 contributions' },
      { icon: '📊', title: 'ESG Leader', desc: 'CII National Sustainability Summit recognition' },
      { icon: '♻️', title: '85% Waste Diversion', desc: 'Industry-leading waste management performance' },
      { icon: '💚', title: 'Net-Zero Roadmap', desc: 'Authored ANS-SITI 2030 net-zero strategy' },
    ],
    contact: [
      { icon: '✉️', label: 'Email', value: 'manjunathgouda@ans-siti.com', href: 'mailto:manjunathgouda@ans-siti.com' },
      { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/manjunathgouda', href: '#' },
      { icon: '🌱', label: 'ESG Profile', value: 'Sustainability Portfolio', href: '#' },
      { icon: '📞', label: 'Office', value: '+91 XXX XXX XXXX', href: 'tel:+91XXXXXXXXXX' },
    ],
  },
];

/* ═══════════════════════════════════════════
   CAROUSEL
═══════════════════════════════════════════ */
(function initCarousel() {
  const track  = document.getElementById('ldrTrack');
  const prev   = document.getElementById('ldrPrev');
  const next   = document.getElementById('ldrNext');
  const dotsWrap = document.getElementById('ldrDots');
  if (!track || !prev || !next || !dotsWrap) return;

  const CARDS = LEADERS.length; // 4
  let current = 0;
  let cardsPerView = getCardsPerView();
  let dots = [];

  function getCardsPerView() {
    return window.innerWidth <= 640 ? 1 : window.innerWidth <= 1024 ? 2 : 4;
  }

  function buildDots() {
    dotsWrap.innerHTML = '';
    dots = [];
    const pageCount = Math.ceil(CARDS / cardsPerView);
    for (let i = 0; i < pageCount; i++) {
      const btn = document.createElement('button');
      btn.className = 'ldr-dot' + (i === 0 ? ' active' : '');
      btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      btn.setAttribute('role', 'tab');
      btn.addEventListener('click', () => goTo(i * cardsPerView));
      dotsWrap.appendChild(btn);
      dots.push(btn);
    }
  }

  function updateDots() {
    const activePage = Math.floor(current / cardsPerView);
    dots.forEach((d, i) => d.classList.toggle('active', i === activePage));
  }

  function goTo(index) {
    const maxIndex = CARDS - cardsPerView;
    current = Math.max(0, Math.min(index, maxIndex));
    const cardWidth = track.querySelector('.ldr-card').offsetWidth;
    const gap = 24; // 1.5rem
    track.style.transform = `translateX(-${current * (cardWidth + gap)}px)`;
    updateDots();
  }

  prev.addEventListener('click', () => goTo(current - cardsPerView));
  next.addEventListener('click', () => goTo(current + cardsPerView));

  // Touch/swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) goTo(delta > 0 ? current + 1 : current - 1);
  });

  function onResize() {
    const newCpv = getCardsPerView();
    if (newCpv !== cardsPerView) {
      cardsPerView = newCpv;
      current = 0;
      track.style.transform = 'translateX(0)';
      buildDots();
    }
    if (cardsPerView >= 4) {
      track.style.transform = 'translateX(0)';
    }
  }

  buildDots();
  window.addEventListener('resize', onResize);
})();

/* ═══════════════════════════════════════════
   MODAL
═══════════════════════════════════════════ */
(function initModal() {
  const overlay   = document.getElementById('ldrModal');
  const closeBtn  = document.getElementById('ldrModalClose');
  const tabs      = document.querySelectorAll('.ldr-tab');
  const panels    = document.querySelectorAll('.ldr-tab-panel');
  const cards     = document.querySelectorAll('.ldr-card');

  if (!overlay || !closeBtn) return;

  // ── Open modal ──
  function openModal(memberIndex) {
    const m = LEADERS[memberIndex];
    if (!m) return;

    populateModal(m);

    // reset to first tab
    tabs.forEach((t, i) => {
      t.classList.toggle('active', i === 0);
      t.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    });
    panels.forEach((p, i) => p.classList.toggle('active', i === 0));

    overlay.removeAttribute('hidden');
    requestAnimationFrame(() => {
      overlay.classList.add('ldr-modal-open');
    });
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  // ── Close modal ──
  function closeModal() {
    overlay.classList.remove('ldr-modal-open');
    overlay.addEventListener('transitionend', () => {
      overlay.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }, { once: true });
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ── Card click/keyboard ──
  cards.forEach(card => {
    card.addEventListener('click', () => openModal(+card.dataset.member));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(+card.dataset.member);
      }
    });
    // Button inside card
    const btn = card.querySelector('.ldr-view-btn');
    if (btn) btn.addEventListener('click', e => {
      e.stopPropagation();
      openModal(+card.dataset.member);
    });
  });

  // ── Tab switching ──
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      panels.forEach(p => {
        const match = p.id === 'tab-' + target;
        p.classList.toggle('active', match);
      });
    });
  });

  // ── Populate ──
  function populateModal(m) {
    // Hero
    document.getElementById('ldrModalEyebrow').textContent   = m.eyebrow;
    document.getElementById('ldrModalName').textContent      = m.name;
    document.getElementById('ldrModalPosition').textContent  = m.position;
    document.getElementById('ldrModalQuote').textContent     = m.tagline;

    // Avatar — real photo
    document.getElementById('ldrModalAvatar').innerHTML = buildAvatarImg(m.photo, m.name);

    // Biography
    document.getElementById('ldrBioText').innerHTML =
      m.bio.split('\n\n').map(p => `<p style="margin-bottom:1rem">${p.trim()}</p>`).join('');

    document.getElementById('ldrBioPillars').innerHTML =
      m.pillars.map(p => `
        <div class="ldr-pillar">
          <div class="ldr-pillar-icon">${p.icon}</div>
          <h5>${p.title}</h5>
          <p>${p.desc}</p>
        </div>`).join('');

    // Education timeline
    document.getElementById('ldrEducation').innerHTML =
      m.education.map(e => timelineItem(e)).join('');

    // Experience timeline
    document.getElementById('ldrExperience').innerHTML =
      m.experience.map(e => timelineItem(e)).join('');

    // Research
    document.getElementById('ldrResearch').innerHTML =
      m.research.map(r => `
        <div class="ldr-research-card">
          <h5>${r.title}</h5>
          <ul>${r.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>`).join('');

    // Achievements
    document.getElementById('ldrAchievements').innerHTML =
      m.achievements.map(a => `
        <div class="ldr-achieve-card">
          <div class="ldr-achieve-icon">${a.icon}</div>
          <h5>${a.title}</h5>
          <p>${a.desc}</p>
        </div>`).join('');

    // Contact
    document.getElementById('ldrContact').innerHTML =
      m.contact.map(c => `
        <a class="ldr-contact-item" href="${escapeAttr(c.href)}" target="_blank" rel="noopener noreferrer">
          <div class="ldr-contact-icon">${c.icon}</div>
          <div>
            <div class="ldr-contact-label">${c.label}</div>
            <div class="ldr-contact-value">${c.value}</div>
          </div>
        </a>`).join('');
  }

  function timelineItem(e) {
    return `<div class="ldr-timeline-item">
      <div class="ldr-timeline-year">${e.year}</div>
      <div class="ldr-timeline-title">${e.title}</div>
      <div class="ldr-timeline-sub">${e.sub}</div>
      <div class="ldr-timeline-desc">${e.desc}</div>
    </div>`;
  }

  function buildAvatarImg(photo, name) {
    return `<img src="${escapeAttr(photo)}" alt="${escapeAttr(name)}"
      style="width:100%;height:100%;object-fit:cover;object-position:center top;
             border-radius:50%;display:block;
             filter:brightness(1.05) contrast(1.05) saturate(1.1);">`;
  }

  function escapeAttr(str) {
    return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
})();
