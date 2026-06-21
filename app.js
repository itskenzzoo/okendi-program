/**
 * The Okendi Education Program - Application Logic
 * Implements SPA navigation, donation calculator, custom dialog modal handlers,
 * light-dismiss fallback listeners, and form validations.
 */

// --- 1. Success Stories Database ---
const storiesDatabase = {
  origin: {
    title: "Our Origin: A Family's Promise",
    tag: "Origin",
    meta: "",
    img: "",
    paragraphs: [
      "<h4>The Spark: A Family's Promise</h4>",
      "Every great movement begins with a single act of conviction. Long before it became a structured beacon of hope, The Okendi Education Program began around a simple family table. Witnessing the immense struggles of <strong>two</strong> bright, determined children within our immediate circle who were forced out of classrooms simply because of school fees, we stepped in to close the gap. What started as an intimate effort to support those two quickly extended to <strong>relatives and neighbors</strong> as we realized the quiet crisis unfolding around us. This localized support revealed a much larger, heartbreaking reality: financial constraints were dictating children's destinies everywhere. Driven by the need to protect the dreams of these young minds, those first few tuition payments became the foundation of our life-long mission.",
      "<h4>The Growth: From a Few to Over One Thousand Five Hundred</h4>",
      "What began as a quiet family lifeline soon gathered an undeniable momentum. As the years unfolded, the grassroots initiative steadily expanded from helping relatives and neighbors into a robust, strategic network now catering to <strong>over one thousand five hundred</strong> financially challenged students across secondary schools and universities. Our rapid growth reflects this rising demand: from supporting <strong>314 students in 2024</strong>, to <strong>694 students in 2025</strong>, and scaling to <strong>1,500+ students in 2026</strong>. We grew because the need was vast, but more importantly, we grew because the model worked. By shifting from a casual support system to a structured bursary pipeline, we began transforming entire school ecosystems. We ensured that brilliant young minds from vulnerable backgrounds could remain seated at their desks, focusing entirely on their education rather than the crushing weight of fee arrears.",
      "<h4>The Shift: A Legacy of Collective Action</h4>",
      "As we expanded from a handful of students to over one thousand five hundred, our operations matured, but our foundational drive remained exactly the same. The journey from a small family initiative to a large-scale educational program taught us that true impact cannot be achieved in isolation. It requires a dedicated network of mentors, educators, and supporters working in tandem. By completely dismantling these financial barriers at scale, we continue to prove exactly what is possible when we stand together as <strong>one community</strong>, driven by <strong>many voices</strong>, to secure a future of <strong>shared opportunity</strong> for all."
    ],
    quote: "One community, driven by many voices, to secure a future of shared opportunity."
  },
  amina: {
    title: "Amina Wekesa",
    tag: "Scholar",
    meta: "Kilifi County • Grade 11 • Future Cardiologist",
    img: "assets/student-amina.png",
    paragraphs: [
      "Amina Wekesa grew up in a small village in Kilifi County, where water scarcity and subsistence farming define daily life. As the eldest of four siblings, her educational prospects looked bleak when her family's crops failed. Despite scoring 382 marks on her KCPE exams, she had no means to enroll in high school.",
      "The Okendi Education Program stepped in at her darkest hour, providing a full four-year scholarship covering all tuition, boarding fees, and health support. Today, Amina is one of the top students at her school, excels in Chemistry and Biology, and dreams of becoming a pediatric cardiologist.",
      "She believes that access to education is the key to transforming healthcare systems in rural communities."
    ],
    quote: "Education has given me a voice and a purpose. I am no longer just a statistic of village dropouts; I am a future doctor."
  },
  david: {
    title: "David Omondi",
    tag: "Alumni",
    meta: "Kisumu County • University Freshman • Future Software Engineer",
    img: "assets/student-david.png",
    paragraphs: [
      "David Omondi's journey with The Okendi Education Program began in 2021. Raised by a single grandmother in Kisumu, David spent his early childhood selling fish by the lakeshore to buy pencils. When he scored 405 marks in primary school, local leaders reached out to APV/Okendi.",
      "David graduated secondary school last year with an overall A- grade. Thanks to The Okendi Alumni Program, he received assistance with college admission and was awarded a placement at a top university to study Software Engineering.",
      "He is already building basic open-source SMS agricultural systems to help local fishermen track market prices and weather conditions."
    ],
    quote: "Okendi didn't just pay my fees; they gave me mentors who taught me how to think, build, and lead. I want to build technology that solves actual problems."
  },
  florence: {
    title: "Florence Chepngetich",
    tag: "Scholar",
    meta: "Kericho County • Grade 10 • Future Agricultural Scientist",
    img: "assets/hero-bg.png", // Reusing background placeholder
    paragraphs: [
      "Florence Chepngetich has always been fascinated by soil, plants, and weather. Living in the lush hills of Kericho, she witnessed smallholder farmers struggle with soil degradation and erratic rainfall due to climate change.",
      "Unable to afford school fees, Florence was facing an early marriage or manual tea picking. Her high KCPE score caught the attention of the Okendi community outreach team. Under the program, Florence is learning biology, agricultural sciences, and leadership.",
      "She aims to study Agronomy at university and return to Kericho to teach farmers about sustainable irrigation, organic fertilizing, and crop rotation."
    ],
    quote: "A farm is a classroom. I want to bring modern science back to my village's soil so no family goes hungry."
  },
  nickson: {
    title: "Nickson Sekoh",
    tag: "Chairman",
    meta: "Chairman of Africa's Promise • Leadership Team",
    img: "assets/team-nickson.jpeg",
    paragraphs: [
      "Nickson Sekoh is the Chairman of Africa's Promise, overseeing global direction, strategic growth, and resource development to empower local initiatives.",
      "His leadership guides the Okendi Education Program and associated community projects, ensuring they remain committed to high-impact educational sponsorships, mentorship, and youth leadership development across East Africa."
    ],
    quote: "Empowering communities begins with securing a pathway of opportunity for our children."
  },
  collins: {
    title: "Collins Okendi",
    tag: "Chairman",
    meta: "Chairman of Okendi Education Program",
    img: "assets/team-collins.jpeg",
    paragraphs: [
      "Collins Okendi is a key leader at the Okendi Education Program. His full role and background story will be updated here in due course.",
      "Under his leadership, the program continues to bridge educational gaps, coordinate with partner schools, and expand its mentorship circles to support diverse learners across East Africa."
    ],
    quote: "Empowering youth through education creates lasting leadership and shared opportunity in our communities."
  },
  hassan: {
    title: "Hassan Opidi",
    tag: "CEO",
    meta: "Chief Executive Officer • Okendi Education Program",
    img: "assets/team-hassan.png",
    paragraphs: [
      "Hassan Opidi is a member of the Okendi Education Program team. His full role, background story, and position details will be updated here in due course."
    ],
    quote: "Dedicated to the Okendi Education Program mission."
  },
  emilly: {
    title: "Emilly Okello",
    tag: "Vice Chairperson",
    meta: "Vice Chairperson • Okendi Education Program",
    img: "assets/team-emily.jpeg",
    paragraphs: [
      "Emilly Okello is a member of the Okendi Education Program team. Her full role, background story, and position details will be updated here in due course."
    ],
    quote: "Dedicated to the Okendi Education Program mission."
  },
  james: {
    title: "James Obop Mayienga",
    tag: "Educationist",
    meta: "Educationist • Okendi Education Program",
    img: "assets/team-james.png",
    paragraphs: [
      "James Obop Mayienga is a member of the Okendi Education Program team. His full role and background story will be updated here in due course."
    ],
    quote: "Dedicated to providing support, guidance, and care for our scholars on their educational journey."
  },
  wendy: {
    title: "Wendy Deya",
    tag: "Creative",
    meta: "Creative • Okendi Education Program",
    img: "assets/team-wendy.jpeg",
    paragraphs: [
      "Wendy Deya is a valued member of the Okendi Education Program team. Her full role, background story, and position details will be updated here in due course."
    ],
    quote: "Dedicated to the Okendi Education Program mission."
  },
  edith: {
    title: "Edith Onyango",
    tag: "Educationist",
    meta: "Educationist • Okendi Education Program",
    img: "assets/team-edith.jpeg",
    paragraphs: [
      "Edith Onyango is a member of the Okendi Education Program team. Her full role, background story, and position details will be updated here in due course."
    ],
    quote: "Dedicated to the Okendi Education Program mission."
  },
  joshua: {
    title: "Joshua Omollo",
    tag: "Financial Advisor",
    meta: "Financial Advisor • Okendi Education Program",
    img: "assets/team-joshua.png",
    paragraphs: [
      "Joshua Omollo is a member of the Okendi Education Program team. His full role, background story, and position details will be updated here in due course."
    ],
    quote: "Dedicated to the Okendi Education Program mission."
  },
  fredrick: {
    title: "Dr. Fred Nyabwa",
    tag: "Technical Advisor",
    meta: "Technical Advisor • Okendi Education Program",
    img: "assets/team-fred.jpeg",
    paragraphs: [
      "Fredrick Nyabwa is a member of the Okendi Education Program team. His full role, background story, and position details will be updated here in due course."
    ],
    quote: "Dedicated to the Okendi Education Program mission."
  },
  vitalis: {
    title: "Dr. Vitalis Ogombe",
    tag: "Lead Strategist",
    meta: "Lead Strategist • Okendi Education Program",
    img: "assets/team-vitalis.jpeg",
    paragraphs: [
      "Vitalis Ogombe is a member of the Okendi Education Program team. His full role, background story, and position details will be updated here in due course."
    ],
    quote: "Dedicated to the Okendi Education Program mission."
  },
  peter: {
    title: "Peter Odongo",
    tag: "Project Consultant",
    meta: "Project Consultant • Okendi Education Program",
    img: "assets/team-peter.png",
    paragraphs: [
      "Peter Odongo is a member of the Okendi Education Program team. His full role, background story, and position details will be updated here in due course."
    ],
    quote: "Dedicated to the Okendi Education Program mission."
  },
  joseph: {
    title: "Joseph Situma",
    tag: "Program Strategist",
    meta: "Program Strategist • Okendi Education Program",
    img: "assets/team-joseph.jpeg",
    paragraphs: [
      "Joseph Situma is a member of the Okendi Education Program team. His full role, background story, and position details will be updated here in due course."
    ],
    quote: "Dedicated to the Okendi Education Program mission."
  },
  george: {
    title: "George Ngeta",
    tag: "Development Expert",
    meta: "Development Expert • Okendi Education Program",
    img: "assets/team-geroge.png",
    paragraphs: [
      "George Ngeta is a member of the Okendi Education Program team. His full role, background story, and position details will be updated here in due course."
    ],
    quote: "Dedicated to the Okendi Education Program mission."
  },
  williams: {
    title: "George Williams",
    tag: "Learning Design and Training Specialist",
    meta: "Learning Design and Training Specialist • Okendi Education Program",
    img: "assets/team-williams.jpeg",
    paragraphs: [
      "George Williams is a member of the Okendi Education Program team. His full role, background story, and position details will be updated here in due course."
    ],
    quote: "Dedicated to the Okendi Education Program mission."
  }
};

