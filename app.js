 //selecting all sections
 const sections = Array.from(document.querySelectorAll('.sections'));
 console.log(`there is ${sections.length} sections`);
  console.log(sections)
      //loop sections to nav bar
sections.forEach((sections, index) => {  
  const secLink = document.createElement('a');
  secLink.setAttribute("id" , `#${sections.id}L`);
  secLink.setAttribute("class" , `navEl`);
  secLink.setAttribute("section-id" , `div${index+1}`);
  secLink.scrollIntoView( {behavior : "smooth"});
  // secLink.setAttribute("class" , `navEl`)
      // append all created Li elements
  secLink.textContent = sections.firstElementChild.textContent;
  const apLi = document.querySelector('#nav-bar').appendChild(secLink);
});


      //highlighting viewed section by observer
let navL = Array.from(document.querySelectorAll('.navEl'));
      console.log(navL)
      let options = {
          root: null,
          rootMargin: '-40% 0px -20%  0px',
          threshold: 0
        }
                  
      let observer = new IntersectionObserver(function(entries,observer){
          
          entries.forEach( entry => {
              if(entry.isIntersecting){
                  entry.target.classList.add("active");
                  navL.forEach( nav => {
                      if (nav.outerText == entry.target.dataset.nav){
                          nav.classList.add("activeNav")
                      }
                  })
              } else {
                  entry.target.classList.remove("active");
                  navL.forEach(nav => {
                      if (nav.outerText == entry.target.dataset.nav){
                      nav.classList.remove("activeNav")
                  }})
              }
          });
      
      }, options);

      
sections.forEach( section => {

  observer.observe(section);

})
        // making scroll smooth
document.querySelectorAll('.navEl').forEach(section => {
  section.addEventListener('click', (evt) => {
      console.log(evt.target.getAttribute('section-id'))
      let element = document.getElementById(evt.target.getAttribute('section-id'));
      let topPos = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
           top: topPos - 160,
           behavior: "smooth"
      });

      console.log(topPos)
  })
})