// ==========================================
// MENÚ DESPLEGABLE RESPONSIVO (Para todas las páginas)
// ==========================================
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
    });
}

// INTERACTIVIDAD DE PESTAÑAS (TABS)
function switchTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
    
    contents.forEach(content => content.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// INTEGRACIÓN DE LA CALCULADORA
const inputMonto = document.getElementById("montoDonacion");
const botonCalcular = document.getElementById("calcularImpacto");
const resultadoImpacto = document.getElementById("resultadoImpacto");
const botonHacerDonacion = document.getElementById("hacerDonacion");

if (botonCalcular && inputMonto && resultadoImpacto) {
    // Función reutilizable para calcular el impacto (Semillas)
    function calcularImpacto(monto) {
        let precioSemilla = 10; // Costo por unidad
        let cantidadSemillas = monto / precioSemilla;
        
        if (monto <= 0 || isNaN(monto)) {
            resultadoImpacto.style.color = "#c55d47";
            resultadoImpacto.textContent = "Por favor, ingresá un monto válido mayor a 0.";
        } else {
            resultadoImpacto.style.color = "#2e7d32";
            resultadoImpacto.textContent = `Con tu donación se pueden entregar ${cantidadSemillas.toFixed(1)} semillas para la reforestación.`;
        }
    }

    // Evento al presionar Calcular
    botonCalcular.addEventListener("click", function () {
        let monto = parseFloat(inputMonto.value);
        calcularImpacto(monto);
    });
}

// Procesar confirmación
if (botonHacerDonacion) {
    botonHacerDonacion.addEventListener("click", function () {
        const donationBox = document.querySelector(".donation-box");
        let monto = inputMonto ? inputMonto.value : "";
        
        if(monto && monto > 0) {
            // Reemplaza el contenedor con un mensaje integrado que respeta el diseño de la ONG
            donationBox.innerHTML = `
                <h2 style="color: #2e7d32; margin-bottom: 15px;">🌱 ¡Gracias por tu donación!</h2>
                <p style="margin-bottom: 20px;">Tu aporte de $${monto} procesado con éxito cambiará vidas de forma inmediata.</p>
                <a href="index.html" class="btn-primary" style="text-decoration: none; display: inline-block;">Volver al Inicio</a>
            `;
        } else {
            alert("Por favor, ingresá o calculá un monto antes de realizar la donación.");
        }
    });
}

// Función secundaria para la suscripción
function processPayment(type) {
    alert(`¡Procesando de manera segura tu ${type}! Muchísimas gracias por apoyar a EcoFuturo.`);
}
// Carrousel index
let diapositivas = document.querySelectorAll('.carousel-slide');
let botonAnt = document.getElementById('prevBtn');
let botonSig = document.getElementById('nextBtn');
let posicionActual = 0;

// 2. Función para alternar la clase 'active' en los bloques contenedores
function activarDiapositiva(posicion) {
    diapositivas.forEach((slide) => slide.classList.remove('active'));
    diapositivas[posicion].classList.add('active');
}

// 3. Función para avanzar a la siguiente diapositiva
function siguiente() {
    posicionActual = posicionActual + 1;

    // Si llegamos al final, vuelve al inicio
    if (posicionActual >= diapositivas.length) {
        posicionActual = 0;
    }

    activarDiapositiva(posicionActual);
}

// 4. Función para retroceder a la diapositiva anterior
function anterior() {
    posicionActual = posicionActual - 1;

    // Si retrocedemos del principio, va a la última diapositiva
    if (posicionActual < 0) {
        posicionActual = diapositivas.length - 1;
    }

    activarDiapositiva(posicionActual);
}

// 5. Asignación segura de los eventos click a los botones con ID de la ONG
if (botonSig && botonAnt) {
    botonSig.addEventListener('click', siguiente);
    botonAnt.addEventListener('click', anterior);
}