document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Animate categories on scroll
    const categories = document.querySelectorAll('.category-card');
    
    function checkScroll() {
        categories.forEach(category => {
            const categoryTop = category.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (categoryTop < windowHeight - 100) {
                category.classList.add('fade-in');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
    
    // Initialize AOS (Animate On Scroll) library if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
    
    // Filter implementations by company if needed
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const company = this.getAttribute('data-company');
                
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show/hide implementations based on company
                const implementations = document.querySelectorAll('.implementation-list li');
                
                implementations.forEach(impl => {
                    if (company === 'all' || impl.classList.contains(company)) {
                        impl.style.display = 'block';
                    } else {
                        impl.style.display = 'none';
                    }
                });
            });
        });
    }
});
