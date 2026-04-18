(function() {
  "use strict";

  // Initialize EmailJS with your public key
  (function() {
    emailjs.init("b5ms7ZSwqQMqT2kKl");
  })();

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileMenuToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Close mobile menu when clicking a link
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (mobileMenuToggle) {
          const icon = mobileMenuToggle.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // Apple-inspired messages
  const appleMessages = [
    "Think different.",
    "Simplicity is the ultimate sophistication.",
    "Designed by Apple in California.",
    "Your brand. Your rules.",
    "Privacy. That's iPhone.",
    "Creativity goes on.",
    "hy a · own your identity.",
    "Apple brand essence.",
    "One more thing…"
  ];

  const messageEl = document.getElementById('appleMessage');
  const refreshBtn = document.getElementById('refreshAppleMsg');

  function updateAppleMessage() {
    if (!messageEl) return;
    const randomMsg = appleMessages[Math.floor(Math.random() * appleMessages.length)];
    messageEl.style.opacity = '0.6';
    messageEl.textContent = randomMsg;
    setTimeout(() => { messageEl.style.opacity = '1'; }, 30);
  }

  if (refreshBtn) {
    refreshBtn.addEventListener('click', updateAppleMessage);
  }

  // Contact Form Handling with EmailJS
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Prepare template parameters - MUST match your EmailJS template variables
      const templateParams = {
        from_name: name,
        from_email: email,
        to_email: 'hemantrath75@gmail.com',
        subject: subject,
        message: message,
        reply_to: email
      };

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      formStatus.className = 'form-status loading';
      formStatus.textContent = 'Sending your message...';

      try {
        // Your EmailJS credentials
        const serviceID = 'service_83vvns3';
        const templateID = 'template_nrely9f';
        
        // Send email using EmailJS
        const response = await emailjs.send(serviceID, templateID, templateParams);
        
        console.log('SUCCESS!', response.status, response.text);
        
        // Success
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.';
        contactForm.reset();
        
        // Update the brand message as feedback
        if (messageEl) {
          messageEl.textContent = "Message sent. Thank you!";
        }
        
      } catch (error) {
        // Error details
        console.error('FAILED...', error);
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Oops! Something went wrong. Error: ' + error.text;
        
        if (messageEl) {
          messageEl.textContent = "Please try again.";
        }
      } finally {
        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          if (formStatus.classList.contains('success')) {
            formStatus.style.display = 'none';
            formStatus.className = 'form-status';
          }
        }, 5000);
      }
    });
  }

  // CTA button interactions
  const ctas = document.querySelectorAll('.btn-primary, .btn-link');
  ctas.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.getAttribute('href') === '#contact') return;
      
      e.preventDefault();
      const original = btn.textContent;
      if (btn.classList.contains('btn-primary')) {
        btn.textContent = '✓';
        setTimeout(() => { btn.textContent = original; }, 600);
      } else {
        const icon = btn.querySelector('i');
        if (icon) icon.style.transform = 'translateX(4px)';
        setTimeout(() => { if (icon) icon.style.transform = ''; }, 200);
      }
      
      if (messageEl) {
        const custom = ["Your brand.", "hy a project.", "Apple style."];
        messageEl.textContent = custom[Math.floor(Math.random() * custom.length)];
      }
    });
  });

  // Initial message setup
  if (messageEl && !messageEl.textContent.includes('Think')) {
    messageEl.textContent = appleMessages[0];
  }

  console.log(' Apple brand frontend — Contact form ready.');
})();

// Test function - Run this in console to test email sending
window.testEmailJS = function() {
  const testParams = {
    from_name: 'Test User',
    from_email: 'test@example.com',
    to_email: 'hemantrath75@gmail.com',
    subject: 'Test Email from Apple Brand Site',
    message: 'This is a test message to verify EmailJS configuration.',
    reply_to: 'test@example.com'
  };
  
  console.log('Sending test email...');
  
  emailjs.send('service_83vvns3', 'template_kvql953', testParams)
    .then(response => {
      console.log('TEST SUCCESS!', response.status, response.text);
      alert('Test email sent successfully! Check console for details.');
    })
    .catch(error => {
      console.error('TEST FAILED!', error);
      alert('Test failed: ' + error.text);
    });
};