/* =====================================================================
   CONFIGURAÇÃO — TAY — edite SOMENTE este arquivo (e o topo do Code.gs)
   ---------------------------------------------------------------------
   Tudo que está vazio ("") precisa ser preenchido.
   Enquanto estiver vazio, a parte correspondente fica DESLIGADA:
     - metaPixelId vazio      → Pixel não carrega
     - appsScriptUrl vazio    → nada é enviado (o payload aparece no console)
     - whatsapp vazio         → botões de WhatsApp ficam ocultos
     - logoUrl vazio          → aparece um monograma com as iniciais do nome
   Credenciais do CallMeBot NÃO ficam aqui (ficariam públicas no GitHub):
   elas vão no topo do arquivo apps-script/Code.gs.
   ===================================================================== */

window.APP_CONFIG = {

  /* ---------- Dados da fotógrafa ---------- */
  negocio: {
    nome: "Tay Palombo Fotografia",
    responsavel: "Tay",
    whatsapp: "11976729907",
    logoUrl: "",         // ex. do formato: "assets/logo.png"
    nomeNaLogo: false,   // true = a logo já tem o nome escrito
    monograma: false,    // sem logo: mostra só o nome, sem o círculo com as iniciais
    descricao: ""        // uma frase curta que aparece na página inicial
  },

  /* ---------- Apresentação: trecho sobre o trabalho + quadro de fotos ----------
     Aparece na página inicial, logo abaixo da abertura. Vazio = a seção não aparece.
     Fotos: coloque os arquivos na pasta assets/fotos/ e liste os caminhos.
     Use de 3 a 6 fotos na vertical, com até ~1200px de largura e ~300KB cada. */
  apresentacao: {
    titulo: "Sobre o meu trabalho",
    texto: "",           // 2 ou 3 frases sobre o jeito da fotógrafa
    fotos: [
      { src: "assets/fotos/carrossel/01.jpg" },
      { src: "assets/fotos/carrossel/02.jpg" },
      { src: "assets/fotos/carrossel/03.jpg" },
      { src: "assets/fotos/carrossel/04.jpg" },
      { src: "assets/fotos/carrossel/05.jpg" },
      { src: "assets/fotos/carrossel/06.jpg" },
      { src: "assets/fotos/carrossel/07.jpg" },
      { src: "assets/fotos/carrossel/08.jpg" },
      { src: "assets/fotos/carrossel/09.jpg" },
      { src: "assets/fotos/carrossel/10.jpg" }
    ],
    fotosNoFormulario: false  // true = faixa com 3 fotos na abertura (quando não houver fotos laterais)
  },

  /* ---------- Quais ensaios ela faz ----------
     Coloque aqui os formulários que aparecem na página inicial,
     na ordem desejada. Opções prontas: "gestante", "newborn", "familia".
     Envie ao GitHub só as páginas .html dos ensaios ativos. */
  ensaiosAtivos: ["gestante"],

  /* ---------- Integrações ---------- */
  integracoes: {
    appsScriptUrl: "",
    metaPixelId: ""
  },

  pixel: {
    eventoCadastro: "CadastroIniciado"   // evento customizado após nome + WhatsApp
  },

  /* ---------- Cores e fontes — ajuste para cada cliente ----------
     Cores em hexadecimal (#RRGGBB). Fontes: qualquer nome do Google Fonts
     (fonts.google.com), escrito igual ao site, ex. do formato: "Playfair Display". */
  tema: {
    fundoCentro: "#5E4335",   // marrom (centro)
    fundoBordas: "#241812",   // marrom café (bordas)
    texto: "#F7EFE4",         // creme
    destaque: "#D4AF6A",      // dourado
    botao1: "#A9803F",        // botão dourado (degradê)
    botao2: "#DDBE7E",
    textoBotao: "#241812",    // texto do botão (café)
    erro: "#FFB4A8",          // mensagens de erro
    fonteTitulos: "Playfair Display",
    fonteTexto: "Manrope",
    titulosMaiusculos: false, // título longo fica mais elegante em letras normais
    brilhoBotao: true,        // brilho branco passando dentro dos botões principais
    blocos: "",               // (opcional) fundo das opções e caixas, ex. do formato: "#E8DED2"
    linhas: "",               // (opcional) cor das bordas/linhas finas
    claro: false              // true = paleta clara (fundo claro e texto escuro): tira sombras pesadas
  },

  /* ---------- Página inicial ---------- */
  home: {
    ativa: false,  // sem página inicial: o link do site abre direto o formulário (true = volta a página inicial)
    /* Abertura (tela cheia no topo) */
    fotosHero: [
      // "assets/fotos/destaque-1.jpg",   // 1ª: topo no celular / esquerda no computador
      // "assets/fotos/destaque-2.jpg"    // 2ª: direita no computador
    ],
    selo: "Ensaio gestante",
    titulo: "A arte da fotografia encontrando a elegância da sua história",
    chamada: "Fotografia gestacional de alta estética para mulheres que valorizam sua própria história.",
    botao: "Quero saber valores e datas",
    linkWhatsapp: "ou fale direto com a Tay no WhatsApp",

    /* Parte de baixo */
    mostrarOpcoes: false,   // true = mostra os cartões "Como você prefere começar?" no fim da página
    subtitulo: "Como você prefere começar?",
    mensagemWhatsapp: "Oi, Tay! Vim pela sua página e queria saber mais sobre o ensaio gestante.",
    cardWhatsapp: {
      etiqueta: "Prefere conversar?",
      titulo: "Falar direto no WhatsApp",
      texto: "Tire suas dúvidas agora mesmo."
    }
  },

  /* ---------- Formulários (um por tipo de ensaio) ----------
     Tipos de pergunta:
       "escolha"   → uma opção, avança sozinho
       "multipla"  → várias opções + botão Continuar
       "texto"     → campo de uma linha
       "textarea"  → campo de várias linhas
       "data"      → dd/mm/aaaa  (limite: "futura" ou "passada", opcional)
       "instagram" → campo de @
       "galeria"   → vitrine: carrossel de fotos passando sozinho + botão (não é pergunta,
                     não vai para a planilha). Fotos: as do próprio bloco ou, se vazio,
                     as de apresentacao.fotos. Sem nenhuma foto, a etapa não aparece.
     "coluna" = nome da coluna na planilha e na notificação.
     {nome} em qualquer título vira o primeiro nome da cliente.
     Nome e WhatsApp são sempre as 2 primeiras perguntas (automático).
     "card" = como o ensaio aparece na página inicial.
  ------------------------------------------------------------------- */
  formularios: {

    /* ===================== GESTANTE ===================== */
    gestante: {
      nome: "Ensaio gestante",   // nome da aba na planilha e da notificação — também é o nome da aba na planilha
      pagina: "gestante.html",
      card: {
        etiqueta: "Ensaio gestante",
        titulo: "Quero saber valores e datas",
        texto: "Responda algumas perguntas rápidas e receba tudo no seu WhatsApp.",
        tempo: "1 min"
      },
      boasVindas: {
        titulo: "A arte da fotografia encontrando a elegância da sua história",
        assinatura: "",      // ex. do formato: "por Tay Palombo" (vazio = não aparece)
        texto: "Fotografia gestacional de alta estética para mulheres que valorizam sua própria história.",
        botao: "Começar",
        fotoCentral: { src: "assets/fotos/capa.jpg", foco: "50% 30%" },   // 1 foto no topo, dissolvendo para baixo
        fotosLaterais: [],   // 2 fotos na vertical, uma de cada lado (1 foto = repete espelhada)   // 2 fotos na vertical, uma de cada lado (vazio = usa home.fotosHero)
        tempo: "Responda em 1 minuto e receba valores e datas no seu WhatsApp"
      },
      perguntaNome: "Antes de tudo, como você se chama?",
      perguntaWhatsapp: "Que bom te ver por aqui, {nome}! Qual o seu WhatsApp?",
      ajudaWhatsapp: "É por lá que você vai receber os valores e as datas.",
      perguntas: [
        {
          id: "semanas", coluna: "Semanas de gestação", tipo: "escolha", obrigatorio: true,
          titulo: "Com quantas semanas você está?",
          opcoes: ["Até 24 semanas", "De 25 a 29 semanas", "De 30 a 34 semanas", "35 semanas ou mais"]
        },
        {
          id: "vitrine", tipo: "galeria",
          titulo: "Veja um pouco do nosso trabalho",
          botao: "É isso que eu quero!",
          segundos: 2,        // tempo de cada foto
          formato: "2/3",     // formato das fotos (vertical de câmera): mostra a foto inteira, sem cortar
          tamanho: 0.7,       // largura da foto central (0.7 = 70% da área)
          fotos: []           // vazio = usa as fotos de apresentacao.fotos
        },
        {
          id: "momento", coluna: "Momento de decisão", tipo: "escolha", obrigatorio: true,
          titulo: "Em que momento você está?",
          opcoes: ["Quero agendar logo", "Estou comparando fotógrafos", "Só pesquisando valores por enquanto"]
        }
      ],
      final: {
        titulo: "Recebi tudo, {nome}!",
        texto: "Em breve você recebe no WhatsApp os valores e as datas disponíveis para o seu ensaio. Se quiser adiantar a conversa, é só tocar no botão abaixo.",
        botao: "Falar no WhatsApp agora",
        mensagemWhatsapp: "Oi, Tay! Sou {nome}, acabei de responder o formulário do ensaio gestante."
      }
    },

    /* ===================== NEWBORN ===================== */
    newborn: {
      nome: "Ensaio newborn",
      pagina: "newborn.html",
      card: {
        etiqueta: "Newborn",
        titulo: "Ensaio do bebê recém-nascido",
        texto: "Garanta a data dos primeiros dias do seu bebê.",
        tempo: "1 min"
      },
      boasVindas: {
        titulo: "Vamos planejar o ensaio newborn do seu bebê?",
        texto: "Os primeiros dias passam muito rápido. Responda algumas perguntas e receba valores e datas no seu WhatsApp.",
        botao: "Começar",
        tempo: "Leva cerca de 1 minuto"
      },
      perguntaNome: "Antes de tudo, como você se chama?",
      perguntaWhatsapp: "Prazer, {nome}! Qual o seu WhatsApp?",
      ajudaWhatsapp: "É por lá que você vai receber os valores e as datas.",
      perguntas: [
        {
          id: "nascido", coluna: "Bebê já nasceu?", tipo: "escolha", obrigatorio: true,
          titulo: "O bebê já nasceu?",
          opcoes: ["Ainda não, estou grávida", "Sim, já nasceu"]
        },
        {
          id: "data_bebe", coluna: "Nascimento / data prevista", tipo: "data", obrigatorio: false,
          titulo: "Qual a data de nascimento ou a data prevista?",
          ajuda: "Se não souber a data exata, pode pular."
        },
        {
          id: "primeiro", coluna: "Primeiro filho?", tipo: "escolha", obrigatorio: true,
          titulo: "É o primeiro filho, {nome}?",
          opcoes: ["Sim, o primeiro!", "Não, já tenho filho(s)"]
        },
        {
          id: "participantes", coluna: "Quem participa", tipo: "multipla", obrigatorio: true,
          titulo: "Quem vai participar das fotos?",
          ajuda: "Pode marcar mais de uma opção.",
          opcoes: ["Só o bebê", "Mamãe e papai", "Irmãos", "Pet", "Outros familiares"]
        },
        {
          id: "local", coluna: "Local", tipo: "escolha", obrigatorio: true,
          titulo: "Onde você prefere que seja o ensaio?",
          opcoes: ["Em estúdio", "Em casa", "Ainda não sei"]
        },
        {
          id: "entrega", coluna: "Como quer as fotos", tipo: "multipla", obrigatorio: true,
          titulo: "Como você gostaria de guardar essas fotos?",
          ajuda: "Pode marcar mais de uma opção.",
          opcoes: ["Fotos digitais", "Álbum impresso", "Quadros para a parede", "Ainda não pensei nisso"]
        },
        {
          id: "momento", coluna: "Momento de decisão", tipo: "escolha", obrigatorio: true,
          titulo: "Em que momento você está?",
          opcoes: ["Quero agendar logo", "Estou comparando fotógrafos", "Só pesquisando valores por enquanto"]
        },
        {
          id: "cidade", coluna: "Cidade / bairro", tipo: "texto", obrigatorio: true,
          titulo: "Em qual cidade e bairro você mora?",
          placeholder: "Cidade – bairro", min: 3
        },
        {
          id: "instagram", coluna: "Instagram", tipo: "instagram", obrigatorio: false,
          titulo: "Qual o seu @ no Instagram?",
          ajuda: "Opcional.",
          placeholder: "@seuperfil"
        },
        {
          id: "sonho", coluna: "Ideias / observações", tipo: "textarea", obrigatorio: false,
          titulo: "Tem algo especial que você gostaria no ensaio?",
          placeholder: "Cores, objetos, uma referência…"
        }
      ],
      final: {
        titulo: "Recebi tudo, {nome}!",
        texto: "Em breve você recebe no WhatsApp os valores e as datas disponíveis. Se quiser adiantar a conversa, é só tocar no botão abaixo.",
        botao: "Falar no WhatsApp agora",
        mensagemWhatsapp: "Oi! Sou {nome}, acabei de responder o formulário do ensaio newborn."
      }
    },

    /* ================= FAMÍLIA / INFANTIL ================= */
    familia: {
      nome: "Família e infantil",
      pagina: "familia.html",
      card: {
        etiqueta: "Família e infantil",
        titulo: "Família, smash the cake e infantil",
        texto: "Ensaios para registrar a fase que a sua família está vivendo.",
        tempo: "1 min"
      },
      boasVindas: {
        titulo: "Vamos planejar o ensaio da sua família?",
        texto: "Responda algumas perguntas rapidinhas e receba os valores e as datas disponíveis no seu WhatsApp.",
        botao: "Começar",
        tempo: "Leva cerca de 1 minuto"
      },
      perguntaNome: "Antes de tudo, como você se chama?",
      perguntaWhatsapp: "Prazer, {nome}! Qual o seu WhatsApp?",
      ajudaWhatsapp: "É por lá que você vai receber os valores e as datas.",
      perguntas: [
        {
          id: "tipo", coluna: "Tipo de ensaio", tipo: "escolha", obrigatorio: true,
          titulo: "Que tipo de ensaio você procura?",
          opcoes: ["Família", "Smash the cake", "Aniversário / festa infantil", "Ensaio infantil", "Acompanhamento mensal do bebê"]
        },
        {
          id: "pessoas", coluna: "Nº de pessoas", tipo: "escolha", obrigatorio: true,
          titulo: "Quantas pessoas vão participar?",
          opcoes: ["2 ou 3", "De 4 a 6", "7 ou mais"]
        },
        {
          id: "idades", coluna: "Idade das crianças", tipo: "texto", obrigatorio: false,
          titulo: "Qual a idade das crianças?",
          ajuda: "Se não tiver crianças no ensaio, pode pular.",
          placeholder: "Idades"
        },
        {
          id: "data", coluna: "Data desejada", tipo: "data", limite: "futura", obrigatorio: false,
          titulo: "Tem alguma data em mente?",
          ajuda: "Aniversário, uma data especial… Se não tiver, pode pular."
        },
        {
          id: "local", coluna: "Local", tipo: "escolha", obrigatorio: true,
          titulo: "Onde você imagina o ensaio?",
          opcoes: ["Em estúdio", "Ao ar livre", "Em casa", "Ainda não sei, quero sugestões"]
        },
        {
          id: "entrega", coluna: "Como quer as fotos", tipo: "multipla", obrigatorio: true,
          titulo: "Como você gostaria de guardar essas fotos?",
          ajuda: "Pode marcar mais de uma opção.",
          opcoes: ["Fotos digitais", "Álbum impresso", "Quadros para a parede", "Ainda não pensei nisso"]
        },
        {
          id: "momento", coluna: "Momento de decisão", tipo: "escolha", obrigatorio: true,
          titulo: "Em que momento você está?",
          opcoes: ["Quero agendar logo", "Estou comparando fotógrafos", "Só pesquisando valores por enquanto"]
        },
        {
          id: "cidade", coluna: "Cidade / bairro", tipo: "texto", obrigatorio: true,
          titulo: "Em qual cidade e bairro você mora?",
          placeholder: "Cidade – bairro", min: 3
        },
        {
          id: "instagram", coluna: "Instagram", tipo: "instagram", obrigatorio: false,
          titulo: "Qual o seu @ no Instagram?",
          ajuda: "Opcional.",
          placeholder: "@seuperfil"
        },
        {
          id: "sonho", coluna: "Ideias / observações", tipo: "textarea", obrigatorio: false,
          titulo: "Tem algo especial que você gostaria no ensaio?",
          placeholder: "Um tema, uma ideia, uma referência…"
        }
      ],
      final: {
        titulo: "Recebi tudo, {nome}!",
        texto: "Em breve você recebe no WhatsApp os valores e as datas disponíveis. Se quiser adiantar a conversa, é só tocar no botão abaixo.",
        botao: "Falar no WhatsApp agora",
        mensagemWhatsapp: "Oi! Sou {nome}, acabei de responder o formulário de ensaio de família/infantil."
      }
    }
  }
};
