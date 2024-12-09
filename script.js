// script.js

const languageContent = {
    en: {
      logo: "ALLITHURAI ARULMIGU SRI KAMATCHIAMMAN KUDIPATTUKOVIL",
      nav: {
        home: "Home",
        temples: "Temple",
        events: "Events",
        contact: "Contact"
      },
      hero: {
        title: "Discover the Spiritual Serenity",
        description: "Experience the divine journey through the sacred temple.",
        btn: "Explore"
      },
      temples: {
        title: "Our Temples",
        temple1: {
          title: "Temple Name 1",
          description: "Brief description of the temple."
        },
        temple2: {
          title: "Temple Name 2",
          description: "Brief description of the temple."
        }
      },
      contact: {
        title: "Contact Us",
        info: "Address: Temple Address",
        placeholders: {
          name: "Your Name",
          email: "Your Email",
          message: "Message"
        },
        submit: "Send"
      }
    },
    ta: {
      logo: "அல்லிதுரை அருள்மிகு ஸ்ரீ காமாட்சியம்மன் குடிப்பட்டுகோவில்",
      nav: {
        home: "முகப்பு",
        temples: "கோயில்",
        events: "நிகழ்வுகள்",
        contact: "தொடர்பு"
      },
      hero: {
        title: "ஆன்மீக அமைதியை கண்டறியவும்",
        description: "புனித கோயில்ளில் ஆன்மீக பயணத்தை அனுபவிக்கவும்.",
        btn: "கோயில்"
      },
      temples: {
        title: "எங்கள் கோயில்கள்",
        temple1: {
          title: "கோயில் பெயர் 1",
          description: "கோயிலின் சிறு விளக்கம்."
        },
        temple2: {
          title: "கோயில் பெயர் 2",
          description: "கோயிலின் சிறு விளக்கம்."
        }
      },
      contact: {
        title: "தொடர்பு கொள்ள",
        info: "முகவரி: கோயில் முகவரி",
        placeholders: {
          name: "உங்கள் பெயர்",
          email: "உங்கள் மின்னஞ்சல்",
          message: "செய்தி"
        },
        submit: "அனுப்பு"
      }
    }
  };
  
  // Language Toggle Logic
  let currentLang = "en";
  
  document.getElementById("lang-toggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ta" : "en";
    updateContent();
    document.getElementById("lang-toggle").textContent = currentLang === "en" ? "தமிழ்" : "English";
  });
  
  function updateContent() {
    const content = languageContent[currentLang];
    document.getElementById("logo").textContent = content.logo;
    document.getElementById("nav-home").textContent = content.nav.home;
    document.getElementById("nav-temples").textContent = content.nav.temples;
    // document.getElementById("nav-services").textContent = content.nav.services;
    document.getElementById("nav-events").textContent = content.nav.events;
    document.getElementById("nav-contact").textContent = content.nav.contact;
  
    document.getElementById("hero-title").textContent = content.hero.title;
    document.getElementById("hero-description").textContent = content.hero.description;
    document.getElementById("hero-btn").textContent = content.hero.btn;
  
    // document.getElementById("temples-title").textContent = content.temples.title;
    // document.getElementById("temple1-title").textContent = content.temples.temple1.title;
    // document.getElementById("temple1-description").textContent = content.temples.temple1.description;
    // document.getElementById("temple2-title").textContent = content.temples.temple2.title;
    // document.getElementById("temple2-description").textContent = content.temples.temple2.description;
  
    document.getElementById("contact-title").textContent = content.contact.title;
    document.getElementById("contact-info").textContent = content.contact.info;
    document.getElementById("name-placeholder").placeholder = content.contact.placeholders.name;
    document.getElementById("email-placeholder").placeholder = content.contact.placeholders.email;
    document.getElementById("message-placeholder").placeholder = content.contact.placeholders.message;
    document.getElementById("submit-btn").textContent = content.contact.submit;
  }
  
  // Initialize content
  updateContent();
  

 
  

  const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});


document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');


  menuToggle.addEventListener('click', () => {

    navMenu.classList.toggle('active'); // Toggles a class to show/hide the menu
  });
});
