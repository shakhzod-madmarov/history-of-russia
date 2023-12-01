        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;

            document.querySelectorAll('article').forEach(article => {
                const offsetTop = article.offsetTop - 50;
                const id = article.getAttribute('id');

                if (scrollPosition >= offsetTop) {
                    document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
                } else {
                    document.querySelector(`nav a[href="#${id}"]`).classList.remove('active');
                }
            });
        });