// questions.js — Banque de questions du Quiz

const QUESTIONS = [
  {
    category: "HTML",
    text: "Quelle balise HTML est utilisée pour créer un hyperlien ?",
    answers: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1
  },
  {
    category: "CSS",
    text: "Quelle propriété CSS permet de changer la couleur de fond ?",
    answers: ["color", "font-color", "background-color", "bg-color"],
    correct: 2
  },
  {
    category: "JavaScript",
    text: "Quelle méthode permet d'ajouter un élément à la fin d'un tableau en JavaScript ?",
    answers: ["push()", "append()", "add()", "insert()"],
    correct: 0
  },
  {
    category: "Git",
    text: "Quelle commande Git permet d'envoyer des commits locaux vers un dépôt distant ?",
    answers: ["git pull", "git fetch", "git push", "git send"],
    correct: 2
  },
  {
    category: "HTML",
    text: "Quelle balise HTML5 est utilisée pour regrouper le contenu principal d'une page ?",
    answers: ["<section>", "<div>", "<main>", "<article>"],
    correct: 2
  },
  {
    category: "CSS",
    text: "Quelle valeur de 'display' permet d'utiliser le modèle de boîte flexible ?",
    answers: ["block", "flex", "grid", "inline"],
    correct: 1
  },
  {
    category: "JavaScript",
    text: "Comment déclare-t-on une variable immuable (constante) en JavaScript moderne ?",
    answers: ["var", "let", "const", "static"],
    correct: 2
  },
  {
    category: "Git",
    text: "Quelle commande permet de créer une nouvelle branche ET de basculer dessus en même temps ?",
    answers: ["git branch -n", "git checkout -b", "git switch --create", "git new-branch"],
    correct: 1
  },
  {
    category: "HTML",
    text: "Quel attribut HTML rend un champ de formulaire obligatoire ?",
    answers: ["mandatory", "required", "validate", "must"],
    correct: 1
  },
  {
    category: "JavaScript",
    text: "Quelle méthode JavaScript sélectionne un élément par son identifiant CSS ?",
    answers: ["querySelector()", "getElementById()", "getElement()", "selectById()"],
    correct: 1
  }
];
