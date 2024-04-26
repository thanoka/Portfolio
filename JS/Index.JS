document.addEventListener('DOMContentLoaded', function() {
    const lis = document.querySelectorAll('li');

    lis.forEach((li, index) => {
        li.addEventListener('click', function() {
            // Reset all lis to their original text
            lis.forEach((li, i) => {
                li.textContent = i === index ? '•' : li.classList[0].charAt(0).toUpperCase() + li.classList[0].slice(1);
            });

            
            if (index === 0) {
                document.querySelector('.home-container').classList.remove('deseclted-home')
                document.querySelector('.education-container').classList.remove('selected-education')
                document.querySelector('.Skill-container').classList.remove('selected-skill')
                document.querySelector('.project-container').classList.remove('selected-project')
                document.querySelector('.contact-container').classList.remove('selected-contact')
                document.querySelector('.contact-container').classList.remove('selected-contact')
            } else if (index === 1) {
                document.querySelector('.education-container').classList.add('selected-education')
                document.querySelector('.home-container').classList.add('deseclted-home')
                document.querySelector('.Skill-container').classList.remove('selected-skill')
                document.querySelector('.project-container').classList.remove('selected-project')
                document.querySelector('.contact-container').classList.remove('selected-contact')

            } else if (index === 2) {
                document.querySelector('.Skill-container').classList.add('selected-skill')
                document.querySelector('.home-container').classList.add('deseclted-home')
                document.querySelector('.education-container').classList.remove('selected-education')
                document.querySelector('.project-container').classList.remove('selected-project')
                document.querySelector('.contact-container').classList.remove('selected-contact')

            } else if (index === 3) {
                document.querySelector('.project-container').classList.add('selected-project')
                document.querySelector('.home-container').classList.add('deseclted-home')
                document.querySelector('.education-container').classList.remove('selected-education')
                document.querySelector('.Skill-container').classList.remove('selected-skill')
                document.querySelector('.contact-container').classList.remove('selected-contact')
            } else if (index === 4) {
                document.querySelector('.contact-container').classList.add('selected-contact')
                document.querySelector('.home-container').classList.add('deseclted-home')
                document.querySelector('.education-container').classList.remove('selected-education')
                document.querySelector('.Skill-container').classList.remove('selected-skill')
                document.querySelector('.project-container').classList.remove('selected-project')
            }
        });
    });
});



document.getElementById('changeColorBtn').addEventListener('click', function() {

    document.querySelector('.alert').classList.add('active-alert')

    setTimeout(()=>{document.querySelector('.alert').classList.remove('active-alert')}, 1500)
});

