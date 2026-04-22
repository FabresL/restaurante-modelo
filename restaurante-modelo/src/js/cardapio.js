"use strict";

/**
 * Script responsável por carregar e renderizar dinamicamente o cardápio da página cardapio.html
 * Os dados são carregados de um arquivo JSON localizado em data/cardapio.json
 */

/**
 * Função assíncrona para carregar os dados do cardápio do arquivo JSON
 * @returns {Promise<Object>} Dados do cardápio organizados por categoria
 */
async function carregarCardapio() {
  try {
    // Faz uma requisição para o arquivo JSON
    const resposta = await fetch('data/cardapio.json');
    // Verifica se a resposta foi bem-sucedida
    if (!resposta.ok) {
      throw new Error(`Erro ao carregar cardápio: ${resposta.status}`);
    }
    // Converte a resposta para JSON
    const dadosCardapio = await resposta.json();
    return dadosCardapio;
  } catch (erro) {
    // Em caso de erro, exibe no console e retorna um objeto vazio
    console.error('Erro ao carregar o cardápio:', erro);
    return {};
  }
}

/**
 * Função para renderizar os itens de uma categoria específica no DOM
 * @param {string} nomeCategoria - Nome da categoria (ex: 'entradas')
 * @param {Array} itens - Array de objetos com os itens da categoria
 * @param {HTMLElement} elementoCategoria - Elemento HTML onde os itens serão inseridos
 */
function renderizarItensCategoria(nomeCategoria, itens, elementoCategoria) {
  // Para cada item da categoria, cria um elemento HTML
  itens.forEach(item => {
    // Cria o elemento div principal do item
    const divItem = document.createElement('div');
    divItem.className = 'item-menu';

    // Cria a div interna com nome e descrição
    const divConteudo = document.createElement('div');

    // Cria o título do item
    const titulo = document.createElement('h3');
    titulo.textContent = item.nome;

    // Cria a descrição do item
    const descricao = document.createElement('span');
    descricao.textContent = item.descricao;

    // Monta a estrutura do conteúdo
    divConteudo.appendChild(titulo);
    divConteudo.appendChild(descricao);

    // Cria o elemento de preço
    const preco = document.createElement('strong');
    preco.textContent = `R$ ${item.preco}`;

    // Monta o item completo
    divItem.appendChild(divConteudo);
    divItem.appendChild(preco);

    // Adiciona o item ao elemento da categoria
    elementoCategoria.appendChild(divItem);
  });
}

/**
 * Função principal que inicializa o carregamento e renderização do cardápio
 */
async function inicializarCardapio() {
  // Carrega os dados do cardápio
  const cardapio = await carregarCardapio();

  // Mapeamento das categorias para os IDs dos elementos HTML
  const categorias = {
    entradas: document.querySelector('.card-categoria:nth-child(1)'),
    pratosPrincipais: document.querySelector('.card-categoria:nth-child(2)'),
    sobremesas: document.querySelector('.card-categoria:nth-child(3)'),
    bebidas: document.querySelector('.card-categoria:nth-child(4)')
  };

  // Para cada categoria, renderiza os itens
  Object.keys(categorias).forEach(chaveCategoria => {
    const elementoCategoria = categorias[chaveCategoria];
    const itensCategoria = cardapio[chaveCategoria] || [];
    renderizarItensCategoria(chaveCategoria, itensCategoria, elementoCategoria);
  });
}

// Executa a inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', inicializarCardapio);
