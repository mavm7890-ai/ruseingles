// Mobile Menu Toggle - MEJORADO
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');

function closeMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
    if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('active');
    }
    if (mobileMenuBtn) {
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    document.body.style.overflow = 'auto';
}

function toggleMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
    if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.toggle('active');
    }
    
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        if (mobileMenuBtn) {
            mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
        }
        document.body.style.overflow = 'hidden';
    } else {
        if (mobileMenuBtn) {
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
        document.body.style.overflow = 'auto';
    }
}

// Evento para abrir/cerrar con el botón de hamburguesa
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Evento para cerrar con el botón X (tache)
if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', function(e) {
        e.stopPropagation();
        closeMobileMenu();
    });
}

// Evento para cerrar con el overlay
if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
}

// Cerrar al hacer clic en cualquier enlace del menú
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Testimonials Slider
const testimonialsContainer = document.getElementById('testimonialsContainer');
const testimonialDots = document.getElementById('testimonialDots');
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;
let currentSlide = 0;
let autoSlideInterval;

function createDots() {
    for (let i = 0; i < totalTestimonials; i++) {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('data-index', i);
        dot.addEventListener('click', function() {
            goToSlide(parseInt(this.getAttribute('data-index')));
            resetAutoSlide();
        });
        testimonialDots.appendChild(dot);
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    testimonialsContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalTestimonials;
    testimonialsContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
}

if (testimonialsContainer) {
    createDots();
    updateDots();
    autoSlideInterval = setInterval(nextSlide, 5000);
}

// Animations
function animateCardsOnScroll() {
    const featureCards = document.querySelectorAll('.feature-card[data-animation="animate"]');
    const courseCards = document.querySelectorAll('.course-card[data-animation="animate"]');
    
    featureCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (cardPosition < screenPosition) {
            const delay = card.getAttribute('data-animation-delay') || '0s';
            setTimeout(() => {
                card.classList.add('animate');
            }, parseFloat(delay) * 1000);
        }
    });
    
    courseCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (cardPosition < screenPosition) {
            const delay = card.getAttribute('data-animation-delay') || '0s';
            setTimeout(() => {
                card.classList.add('animate');
            }, parseFloat(delay) * 1000);
        }
    });
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            const animation = element.getAttribute('data-animation');
            const delay = element.getAttribute('data-animation-delay');
            
            if (animation) {
                if (delay) {
                    setTimeout(() => {
                        element.classList.add(animation);
                    }, parseFloat(delay) * 1000);
                } else {
                    element.classList.add(animation);
                }
            }
        }
    });
}

function handleAnimations() {
    animateOnScroll();
    animateCardsOnScroll();
}

window.addEventListener('scroll', handleAnimations);
window.addEventListener('load', handleAnimations);

// Modal Functions
const modalOverlay = document.getElementById('modalOverlay');
const modalContainer = document.getElementById('modalContainer');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');

