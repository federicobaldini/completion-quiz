const jsonData = {
  theorems: [
    {
      question:
        "Definizione di spazio normato. Dare un esempio e dimostrare che effettivamente lo è.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Sia $X$ uno spazio vettoriale",
                is_correct: true,
              },
              {
                text: "Sia $X$ un campo vettoriale",
                is_correct: false,
              },
              {
                text: "Sia $X$ uno spazio metrico",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "definito sul campo $K$.",
                is_correct: true,
              },
              {
                text: "definito sull'anello $K$.",
                is_correct: false,
              },
              {
                text: "definito sul gruppo $K$.",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "La funzione $\\|\\cdot\\| : X \\rightarrow [0, +\\infty)$ è una <strong>norma</strong> se soddisfa le seguenti proprietà",
                is_correct: true,
              },
              {
                text: "La funzione $\\|\\cdot\\| : X \\rightarrow (-\\infty, +\\infty)$ è una <strong>norma</strong> se soddisfa le seguenti proprietà",
                is_correct: false,
              },
              {
                text: "La funzione $\\|\\cdot\\| : X \\rightarrow \\mathbb{C}$ è una <strong>norma</strong> se soddisfa le seguenti proprietà",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$\\forall x, y \\in X$ e $\\forall \\lambda \\in K$:",
                is_correct: true,
              },
              {
                text: "$\\forall x, y \\in K$ e $\\forall \\lambda \\in X$:",
                is_correct: false,
              },
              {
                text: "$\\forall x \\in X$, $\\forall y, \\lambda \\in K$:",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\| x \\| = 0 \\Leftrightarrow x = 0$",
                is_correct: true,
              },
              {
                text: "$\\| x \\| \\geq 0$ per ogni $x \\in X$",
                is_correct: false,
              },
              {
                text: "$\\| x \\| = \\| -x \\|$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\| \\lambda x \\| = |\\lambda| \\| x \\|$",
                is_correct: true,
              },
              {
                text: "$\\| \\lambda x \\| = \\lambda \\| x \\|$",
                is_correct: false,
              },
              {
                text: "$\\| \\lambda x \\| = \\| \\lambda \\| \\| x \\|$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\| x + y \\| \\leq \\| x \\| + \\| y \\|$",
                is_correct: true,
              },
              {
                text: "$\\| x + y \\| = \\| x \\| + \\| y \\|$",
                is_correct: false,
              },
              {
                text: "$\\| x + y \\| \\geq \\| x \\| - \\| y \\|$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Esempio: consideriamo $\\mathbb{R}^n$ con la norma euclidea $\\| x \\| = \\sqrt{x_1^2 + \\dots + x_n^2}$",
                is_correct: true,
              },
              {
                text: "Esempio: consideriamo $\\mathbb{R}^n$ con la norma definita come $\\| x \\| = |x_1| + \\dots + |x_n|$",
                is_correct: false,
              },
              {
                text: "Esempio: consideriamo $\\mathbb{R}^n$ con la norma nulla $\\| x \\| = 0$ per ogni $x \\in \\mathbb{R}^n$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\| x \\| = 0 \\Leftrightarrow x_1 = x_2 = \\dots = x_n = 0 \\Rightarrow x = 0$",
                is_correct: true,
              },
              {
                text: "$\\| x \\| = 0 \\Leftrightarrow x$ è un vettore unitario",
                is_correct: false,
              },
              {
                text: "$\\| x \\| = 0 \\Leftrightarrow x$ è un vettore nullo per qualche componente",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$|| \\lambda x || = \\sqrt{\\lambda^2 \\cdot x_1^2 + \\dots + \\lambda^2 \\cdot x_n^2}$ $= \\sqrt{\\lambda^2 \\cdot (x_1^2 + \\dots + x_n^2)}$ $= |\\lambda| \\cdot \\sqrt{x_1^2 + \\dots + x_n^2} = |\\lambda| \\cdot || x ||$",
                is_correct: true,
              },
              {
                text: "$\\| \\lambda x \\| = \\lambda \\| x \\|$",
                is_correct: false,
              },
              {
                text: "$\\| \\lambda x \\| = \\lambda^2 \\| x \\|$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$|| x + y ||^2 = (x_1 + y_1)^2 + \\dots + (x_n + y_n)^2$ $= x_1^2 + \\dots + x_n^2 + y_1^2 + \\dots + y_n^2 + 2 x_1 y_1 + \\dots + 2 x_n y_n$ $= || x ||^2 + 2 x \\cdot y + || y ||^2 \\leq || x ||^2 + 2 \\cdot || x || \\cdot || y || + || y ||^2$ $= (|| x || + || y ||)^2$",
                is_correct: true,
              },
              {
                text: "$\\| x + y \\|^2 = \\| x \\|^2 + \\| y \\|^2$",
                is_correct: false,
              },
              {
                text: "$\\| x + y \\| = \\| x \\| - \\| y \\|$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      question:
        "Mostrare come si può definire una norma su uno spazio con prodotto interno. Dare un esempio.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Sia $\\langle \\cdot , \\cdot \\rangle$ un prodotto interno su $X$,",
                is_correct: true,
              },
              {
                text: "Sia $\\langle \\cdot , \\cdot \\rangle$ un prodotto esterno su $X$,",
                is_correct: false,
              },
              {
                text: "Sia $\\langle \\cdot , \\cdot \\rangle$ un prodotto vettoriale su $X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "allora possiamo definire la norma come $\\| x \\| = \\sqrt{\\langle x, x \\rangle}$",
                is_correct: true,
              },
              {
                text: "allora possiamo definire la norma come $\\| x \\| = \\langle x, x \\rangle$",
                is_correct: false,
              },
              {
                text: "allora possiamo definire la norma come $\\| x \\| = (\\langle x, x \\rangle)^2$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Esempio: prendiamo il prodotto scalare euclideo $\\langle x, y \\rangle = x_1 y_1 + \\dots + x_n y_n$",
                is_correct: true,
              },
              {
                text: "Esempio: prendiamo il prodotto vettoriale $\\langle x, y \\rangle = x_1 y_2 - x_2 y_1$",
                is_correct: false,
              },
              {
                text: "Esempio: prendiamo il prodotto esterno $\\langle x, y \\rangle = x \\wedge y$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\| x \\| = \\sqrt{\\langle x, x \\rangle} = \\sqrt{x_1^2 + \\dots + x_n^2}$",
                is_correct: true,
              },
              {
                text: "$\\| x \\| = \\langle x, x \\rangle = x_1^2 + \\dots + x_n^2$",
                is_correct: false,
              },
              {
                text: "$\\| x \\| = (\\langle x, x \\rangle)^2 = (x_1^2 + \\dots + x_n^2)^2$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      question:
        "Definire la norma della convergenza uniforme in $BC(A)$. Provare che con questa norma la convergenza puntuale di una successione equivale alla convergenza uniforme.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Sia $BC(A)$ l'insieme delle funzioni $f: A \\rightarrow \\mathbb{R}$ continue e limitate,",
                is_correct: true,
              },
              {
                text: "Sia $BC(A)$ l'insieme delle funzioni $f: A \\rightarrow \\mathbb{R}$ continue e illimitate,",
                is_correct: false,
              },
              {
                text: "Sia $BC(A)$ l'insieme delle funzioni $f: A \\rightarrow \\mathbb{R}$ discontinue e limitate,",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Definiamo $\\|f\\|_{BC(A)} = \\sup \\{ |f(a)| : a \\in A \\}$ con $f \\in BC(A)$",
                is_correct: true,
              },
              {
                text: "Definiamo $\\|f\\|_{BC(A)} = \\inf \\{ |f(a)| : a \\in A \\}$ con $f \\in BC(A)$",
                is_correct: false,
              },
              {
                text: "Definiamo $\\|f\\|_{BC(A)} = \\int_A |f(a)| \\mathrm{d}a$ con $f \\in BC(A)$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Sia ora $\\{f_k\\}$ una successione nello spazio normato $BC(A)$,",
                is_correct: true,
              },
              {
                text: "Sia ora $\\{f_k\\}$ una successione nello spazio normato $C(A)$,",
                is_correct: false,
              },
              {
                text: "Sia ora $\\{f_k\\}$ una successione nello spazio normato $L^p(A)$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "sia $f \\in BC(A)$,",
                is_correct: true,
              },
              {
                text: "sia $f \\in C(A)$,",
                is_correct: false,
              },
              {
                text: "sia $f \\in L^p(A)$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "allora $f_k$ converge uniformemente a $f$",
                is_correct: true,
              },
              {
                text: "allora $f_k$ converge puntualmente a $f$",
                is_correct: false,
              },
              {
                text: "allora $f_k$ converge debolmente a $f$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "se e solo se $\\lim_{k \\rightarrow \\infty} f_k = f$ in $BC(A)$.",
                is_correct: true,
              },
              {
                text: "se e solo se $\\lim_{k \\rightarrow \\infty} f_k = f$ puntualmente in $A$.",
                is_correct: false,
              },
              {
                text: "se e solo se $\\lim_{k \\rightarrow \\infty} \\|f_k - f\\|_{L^p(A)} = 0$.",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(\\Rightarrow)$ $\\forall \\varepsilon > 0$, $\\exists \\, k(\\varepsilon) \\in \\mathbb{N} \\; | \\; \\forall \\, k > k(\\varepsilon)$ e $\\forall \\, a \\in A$, $|f_k(a) - f(a)| < \\varepsilon$",
                is_correct: true,
              },
              {
                text: "$(\\Rightarrow)$ $\\exists \\varepsilon > 0$, $\\forall \\, k(\\varepsilon) \\in \\mathbb{N} \\; | \\; \\exists \\, k < k(\\varepsilon)$ e $\\forall \\, a \\in A$, $|f_k(a) - f(a)| \\geq \\varepsilon$",
                is_correct: false,
              },
              {
                text: "$(\\Rightarrow)$ $\\forall \\varepsilon > 0$, $\\exists \\, k(\\varepsilon) \\in \\mathbb{N} \\; | \\; \\forall \\, k > k(\\varepsilon)$ e $\\exists \\, a \\in A$ | $|f_k(a) - f(a)| > \\varepsilon$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\implies \\|f_k - f\\|_{BC(A)} = \\sup \\{ |f_k(a) - f(a)| : a \\in A \\} < \\varepsilon$",
                is_correct: true,
              },
              {
                text: "$\\implies \\|f_k - f\\|_{BC(A)} = \\inf \\{ |f_k(a) - f(a)| : a \\in A \\} > \\varepsilon$",
                is_correct: false,
              },
              {
                text: "$\\implies \\|f_k - f\\|_{BC(A)} = \\sup \\{ |f_k(a) + f(a)| : a \\in A \\} = \\varepsilon$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\implies \\lim_{k \\rightarrow \\infty} \\|f_k - f\\|_{BC(A)} = 0$",
                is_correct: true,
              },
              {
                text: "$\\implies \\lim_{k \\rightarrow \\infty} \\|f_k - f\\|_{BC(A)} = \\varepsilon$",
                is_correct: false,
              },
              {
                text: "$\\implies \\lim_{k \\rightarrow \\infty} \\|f_k - f\\|_{BC(A)} = \\infty$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(\\Leftarrow)$ Se $\\lim_{k \\rightarrow \\infty} \\|f_k - f\\|_{BC(A)} = 0$, allora $\\forall \\varepsilon > 0$ $\\exists k(\\varepsilon) \\in \\mathbb{N}$ $|$ $\\forall k > k(\\varepsilon)$, $\\|f_k - f\\|_{BC(A)} < \\varepsilon$",
                is_correct: true,
              },
              {
                text: "$(\\Leftarrow)$ Se $\\lim_{k \\rightarrow \\infty} \\|f_k - f\\|_{BC(A)} = \\infty$, allora $\\forall \\varepsilon > 0$ $\\exists k(\\varepsilon) \\in \\mathbb{N}$ $|$ $\\|f_k - f\\|_{BC(A)} > \\varepsilon$",
                is_correct: false,
              },
              {
                text: "$(\\Leftarrow)$ Se $\\lim_{k \\rightarrow \\infty} \\|f_k - f\\|_{BC(A)} = 0$, allora $\\forall \\varepsilon > 0$ $\\exists k(\\varepsilon) \\in \\mathbb{N}$ $|$ $\\forall k < k(\\varepsilon)$, $\\|f_k - f\\|_{BC(A)} < \\varepsilon$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\implies \\sup \\{ |f_k(a) - f(a)| : a \\in A \\} < \\varepsilon$",
                is_correct: true,
              },
              {
                text: "$\\implies \\inf \\{ |f_k(a) - f(a)| : a \\in A \\} < \\varepsilon$",
                is_correct: false,
              },
              {
                text: "$\\implies \\sup \\{ |f_k(a) - f(a)| : a \\in A \\} = \\varepsilon$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\implies \\forall a \\in A, \\ |f_k(a) - f(a)| < \\varepsilon$",
                is_correct: true,
              },
              {
                text: "$\\implies \\exists a \\in A, \\ |f_k(a) - f(a)| < \\varepsilon$",
                is_correct: false,
              },
              {
                text: "$\\implies \\forall a \\in A, \\ |f_k(a) - f(a)| > \\varepsilon$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      question:
        "Dare la definizione di spazio metrico e presentare, illustrandolo, un esempio.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Si consideri un insieme $X$",
                is_correct: true,
              },
              {
                text: "Si consideri un insieme $Y$",
                is_correct: false,
              },
              {
                text: "Si consideri un insieme $X \\times X$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "ed una funzione $d: X \\times X \\rightarrow [0, +\\infty)$",
                is_correct: true,
              },
              {
                text: "ed una funzione $d: X \\rightarrow [0, +\\infty)$",
                is_correct: false,
              },
              {
                text: "ed una funzione $d: X \\times X \\rightarrow \\mathbb{R}$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "con le seguenti proprietà $\\forall x, y, z \\in X$:",
                is_correct: true,
              },
              {
                text: "con le seguenti proprietà $\\forall x, y \\in X$:",
                is_correct: false,
              },
              {
                text: "con le seguenti proprietà $\\forall x, y, z \\in \\mathbb{R}$:",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$d(x, y) \\geq 0$ e $d(x, y) = 0 \\Leftrightarrow x = y$",
                is_correct: true,
              },
              {
                text: "$d(x, y) \\leq 0$ e $d(x, y) = 0 \\Leftrightarrow x \\neq y$",
                is_correct: false,
              },
              {
                text: "$d(x, y) > 0$ per ogni $x, y \\in X$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$d(x, y) = d(y, x)$ $\\forall x, y \\in X$",
                is_correct: true,
              },
              {
                text: "$d(x, y) = -d(y, x)$ $\\forall x, y \\in X$",
                is_correct: false,
              },
              {
                text: "$d(x, y) \\neq d(y, x)$ per ogni $x, y \\in X$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$d(x, y) \\leq d(x, z) + d(z, y)$ $\\forall x, y, z \\in X$",
                is_correct: true,
              },
              {
                text: "$d(x, y) \\geq d(x, z) + d(z, y)$ $\\forall x, y, z \\in X$",
                is_correct: false,
              },
              {
                text: "$d(x, y) = d(x, z) - d(z, y)$ per ogni $x, y, z \\in X$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Si definisce spazio metrico la coppia $(X, d)$",
                is_correct: true,
              },
              {
                text: "Si definisce spazio metrico la tripla $(X, d, y)$",
                is_correct: false,
              },
              {
                text: "Si definisce spazio metrico la funzione $d$ su $X$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Esempio: dato l'insieme $\\mathbb{R}$ e la metrica $d: \\mathbb{R} \\times \\mathbb{R} \\rightarrow [0, +\\infty)$ | $d(x, y) = \\begin{cases} 0 & \\text{se } x = y \\\\ 1 & \\text{se } x \\neq y \\end{cases}$",
                is_correct: true,
              },
              {
                text: "Esempio: dato l'insieme $\\mathbb{R}$ e la metrica $d: \\mathbb{R} \\times \\mathbb{R} \\rightarrow [0, +\\infty)$ | $d(x, y) = |x - y|$",
                is_correct: false,
              },
              {
                text: "Esempio: dato l'insieme $\\mathbb{R}$ e la funzione $d: \\mathbb{R} \\rightarrow [0, +\\infty)$ | $d(x) = x^2$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$d(x, y) = 0 \\Leftrightarrow x = y$ per ogni $x, y \\in \\mathbb{R}$",
                is_correct: true,
              },
              {
                text: "$d(x, y) = 1 \\Leftrightarrow x = y$ per ogni $x, y \\in \\mathbb{R}$",
                is_correct: false,
              },
              {
                text: "$d(x, y) = 0$ per ogni $x, y \\in \\mathbb{R}$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$d(x, y) = d(y, x)$ $\\forall x, y \\in \\mathbb{R}$",
                is_correct: true,
              },
              {
                text: "$d(x, y) \\neq d(y, x)$ per ogni $x, y \\in \\mathbb{R}$",
                is_correct: false,
              },
              {
                text: "$d(x, y) = -d(y, x)$ per ogni $x, y \\in \\mathbb{R}$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$d(x, y) \\leq d(x, z) + d(z, y)$ per ogni $x, y, z \\in \\mathbb{R}$",
                is_correct: true,
              },
              {
                text: "$d(x, y) \\geq d(x, z) + d(z, y)$ per ogni $x, y, z \\in \\mathbb{R}$",
                is_correct: false,
              },
              {
                text: "$d(x, y) = d(x, z) - d(z, y)$ per ogni $x, y, z \\in \\mathbb{R}$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      question:
        "Dare la definizione di interno di un sottoinsieme e di sottoinsieme aperto in uno spazio metrico. Dimostrare che l'intersezione di due aperti è un aperto.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Sia $(X, d)$ uno spazio metrico,",
                is_correct: true,
              },
              {
                text: "Sia $(X, d)$ uno spazio topologico,",
                is_correct: false,
              },
              {
                text: "Sia $(X, d)$ uno spazio normato,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "sia $A \\subseteq X$ e $x \\in A$,",
                is_correct: true,
              },
              {
                text: "sia $A \\subseteq X$ e $x \\in X$,",
                is_correct: false,
              },
              {
                text: "sia $A \\subset X$ e $x \\in A$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "diremo che $x \\in \\mathring{A}$ se $\\exists$ una palla aperta $B(x, r)$ con $r > 0$ | $B(x, r) \\subseteq A$.",
                is_correct: true,
              },
              {
                text: "diremo che $x \\in \\mathring{A}$ se $\\forall$ palla aperta $B(x, r)$ con $r > 0$ | $B(x, r) \\subseteq A$.",
                is_correct: false,
              },
              {
                text: "diremo che $x \\in \\mathring{A}$ se $\\exists$ una palla chiusa $B(x, r)$ con $r > 0$ | $B(x, r) \\subseteq A$.",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Diremo inoltre che $A$ è aperto se $A = \\mathring{A}$.",
                is_correct: true,
              },
              {
                text: "Diremo inoltre che $A$ è aperto se $A \\subseteq \\overline{A}$, dove $\\overline{A}$ è la chiusura di $A$.",
                is_correct: false,
              },
              {
                text: "Diremo inoltre che $A$ è aperto se $\\partial A = \\emptyset$, dove $\\partial A$ è il bordo di $A$.",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Dati $A$, $B$ aperti $\\implies C = A \\cap B$ è aperto.",
                is_correct: true,
              },
              {
                text: "Dati $A$, $B$ aperti $\\implies C = A \\cup B$ è chiuso.",
                is_correct: false,
              },
              {
                text: "Dati $A$, $B$ aperti $\\implies C = A \\setminus B$ è aperto.",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Se $x \\in C$, allora $\\exists r_1, r_2 > 0$ | $x \\in B(x, r_1) \\subseteq A$ e $x \\in B(x, r_2) \\subseteq B$.",
                is_correct: true,
              },
              {
                text: "Se $x \\in C$, allora per ogni $r > 0$ si ha $B(x, r) \\subseteq A \\cap B$.",
                is_correct: false,
              },
              {
                text: "Se $x \\in C$, allora $\\exists r_1, r_2 > 0$ | $B(x, r_1) \\subseteq X \\setminus A$ e $B(x, r_2) \\subseteq X \\setminus B$.",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Prendendo $r = \\min(r_1, r_2)$ $\\implies B(x, r) \\subseteq B(x, r_1) \\cap B(x, r_2)$.",
                is_correct: true,
              },
              {
                text: "Prendendo $r = r_1 + r_2$ $\\implies B(x, r) = B(x, r_1) \\cup B(x, r_2)$.",
                is_correct: false,
              },
              {
                text: "Prendendo $r = \\max(r_1, r_2)$ $\\implies B(x, r) \\subseteq B(x, r_1) \\setminus B(x, r_2)$.",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Poiché $B(x, r) \\subseteq B(x, r_1) \\cap B(x, r_2) \\subseteq A \\cap B = C$, segue che $C$ è aperto.",
                is_correct: true,
              },
              {
                text: "Poiché $B(x, r) \\supseteq B(x, r_1) \\cup B(x, r_2) \\supseteq A \\cup B = C$, segue che $C$ è chiuso.",
                is_correct: false,
              },
              {
                text: "Poiché $B(x, r) \\subseteq B(x, r_1) \\cap B(x, r_2) \\subseteq A \\cup B = C$, segue che $C$ è aperto.",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
  ],
};
