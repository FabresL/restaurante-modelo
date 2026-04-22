/**
 * Script JavaScript para a página inicial do restaurante (index.html)
 * Contém funcionalidades para os carrosséis de imagens e animações de revelação
 */

// ========== CARROSSEL HERO MOBILE ==========

/**
 * Inicializa o carrossel de imagens na seção hero para dispositivos móveis
 */
(function inicializarCarrosselMobile() {
  // Seleciona os elementos do carrossel mobile
  const trilha = document.getElementById('carrosselMobileTrack');
  const botaoAnterior = document.getElementById('carrosselMobilePrev');
  const botaoProximo = document.getElementById('carrosselMobileNext');
  const containerDots = document.getElementById('carrosselMobileDots');

  // Se o carrossel não existir na página, sai da função
  if (!trilha) return;

  // Seleciona todos os slides do carrossel
  const slides = trilha.querySelectorAll('.carrossel-hero-slide');
  const numeroTotalSlides = slides.length;
  let slideAtual = 0; // Índice do slide atual
  let temporizador; // Referência para o temporizador automático

  // Cria os indicadores (dots) para cada slide
  slides.forEach((_, indice) => {
    const dot = document.createElement('button');
    dot.classList.add('carrossel-dot');
    dot.setAttribute('aria-label', `Slide ${indice + 1}`);
    // Marca o primeiro dot como ativo
    if (indice === 0) dot.classList.add('ativo');
    // Adiciona evento de clique para ir ao slide correspondente
    dot.addEventListener('click', () => irParaSlide(indice));
    containerDots.appendChild(dot);
  });

  // Seleciona todos os dots criados
  const dots = containerDots.querySelectorAll('.carrossel-dot');

  /**
   * Move o carrossel para um slide específico
   * @param {number} indice - Índice do slide para o qual mover
   */
  function irParaSlide(indice) {
    slideAtual = (indice + numeroTotalSlides) % numeroTotalSlides;
    // Move a trilha usando transform CSS
    trilha.style.transform = `translateX(-${slideAtual * 100}%)`;
    // Atualiza os dots para mostrar qual está ativo
    dots.forEach((dot, i) => dot.classList.toggle('ativo', i === slideAtual));
    // Reinicia o temporizador automático
    reiniciarTemporizador();
  }

  /**
   * Reinicia o temporizador automático do carrossel
   */
  function reiniciarTemporizador() {
    clearInterval(temporizador);
    temporizador = setInterval(() => irParaSlide(slideAtual + 1), 3500); // Muda a cada 3.5 segundos
  }

  // Adiciona eventos de clique aos botões de navegação
  botaoAnterior.addEventListener('click', () => irParaSlide(slideAtual - 1));
  botaoProximo.addEventListener('click', () => irParaSlide(slideAtual + 1));

  // Inicia o temporizador automático
  reiniciarTemporizador();
})();

// ========== CARROSSEL LATERAL ==========

/**
 * Inicializa o carrossel lateral na seção de destaques do menu
 */
(function inicializarCarrosselLateral() {
  // Seleciona os elementos do carrossel lateral
  const trilha = document.getElementById('carrosselTrack');
  const botaoAnterior = document.getElementById('carrosselPrev');
  const botaoProximo = document.getElementById('carrosselNext');
  const containerDots = document.getElementById('carrosselDots');

  // Se o carrossel não existir na página, sai da função
  if (!trilha) return;

  // Seleciona todos os slides do carrossel
  const slides = trilha.querySelectorAll('.carrossel-slide');
  const numeroTotalSlides = slides.length;
  let slideAtual = 0; // Índice do slide atual
  let temporizador; // Referência para o temporizador automático

  // Cria os indicadores (dots) para cada slide
  slides.forEach((_, indice) => {
    const dot = document.createElement('button');
    dot.classList.add('carrossel-dot');
    dot.setAttribute('aria-label', `Slide ${indice + 1}`);
    // Marca o primeiro dot como ativo
    if (indice === 0) dot.classList.add('ativo');
    // Adiciona evento de clique para ir ao slide correspondente
    dot.addEventListener('click', () => irParaSlide(indice));
    containerDots.appendChild(dot);
  });

  // Seleciona todos os dots criados
  const dots = containerDots.querySelectorAll('.carrossel-dot');

  /**
   * Move o carrossel para um slide específico
   * @param {number} indice - Índice do slide para o qual mover
   */
  function irParaSlide(indice) {
    slideAtual = (indice + numeroTotalSlides) % numeroTotalSlides;
    // Move a trilha usando transform CSS
    trilha.style.transform = `translateX(-${slideAtual * 100}%)`;
    // Atualiza os dots para mostrar qual está ativo
    dots.forEach((dot, i) => dot.classList.toggle('ativo', i === slideAtual));
    // Reinicia o temporizador automático
    reiniciarTemporizador();
  }

  /**
   * Reinicia o temporizador automático do carrossel
   */
  function reiniciarTemporizador() {
    clearInterval(temporizador);
    temporizador = setInterval(() => irParaSlide(slideAtual + 1), 3500); // Muda a cada 3.5 segundos
  }

  // Adiciona eventos de clique aos botões de navegação
  botaoAnterior.addEventListener('click', () => irParaSlide(slideAtual - 1));
  botaoProximo.addEventListener('click', () => irParaSlide(slideAtual + 1));

  // Inicia o temporizador automático
  reiniciarTemporizador();
})();

// ========== ANIMAÇÕES DE REVELAÇÃO ==========

/**
 * Configura o Intersection Observer para animações de revelação de elementos
 * Elementos com a classe 'revelar' terão a classe 'visivel' adicionada quando entrarem na viewport
 */
const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      // Se o elemento entrou na viewport
      if (entrada.isIntersecting) {
        // Adiciona a classe 'visivel' para iniciar a animação
        entrada.target.classList.add("visivel");
        // Para de observar o elemento após a primeira revelação
        observador.unobserve(entrada.target);
      }
    });
  },
  {
    threshold: 0.2 // O elemento deve ter 20% visível para disparar
  }
);

// Observa todos os elementos com a classe 'revelar'
document.querySelectorAll(".revelar").forEach((elemento) => observador.observe(elemento));
