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

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

document.getElementById('projectModal').addEventListener('click', function(e) { if (e.target === this) closeModal('projectModal'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal('projectModal'); });
