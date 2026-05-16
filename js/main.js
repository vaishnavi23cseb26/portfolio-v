function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.getElementById('section-' + id).classList.add('active');
  document.getElementById('nav-' + id).classList.add('active');
  if (window.innerWidth <= 900) toggleSidebar(false);
}

function toggleSidebar(force) {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const shouldOpen = force !== undefined ? force : !sidebar.classList.contains('open');
  sidebar.classList.toggle('open', shouldOpen);
  overlay.classList.toggle('open', shouldOpen);
  document.getElementById('menuToggle').textContent = shouldOpen ? '✕' : '☰';
}

const projects = {
  cryptexora: {
    title: 'Cryptexora', domain: 'Web Development / Cybersecurity',
    desc: 'An ML-powered intrusion detection system that monitors network traffic and classifies anomalous or malicious patterns in real time. It provides an intelligent layer of security by analyzing traffic patterns continuously.',
    tech: 'Python, Machine Learning, Network Analysis, Scikit-learn',
    purpose: 'To build a smart security tool that can detect network intrusions and cyber threats automatically, reducing the manual effort required for network monitoring and enabling rapid threat response.',
    demo: 'https://cryptexora.onrender.com/',
    video: 'https://drive.google.com/file/d/1sQ5h7Qjxma055HIufWNR19AcTzlPzH2p/view?usp=drivesdk'
  },
  resolvr: {
    title: 'Resolvr', domain: 'MERN Stack / Full-Stack Web Development',
    desc: 'A full-featured web-based ticketing platform enabling users to raise, assign, and resolve support requests with role-based access control. Includes an admin dashboard with real-time ticket status tracking, priority management, and reporting features.',
    tech: 'MongoDB, Express.js, React.js, Node.js (MERN Stack)',
    purpose: 'To streamline support request management for organizations by providing a clean, role-based interface for both users and administrators, making issue resolution faster and more transparent.',
    demo: 'https://resolver-frontend-iota.vercel.app/dashboard',
    video: 'https://drive.google.com/file/d/19HTwlUDjc2eKJgF3qneH2cHzgs-g4YKj/view?usp=sharing'
  }
};

function openProjectModal(key) {
  const p = projects[key];
  document.getElementById('pm-title').textContent = p.title;
  document.getElementById('pm-domain').textContent = p.domain;
  document.getElementById('pm-desc').textContent = p.desc;
  document.getElementById('pm-tech').textContent = p.tech;
  document.getElementById('pm-purpose').textContent = p.purpose;
  const linksEl = document.getElementById('pm-links');
  linksEl.innerHTML = '';
  if (p.demo) linksEl.innerHTML += `<a href="${p.demo}" target="_blank" class="modal-link primary">🚀 Live Demo</a>`;
  if (p.video) linksEl.innerHTML += `<a href="${p.video}" target="_blank" class="modal-link secondary">🎬 Watch Demo</a>`;
  document.getElementById('projectModal').classList.add('open');
}

