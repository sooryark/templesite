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
      mainContent:{
        additionalTitle:"Arulmigu Alli Thurai Sri Kamakshi Amman Koodipattu Temple",
        additionaldescription:"The Arulmigu Alli Thurai Sri Kamakshi Amman Koodipattu Temple is one of the most revered shrines in Tamil Nadu. It is known for its divine grace and vibrant spiritual ambiance. This sacred temple has been a cornerstone of faith for devotees for generations, offering solace and blessings to all who visit.The temple features remarkable architecture with intricate carvings and a serene environment that enhances the spiritual experience. It is dedicated to Goddess Kamakshi Amman, who is worshipped as a powerful manifestation of divine energy.Visitors flock to this temple during major festivals such as Navaratri, Aadi, and the annual Brahmotsavam. These occasions are marked by grand celebrations, colorful rituals, and the divine presence felt by devotees.The temple not only attracts pilgrims but also nature lovers who admire its serene backdrop and lush greenery. With its tranquil environment and rich heritage, it is a must-visit for anyone seeking a deep spiritual connection and peace of mind."  
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
      mainContent:{
        additionalTitle:"அல்லிதுரை அருள்மிகு ஸ்ரீ காமாட்சியம்மன் குடிப்பட்டுகோவில்",
        additionaldescription:"அருள்மிகு அல்லி துரை ஸ்ரீ காமாக்ஷி அம்மன் கூடிபத்து கோவில் தமிழ்நாட்டின் மிகவும் போற்றப்படும் தலங்களில் ஒன்றாகும். இது தெய்வீக கருணை மற்றும் துடிப்பான ஆன்மீக சூழ்நிலைக்கு பெயர் பெற்றது. இந்த புனித ஆலயம் தலைமுறை தலைமுறையாக பக்தர்களுக்கு நம்பிக்கையின் மூலக்கல்லாக இருந்து வருகிறது, வருகை தரும் அனைவருக்கும் ஆறுதலையும் ஆசீர்வாதத்தையும் வழங்குகிறது.சிக்கலான சிற்ப வேலைப்பாடுகள் மற்றும் ஆன்மீக அனுபவத்தை மேம்படுத்தும் அமைதியான சூழலுடன் குறிப்பிடத்தக்க கட்டிடக்கலையை இந்த ஆலயம் கொண்டுள்ளது. இது தெய்வீக ஆற்றலின் சக்திவாய்ந்த வெளிப்பாடாக வழிபடப்படும் காமாக்ஷி அம்மனுக்கு அர்ப்பணிக்கப்பட்டுள்ளது.நவராத்திரி, ஆடி மற்றும் ஆண்டு பிரம்மோத்ஸவம் போன்ற முக்கிய பண்டிகைகளின் போது இந்த கோவிலுக்கு பார்வையாளர்கள் குவிகின்றனர். இந்த நிகழ்வுகள் பிரமாண்டமான கொண்டாட்டங்கள், வண்ணமயமான சடங்குகள் மற்றும் பக்தர்கள் உணரும் தெய்வீக இருப்பு ஆகியவற்றால் குறிக்கப்படுகின்றன.இக்கோயில் யாத்ரீகர்களை மட்டுமல்ல, அதன் அமைதியான பின்னணியையும் பசுமையான பசுமையையும் ரசிக்கும் இயற்கை ஆர்வலர்களையும் ஈர்க்கிறது. அதன் அமைதியான சூழல் மற்றும் வளமான பாரம்பரியத்துடன், ஆழ்ந்த ஆன்மீக தொடர்பையும் மன அமைதியையும் விரும்பும் எவரும் கட்டாயம் பார்க்க வேண்டிய இடமாகும்."
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
  let currentLang = "ta";
  
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

    document.getElementById("additionalTitle").textContent = content.mainContent.additionalTitle
    document.getElementById("additionaldescription").textContent = content.mainContent.additionaldescription
  
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