function openModal(type) {
    let title = '';
    let content = '';

    switch(type) {
        case 'mision':
            title = 'Aprendizaje Acelerado';
            content = `
                <div class="modal-grid mision-modal">
                    <div class="modal-image">
                        <img src="img/apren.jpg" alt="Aprendizaje Acelerado" onerror="this.src='https://via.placeholder.com/500x500?text=Aprendizaje+acelerado'">
                    </div>
                    <div class="modal-text">
                        <h3>Misión, Visión y Valores</h3>
                        <p><span class="highlight">Misión:</span> Capacitar a personas y profesionales del Estado de México en inglés en 20 semanas, mediante una metodología práctica y accesible que impulse sus metas académicas, profesionales y personales en un mundo globalizado.</p>
                        <p><span class="highlight">Visión:</span> Ser la academia de inglés líder en el Estado de México, reconocida por la efectividad de su método y por formar estudiantes con fluidez comunicativa de manera rápida y confiable.</p>
                        <p><span class="highlight">Valores:</span></p>
                        <ul class="modal-list">
                            <li><i class="fas fa-check-circle"></i> Excelencia académica</li>
                            <li><i class="fas fa-check-circle"></i> Compromiso con el alumno</li>
                            <li><i class="fas fa-check-circle"></i> Integridad y transparencia</li>
                        </ul>
                    </div>
                </div>
            `;
            break;
        case 'profesor':
            title = 'Profesores Certificados';
            content = `
                <div class="modal-profesor">
                    <div class="profesor-content">
                        <div class="profesor-avatar">
                            <img src="img/teacher.png" alt="Profesor Alex Martinez" onerror="this.src='https://via.placeholder.com/150x150?text=Alex'">
                        </div>
                        <h3 class="profesor-nombre">Alex Martinez Franco</h3>
                        <p class="profesor-cargo">Director Académico</p>
                        
                        <div class="profesor-stats">
                            <div class="stat-item">
                                <i class="fas fa-globe-americas"></i>
                                <h4>Especialidad</h4>
                                <p>Lic. en Idiomas</p>
                            </div>
                            <div class="stat-item">
                                <i class="fas fa-clock"></i>
                                <h4>Experiencia</h4>
                                <p>20 años</p>
                            </div>
                            <div class="stat-item">
                                <i class="fas fa-certificate"></i>
                                <h4>Certificación</h4>
                                <p>Internacional</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'instituciones':
            title = 'Modalidad Flexible';
            content = `
                <div class="modal-grid instituciones-modal">
                    <div class="modal-image">
                        <img src="img/espacio.jpg" alt="Nuestras instituciones" onerror="this.src='https://via.placeholder.com/500x500?text=Nuestras+sedes'">
                    </div>
                    <div class="modal-text">
                        <h3>Clases Presenciales y Personalizadas</h3>
                        <p>Contamos con instalaciones modernas y equipadas para brindarte la mejor experiencia de aprendizaje.</p>
                        <ul class="modal-list">
                            <li><i class="fas fa-building"></i> Sedes en La Perla y Plaza Enramada</li>
                            <li><i class="fas fa-wifi"></i> Aulas con tecnología interactiva</li>
                            <li><i class="fas fa-book"></i> Material Didactico</li>
                            <li><i class="fas fa-coffee"></i> Áreas de estudio y convivencia</li>
                            <li><i class="fas fa-calendar-alt"></i> Horarios flexibles (mañana, tarde, noche)</li>
                            <li><i class="fas fa-chalkboard-teacher"></i> Clases personalizadas uno a uno</li>
                        </ul>
                        <p><span class="highlight">¡Elige la modalidad que mejor se adapte a tu ritmo de vida!</span></p>
                    </div>
                </div>
            `;
            break;
    }

    modalTitle.textContent = title;
    modalContent.innerHTML = content;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event.target === modalOverlay || event.target.classList.contains('modal-close')) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Función para abrir modal de libros
function openBookModal(bookNumber) {
    const books = {
        1: {
            title: 'English Starter',
            level: 'A1',
            image: 'img/libro1.png',
            description: 'Libro introductorio diseñado para principiantes absolutos. Aprende las bases del inglés: saludos, presentaciones, números, colores y vocabulario esencial para comenzar a comunicarte desde el primer día.'
        },
        2: {
            title: 'Grammar Foundation',
            level: 'A2',
            image: 'img/libro2.png',
            description: 'Construye una base sólida en gramática. Aprende tiempos verbales básicos, estructura de oraciones y reglas fundamentales para formar frases correctamente.'
        },
        3: {
            title: 'Conversation Skills',
            level: 'B1',
            image: 'img/libro3.png',
            description: 'Desarrolla habilidades para mantener conversaciones fluidas. Técnicas para iniciar, mantener y finalizar diálogos, expresar opiniones y participar en discusiones.'
        },
        4: {
            title: 'Business English',
            level: 'B1',
            image: 'img/libro4.png',
            description: 'Inglés enfocado al ámbito profesional. Vocabulario general presentaciones efectivas y comunicación en entornos de cualquier tipo.'
        },
        5: {
            title: 'Advanced Grammar',
            level: 'B2',
            image: 'img/libro5.png',
            description: 'Gramática avanzada para dominar estructuras complejas. Condicionales, voz pasiva, estilo indirecto y otros temas gramaticales de nivel superior.'
        },
        6: {
            title: 'TOEFL Preparation',
            level: 'C1',
            image: 'img/libro6.png',
            description: 'Preparación especializada para el examen. Estrategias, ejercicios prácticos y simulacros para obtener la mejor puntuación en tu certificación.'
        }
    };

    const book = books[bookNumber];
    
    if (book) {
        modalTitle.textContent = book.title;
        modalContent.innerHTML = `
            <div class="book-modal-grid">
                <div class="book-modal-image">
                    <img src="${book.image}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/500x500?text=${book.title}'">
                </div>
                <div class="book-modal-text">
                    <h3>${book.title}</h3>
                    <p><span class="highlight">Nivel ${book.level}</span></p>
                    <p>${book.description}</p>
                    <ul class="modal-list">
                        <li><i class="fas fa-check-circle"></i> Material exclusivo de Inglés en Semanas</li>
                        <li><i class="fas fa-check-circle"></i> Ejercicios prácticos y autoevaluaciones</li>
                        <li><i class="fas fa-check-circle"></i> Alineado al Marco Común Europeo</li>
                    </ul>
                </div>
            </div>
        `;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
