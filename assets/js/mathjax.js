MathJax = {
  loader: {
    load: [
      "[tex]/autoload",
      "[tex]/physics",
      "[tex]/mathtools",
      "[tex]/colortbl",
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
      "colortbl",
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
        \def\euro{\unicode{x20AC}}
        \def\diceone{\Large\unicode{x2680}\normalsize}
        \def\dicetwo{\Large\unicode{x2681}\normalsize}
        \def\dicethree{\Large\unicode{x2682}\normalsize}
        \def\dicefour{\Large\unicode{x2683}\normalsize}
        \def\dicefive{\Large\unicode{x2684}\normalsize}
        \def\dicesix{\Large\unicode{x2685}\normalsize}
        \let\nc\newcommand
        \let\rnc\newcommand
        \let\le\leqslant
        \let\leq\leqslant
        \let\ge\geqslant
        \let\geq\geqslant
        \let\cbox\colorbox
        \let\div\divisionsymbol
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
        \nc{\Ret}{\R^{*}}
        \nc{\Rpe}{\R^{+*}}
        \nc{\Dg}{\mathcal{D}_g}
        \nc{\pa}[1]{\left(#1\right)}
        \nc{\brace}[1]{\left\{#1\right\}}
        \nc{\brack}[1]{\left[#1\right]}
        \nc{\prim}{^{\prime}}
        \nc{\pprim}{^{\prime\prime}}
        \nc{\coord}[2]{\begin{pmatrix}#1\\#2\end{pmatrix}}
        \nc{\coordl}[2]{\left(#1~;~#2\right)}
        \nc{\overarc}[1]{\overset{\huge\frown}{#1}}
        \rnc{\bar}[1]{\overline{#1}}
        \rnc{\iff}{\Leftrightarrow}
        \rnc{\limite}{\lim\limits}
        \rnc{\dint}{\displaystyle\int}
        \rnc{\less}{\lt}
        \nc{\Lrarr}{\Leftrightarrow}
        \nc{\Rarr}{\Rightarrow}
        \nc{\rarr}{\rightarrow}
        \nc{\Larr}{\Leftarrow}
        \nc{\larr}{\leftarrow}
        \nc{\tc}{\textcolor}
        \nc{\minzero}{\setminus{\lbrace 0\rbrace}}
        \let\ol\overline
        \nc{\vv}[1]{\overrightarrow{#1}}
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
