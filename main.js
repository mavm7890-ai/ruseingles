// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = 'auto';
    }
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
}

document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
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
                <div class="modal-grid">
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
                    <div style="max-width: 800px; margin: 0 auto; text-align: center;">
                        <div style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden; margin: 0 auto 20px; border: 4px solid var(--secondary-color); box-shadow: var(--shadow);">
                            <img src="img/teacher.png" alt="Profesor Alex Martinez" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://via.placeholder.com/150x150?text=Alex'">
                        </div>
                        <h3 style="font-size: 1.8rem; color: var(--primary-color); margin-bottom: 5px;">Alex Martinez Franco</h3>
                        <p style="font-size: 1.1rem; color: var(--secondary-color); font-weight: 600; margin-bottom: 25px;">Director Académico</p>
                        
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 20px 0;">
                            <div style="text-align: center; padding: 15px; background: rgba(212, 175, 55, 0.05); border-radius: 10px; border: 1px solid rgba(212, 175, 55, 0.2);">
                                <i class="fas fa-globe-americas" style="font-size: 1.8rem; color: var(--secondary-color); margin-bottom: 10px;"></i>
                                <h4 style="font-size: 1rem; color: var(--primary-color); margin-bottom: 5px;">Especialidad</h4>
                                <p style="font-size: 0.9rem; color: var(--gray-color);">Lic. en Idiomas</p>
                            </div>
                            <div style="text-align: center; padding: 15px; background: rgba(212, 175, 55, 0.05); border-radius: 10px; border: 1px solid rgba(212, 175, 55, 0.2);">
                                <i class="fas fa-clock" style="font-size: 1.8rem; color: var(--secondary-color); margin-bottom: 10px;"></i>
                                <h4 style="font-size: 1rem; color: var(--primary-color); margin-bottom: 5px;">Experiencia</h4>
                                <p style="font-size: 0.9rem; color: var(--gray-color);">20 años</p>
                            </div>
                            <div style="text-align: center; padding: 15px; background: rgba(212, 175, 55, 0.05); border-radius: 10px; border: 1px solid rgba(212, 175, 55, 0.2);">
                                <i class="fas fa-certificate" style="font-size: 1.8rem; color: var(--secondary-color); margin-bottom: 10px;"></i>
                                <h4 style="font-size: 1rem; color: var(--primary-color); margin-bottom: 5px;">Certificación</h4>
                                <p style="font-size: 0.9rem; color: var(--gray-color);">Internacional</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'instituciones':
            title = 'Modalidad Flexible';
            content = `
                <div class="modal-grid">
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
            title: 'English Communication',
            level: 'B2',
            image: 'img/libro4.png',
            description: 'Inglés enfocado al ámbito profesional. Vocabulario general presentaciones efectivas y comunicación en entornos de cualquier tipo.'
        },
        5: {
            title: 'Advanced Grammar',
            level: 'C1',
            image: 'img/libro5.png',
            description: 'Gramática avanzada para dominar estructuras complejas. Condicionales, voz pasiva, estilo indirecto y otros temas gramaticales de nivel superior.'
        },
        6: {
            title: 'Final Preparation',
            level: 'C2',
            image: 'img/libro6.png',
            description: 'Preparación especializada para el examen. Estrategias, ejercicios prácticos y simulacros para obtener la mejor puntuación en tu certificación.'
        }
    };

    const book = books[bookNumber];
    
    if (book) {
        modalTitle.textContent = book.title;
        modalContent.innerHTML = `
            <div class="modal-grid">
                <div class="modal-image">
                    <img src="${book.image}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/500x500?text=${book.title}'">
                </div>
                <div class="modal-text">
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