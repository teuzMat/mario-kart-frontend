# 🏎️ Shy Guy Falls Tech - Mario Kart 8 Combo Builder

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)

**Shy Guy Falls Tech** é uma aplicação web interativa desenvolvida para jogadores de Mario Kart 8. O objetivo principal é fornecer uma interface clara e visual para a montagem de "combos" (Personagem + Carroceria + Pneus + Planador), calculando matematicamente os status ocultos do jogo em tempo real.

Este projeto foi idealizado e desenvolvido como um trabalho prático para o curso de Análise e Desenvolvimento de Sistemas no IESB, focando em componentização, gerência de estados e simulação de consumo de dados.

---

## 🚀 Funcionalidades

* **Catálogo de Peças:** Visualização em grid responsivo de todos os itens disponíveis no jogo, com seus atributos base.
* **Oficina (Combo Builder):** Interface interativa com Dropdowns customizados para a seleção de peças.
* **Cálculo de Status em Tempo Real:** Motor matemático que calcula os status totais da combinação na escala oficial do jogo (0 a 20), refletindo os resultados instantaneamente usando `useState`.
* **Barras de Progresso Dinâmicas:** Representação visual (estilo videogame com barras neon) que simula com precisão a UI original do MK8, incluindo divisórias estéticas de escala.
* **Modo Claro / Escuro (Theme Toggle):** Alternância completa de tema através de CSS dinâmico, preservando a legibilidade e a imersão.
* **Layout Responsivo:** Estrutura fluida (`max-width: 75%`) e navegação centralizada para adaptação em diferentes tamanhos de tela.

---

## 🛠️ Tecnologias Utilizadas

* **React (Vite/CRA):** Biblioteca principal para a construção das interfaces.
* **React Router Dom:** Gerenciamento de navegação e rotas (`/`, `/catalogo`, `/builder`).
* **CSS3 (Vanilla):** Estilização completa sem bibliotecas externas, utilizando Flexbox, CSS Grid, variáveis e gradientes complexos (`repeating-linear-gradient`).
* **Vercel:** Hospedagem e pipeline de CI/CD para deploy contínuo.

---

## 📂 Arquitetura do Projeto

O projeto segue boas práticas de separação de responsabilidades (Clean Code), estruturado da seguinte forma:

```text
📦 src
 ┣ 📂 components      # Componentes reutilizáveis (CartaoCombo, Navbar, SeletorCustomizado)
 ┣ 📂 pages           # Telas principais da aplicação (Home, Catalogo, ComboBuilder)
 ┣ 📂 hooks           # Custom hooks para encapsulamento de lógicas (ex: useLocalStorage, useFetch)
 ┣ 📂 services        # Lógica de integração e manipulação dos arrays de dados
 ┣ 📜 dados.js        # Banco de dados local (Mock API) com atributos oficiais do MK8
 ┣ 📜 App.jsx         # Ponto de entrada, roteamento e controle de tema
 ┗ 📜 index.css       # Estilização global e classes utilitárias