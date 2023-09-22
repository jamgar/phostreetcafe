  // Desktop navbar
  let navbar = document.getElementById("navbar-desktop");
  let sticky = navbar.offsetTop;

  // Mobile 
  let scrollBtn = document.getElementById("scrollToTop");
  scrollBtn.addEventListener("click", scrollToTopFunction);

  // When the user scrolls down 20px from the top of the document, show the button
  window.onresize = function () {
    let w = window.innerWidth;
    if (w >= 786) {
      scrollBtn.style.display = "none";
    }
  }

  window.onscroll = function () {
    if (window.innerWidth < 768) {
      scrollFunction();
    } else if (window.innerWidth >= 768) {
      stickyNavbar();
    }
  };

  function scrollFunction() {
    let w = window.innerWidth;
    if (w < 786) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 24
      ) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    } else {
      scrollBtn.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function scrollToTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function stickyNavbar() {
    let w = window.innerWidth;
    if (window.pageYOffset >= sticky && w >= 768) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }