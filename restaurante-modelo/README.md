# Restaurante Modelo

Um site responsivo e moderno para um restaurante brasileiro contemporâneo, desenvolvido com HTML, CSS e JavaScript puro.

## 📋 Descrição

Este projeto é um website completo para um restaurante, incluindo:
- **Página inicial** com apresentação do restaurante, carrosséis de imagens e informações de contato
- **Página do cardápio** com itens organizados por categoria (entradas, pratos principais, sobremesas e bebidas)
- Design responsivo que funciona em desktop, tablet e celular
- Animações suaves e interatividade

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica das páginas
- **CSS3**: Estilização com variáveis CSS, Grid, Flexbox e animações
- **JavaScript**: Funcionalidades interativas (carrosséis, animações de revelação)
- **JSON**: Armazenamento estruturado dos dados do cardápio

## 📁 Estrutura do Projeto

```
restaurante-modelo/
├── index.html                 # Página inicial do restaurante
├── cardapio.html             # Página do cardápio
├── README.md                 # Este arquivo
├── .gitignore               # Arquivos ignorados pelo Git
├── data/
│   └── cardapio.json        # Dados do cardápio em formato JSON
├── assets/
│   └── images/              # Pasta para imagens (futuras adições)
└── src/
    ├── css/
    │   ├── restaurante.css  # Estilos da página inicial
    │   └── cardapio.css     # Estilos da página do cardápio
    └── js/
        ├── restaurante.js   # JavaScript da página inicial
        └── cardapio.js      # JavaScript da página do cardápio
```

## 🚀 Como Usar

1. **Clone ou baixe** este repositório
2. **Abra** o arquivo `index.html` em seu navegador
3. **Navegue** entre as páginas usando o menu

### Funcionalidades

- **Carrosséis automáticos** de imagens na página inicial
- **Animações de revelação** ao rolar a página
- **Cardápio dinâmico** carregado via JavaScript e JSON
- **Design responsivo** para todos os dispositivos
- **Links para WhatsApp** para reservas
- **Links para redes sociais** (Instagram, Google Maps)

## 🎨 Características do Design

- **Paleta de cores**: Tons terrosos e quentes inspirados na culinária brasileira
- **Tipografia**: Bebas Neue para títulos, Manrope para corpo do texto
- **Layout**: Grid CSS moderno com flexibilidade
- **Animações**: Transições suaves e efeitos de hover
- **Acessibilidade**: ARIA labels e navegação por teclado

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- **Desktop**: Layout completo com duas colunas
- **Tablet**: Ajustes no grid e navegação
- **Celular**: Layout de coluna única com carrossel móvel

## 🔧 Personalização

### Modificando o Cardápio

Edite o arquivo `data/cardapio.json` para alterar os itens do cardápio:

```json
{
  "entradas": [
    {
      "nome": "Nome do Prato",
      "descricao": "Descrição breve",
      "preco": 25
    }
  ]
}
```

### Alterando Cores

As cores são definidas como variáveis CSS no `:root` dos arquivos CSS. Para alterar o esquema de cores, modifique as variáveis como `--brand`, `--text`, etc.

### Adicionando Imagens

Coloque suas imagens na pasta `assets/images/` e referencie-as nos arquivos HTML ou CSS conforme necessário.

## 📞 Contato

Este projeto foi desenvolvido por Lorenzo Fabres como demonstração de habilidades em desenvolvimento web front-end.

## 📄 Licença

Este projeto é para fins educacionais e de demonstração.