// Certificate data — image file maps to extracted JPGs
const certs = {
  trialthon:    { title: 'Trialthon of Tech', issuer: 'Velammal College of Engg. & Tech., Dept. of CSE', domain: 'Tech Event', details: 'Certificate of Participation awarded to Vaishnavi S of III CSE B for participating in the Trialthon of Tech conducted on 8th August 2025, demonstrating enthusiasm and commitment throughout the event.', img: 'certificates/cert_1.jpg' },
  vinsup:       { title: 'AI/ML Internship Certificate', issuer: 'Vinsup Infotech (P) Ltd, Madurai', domain: 'AI / ML', details: 'Ms. S. Vaishnavi joined as an intern from 26.05.2025 to 26.06.2025. Topics covered: Python, LangChain Groq, Groq Cloud.', img: 'certificates/cert_2.jpg' },
  sap:          { title: 'Introducing SAP ABAP Platform Fundamentals', issuer: 'SAP Learning — Record of Achievement', domain: 'Enterprise Software', details: 'Completed the SAP ABAP Platform Fundamentals learning journey. Able to explore the SAP ABAP system, work with its user interface and understand transports and software logistics infrastructure. Issued May 28, 2025. Verified via Credly.', img: 'certificates/cert_3.jpg' },
  cloud:        { title: 'Cloud Computing', issuer: 'NPTEL Online Certification — IIT Kharagpur', domain: 'Cloud Computing', details: 'Consolidated score: 58% | Online Assignments: 22.1/25 | Proctored Exam: 35.42/75. Jan–Apr 2025 (12-week course). Roll No: NPTEL25CS11S951000555. Total certified: 29,703 candidates.', img: 'certificates/cert_4.jpg' },
  sql:          { title: 'Introduction to SQL', issuer: 'Sololearn', domain: 'Database', details: 'Completed Sololearn\'s Introduction to SQL course demonstrating theoretical and practical understanding of SQL. Certificate CC-BQXESOJI issued March 02, 2025.', img: 'certificates/cert_5.jpg' },
  testing:      { title: 'Software Testing', issuer: 'NPTEL Online Certification — IIT Madras (IIIT Bangalore)', domain: 'Software Engineering', details: 'Consolidated score: 51% | Online Assignments: 19.03/25 | Proctored Exam: 31.5/75. Jul–Oct 2024 (12-week course). Roll No: NPTEL24CS91S258600322. Total certified: 5,340 candidates.', img: 'certificates/cert_6.jpg' },
  cyber:        { title: 'Cybersecurity for Beginners', issuer: 'Tata STRIVE × Microsoft', domain: 'Cybersecurity', details: 'Completed 40-hour Cybersecurity for Beginners course. Certificate issued 06 Nov 2024. Unique ID: 235823-27168416-1246. Signed by COO, Tata STRIVE.', img: 'certificates/cert_7.jpg' },
  mongodb:      { title: 'Introduction to MongoDB for Students', issuer: 'MongoDB, Inc.', domain: 'Database', details: 'Completed MongoDB\'s student course covering core database concepts and CRUD operations. Certificate ID: MDBg1j0pf9nsq. Issued 07-20-2024.', img: 'certificates/cert_8.jpg' },
  pragyan:      { title: "Intuit's Code to Cloud Workshop", issuer: 'NIT Trichy — Pragyan 2024', domain: 'Cloud & Dev Tools', details: "Completed Intuit's Code to Cloud Workshop held on 24 Feb 2024 as part of Pragyan 2024 at NIT Trichy. Certificate of Completion issued by Pragyan 2024.", img: 'certificates/cert_9.jpg' },
  dataanalytics:{ title: 'Data Analytics Internship', issuer: 'Marcello Tech × AICTE', domain: 'Data Analytics', details: 'Successfully completed 2-month Data Analytics Internship Programme from 22.07.2024 to 21.09.2024. Certificate No: MTINTDA2509273. Conducted in collaboration with AICTE and Marcello Tech.', img: 'certificates/cert_10.jpg' },
  python:       { title: 'Essential Python Skills Internship', issuer: 'Marcello Tech', domain: 'Python Programming', details: 'Completed one-week internship on Essential Python Skills: A Core Internship for Aspiring Developers from 23.11.2023 to 30.11.2023. Certificate No: MTINP212253.', img: 'certificates/cert_11.jpg' },
};

function openCertModal(key) {
  const c = certs[key];
  document.getElementById('cm-title').textContent = c.title;
  document.getElementById('cm-issuer').textContent = c.issuer;
  document.getElementById('cm-domain').textContent = c.domain;
  document.getElementById('cm-details').textContent = c.details;
  document.getElementById('cm-img').src = c.img;
  document.getElementById('certModal').classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

document.getElementById('projectModal').addEventListener('click', function(e) { if (e.target === this) closeModal('projectModal'); });
document.getElementById('certModal').addEventListener('click', function(e) { if (e.target === this) closeModal('certModal'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal('projectModal'); closeModal('certModal'); } });
