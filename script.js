const menuBtn=document.querySelector('.menu-btn');const menu=document.querySelector('.nav-menu');if(menuBtn&&menu){menuBtn.onclick=()=>{menu.classList.toggle('open');menuBtn.classList.toggle('active')};menu.querySelectorAll('a').forEach(a=>a.onclick=()=>{menu.classList.remove('open');menuBtn.classList.remove('active')})}const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();document.querySelectorAll('section, article, .founder-card').forEach(el=>el.classList.add('fade'));const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.fade').forEach(el=>obs.observe(el));

const sendWhatsapp = document.querySelector('#send-whatsapp');
const sendEmail = document.querySelector('#send-email');

function getFormMessage() {
  const nom = document.querySelector('#nom')?.value.trim();
  const contact = document.querySelector('#contact-client')?.value.trim();
  const objet = document.querySelector('#objet')?.value.trim();
  const message = document.querySelector('#message-client')?.value.trim();

  if (!nom || !contact || !message) {
    alert('Veuillez renseigner votre nom, votre contact et votre message.');
    return null;
  }

  return {
    subject: `Nouvelle demande - ${objet}`,
    body:
`Nouvelle demande depuis le site EDIM SERVICES

Nom : ${nom}
Contact : ${contact}
Objet : ${objet}

Message :
${message}`
  };
}

if (sendWhatsapp) {
  sendWhatsapp.addEventListener('click', () => {
    const data = getFormMessage();
    if (!data) return;

    const phone = '+2250709074146';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(data.body)}`;
    window.open(url, '_blank');
  });
}

if (sendEmail) {
  sendEmail.addEventListener('click', () => {
    const data = getFormMessage();
    if (!data) return;

    const email = 'edimservices6@gmail.com';
    const url = `mailto:${email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.body)}`;
    window.location.href = url;
  });
}
