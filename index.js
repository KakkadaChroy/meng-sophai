// togegle icon navbar


// scroll Selection
let Selections = document.querySelectorAll ('section');
let navLinks  = document.querySelectorAll (' header nav a');


window.onscroll = () => {
    Selections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let  height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`a[href="#${id}"]`).classList.add('active');
            });
        }
    });
    // sticky Header
    let Header = document.querySelector ('header');

    Header.classList.toggle('sticky', window.scrollY >100);
}