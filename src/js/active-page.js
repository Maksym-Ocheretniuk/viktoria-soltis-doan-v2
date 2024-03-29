const activePage = window.location.pathname;

// console.log(activePage);

const navLinks = document.querySelectorAll('nav a').forEach(link => {
  // console.log('link = ', link);
  // console.log(link.href);
  if (link.href.includes(`${activePage}`)) {
    // console.log(activePage);
    link.classList.add('active-page-link');
    // console.log('parentElement = ', link.parentElement);
    link.parentElement.classList.add('active-page-item');
  }
});
