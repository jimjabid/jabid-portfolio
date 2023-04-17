class SplitTextJS {
  constructor(_target) {
    this.result = new Object();
    this.result.originalText = _target.innerText;
    this.result.splitted = this.split(_target);
    this.result.words = this.result.splitted.querySelectorAll(
      ".SplitTextJS-wrapper"
    );
    this.result.chars =
      this.result.splitted.querySelectorAll(".SplitTextJS-char");
    this.result.spaces = this.result.splitted.querySelectorAll(
      ".SplitTextJS-spacer"
    );
    return this.result;
  }
  createSpan(_class) {
    let span = document.createElement("span");
    span.style.display = "inline-block";
    span.className = _class;
    return span;
  }
  split(_target) {
    let containerArray = new Array();
    const splittedTarget = _target.innerText.split(" ");
    let counter = splittedTarget.length;
    splittedTarget.map((word) => {
      const wrapper = this.createSpan("SplitTextJS-wrapper");
      word.split(/(?!^)/).map((char) => {
        let el = this.createSpan("SplitTextJS-char");
        el.innerText = char;
        wrapper.appendChild(el);
      });
      counter--;
      containerArray.push(wrapper);
      if (counter > 0) {
        let space = this.createSpan("SplitTextJS-char SplitTextJS-spacer");
        space.innerHTML = "&nbsp;";
        containerArray.push(space);
      }
    });
    _target.innerHTML = "";
    containerArray.forEach((child) => {
      _target.appendChild(child);
    });
    return _target;
  }
}

function animateHome() {
  const cover = document.querySelector(".cover");
  const coverTitle = document.querySelectorAll(".span");
  // const cover1 = document.querySelector(".cover__1");
  // const cover2 = document.querySelector(".cover__2");
  // const cover3 = document.querySelector(".cover__3");
  const greeting = document.querySelector(".home__greeting");
  const navMenu = document.querySelector(".nav__menu");
  const header = document.querySelector(".nav");
  // const splitGreeting = new SplitTextJS(greeting);
  const wrapperTitles = document.querySelector("#wrapper-home-name");
  const titles = document.querySelectorAll(".home__name-change");
  const aboutMeBtn = document.querySelector("#about-me");
  const socialLinks = document.querySelectorAll(".home__social-link");
  const homeBlob = document.querySelector(".home__blob");
  const cardDesign = document.querySelector("#card--design");
  const cardDevelopment = document.querySelector("#card--development");

  loadTl = () => {
    var loadingTl = gsap.timeline({
      defaults: { duration: 2, ease: "circ.out" },
    });

    loadingTl
      .from(coverTitle, {
        opacity: 0,
        scale: 0,
        // opacity: 0,
        duration: 4,
      })
      .to(coverTitle, {
        y: "-100vh",
        // opacity: 0,
        stagger: 0.25,
      })
      .to(
        cover,
        {
          y: "-100vh",
          display: "none",
        },
        "<0.25"
      );
    // loadingTl
    //   .to(
    //     coverTitle,
    //     {
    //       // scale: 8,
    //       transformOrigin: "center center",
    //       // rotateZ: 360,
    //     },
    //     "<0.01"
    //   )
    //   .to(coverTitle, {
    //     opacity: 0,
    //   })

    // .to(cover1, {
    //   yPercent: "-100",
    // })
    // .to(
    //   cover2,
    //   {
    //     yPercent: "100",
    //   },
    //   "<"
    // )
    // .to(
    //   cover3,
    //   {
    //     yPercent: "-100",
    //   },
    //   "<"
    // )
  };

  greetTl = () => {
    var greetingTL = gsap.timeline({
      defaults: { duration: 2, ease: "circ.out" },
    });

    greetingTL
      .from(
        greeting,
        {
          // yPercent: "100",
          y: "100vh",
          // scale: 0.1,
          opacity: 0,
          // transformOrigin: "center center",
        },
        "4.2"
      )
      .from(
        navMenu,
        {
          // y: "300",
          y: "100vh",
          ease: "circ.out",
        },
        "5"
      )
      .from(
        header,
        {
          opacity: 0,
        },
        "<"
      )

      .from(
        wrapperTitles,
        {
          // yPercent: "100",
          yPercent: "100vh",
          // scale: 0.1,
          opacity: 0,
          // transformOrigin: "bottom center",
        },
        "4.2"
      )
      .add("aboutMeBtn")
      .from(
        aboutMeBtn,
        // { duration: 3, scale: 0, opacity: 0, yPercent: "300" },
        { duration: 3, scale: 0, opacity: 0, y: "100vh" },
        "4.2"
      )
      .from(
        socialLinks,
        {
          duration: 2.5,
          opacity: 0,
          rotation: 360,
          y: "-500",
          stagger: 0.2,
          ease: "circ.out",
        },
        "4.2"
      )
      .add("homeBlob")
      .from(
        homeBlob,
        {
          duration: 3,
          // scale: 0,
          opacity: 0,
          // yPercent: "300",
          y: "100vh",
        },
        "<aboutMeBtn"
      )
      .from(
        cardDesign,
        {
          rotateZ: 360,
          x: "100vw",
        },
        "<0.5"
      )
      .from(
        cardDevelopment,
        {
          rotateZ: 360,
          x: "-100vw",
        },
        "<"
      );
  };

  titleTlAnimation = () => {
    var titleTL = gsap.timeline({
      repeat: -1,
      // onComplete: () => {
      //   titleTL.pause(2);
      // },
    });

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);

      titleTL
        .from(
          splitTitle.chars,
          { y: 16, opacity: 0, rotateX: -90, stagger: 0.02 },
          "<1"
        )
        .to(
          splitTitle.chars,
          { y: -16, opacity: 0, rotateX: 90, stagger: 0.02 },
          "<2"
        );
    });
  };

  loadTl();
  greetTl();
  titleTlAnimation();
}