// --- 2. DOM Elements & State Init ---
document.addEventListener('DOMContentLoaded', () => {
  // Navigation & Layout Elements
  const header = document.getElementById('main-header');
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('main > section');
  const hamburger = document.getElementById('mobile-menu-toggle');
  const navBar = document.getElementById('navigation-bar');

  // Dialogs
  const storyDialog = document.getElementById('story-dialog');
  const paymentDialog = document.getElementById('payment-dialog');
  const receiptDialog = document.getElementById('receipt-dialog');

  // Forms
  const paymentForm = document.getElementById('payment-form');

  // Toast Alert
  const toast = document.getElementById('notification-toast');
  const toastMessage = document.getElementById('toast-message');

  // Application state
  let currentDonationFrequency = 'One-Time';
  let currentDonationAmount = 5000;
  let lastActiveElement = null;

  // --- 3. Scroll Behavior & Hamburger Menu ---
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    hamburger.classList.toggle('open');
    navBar.classList.toggle('open');
  });

  // --- 4. Single Page Routing / Navigation Logic ---
  function navigateTo(targetId) {
    if (!targetId) return;

    // Hide mobile navigation if open
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    navBar.classList.remove('open');

    // Update Nav bar highlights
    navItems.forEach(item => {
      if (item.getAttribute('data-target') === targetId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update section visibility with transitions
    sections.forEach(section => {
      if (section.id === targetId) {
        section.classList.add('active-section');
      } else {
        section.classList.remove('active-section');
      }
    });

    // Scroll smoothly to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Bind click listeners for header nav and footer links
  document.querySelectorAll('[data-target]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-target');
      navigateTo(targetId);
    });
  });

  // --- 5. Dialog Helper (Light-Dismiss Fallback) ---
  // Apply fallback light dismiss to dialog overlays
  function registerDialogFallback(dialogElement) {
    if (!dialogElement) return;

    // Check if the browser supports native closedby attribute
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialogElement.addEventListener('click', (event) => {
        if (event.target !== dialogElement) return;

        const rect = dialogElement.getBoundingClientRect();
        const isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );

        if (!isDialogContent) {
          dialogElement.close();
        }
      });
    }
  }

  [storyDialog, paymentDialog, receiptDialog].forEach(registerDialogFallback);

  // --- 6. Success Story Modal Logic ---
  const storyLinks = document.querySelectorAll('.story-link');
  storyLinks.forEach(link => {
    // Click triggers
    link.addEventListener('click', () => {
      const storyId = link.getAttribute('data-story-id');
      openStoryModal(storyId);
    });
    // Keyboard accessibility trigger
    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const storyId = link.getAttribute('data-story-id');
        openStoryModal(storyId);
      }
    });
  });

  // --- 6.5. Story Filter Logic ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const storyCards = document.querySelectorAll('.story-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active class on buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      storyCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          // Trigger a micro-fade-in animation
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  function openStoryModal(storyId) {
    const data = storiesDatabase[storyId];
    if (!data) return;

    // Populate modal components
    const dialogImg = document.getElementById('story-dialog-img');
    const existingPlaceholder = dialogImg.parentNode.querySelector('.modal-img-placeholder');
    if (existingPlaceholder) {
      existingPlaceholder.remove();
    }

    if (data.img) {
      dialogImg.style.display = 'block';
      dialogImg.src = data.img;
      dialogImg.alt = `${data.title} portrait image`;
    } else {
      dialogImg.style.display = 'none';
      dialogImg.src = '';
      dialogImg.alt = '';
      const placeholder = document.createElement('div');
      placeholder.className = 'modal-img-placeholder';
      placeholder.innerHTML = '<span>[ Image to be placed here ]</span>';
      dialogImg.parentNode.insertBefore(placeholder, dialogImg);
    }
    document.getElementById('story-dialog-tag').textContent = data.tag;
    document.getElementById('story-dialog-title').textContent = data.title;
    document.getElementById('story-dialog-meta').textContent = data.meta;

    // Compose body paragraphs
    const textContainer = document.getElementById('story-dialog-text');
    textContainer.innerHTML = ''; // clear

    data.paragraphs.forEach(p => {
      if (p.startsWith('<h4>') || p.startsWith('<h3>')) {
        const div = document.createElement('div');
        div.innerHTML = p;
        textContainer.appendChild(div.firstChild);
      } else {
        const pTag = document.createElement('p');
        pTag.innerHTML = p;
        textContainer.appendChild(pTag);
      }
    });

    if (data.quote) {
      const quoteBlock = document.createElement('div');
      quoteBlock.className = 'modal-quote';
      quoteBlock.textContent = `"${data.quote}"`;
      textContainer.appendChild(quoteBlock);
    }

    // Open Modal
    lastActiveElement = document.activeElement;
    storyDialog.showModal();
    // Move focus to close button for accessibility
    document.getElementById('story-dialog-close').focus();
  }

  // Story close button
  document.getElementById('story-dialog-close').addEventListener('click', () => {
    storyDialog.close();
  });

  // Return focus when dialog is closed
  storyDialog.addEventListener('close', () => {
    if (lastActiveElement) {
      lastActiveElement.focus();
      lastActiveElement = null;
    }
  });

  // --- 7. Interactive Donation Module ---
  const donationTabs = document.querySelectorAll('.donate-tab');
  const donationAmountButtons = document.querySelectorAll('.donate-amount-btn');
  const customDonationInput = document.getElementById('custom-donation-input');
  const donationStatement = document.getElementById('donation-impact-statement');
  const donateTriggerBtn = document.getElementById('donate-trigger-btn');

  // Frequency tab toggles
  donationTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      donationTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentDonationFrequency = tab.id === 'donate-tab-monthly' ? 'Monthly' : 'One-Time';
      updateDonationUI();
    });
  });

  // Fixed Amount buttons
  donationAmountButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      donationAmountButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      customDonationInput.value = ''; // Reset custom value
      currentDonationAmount = parseFloat(btn.getAttribute('data-amount'));
      updateDonationUI();
    });
  });

  // Custom Amount input box
  customDonationInput.addEventListener('input', () => {
    donationAmountButtons.forEach(b => b.classList.remove('active'));
    const val = customDonationInput.value.trim();
    if (val !== '' && !isNaN(val) && parseFloat(val) > 0) {
      currentDonationAmount = parseFloat(val);
    } else {
      currentDonationAmount = 0;
    }
    updateDonationUI();
  });

  // Impact calculations and statement updates
  function updateDonationUI() {
    let statement = '';
    let headline = '';
    let body = '';
    const freqText = currentDonationFrequency === 'Monthly' ? '/month' : '';
    const receiptFreq = currentDonationFrequency === 'Monthly' ? 'Monthly Sponsorship' : 'One-Time Contribution';

    if (currentDonationAmount <= 0) {
      statement = `Enter an amount to support The Okendi Education Program.`;
      headline = "Sponsor a Student's Future";
      body = "Every donation helps cover school uniform supplies, reading materials, fees, and mentoring events.";
    } else if (currentDonationAmount < 3000) {
      statement = `A KSh ${currentDonationAmount.toLocaleString()}${freqText} donation provides essential school geometry tools, books, and study pencils.`;
      headline = "Basic School Supplies";
      body = "Your donation covers secondary and university learning accessories that keep students active in class.";
    } else if (currentDonationAmount >= 3000 && currentDonationAmount < 6000) {
      statement = `A KSh ${currentDonationAmount.toLocaleString()}${freqText} donation covers textbooks, school uniforms, and reading exercises for one term.`;
      headline = "Textbooks & Stationery";
      body = "Provides official course textbooks, learning material, and uniforms that represent student pride.";
    } else if (currentDonationAmount >= 6000 && currentDonationAmount < 12000) {
      statement = `A KSh ${currentDonationAmount.toLocaleString()}${freqText} donation covers school uniforms, study safety shoes, and complete classroom supplies for one semester.`;
      headline = "Complete School Kits";
      body = "Equips one student with essential school uniform items, shoes, bags, and standard term writing materials.";
    } else if (currentDonationAmount >= 12000 && currentDonationAmount < 30000) {
      statement = `A KSh ${currentDonationAmount.toLocaleString()}${freqText} donation covers boarding school fees, school cafeteria meals, and health checkups for one full term.`;
      headline = "Boarding & Nutrition";
      body = "Guarantees secure dormitory accommodation, nutritious daily meals, and access to campus healthcare programs.";
    } else if (currentDonationAmount >= 30000 && currentDonationAmount < 60000) {
      statement = `A KSh ${currentDonationAmount.toLocaleString()}${freqText} donation fully funds a student's comprehensive secondary or university tuition, boarding, and mentorship for an entire term!`;
      headline = "Full Term Scholar Sponsorship";
      body = "Supports one high-performing student through an entire academic term, covering tuition fees, learning materials, and individual mentoring.";
    } else {
      statement = `A KSh ${currentDonationAmount.toLocaleString()}${freqText} donation covers a scholar's full year of secondary or university fees, housing boarding, materials, and career guidance!`;
      headline = "Full-Year Scholarship Support";
      body = "You are funding a complete year of high school or university education. This removes all economic barriers to a scholar's learning.";
    }

    donationStatement.textContent = statement;
    document.getElementById('impact-headline').textContent = headline;
    document.getElementById('impact-body').textContent = body;

    // Update main CTA button text
    if (currentDonationAmount > 0) {
      donateTriggerBtn.textContent = `Donate KSh ${currentDonationAmount.toLocaleString()} ${currentDonationFrequency === 'Monthly' ? 'Monthly' : 'Now'}`;
      donateTriggerBtn.disabled = false;
      donateTriggerBtn.style.opacity = '1';
    } else {
      donateTriggerBtn.textContent = 'Enter Amount to Donate';
      donateTriggerBtn.disabled = true;
      donateTriggerBtn.style.opacity = '0.6';
    }
  }

  // --- 8. Payment Checkout & Receipt Process ---
  // Trigger Payment Modal
  donateTriggerBtn.addEventListener('click', () => {
    if (currentDonationAmount <= 0) return;

    document.getElementById('payment-amount-display').textContent = `KSh ${currentDonationAmount.toLocaleString()}`;
    document.getElementById('payment-type-display').textContent = currentDonationFrequency === 'Monthly' ? '(Monthly Sponsorship)' : '(One-Time Donation)';

    paymentDialog.showModal();
  });

  // Cancel Payment Modal
  document.getElementById('payment-dialog-close').addEventListener('click', () => {
    paymentDialog.close();
  });

  // Submit Simulated Payment Form
  paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validation
    const name = document.getElementById('pay-name').value.trim();
    const card = document.getElementById('pay-card').value.trim();
    const expiry = document.getElementById('pay-expiry').value.trim();
    const cvv = document.getElementById('pay-cvv').value.trim();

    if (!name || !card || !expiry || !cvv) {
      showToast("Please fill out all payment details.", "error");
      return;
    }

    // Process mock payment transition
    const submitBtn = document.getElementById('payment-submit-btn');
    submitBtn.textContent = 'Processing Payment...';
    submitBtn.disabled = true;

    setTimeout(() => {
      // Clear forms
      paymentForm.reset();
      submitBtn.textContent = 'Complete Donation';
      submitBtn.disabled = false;

      // Close Checkout
      paymentDialog.close();

      // Open Receipt
      const receiptId = 'OKD-' + Math.floor(10000000 + Math.random() * 90000000);
      document.getElementById('receipt-id').textContent = receiptId;
      document.getElementById('receipt-amount').textContent = `KSh ${currentDonationAmount.toLocaleString()}`;
      document.getElementById('receipt-frequency').textContent = currentDonationFrequency === 'Monthly' ? 'Monthly Sponsorship' : 'One-Time Contribution';

      receiptDialog.showModal();
    }, 1500);
  });

  // Return to Home from Receipt
  document.getElementById('receipt-dialog-close').addEventListener('click', () => {
    receiptDialog.close();
    navigateTo('home');
  });

  // --- 8.5. Team Member Modal Triggers ---
  document.querySelectorAll('.team-story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const teamId = btn.getAttribute('data-team-id');
      openStoryModal(teamId);
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const teamId = btn.getAttribute('data-team-id');
        openStoryModal(teamId);
      }
    });
  });

  // --- 9. Events & Newsletter Subscriptions ---
  // Event Registration buttons
  document.querySelectorAll('.register-event-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const eventName = btn.getAttribute('data-event');
      showToast(`Thank you! You have registered for: ${eventName}`);
    });
  });

  // Partner Contact button
  const partnerBtn = document.getElementById('partner-events-btn');
  if (partnerBtn) {
    partnerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast("Thank you! Our partnerships team will contact you shortly.");
    });
  }


  // Helper function to display highly styled Toast notifications
  function showToast(message, type = 'success') {
    toastMessage.textContent = message;

    // Style adjustments
    if (type === 'error') {
      toast.style.borderLeftColor = '#EF4444'; // Red
    } else {
      toast.style.borderLeftColor = '#10B981'; // Green
    }

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
});
