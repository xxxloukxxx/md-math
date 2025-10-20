MathJax = {
  loader: {
    load: [
      "[tex]/autoload",
      "[tex]/physics",
      "[tex]/mathtools",
      "[tex]/ams",
      "[tex]/cases",
      "[tex]/textmacros",
    ],
  },
  tex: {
    packages: [
      "autoload",
      "base",
      "cases",
      "physics",
      "ams",
      "mathtools",
      "textmacros",
      "newcommand",
    ], // extensions to use
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true, // use \$ to produce a literal dollar sign
    processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
  },
  startup: {
    ready() {
      MathJax.startup.defaultReady();
      const { STATE } = MathJax._.core.MathItem;
      MathJax.tex2mml(String.raw`
        \let\nc\newcommand
        \let\rnc\newcommand
        \let\le\leqslant
        \let\leq\leqslant
        \let\ge\geqslant
        \let\geq\geqslant
        \let\cbox\colorbox
        \nc{\N}{\mathbb{N}}
        \nc{\Z}{\mathbb{Z}}
        \nc{\D}{\mathbb{D}}
        \nc{\Q}{\mathbb{Q}}
        \nc{\R}{\mathbb{R}}
        \nc{\C}{\mathbb{C}}
        \nc{\Cf}{\mathcal{C}_f}
        \nc{\Cg}{\mathcal{C}_g}
        \nc{\Df}{\mathcal{D}_f}
        \nc{\Dfp}{\mathcal{D}_{f'}}
        \nc{\Rp}{\R^{+}}
        \nc{\Ret}{\R-\{0\}}
        \nc{\Rpe}{\R^{+}-\{0\}}
        \nc{\Dg}{\mathcal{D}_g}
        \nc{\pa}[1]{\left(#1\right)}
        \nc{\brace}[1]{\left\{#1\right\}}
        \nc{\brack}[1]{\left[#1\right]}
        \nc{\coord}[2]{\begin{pmatrix}#1\\#2\end{pmatrix}}
        \nc{\coordl}[2]{\left(#1~;~#2\right)}
        \nc{\overarc}[1]{\overset{\huge\frown}{#1}}
        \rnc{\bar}[1]{\overline{#1}}
        \rnc{\iff}{\Leftrightarrow}
        \nc{\Lrarr}{\Leftrightarrow}
        \nc{\Rarr}{\Rightarrow}
        \nc{\rarr}{\rightarrow}
        \nc{\tc}{\textcolor}
        \let\ol\overline
        \nc{\vec}[1]{\overrightarrow{#1}}
        \nc{\OIJ}{\left(O;I,J\right)}
        \nc{\vOIJ}{\left(O;\vec{i},\vec{j}\right)}
      `);
    },
  },
  output: {
    font: "mathjax-tex",
    // font: "mathjax-schola",
  },
};

(function () {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@4/tex-chtml.js";
  script.defer = true;
  document.head.appendChild(script);
})();