function animateScroll() {
  gsap.registerPlugin(ScrollTrigger);

  animateScrollSvgBackgrounds = () => {
    // Here are the variables and constants
    const svgBackgroundHome = document.querySelector(".svg-container__home");
    const svgBackgroundAbout = document.querySelector(".svg-container__about");
    const svgBackgroundSkills = document.querySelector(
      ".svg-container__skills"
    );
    const svgBackgroundProjects = document.querySelector(
      ".svg-container__projects"
    );
    // Here are the variables for the timelines
    var svgBackgroundHomeTl = gsap.timeline();
    var svgBackgroundAboutTl = gsap.timeline();
    var svgBackgroundAboutTl2 = gsap.timeline();
    var svgBackgroundSkillsTl = gsap.timeline();
    var svgBackgroundSkillsTl2 = gsap.timeline();
    var svgBackgroundProjectsTl = gsap.timeline();
    var svgBackgroundProjectsTl2 = gsap.timeline();

    // Here are the animations withint the time line.
    svgBackgroundHomeTl.to(svgBackgroundHome, {
      yPercent: 5,
      ease: "circ.out",
    });
    svgBackgroundAboutTl.to(svgBackgroundAbout, {
      yPercent: -5,
      ease: "circ.out",
    });
    svgBackgroundAboutTl2.to(svgBackgroundAbout, {
      yPercent: 5,
      ease: "circ.out",
    });

    svgBackgroundSkillsTl.to(svgBackgroundSkills, {
      yPercent: -5,
      ease: "circ.out",
    });
    svgBackgroundSkillsTl2.to(svgBackgroundSkills, {
      yPercent: 5,
      ease: "circ.out",
    });
    svgBackgroundProjectsTl.to(svgBackgroundProjects, {
      yPercent: -5,
      ease: "circ.out",
    });
    svgBackgroundProjectsTl2.to(svgBackgroundProjects, {
      yPercent: 5,
      ease: "circ.out",
    });

    ScrollTrigger.create({
      animation: svgBackgroundHomeTl,
      trigger: ".home",
      togglesAction: "restart pause resume none",
      scrub: true,
      // markers: true,
      start: "top top",
      end: "bottom top",
    });
    ScrollTrigger.create({
      animation: svgBackgroundAboutTl,
      trigger: ".about",
      togglesAction: "restart pause resume none",
      scrub: true,
      // markers: true,
      start: "top 85%",
      end: "bottom top",
    });
    ScrollTrigger.create({
      animation: svgBackgroundAboutTl2,
      trigger: ".about",
      togglesAction: "restart pause resume none",
      scrub: true,
      // markers: true,
      start: "top 15%",
      end: "bottom top",
    });
    ScrollTrigger.create({
      animation: svgBackgroundSkillsTl,
      trigger: ".skills",
      togglesAction: "restart pause resume none",
      scrub: true,
      // markers: true,
      start: "top 85%",
      end: "bottom top",
    });
    ScrollTrigger.create({
      animation: svgBackgroundSkillsTl2,
      trigger: ".skills",
      togglesAction: "restart pause resume none",
      scrub: true,
      // markers: true,
      start: "top 15%",
      end: "bottom top",
    });
    ScrollTrigger.create({
      animation: svgBackgroundProjectsTl,
      trigger: ".projects",
      togglesAction: "restart pause resume none",
      scrub: true,
      // markers: true,
      start: "top 85%",
      end: "bottom top",
    });
    ScrollTrigger.create({
      animation: svgBackgroundProjectsTl2,
      trigger: ".projects",
      togglesAction: "restart pause resume none",
      scrub: true,
      // markers: true,
      start: "top 15%",
      end: "bottom top",
    });
  };

  animateScrollAboutMeContent = () => {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 810px)", () => {
      // mobile setup code here...

      // Here are the variables and constants
      const aboutMeTitle = document.querySelector(".about-me__title");
      const aboutBoxes = document.querySelectorAll(".about__box");

      // Here are the variables for the timelines
      var aboutMeTitleTl = gsap.timeline();
      var aboutBoxesTl = gsap.timeline();
      var aboutBoxesTl2 = gsap.timeline();

      // Here are the animations withint the time line.
      aboutMeTitleTl.from(aboutMeTitle, {
        opacity: 0,
        duration: 4,
        yPercent: 10,
        ease: "circ.out",
      });

      aboutBoxesTl
        .from(aboutBoxes, {
          duration: 0.5,
          xPercent: 400,
          ease: "circ.out",
        })
        .to(
          ".about__box:nth-child(2)",
          {
            top: "12rem",
            stagger: 0.5,
          },
          "+=0.5"
        )
        .to(".about__box:nth-child(3)", {
          top: "24rem",
          stagger: 0.5,
        });

      aboutBoxesTl2
        .to(aboutBoxes, {
          duration: 1.5,
          ease: "circ.out",
        })

        .to(
          ".about__box:nth-child(1)",
          {
            top: "12rem",
            stagger: 0.5,
          },
          "+=0.5"
        )
        .to(".about__box:nth-child(2)", {
          top: "24rem",
          stagger: 0.8,
        })
        .to(".about__box:nth-child(1)", {
          top: "24rem",
          stagger: 1,
        });

      // Here are the scrollTriggers calling the animations
      ScrollTrigger.create({
        animation: aboutMeTitleTl,
        trigger: aboutMeTitle,
        togglesAction: "restart pause resume none",
        scrub: true,
        // markers: true,
        start: "top 80%",
        // end: "+=500",
      });
      ScrollTrigger.create({
        animation: aboutBoxesTl,
        trigger: aboutMeTitle,
        id: "open-box",
        // markers: true,
        togglesAction: "restart pause resume none",
        scrub: true,
        // pinSpacing: false,

        start: "top 80%",
        end: "top top",
        // end: ".about__box:nth-child(1)",
      });
      ScrollTrigger.create({
        animation: aboutBoxesTl2,
        trigger: ".about__box:nth-child(2)",
        id: "close-box",
        // togglesAction: "restart pause resume none",
        scrub: true,
        // pinSpacing: false,
        // markers: true,
        start: "top 15%",
        end: "+=250 15%",
      });
    });

    mm.add("(min-width: 810px)", () => {
      // desktop setup code here...
      // Here are the variables and constants
      const aboutMeTitle = document.querySelector(".about-me__title");
      const aboutBoxes = document.querySelectorAll(".about__box");

      // Here are the variables for the timelines
      var aboutMeTitleTl = gsap.timeline();
      var aboutBoxesTl = gsap.timeline();
      var aboutBoxesTl2 = gsap.timeline();

      // Here are the animations withint the time line.
      aboutMeTitleTl.from(aboutMeTitle, {
        opacity: 0,
        duration: 4,
        y: "10vh",
        ease: "circ.out",
      });

      aboutBoxesTl.from(aboutBoxes, {
        opacity: 0,
        duration: 4,
        stagger: 1,

        y: "10vh",
        ease: "circ.out",
      });

      // .to(aboutBoxes,){

      // }
      //   .to(
      //     ".about__box:nth-child(2)",
      //     {
      //       top: "12rem",
      //       stagger: 0.5,
      //     },
      //     "+=0.5"
      //   )
      //   .to(".about__box:nth-child(3)", {
      //     top: "24rem",
      //     stagger: 0.5,
      //   });

      // aboutBoxesTl2
      //   .to(aboutBoxes, {
      //     duration: 1.5,
      //     ease: "circ.out",
      //   })

      //   .to(
      //     ".about__box:nth-child(1)",
      //     {
      //       top: "12rem",
      //       stagger: 0.5,
      //     },
      //     "+=0.5"
      //   )
      //   .to(".about__box:nth-child(2)", {
      //     top: "24rem",
      //     stagger: 0.8,
      //   })
      //   .to(".about__box:nth-child(1)", {
      //     top: "24rem",
      //     stagger: 1,
      //   });

      // Here are the scrollTriggers calling the animations
      ScrollTrigger.create({
        animation: aboutMeTitleTl,
        trigger: aboutMeTitle,
        togglesAction: "restart pause resume none",
        scrub: true,
        // markers: true,
        start: "top 80%",
        // end: "+=500",
      });
      ScrollTrigger.create({
        animation: aboutBoxesTl,
        trigger: aboutMeTitle,
        // markers: true,
        togglesAction: "restart pause resume none",
        scrub: true,
        // pinSpacing: false,

        start: "top 80%",
        end: "top top",
        // end: ".about__box:nth-child(1)",
      });
    });
  };

  animateScrollSkilllsContent = () => {
    // Here are the variables and constants
    const skillsTitles = document.querySelectorAll(".skills__title");
    const skillBoxes = document.querySelectorAll(".skills__data");
    // Here are the variables for the timelines
    var skillsTitleSubtitleTl = gsap.timeline();
    var skillBoxesTl = gsap.timeline();

    // Here are the animations withint the time line.
    skillsTitleSubtitleTl.from(skillsTitles, {
      opacity: 0,
      duration: 4,
      y: "10vh",
      ease: "circ.out",
    });

    skillBoxesTl.from(
      skillBoxes,
      {
        opacity: 0,
        duration: 4,
        y: "10vh",
        ease: "circ.out",
        stagger: 1,
      },
      "<2"
    );
    // Here are the scrollTriggers calling the animations

    ScrollTrigger.create({
      animation: skillsTitleSubtitleTl,
      trigger: skillsTitles,
      togglesAction: "restart pause resume none",
      scrub: true,
      // markers: true,
      start: "top 80%",
      // end: "+=500",
    });
    ScrollTrigger.create({
      animation: skillBoxesTl,
      trigger: skillsTitles,
      togglesAction: "restart pause resume none",
      scrub: true,
      // markers: true,
      start: "top 80%",
      // end: "+=500",
    });
  };

  animateScrollSvgBackgrounds();
  animateScrollAboutMeContent();
  animateScrollSkilllsContent();
}

animateHome();

// <!-- ===================== Swiper  Project ===================== -->

let swiper = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

//  ===================== emai js =====================

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  //check if the field has a value

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    console.log("coditional met");
    // Add and remove color
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    //show message

    contactMessage.textContent = "Write all the input fields ";
  } else {
    //serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_gotmltb",
        "template_muz8a6j",
        "#contact-form",
        "vSznpum2_LGD_XDGR"
      )
      .then(
        () => {
          //show message and add color
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "Message Sent ✔";

          //remover message after 5 seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPS! SOMETHING WENT BAD...", error);
        }
      );
    //to clear the input data
    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

//  ===================== Scroll Sections Active Link =====================

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 60,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

animateScroll();
