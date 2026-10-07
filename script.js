document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const links = document.querySelectorAll(".main-nav a");
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  const pageShell = document.querySelector(".page-shell");
  const contentSections = document.querySelectorAll(".content > .section");
  const siteFooter = document.querySelector(".site-footer");
  const sections = document.querySelectorAll("main .section[id]");
  const assistantWidget = document.querySelector(".assistant-widget");
  const scrollCue = document.querySelector("#home .scroll-cue");
  const heroBottomActions = document.querySelector(".hero-bottom-actions");
  const themeToggle = document.querySelector("#themeToggle");
  const themeStorageKey = "nancy-portfolio-theme";
  const contactGrid = document.querySelector(".contact-grid");
  const contactCard = document.querySelector(".contact-card");
  const contactForm = document.querySelector(".contact-form");
  const desktopHeaderMedia = window.matchMedia("(min-width: 641px)");
  const mobileHeroCueMedia = window.matchMedia("(max-width: 640px)");

  try {
    document.documentElement.dataset.theme = localStorage.getItem(themeStorageKey) === "dark" ? "dark" : "light";
  } catch {
    document.documentElement.dataset.theme = "light";
  }

  const applyMobileShellStyles = () => {
    if (!pageShell) return;

    const isMobile = mobileHeroCueMedia.matches;

    if (assistantWidget) {
      assistantWidget.style.position = "";
      assistantWidget.style.right = "";
      assistantWidget.style.bottom = "";
      assistantWidget.style.zIndex = "";
    }

    const isDarkTheme = document.documentElement.dataset.theme === "dark";
    document.body.style.background = isMobile ? (isDarkTheme ? "#11161e" : "#dfeaf7") : "";

    if (!isMobile) {
      pageShell.style.width = "";
      pageShell.style.margin = "";
      pageShell.style.padding = "";
      pageShell.style.border = "";
      pageShell.style.borderRadius = "";
      pageShell.style.background = "";
      pageShell.style.boxShadow = "";
      pageShell.style.overflow = "";
      return;
    }

    pageShell.style.width = "min(100% - 14px, 440px)";
    pageShell.style.margin = "14px auto 0";
    pageShell.style.padding = "0";
    pageShell.style.border = isDarkTheme ? "2px solid #3b4653" : "2px solid #b9dfe7";
    pageShell.style.borderRadius = "26px";
    pageShell.style.background = isDarkTheme ? "rgba(25, 31, 40, 0.96)" : "rgba(244, 247, 255, 0.9)";
    pageShell.style.boxShadow = isDarkTheme ? "inset 0 0 0 1px rgba(255, 255, 255, 0.04)" : "inset 0 0 0 1px rgba(255, 255, 255, 0.25)";
    pageShell.style.overflow = "hidden";
  };

  const applyHeroCueMobileStyles = () => {
    if (!scrollCue) return;

    const isMobile = mobileHeroCueMedia.matches;
    const cueLabel = scrollCue.querySelector(".scroll-cue-label");
    const cueArrow = scrollCue.querySelector(".scroll-cue-arrow");

    if (!isMobile) {
      scrollCue.style.display = "";
      scrollCue.style.width = "";
      scrollCue.style.height = "";
      scrollCue.style.flex = "";
      scrollCue.style.justifyContent = "";
      scrollCue.style.alignItems = "";
      scrollCue.style.gap = "";
      scrollCue.style.padding = "";
      scrollCue.style.borderRadius = "";
      scrollCue.style.background = "";
      scrollCue.style.boxShadow = "";
      if (cueLabel) {
        cueLabel.style.display = "";
        cueLabel.style.position = "";
        cueLabel.style.maxWidth = "";
        cueLabel.style.overflow = "";
        cueLabel.style.opacity = "";
        cueLabel.style.transform = "";
        cueLabel.style.fontSize = "";
        cueLabel.style.fontWeight = "";
        cueLabel.style.whiteSpace = "";
        cueLabel.style.color = "";
      }
      if (cueArrow) {
        cueArrow.style.position = "";
        cueArrow.style.right = "";
        cueArrow.style.marginLeft = "";
        cueArrow.style.fontSize = "";
        cueArrow.style.lineHeight = "";
        cueArrow.style.display = "";
        cueArrow.style.alignItems = "";
      }
      return;
    }

    scrollCue.style.display = "flex";
    scrollCue.style.width = "min(260px, calc(100vw - 48px))";
    scrollCue.style.height = "58px";
    scrollCue.style.flex = "0 0 auto";
    scrollCue.style.justifyContent = "center";
    scrollCue.style.alignItems = "center";
    scrollCue.style.gap = "10px";
    scrollCue.style.padding = "0 22px";
    scrollCue.style.borderRadius = "9999px";
    scrollCue.style.background = "#fff";
    scrollCue.style.boxShadow = "0 10px 28px rgba(17, 24, 39, 0.08)";
    scrollCue.style.position = "relative";

    if (cueLabel) {
      cueLabel.style.display = "inline";
      cueLabel.style.position = "static";
      cueLabel.style.maxWidth = "none";
      cueLabel.style.overflow = "visible";
      cueLabel.style.opacity = "1";
      cueLabel.style.transform = "none";
      cueLabel.style.fontSize = "0.9375rem";
      cueLabel.style.fontWeight = "500";
      cueLabel.style.whiteSpace = "nowrap";
      cueLabel.style.color = "#1f2430";
    }

    if (cueArrow) {
      cueArrow.style.position = "static";
      cueArrow.style.right = "auto";
      cueArrow.style.marginLeft = "0";
      cueArrow.style.fontSize = "1.3rem";
      cueArrow.style.lineHeight = "1";
      cueArrow.style.display = "inline-flex";
      cueArrow.style.alignItems = "center";
    }
  };

  const applyMobileContactStyles = () => {
    const isMobile = window.matchMedia("(max-width: 640px)").matches;

    if (!contactGrid || !contactForm) return;

    if (!isMobile) {
      contactGrid.style.display = "";
      contactGrid.style.gridTemplateColumns = "";
      contactGrid.style.gap = "";
      contactGrid.style.paddingTop = "";
      contactCard && (contactCard.style.width = "");
      contactForm.style.display = "";
      contactForm.style.gap = "";
      contactForm.style.width = "";

      contactForm.querySelectorAll("label").forEach((label) => {
        label.style.display = "";
        label.style.gap = "";
        label.style.fontSize = "";
      });

      contactForm.querySelectorAll("input, textarea").forEach((field) => {
        field.style.width = "";
        field.style.padding = "";
        field.style.fontSize = "";
        field.style.boxSizing = "";
      });

      const primaryButton = contactForm.querySelector(".btn-primary");
      if (primaryButton) {
        primaryButton.style.width = "";
        primaryButton.style.justifyContent = "";
      }
      return;
    }

    contactGrid.style.display = "grid";
    contactGrid.style.gridTemplateColumns = "1fr";
    contactGrid.style.gap = "26px";
    contactGrid.style.paddingTop = "20px";

    contactCard && (contactCard.style.width = "100%");

    contactForm.style.display = "grid";
    contactForm.style.gap = "16px";
    contactForm.style.width = "100%";

    contactForm.querySelectorAll("label").forEach((label) => {
      label.style.display = "grid";
      label.style.gap = "6px";
      label.style.fontSize = "0.8rem";
    });

    contactForm.querySelectorAll("input, textarea").forEach((field) => {
      field.style.width = "100%";
      field.style.padding = "10px 0";
      field.style.fontSize = "1rem";
      field.style.boxSizing = "border-box";
    });

    const primaryButton = contactForm.querySelector(".btn-primary");
    if (primaryButton) {
      primaryButton.style.width = "100%";
      primaryButton.style.justifyContent = "center";
    }
  };

  const updateScrolledHeader = () => {
    const isScrolled = desktopHeaderMedia.matches && window.scrollY > 80;
    sidebar?.classList.toggle("is-scrolled", isScrolled);
    pageShell?.classList.toggle("has-floating-sidebar", isScrolled);
    heroBottomActions?.classList.toggle("is-floating", window.scrollY > 60);
  };

  const updateThemeToggle = () => {
    if (!themeToggle) return;
    const isDarkTheme = document.documentElement.dataset.theme === "dark";
    const label = isDarkTheme ? "Switch to light theme" : "Switch to dark theme";
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
    themeToggle.setAttribute("aria-pressed", String(isDarkTheme));
  };

  themeToggle?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem(themeStorageKey, nextTheme);
    } catch {}
    updateThemeToggle();
    applyMobileShellStyles();
    applyHeroCueMobileStyles();
  });

  updateThemeToggle();

  const initializeScrollReveals = () => {
    const targets = document.querySelectorAll(".timeline-item, .playbook-step, .stack-layer");
    const showTarget = (target) => target.classList.add("scroll-reveal", "is-visible");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      targets.forEach(showTarget);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

    targets.forEach((target, index) => {
      target.classList.add("scroll-reveal");
      target.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
      observer.observe(target);
    });
  };

  const setSectionView = (sectionId) => {
    const selectedSection = Array.from(contentSections).find((section) => section.id === sectionId);
    const visibleSectionIds = sectionId === "home" || sectionId === "projects" ? ["home", "projects"] : [sectionId];

    contentSections.forEach((section) => {
      section.hidden = Boolean(selectedSection) && !visibleSectionIds.includes(section.id);
    });

    if (siteFooter) siteFooter.hidden = sectionId === "contact";
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (link) setSectionView(link.getAttribute("href").slice(1));
  });

  window.addEventListener("hashchange", () => {
    setSectionView(decodeURIComponent(window.location.hash.slice(1)));
  });

  setSectionView(decodeURIComponent(window.location.hash.slice(1)) || "home");
  initializeScrollReveals();

  window.addEventListener("scroll", updateScrolledHeader, { passive: true });
  window.addEventListener("resize", () => {
    updateScrolledHeader();
    applyHeroCueMobileStyles();
    applyMobileContactStyles();
    applyMobileShellStyles();
  });
  updateScrolledHeader();
  applyHeroCueMobileStyles();
  applyMobileContactStyles();
  applyMobileShellStyles();

  if (assistantWidget) {
    const assistantPanel = assistantWidget.querySelector(".assistant-panel");
    const assistantLauncher = assistantWidget.querySelector(".assistant-launcher");
    const assistantClose = assistantWidget.querySelector(".assistant-close");
    const assistantMessages = assistantWidget.querySelector(".assistant-messages");
    const assistantForm = assistantWidget.querySelector(".assistant-form");
    const assistantInput = assistantWidget.querySelector("#assistantInput");
    const suggestions = assistantWidget.querySelectorAll(".assistant-suggestions button");
    const setAssistantOpen = (isOpen) => {
      assistantPanel.hidden = !isOpen;
      assistantLauncher.setAttribute("aria-expanded", String(isOpen));
      assistantLauncher.setAttribute("aria-label", isOpen ? "Close Ask about me chat" : "Open Ask about me chat");

      if (isOpen) {
        assistantInput.focus();
      } else {
        assistantLauncher.focus();
      }
    };

    const appendAssistantMessage = (text, type) => {
      const message = document.createElement("p");
      message.className = `assistant-message assistant-${type}`;
      message.textContent = text;
      assistantMessages.append(message);
      assistantMessages.scrollTop = assistantMessages.scrollHeight;
    };

    const getAssistantReply = (question) => {
      const normalizedQuestion = question.toLowerCase();

      if (/project|work|portfolio|built|build/.test(normalizedQuestion)) {
        return "Nancy’s projects include SAIBAOnline, NLEMS Portal, Cattle API, client-specific SAIBA integrations, and SWAP at Simson Softwares, plus a book shopping website built during her CS Infotech internship.";
      }

      if (/skill|tech|stack|language|framework|database|tool/.test(normalizedQuestion)) {
        return "Nancy works with C#, .NET, ASP.NET Core, Web APIs, SQL Server, Angular, JavaScript, and Microsoft Azure, along with REST APIs, clean architecture, and SQL optimization.";
      }

      if (/experience|company|employer|role|career|resume|résumé/.test(normalizedQuestion)) {
        return "Nancy has 4+ years of experience: Associate Software Developer at Simson Softwares (Jul 2023–Sep 2026), Jr. Software Developer at Offbeat Software Solution (Jul 2022–Jun 2023), and an internship at CS Infotech (Jan 2021–Jun 2022).";
      }

      if (/contact|email|linkedin|phone|hire|available|location|remote/.test(normalizedQuestion)) {
        return "Nancy is based in Mohali, India and is open to opportunities across India and remote roles. Email nancyrana699@gmail.com or use the contact section to get in touch.";
      }

      return "I can help with Nancy’s experience, projects, skills, or contact details. Try asking about one of those.";
    };

    const submitAssistantQuestion = (question) => {
      const trimmedQuestion = question.trim();
      if (!trimmedQuestion) return;

      appendAssistantMessage(trimmedQuestion, "question");
      appendAssistantMessage(getAssistantReply(trimmedQuestion), "reply");
      assistantInput.value = "";
      assistantInput.focus();
    };

    assistantLauncher.addEventListener("click", () => {
      setAssistantOpen(assistantPanel.hidden);
    });

    assistantClose.addEventListener("click", () => setAssistantOpen(false));

    assistantForm.addEventListener("submit", (event) => {
      event.preventDefault();
      submitAssistantQuestion(assistantInput.value);
    });

    suggestions.forEach((suggestion) => {
      suggestion.addEventListener("click", () => submitAssistantQuestion(suggestion.textContent));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !assistantPanel.hidden) {
        setAssistantOpen(false);
      }
    });
  }

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      sidebar.classList.toggle("menu-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        sidebar.classList.remove("menu-open");
        document.body.classList.remove("menu-open");
      });
    });
  }

  const setActiveLink = () => {
    const scrollPosition = window.scrollY + 160;

    sections.forEach((section) => {
      const id = section.getAttribute("id");
      const link = document.querySelector(`.main-nav a[href="#${id}"]`);
      if (!link) return;

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        links.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const name = (formData.get("name") || "").toString().trim();
      const email = (formData.get("email") || "").toString().trim();
      const message = (formData.get("message") || "").toString().trim();

      if (!name || !email || !message) {
        return;
      }

      const emailIsValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      if (!emailIsValid) {
        form.querySelector('input[type="email"]').focus();
        return;
      }

      const button = form.querySelector("button[type='submit']");
      const originalText = button.textContent;
      button.textContent = "Sending...";
      button.disabled = true;

      try {
        const payload = {
          name,
          email,
          message,
          _subject: "Portfolio Inquiry from Website",
          _captcha: "false"
        };

        const response = await fetch("https://formsubmit.co/ajax/nancyrana699@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          button.textContent = "Message sent";
          form.reset();
        } else {
          button.textContent = "Try again";
          console.error("Form submission failed");
        }
      } catch (error) {
        button.textContent = "Try again";
        console.error(error);
      } finally {
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 2200);
      }
    });
  }
});
