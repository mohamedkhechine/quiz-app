// questions.js — Banque de questions sur GitHub

const QUESTIONS = [
  {
    category: "GitHub",
    text: "Quel est le nom de la plateforme de développement collaboratif basée sur Git ?",
    answers: ["GitLab", "GitHub", "Bitbucket", "SourceForge"],
    correct: 1
  },
  {
    category: "GitHub",
    text: "Quelle commande Git permet de cloner un dépôt GitHub sur sa machine locale ?",
    answers: ["git clone", "git copy", "git download", "git fork"],
    correct: 0
  },
  {
    category: "GitHub",
    text: "Comment appelle-t-on une copie d'un dépôt GitHub sur son propre compte ?",
    answers: ["clone", "branch", "fork", "mirror"],
    correct: 2
  },
  {
    category: "GitHub",
    text: "Quel fichier à la racine d'un dépôt GitHub permet d'en décrire le contenu en Markdown ?",
    answers: ["README.md", "DOCS.txt", "INFO.md", "DESCRIPTION.md"],
    correct: 0
  },
  {
    category: "GitHub",
    text: "Quelle section de GitHub permet de signaler un bug ou proposer une amélioration ?",
    answers: ["Wiki", "Projects", "Issues", "Discussions"],
    correct: 2
  },
  {
    category: "GitHub",
    text: "Quel est l'équivalent GitHub d'une 'pull request' sur GitLab ?",
    answers: ["merge request", "push request", "pull request", "change request"],
    correct: 2
  },
  {
    category: "GitHub",
    text: "Quelle icône représentant une fourchette permet de créer une copie personnelle d'un dépôt ?",
    answers: ["Fork", "Branch", "Clone", "Copy"],
    correct: 0
  },
  {
    category: "GitHub",
    text: "Quel langage de balisage est utilisé pour formater les README sur GitHub ?",
    answers: ["HTML", "Markdown", "XML", "ReStructuredText"],
    correct: 1
  },
  {
    category: "GitHub",
    text: "Comment appelle-t-on la plateforme de CI/CD intégrée à GitHub ?",
    answers: ["GitHub CI", "GitHub Pipeline", "GitHub Actions", "GitHub Build"],
    correct: 2
  },
  {
    category: "GitHub",
    text: "Quel fichier YAML contient la configuration des workflows GitHub Actions ?",
    answers: [".github/workflows.yml", ".github/actions.yml", ".github/workflows/*.yml", "github-actions.yml"],
    correct: 2
  },
  {
    category: "GitHub",
    text: "Quelle commande permet d'ajouter une remote GitHub à un dépôt local existant ?",
    answers: ["git remote add origin", "git github connect", "git remote github", "git add origin"],
    correct: 0
  },
  {
    category: "GitHub",
    text: "Quel est le maximum de caractères recommandé pour un message de commit sur GitHub ?",
    answers: ["50 titres / 72 corps", "100 titres", "30 titres", "Pas de limite"],
    correct: 0
  },
  {
    category: "GitHub",
    text: "Quelle fonctionnalité permet de discuter des changements avant de les fusionner ?",
    answers: ["Code review", "Pull request", "Issue", "Wiki"],
    correct: 1
  },
  {
    category: "GitHub",
    text: "Comment protéger une branche principale sur GitHub contre les pushes directs ?",
    answers: ["Branch protection rules", "Branch lock", "Main protection", "Frozen branch"],
    correct: 0
  },
  {
    category: "GitHub",
    text: "Quel service GitHub permet d'héberger des pages web statiques gratuitement ?",
    answers: ["GitHub Host", "GitHub Pages", "GitHub Web", "GitHub Static"],
    correct: 1
  },
  {
    category: "GitHub",
    text: "Quelle extension de fichier est utilisée pour un workflow GitHub Actions ?",
    answers: [".yml ou .yaml", ".action", ".workflow", ".gha"],
    correct: 0
  },
  {
    category: "GitHub",
    text: "Comment s'appelle l'outil de gestion de projet visuel de GitHub ?",
    answers: ["GitHub Boards", "GitHub Projects", "Project Manager", "Kanban Hub"],
    correct: 1
  },
  {
    category: "GitHub",
    text: "Quel badge indique qu'un projet est open source avec une licence officielle ?",
    answers: ["License badge", "Open source badge", "GitHub license", "MIT badge"],
    correct: 0
  },
  {
    category: "GitHub",
    text: "Quelle fonctionnalité permet de rechercher du code dans tous les dépôts publics ?",
    answers: ["GitHub Search", "Code Explorer", "GitHub Code Search", "Repo Finder"],
    correct: 2
  },
  {
    category: "GitHub",
    text: "Comment appelle-t-on la fusion automatique d'une pull request si les tests passent ?",
    answers: ["Auto-merge", "Quick merge", "Fast-forward merge", "Auto-deploy"],
    correct: 0
  },
  {
    category: "GitHub",
    text: "Quel outil analyse la sécurité des dépendances sur GitHub ?",
    answers: ["Dependabot", "Security Bot", "GitHub Guard", "Dependency Checker"],
    correct: 0
  },
  {
    category: "GitHub",
    text: "Quelle commande permet de synchroniser un fork avec le dépôt original ?",
    answers: ["git sync", "git pull upstream", "git fetch origin", "git merge fork"],
    correct: 1
  },
  {
    category: "GitHub",
    text: "Comment s'appelle la fonctionnalité de discussions structurées comme un forum ?",
    answers: ["GitHub Forum", "Discussions", "Community Board", "Talk"],
    correct: 1
  },
  {
    category: "GitHub",
    text: "Quel raccourci clavier permet de rechercher sur GitHub depuis n'importe quelle page ?",
    answers: ["Ctrl+K / Cmd+K", "Ctrl+F", "Ctrl+S", "Ctrl+Shift+F"],
    correct: 0
  },
  {
    category: "GitHub",
    text: "Quel type de fichier permet d'automatiser la réponse aux issues ?",
    answers: [".github/ISSUE_TEMPLATE.md", "issue-config.yml", "issue-bot.yml", "auto-reply.md"],
    correct: 0
  },
  {
    category: "GitHub",
    text: "Comment s'appelle la version payante de GitHub pour les entreprises ?",
    answers: ["GitHub Pro", "GitHub Team", "GitHub Enterprise", "GitHub Business"],
    correct: 2
  },
  {
    category: "GitHub",
    text: "Quelle commande GitHub CLI permet de créer une pull request ?",
    answers: ["gh pr create", "gh pull create", "gh pr new", "gh request create"],
    correct: 0
  },
  {
    category: "GitHub",
    text: "Quel emoji est traditionnellement associé à une première contribution ?",
    answers: ["🎉", "✨", "🎈", "🍰"],
    correct: 0
  },
  {
    category: "GitHub",
    text: "Comment appelle-t-on la page qui regroupe les statistiques d'un projet ?",
    answers: ["Analytics", "Insights", "Stats", "Dashboard"],
    correct: 1
  },
  {
    category: "GitHub",
    text: "Quelle est la commande pour pousser une branche locale vers GitHub ?",
    answers: ["git push -u origin", "git push github", "git upload", "git remote push"],
    correct: 0
  }
];
