        //selecting all sections

const sections = Array.from(document.querySelectorAll('.sections'));
   console.log(`there is ${sections.length} sections`);
    console.log(sections)
        //loop sections to nav bar
sections.forEach(sections => {  
    const secLink = document.createElement('a');
    secLink.setAttribute("href" , `#${sections.id}`)
    secLink.setAttribute("id" , `#${sections.id}L`)
    secLink.setAttribute("class" , `navEl`)
        // append all created Li elements
    secLink.textContent = sections.firstElementChild.textContent
    const apLi = document.querySelector('#nav-bar').appendChild(secLink)
});


        //highlighting viewed section by observer

let options = {
    root: null,
    rootMargin: '-375px',
    threshold: 0
  }
            
var observer = new IntersectionObserver(function(entries,observer){
    
    entries.forEach( entry => {
        if(!entry.isIntersecting){
            return;
        }

        entry.target.classList.toggle("active");
        observer.unobserve(entry.target)
    });

}, options);

sections.forEach( section => {

    observer.observe(section);

})