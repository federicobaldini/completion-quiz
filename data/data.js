const jsonData = {
  theorems: [
    {
      id: 1,
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
                text: "$\\forall \\, x, y \\in X$ e $\\forall \\, \\lambda \\in K$:",
                is_correct: true,
              },
              {
                text: "$\\forall \\, x, y \\in K$ e $\\forall \\, \\lambda \\in X$:",
                is_correct: false,
              },
              {
                text: "$\\forall \\, x \\in X$, $\\forall \\, y, \\lambda \\in K$:",
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
                text: "$\\| x \\| \\geq 0 \\forall \\, x \\in X$",
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
                text: "Esempio: consideriamo $\\mathbb{R}^n$ con la norma nulla $\\| x \\| = 0 \\forall \\, x \\in \\mathbb{R}^n$",
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
      id: 2,
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
      id: 3,
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
                text: "allora $\\{f_k\\}$ <strong>converge uniformemente</strong> a $f$",
                is_correct: true,
              },
              {
                text: "allora $\\{f_k\\}$ <strong>converge puntualmente</strong> a $f$",
                is_correct: false,
              },
              {
                text: "allora $\\{f_k\\}$ <strong>converge debolmente</strong> a $f$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$\\Leftrightarrow \\lim_{k \\rightarrow \\infty} f_k = f$ in $BC(A)$.",
                is_correct: true,
              },
              {
                text: "$\\Leftrightarrow \\lim_{k \\rightarrow \\infty} f_k = f$ puntualmente in $A$.",
                is_correct: false,
              },
              {
                text: "$\\Leftrightarrow \\lim_{k \\rightarrow \\infty} \\|f_k - f\\|_{L^p(A)} = 0$.",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(\\Rightarrow)$ $\\forall \\, \\varepsilon > 0$, $\\exists \\, k(\\varepsilon) \\in \\mathbb{N} \\; | \\; \\forall \\, k > k(\\varepsilon)$ e $\\forall \\, a \\in A$, $|f_k(a) - f(a)| < \\varepsilon$",
                is_correct: true,
              },
              {
                text: "$(\\Rightarrow)$ $\\exists \\, \\varepsilon > 0$, $\\forall \\, k(\\varepsilon) \\in \\mathbb{N} \\; | \\; \\exists \\, k < k(\\varepsilon)$ e $\\forall \\, a \\in A$, $|f_k(a) - f(a)| \\geq \\varepsilon$",
                is_correct: false,
              },
              {
                text: "$(\\Rightarrow)$ $\\forall \\, \\varepsilon > 0$, $\\exists \\, k(\\varepsilon) \\in \\mathbb{N} \\; | \\; \\forall \\, k > k(\\varepsilon)$ e $\\exists \\, a \\in A$ | $|f_k(a) - f(a)| > \\varepsilon$",
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
                text: "$(\\Leftarrow)$ Se $\\lim_{k \\rightarrow \\infty} \\|f_k - f\\|_{BC(A)} = 0$, allora $\\forall \\, \\varepsilon > 0$ $\\exists \\, k(\\varepsilon) \\in \\mathbb{N}$ $|$ $\\forall k > k(\\varepsilon)$, $\\|f_k - f\\|_{BC(A)} < \\varepsilon$",
                is_correct: true,
              },
              {
                text: "$(\\Leftarrow)$ Se $\\lim_{k \\rightarrow \\infty} \\|f_k - f\\|_{BC(A)} = \\infty$, allora $\\forall \\, \\varepsilon > 0$ $\\exists \\, k(\\varepsilon) \\in \\mathbb{N}$ $|$ $\\|f_k - f\\|_{BC(A)} > \\varepsilon$",
                is_correct: false,
              },
              {
                text: "$(\\Leftarrow)$ Se $\\lim_{k \\rightarrow \\infty} \\|f_k - f\\|_{BC(A)} = 0$, allora $\\forall \\, \\varepsilon > 0$ $\\exists \\, k(\\varepsilon) \\in \\mathbb{N}$ $|$ $\\forall k < k(\\varepsilon)$, $\\|f_k - f\\|_{BC(A)} < \\varepsilon$",
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
                text: "$\\implies \\forall \\, a \\in A, \\ |f_k(a) - f(a)| < \\varepsilon$",
                is_correct: true,
              },
              {
                text: "$\\implies \\exists \\, a \\in A, \\ |f_k(a) - f(a)| < \\varepsilon$",
                is_correct: false,
              },
              {
                text: "$\\implies \\forall \\, a \\in A, \\ |f_k(a) - f(a)| > \\varepsilon$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 4,
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
                text: "con le seguenti proprietà $\\forall \\, x, y, z \\in X$:",
                is_correct: true,
              },
              {
                text: "con le seguenti proprietà $\\forall \\, x, y \\in X$:",
                is_correct: false,
              },
              {
                text: "con le seguenti proprietà $\\forall \\, x, y, z \\in \\mathbb{R}$:",
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
                text: "$d(x, y) > 0 \\forall \\, x, y \\in X$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$d(x, y) = d(y, x)$",
                is_correct: true,
              },
              {
                text: "$d(x, y) = -d(y, x)$",
                is_correct: false,
              },
              {
                text: "$d(x, y) \\neq d(y, x)$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$d(x, y) \\leq d(x, z) + d(z, y)$",
                is_correct: true,
              },
              {
                text: "$d(x, y) \\geq d(x, z) + d(z, y)$",
                is_correct: false,
              },
              {
                text: "$d(x, y) = d(x, z) - d(z, y)$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Si definisce <strong>spazio metrico</strong> la coppia $(X, d)$",
                is_correct: true,
              },
              {
                text: "Si definisce <strong>spazio metrico</strong> la tripla $(X, d, y)$",
                is_correct: false,
              },
              {
                text: "Si definisce <strong>spazio metrico</strong> la funzione $d$ su $X$",
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
                text: "$d(x, y) = 0 \\Leftrightarrow x = y$ $\\forall \\, x, y \\in \\mathbb{R}$",
                is_correct: true,
              },
              {
                text: "$d(x, y) = 1 \\Leftrightarrow x = y$ $\\forall \\, x, y \\in \\mathbb{R}$",
                is_correct: false,
              },
              {
                text: "$d(x, y) = 0$ $\\forall \\, x, y \\in \\mathbb{R}$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$d(x, y) = d(y, x)$ $\\forall \\, x, y \\in \\mathbb{R}$",
                is_correct: true,
              },
              {
                text: "$d(x, y) \\neq d(y, x) \\forall \\, x, y \\in \\mathbb{R}$",
                is_correct: false,
              },
              {
                text: "$d(x, y) = -d(y, x) \\forall \\, x, y \\in \\mathbb{R}$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$d(x, y) \\leq d(x, z) + d(z, y) \\forall \\, x, y, z \\in \\mathbb{R}$",
                is_correct: true,
              },
              {
                text: "$d(x, y) \\geq d(x, z) + d(z, y) \\forall \\, x, y, z \\in \\mathbb{R}$",
                is_correct: false,
              },
              {
                text: "$d(x, y) = d(x, z) - d(z, y) \\forall \\, x, y, z \\in \\mathbb{R}$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 5,
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
                text: "Dati $A$, $B$ aperti $\\implies C = A \\cap B$ è <strong>aperto</strong>.",
                is_correct: true,
              },
              {
                text: "Dati $A$, $B$ aperti $\\implies C = A \\cup B$ è <strong>chiuso</strong>.",
                is_correct: false,
              },
              {
                text: "Dati $A$, $B$ aperti $\\implies C = A \\setminus B$ è <strong>aperto</strong>.",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Se $x \\in C$, allora $\\exists \\, r_1, r_2 > 0$ | $x \\in B(x, r_1) \\subseteq A$ e $x \\in B(x, r_2) \\subseteq B$.",
                is_correct: true,
              },
              {
                text: "Se $x \\in C$, allora per ogni $r > 0$ si ha $B(x, r) \\subseteq A \\cap B$.",
                is_correct: false,
              },
              {
                text: "Se $x \\in C$, allora $\\exists \\, r_1, r_2 > 0$ | $B(x, r_1) \\subseteq X \\setminus A$ e $B(x, r_2) \\subseteq X \\setminus B$.",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Prendendo $r = \\min(r_1, r_2)$",
                is_correct: true,
              },
              {
                text: "Prendendo $r = r_1 + r_2$",
                is_correct: false,
              },
              {
                text: "Prendendo $r = \\max(r_1, r_2)$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\implies B(x, r) \\subseteq B(x, r_1) \\cap B(x, r_2) \\subseteq A \\cap B = C$, segue che $C$ è aperto.",
                is_correct: true,
              },
              {
                text: "$\\implies B(x, r) \\supseteq B(x, r_1) \\cup B(x, r_2) \\supseteq A \\cup B = C$, segue che $C$ è chiuso.",
                is_correct: false,
              },
              {
                text: "$\\implies B(x, r) \\subseteq B(x, r_1) \\cap B(x, r_2) \\subseteq A \\cup B = C$, segue che $C$ è aperto.",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 6,
      question:
        "Dare la definizione di frontiera di A, sottoinsieme di uno spazio metrico e presentare, illustrandolo, un esempio.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Siano $(X, d)$ uno spazio metrico,",
                is_correct: true,
              },
              {
                text: "Siano $(X, d)$ uno spazio normato,",
                is_correct: false,
              },
              {
                text: "Siano $(X, d)$ uno spazio topologico,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$A \\subseteq X$ e $x \\in X$,",
                is_correct: true,
              },
              {
                text: "$A \\supseteq X$ e $x \\in A$,",
                is_correct: false,
              },
              {
                text: "$A \\subset X$ e $x \\in A$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "diremo allora che $x \\in \\text{fr}(A)$ se $\\forall$ palla $B(x, r)$ con $r > 0$, contiene sia elementi appartenenti ad $A$ sia elementi non appartenenti ad $A$",
                is_correct: true,
              },
              {
                text: "diremo allora che $x \\in \\text{fr}(A)$ se $\\exists$ una palla $B(x, r)$ con $r > 0$, tale che $B(x, r) \\subseteq A$",
                is_correct: false,
              },
              {
                text: "diremo allora che $x \\in \\text{fr}(A)$ se $\\forall$ palla $B(x, r)$ con $r > 0$, $B(x, r)$ contiene solo elementi di $A$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Esempio: preso l'insieme $\\mathbb{R}$ con la metrica $d(x, y) = |x - y|$",
                is_correct: true,
              },
              {
                text: "Esempio: preso l'insieme $\\mathbb{R}^2$ con la metrica $d(x, y) = ||x - y||$",
                is_correct: false,
              },
              {
                text: "Esempio: preso l'insieme $\\mathbb{C}$ con la metrica $d(x, y) = |x - y|$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "ed il sottoinsieme $A = \\{ x \\in \\mathbb{R} \\mid 0 \\leq x \\leq 1 \\}$",
                is_correct: true,
              },
              {
                text: "ed il sottoinsieme $A = \\{ x \\in \\mathbb{R} \\mid x < 1 \\}$",
                is_correct: false,
              },
              {
                text: "ed il sottoinsieme $A = \\{ x \\in \\mathbb{R} \\mid x > 0 \\}$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "preso $y = 1$ esso appartiene a $\\text{fr}(A)$",
                is_correct: true,
              },
              {
                text: "preso $y = 0$ esso appartiene a $\\text{fr}(A)$",
                is_correct: false,
              },
              {
                text: "preso $y = 0.5$ esso appartiene a $\\text{fr}(A)$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Infatti $B(1, r) = \\{ x \\in \\mathbb{R} \\mid |x - 1| < r \\} \\rightarrow (1 - r, 1 + r)$",
                is_correct: true,
              },
              {
                text: "Infatti $B(1, r) = \\{ x \\in \\mathbb{R} \\mid |x - 1| \\leq r \\} \\rightarrow [1 - r, 1 + r]$",
                is_correct: false,
              },
              {
                text: "Infatti $B(1, r) = \\{ x \\in \\mathbb{R} \\mid |x - 1| > r \\} \\rightarrow (1 + r, +\\infty)$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Se prendo $z = 1 + \\dfrac{r}{2}$ allora $z \\in B(1, r)$ ma $z \\notin A$",
                is_correct: true,
              },
              {
                text: "Se prendo $z = 1 + r$ allora $z \\in B(1, r)$ ma $z \\notin A$",
                is_correct: false,
              },
              {
                text: "Se prendo $z = 1 - \\dfrac{r}{2}$ allora $z \\in B(1, r)$ ma $z \\notin A$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Se prendo $z = 1 - \\dfrac{r}{2}$ allora $z \\in B(1, r)$ e $z \\in A$",
                is_correct: true,
              },
              {
                text: "Se prendo $z = 1 + \\dfrac{r}{2}$ allora $z \\in B(1, r)$ e $z \\in A$",
                is_correct: false,
              },
              {
                text: "Se prendo $z = 1 - \\dfrac{r}{2}$ allora $z \\notin B(1, r)$ e $z \\in A$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 7,
      question:
        "Dimostrare che se $A \\subseteq X$, con $X$ spazio metrico, $A$ è aperto se e solo se $A \\cap \\text{fr}(A) = \\emptyset$.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "$(\\Rightarrow)$ Dato $A$ aperto ed $x \\in A$ $\\implies x \\in \\mathring{A}$",
                is_correct: true,
              },
              {
                text: "$(\\Rightarrow)$ Dato $A$ chiuso ed $x \\in A$ $\\implies x \\in \\mathring{A}$",
                is_correct: false,
              },
              {
                text: "$(\\Rightarrow)$ Dato $A$ aperto ed $x \\in X$ $\\implies x \\in \\mathring{A}$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "quindi $\\exists \\, r > 0 \\mid B(x, r) \\subseteq A$",
                is_correct: true,
              },
              {
                text: "quindi $\\forall \\, r > 0, B(x, r) \\subseteq A$",
                is_correct: false,
              },
              {
                text: "quindi $\\exists \\, r > 0 \\mid B(x, r) \\supseteq A$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$\\implies x \\notin \\text{fr}(A)$",
                is_correct: true,
              },
              {
                text: "$\\implies x \\in \\text{fr}(A)$",
                is_correct: false,
              },
              {
                text: "$\\implies x \\in A \\cap \\text{fr}(A)$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$\\implies A \\cap \\text{fr}(A) = \\emptyset$",
                is_correct: true,
              },
              {
                text: "$\\implies A \\cup \\text{fr}(A) = \\emptyset$",
                is_correct: false,
              },
              {
                text: "$\\implies A \\cap \\text{fr}(A) \\neq \\emptyset$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(\\Leftarrow)$ Se $A \\cap \\text{fr}(A) = \\emptyset$",
                is_correct: true,
              },
              {
                text: "$(\\Leftarrow)$ Se $A \\cup \\text{fr}(A) = \\emptyset$",
                is_correct: false,
              },
              {
                text: "$(\\Leftarrow)$ Se $A \\cap \\text{fr}(A) \\neq \\emptyset$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "dato $x \\in A$",
                is_correct: true,
              },
              {
                text: "dato $x \\in X$",
                is_correct: false,
              },
              {
                text: "dato $x \\notin A$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$x \\notin \\text{fr}(A)$",
                is_correct: true,
              },
              {
                text: "$x \\in \\text{fr}(A)$",
                is_correct: false,
              },
              {
                text: "$x \\in A \\cap \\text{fr}(A)$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "quindi $\\exists \\, r > 0 \\mid B(x, r) \\subseteq A$",
                is_correct: true,
              },
              {
                text: "quindi $\\forall \\, r > 0, B(x, r) \\subseteq A$",
                is_correct: false,
              },
              {
                text: "quindi $\\exists \\, r > 0 \\mid B(x, r) \\supseteq A$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 8,
      question:
        "Sia $A \\subseteq X$ uno spazio metrico. Scrivere cosa significa che $A$ è chiuso. Dimostrare che $A$ è chiuso se e solo se $X \\setminus A$ è aperto.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Siano $(X, d)$ uno spazio metrico ed $A \\subseteq X$",
                is_correct: true,
              },
              {
                text: "Siano $(X, d)$ uno spazio normato ed $A \\subseteq X$",
                is_correct: false,
              },
              {
                text: "Siano $(X, d)$ uno spazio metrico ed $A \\supset X$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "diremo che $A$ è <strong>chiuso</strong> se $\\text{fr}(A) \\subseteq A$",
                is_correct: true,
              },
              {
                text: "diremo che $A$ è <strong>chiuso</strong> se $\\text{fr}(A) = A$",
                is_correct: false,
              },
              {
                text: "diremo che $A$ è <strong>chiuso</strong> se $\\text{fr}(A) \\subset X$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$A$ chiuso $\\Leftrightarrow X \\setminus A$ aperto",
                is_correct: true,
              },
              {
                text: "$A$ chiuso $\\Rightarrow X \\setminus A$ aperto",
                is_correct: false,
              },
              {
                text: "$A$ chiuso $\\Leftrightarrow X \\cap A$ aperto",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(\\Rightarrow)$ Se $A$ chiuso allora $\\text{fr}(A) \\subseteq A$",
                is_correct: true,
              },
              {
                text: "$(\\Rightarrow)$ Se $A$ aperto allora $\\text{fr}(A) \\subseteq A$",
                is_correct: false,
              },
              {
                text: "$(\\Rightarrow)$ Se $A$ chiuso allora $\\text{fr}(A) = A$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "poiché $\\text{fr}(A) = \\text{fr}(X \\setminus A)$ e gli insiemi $A$ e $(X \\setminus A)$ sono disgiunti,",
                is_correct: true,
              },
              {
                text: "poiché $\\text{fr}(A) = \\text{fr}(X \\cap A)$ e gli insiemi $A$ e $(X \\setminus A)$ sono disgiunti,",
                is_correct: false,
              },
              {
                text: "poiché $\\text{fr}(A) = \\text{fr}(X \\cup A)$ e gli insiemi $A$ e $(X \\setminus A)$ sono disgiunti,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "allora $(X \\setminus A) \\cap \\text{fr}(X \\setminus A) = \\emptyset$",
                is_correct: true,
              },
              {
                text: "allora $(X \\setminus A) \\cup \\text{fr}(X \\setminus A) = \\emptyset$",
                is_correct: false,
              },
              {
                text: "allora $(X \\setminus A) \\cap \\text{fr}(A) = \\emptyset$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$\\Rightarrow (X \\setminus A)$ aperto",
                is_correct: true,
              },
              {
                text: "$\\Rightarrow (X \\cap A)$ aperto",
                is_correct: false,
              },
              {
                text: "$\\Rightarrow (X \\setminus A) \\neq \\emptyset$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(\\Leftarrow)$ Se $(X \\setminus A)$ aperto, allora $(X \\setminus A) \\cap \\text{fr}(X \\setminus A) = \\emptyset$",
                is_correct: true,
              },
              {
                text: "$(\\Leftarrow)$ Se $(X \\setminus A)$ chiuso, allora $(X \\setminus A) \\cap \\text{fr}(X \\setminus A) = \\emptyset$",
                is_correct: false,
              },
              {
                text: "$(\\Leftarrow)$ Se $(X \\setminus A)$ aperto, allora $(X \\cap A) \\cap \\text{fr}(X \\setminus A) = \\emptyset$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "poiché $\\text{fr}(X \\setminus A) = \\text{fr}(A)$ deve essere $\\text{fr}(A) \\subseteq A$",
                is_correct: true,
              },
              {
                text: "poiché $\\text{fr}(X \\setminus A) = \\text{fr}(A)$ deve essere $\\text{fr}(A) = A$",
                is_correct: false,
              },
              {
                text: "poiché $\\text{fr}(X \\setminus A) \\neq \\text{fr}(A)$ deve essere $\\text{fr}(A) \\subseteq A$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "in quanto $(X \\setminus A) \\cap A = \\emptyset$",
                is_correct: true,
              },
              {
                text: "in quanto $(X \\setminus A) \\cap A = X$",
                is_correct: false,
              },
              {
                text: "in quanto $(X \\cap A) \\cap A = \\emptyset$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "e $(X \\setminus A) \\cup A = X$",
                is_correct: true,
              },
              {
                text: "e $(X \\setminus A) \\cap A = X$",
                is_correct: false,
              },
              {
                text: "e $(X \\cap A) \\cup A = X$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "e $\\text{fr}(A) \\subseteq X$",
                is_correct: true,
              },
              {
                text: "e $\\text{fr}(A) \\supseteq X$",
                is_correct: false,
              },
              {
                text: "e $\\text{fr}(A) = X$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$\\Rightarrow A$ chiuso",
                is_correct: true,
              },
              {
                text: "$\\Rightarrow A$ aperto",
                is_correct: false,
              },
              {
                text: "$\\Rightarrow A \\neq \\emptyset$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 9,
      question:
        "Dare la definizione di chiusura $\\overline{A}$ di $A$, con $A \\subseteq X$ spazio metrico. Dimostrare che $x_0 \\in \\overline{A}$ se esiste una successione a valori in $A$ convergente ad $x_0$.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Siano $(X, d)$ uno spazio metrico ed $A \\subseteq X$",
                is_correct: true,
              },
              {
                text: "Siano $(X, d)$ uno spazio normato ed $A \\subseteq X$",
                is_correct: false,
              },
              {
                text: "Siano $(X, d)$ uno spazio metrico ed $A \\supset X$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "chiameremo <strong>chiusura</strong> di $A$ l'insieme $\\overline{A} = A \\cup \\text{fr}(A)$",
                is_correct: true,
              },
              {
                text: "chiameremo <strong>chiusura</strong> di $A$ l'insieme $\\overline{A} = A \\cap \\text{fr}(A)$",
                is_correct: false,
              },
              {
                text: "chiameremo <strong>chiusura</strong> di $A$ l'insieme $\\overline{A} = \\text{fr}(A)$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$x_0 \\in \\overline{A} \\Leftrightarrow \\exists$ una successione $\\{a_n\\}$ a valori in $A$ convergente ad $x_0$",
                is_correct: true,
              },
              {
                text: "$x_0 \\in \\overline{A} \\Rightarrow \\exists$ una successione $\\{a_n\\}$ a valori in $A$ divergente ad $x_0$",
                is_correct: false,
              },
              {
                text: "$x_0 \\in A \\Rightarrow \\exists$ una successione $\\{a_n\\}$ a valori in $A$ convergente ad $x_0$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(\\Rightarrow)$ Sia $x_0 \\in \\overline{A}$, allora $x_0 \\in A$ oppure $x_0 \\in \\text{fr}(A)$",
                is_correct: true,
              },
              {
                text: "$(\\Rightarrow)$ Sia $x_0 \\in A$, allora $x_0 \\in \\overline{A}$ oppure $x_0 \\in \\text{fr}(A)$",
                is_correct: false,
              },
              {
                text: "$(\\Rightarrow)$ Sia $x_0 \\in \\text{fr}(A)$, allora $x_0 \\in \\overline{A}$ oppure $x_0 \\in A$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Se $x_0 \\in A$ prendiamo $\\{a_n\\} = x_0 \\forall \\, n \\in \\mathbb{N}$",
                is_correct: true,
              },
              {
                text: "Se $x_0 \\in A$ prendiamo $\\{a_n\\} = x_0 \\forall \\, n > 0$",
                is_correct: false,
              },
              {
                text: "Se $x_0 \\in \\text{fr}(A)$ prendiamo $\\{a_n\\} = x_0 \\forall \\, n \\in \\mathbb{N}$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Se $x_0 \\in \\text{fr}(A)$ $\\exists \\, \\{a_n\\} \\in A \\cap B(x_0, 1/n)$",
                is_correct: true,
              },
              {
                text: "Se $x_0 \\in \\text{fr}(A)$ $\\exists \\, \\{a_n\\} \\in A \\cup B(x_0, 1/n)$",
                is_correct: false,
              },
              {
                text: "Se $x_0 \\in A$ $\\exists \\, \\{a_n\\} \\in A \\cap B(x_0, 1/n)$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "quindi $d(\\{a_n\\}, x_0) < 1/n \\rightarrow_{n \\rightarrow +\\infty} 0$",
                is_correct: true,
              },
              {
                text: "quindi $d(\\{a_n\\}, x_0) < 1/n \\rightarrow_{n \\rightarrow +\\infty} \\infty$",
                is_correct: false,
              },
              {
                text: "quindi $d(\\{a_n\\}, x_0) \\geq 1/n \\rightarrow_{n \\rightarrow +\\infty} 0$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(\\Leftarrow)$ Se $x_0 \\in A \\Rightarrow x_0 \\in \\overline{A}$",
                is_correct: true,
              },
              {
                text: "$(\\Leftarrow)$ Se $x_0 \\in \\text{fr}(A) \\Rightarrow x_0 \\in \\overline{A}$",
                is_correct: false,
              },
              {
                text: "$(\\Leftarrow)$ Se $x_0 \\in A \\Rightarrow x_0 \\in \\text{fr}(A)$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "se $x_0 \\notin A$, sia $r > 0$ allora $B(x_0, r)$ ha almeno un elemento non appartenente ad $A$.",
                is_correct: true,
              },
              {
                text: "se $x_0 \\in A$, sia $r > 0$ allora $B(x_0, r)$ ha almeno un elemento non appartenente ad $A$.",
                is_correct: false,
              },
              {
                text: "se $x_0 \\notin A$, sia $r > 0$ allora $B(x_0, r)$ ha solo elementi appartenenti ad $A$.",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "Scelgo $n \\in \\mathbb{N}$ | $d(a_n, x_0) < r$",
                is_correct: true,
              },
              {
                text: "Scelgo $n \\in \\mathbb{N}$ | $d(a_n, x_0) > r$",
                is_correct: false,
              },
              {
                text: "Scelgo $n \\in \\mathbb{R}$ | $d(a_n, x_0) < r$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "con $a_n \\in A \\cap B(x_0, r)$",
                is_correct: true,
              },
              {
                text: "con $a_n \\in A \\cup B(x_0, r)$",
                is_correct: false,
              },
              {
                text: "con $a_n \\notin A \\cap B(x_0, r)$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "quindi $x_0 \\in \\text{fr}(A) \\subseteq \\overline{A}$",
                is_correct: true,
              },
              {
                text: "quindi $x_0 \\in A \\subseteq \\overline{A}$",
                is_correct: false,
              },
              {
                text: "quindi $x_0 \\in X \\subseteq \\overline{A}$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 10,
      question:
        "Dare la definizione di limite di una successione in uno spazio metrico. Dimostrare che se il limite esiste allora è unico.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Sia $\\{x_n\\}$ una successione nello spazio metrico $(X, d)$ ed $l \\in X$,",
                is_correct: true,
              },
              {
                text: "Sia $\\{x_n\\}$ una successione nello spazio metrico $(X, d)$ ed $l \\in \\mathbb{R}$,",
                is_correct: false,
              },
              {
                text: "Sia $\\{x_n\\}$ una successione nello spazio normato $(X, d)$ ed $l \\in X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "diremo che $\\{x_n\\}$ ha limite $l$ (converge ad $l$)",
                is_correct: true,
              },
              {
                text: "diremo che $\\{x_n\\}$ ha limite $l$ (diverge ad $l$)",
                is_correct: false,
              },
              {
                text: "diremo che $\\{x_n\\}$ ha limite $l$ (tende ad $l$)",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "se $\\forall \\, \\epsilon > 0$ $\\exists \\, n(\\epsilon) \\in \\mathbb{N}$ tale che $\\forall \\, n \\in \\mathbb{N}$ con $n > n(\\epsilon)$",
                is_correct: true,
              },
              {
                text: "se $\\exists \\, \\epsilon > 0$ $\\forall \\, n(\\epsilon) \\in \\mathbb{N}$ tale che $\\forall \\, n \\in \\mathbb{N}$ con $n > n(\\epsilon)$",
                is_correct: false,
              },
              {
                text: "se $\\forall \\, \\epsilon > 0$ $\\exists \\, n(\\epsilon) \\in X$ tale che $\\forall \\, n \\in \\mathbb{N}$ con $n > n(\\epsilon)$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$d(x_n, l) < \\epsilon$",
                is_correct: true,
              },
              {
                text: "$d(x_n, l) \\leq \\epsilon$",
                is_correct: false,
              },
              {
                text: "$d(x_n, l) > \\epsilon$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Se $\\{a_n\\} \\to a$ e $\\{a_n\\} \\to b$",
                is_correct: true,
              },
              {
                text: "Se $\\{a_n\\} \\to a$ e $\\{a_n\\} \\to c$",
                is_correct: false,
              },
              {
                text: "Se $\\{a_n\\} \\to b$ e $\\{a_n\\} \\to a$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\Rightarrow d(a, b) \\leq d(a, a_n) + d(a_n, b) < \\epsilon/2 + \\epsilon/2 = \\epsilon$",
                is_correct: true,
              },
              {
                text: "$\\Rightarrow d(a, b) \\geq d(a, a_n) + d(a_n, b) = \\epsilon$",
                is_correct: false,
              },
              {
                text: "$\\Rightarrow d(a, b) \\leq d(a, a_n) + d(a_n, b) = \\epsilon/2$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\Rightarrow d(a, b) \\leq \\epsilon$ $\\forall \\, \\epsilon > 0$",
                is_correct: true,
              },
              {
                text: "$\\Rightarrow d(a, b) \\geq \\epsilon$ $\\forall \\, \\epsilon > 0$",
                is_correct: false,
              },
              {
                text: "$\\Rightarrow d(a, b) \\leq \\epsilon/2$ $\\forall \\, \\epsilon > 0$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$\\Rightarrow d(a, b) = 0 \\Rightarrow a = b$",
                is_correct: true,
              },
              {
                text: "$\\Rightarrow d(a, b) \\neq 0 \\Rightarrow a \\neq b$",
                is_correct: false,
              },
              {
                text: "$\\Rightarrow d(a, b) = \\epsilon \\Rightarrow a = b$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 11,
      question:
        "Sia $A \\subseteq X$ uno spazio metrico. Dare la definizione di punto di accumulazione di $A$. Dare un esempio di punto di accumulazione appartenente ad $A$ ed uno di punto non appartenente ad $A$.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Siano $(X, d)$ uno spazio metrico ed $A \\subseteq X$,",
                is_correct: true,
              },
              {
                text: "Siano $(X, d)$ uno spazio normato ed $A \\subseteq X$,",
                is_correct: false,
              },
              {
                text: "Siano $(X, d)$ uno spazio metrico ed $A \\supset X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "diremo che $x_0$ è un <strong>punto di accumulazione</strong> e per $A$ se $\\forall \\, r > 0$, $A \\cap B(x_0, r)$ contiene almeno un elemento distinto da $x_0$",
                is_correct: true,
              },
              {
                text: "diremo che $x_0$ è un <strong>punto di accumulazione</strong> e per $A$ se $\\exists \\, r > 0$ | $A \\cap B(x_0, r)$ contiene almeno un elemento distinto da $x_0$",
                is_correct: false,
              },
              {
                text: "diremo che $x_0$ è un <strong>punto di accumulazione</strong> e per $A$ se $\\forall \\, r > 0$, $A \\cup B(x_0, r)$ contiene almeno un elemento distinto da $x_0$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Indichiamo con $D(A)$ l'insieme dei punti di accumulazione di $A$",
                is_correct: true,
              },
              {
                text: "Indichiamo con $D(A)$ l'insieme dei punti interni di $A$",
                is_correct: false,
              },
              {
                text: "Indichiamo con $D(A)$ l'insieme dei punti di frontiera di $A$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Esempio: se $A$ aperto, $x_0 \\in \\text{fr}(A)$, $x_0 \\in D(A)$, $x_0 \\notin A$",
                is_correct: true,
              },
              {
                text: "Esempio: se $A$ chiuso, $x_0 \\in \\text{fr}(A)$, $x_0 \\in D(A)$, $x_0 \\notin A$",
                is_correct: false,
              },
              {
                text: "Esempio: se $A$ aperto, $x_0 \\in \\text{fr}(A)$, $x_0 \\in D(A)$, $x_0 \\in A$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Esempio: se $A$ chiuso, $x_0 \\in \\text{fr}(A)$, $x_0 \\in D(A)$, $x_0 \\in A$",
                is_correct: true,
              },
              {
                text: "Esempio: se $A$ aperto, $x_0 \\in \\text{fr}(A)$, $x_0 \\in D(A)$, $x_0 \\notin A$",
                is_correct: false,
              },
              {
                text: "Esempio: se $A$ chiuso, $x_0 \\in \\text{fr}(A)$, $x_0 \\notin D(A)$, $x_0 \\in A$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 13,
      question:
        "Sia $f: A \\to \\mathbb{R}^n$, con $A \\subseteq X$ spazio metrico. Illustrare il legame tra il limite della funzione per $a \\to x_0$ e il limite delle componenti. Dove deve stare $x_0$?",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Siano $(X, d)$ uno spazio metrico ed $A \\subseteq X$,",
                is_correct: true,
              },
              {
                text: "Siano $(X, d)$ uno spazio normato ed $A \\subseteq X$,",
                is_correct: false,
              },
              {
                text: "Siano $(X, d)$ uno spazio topologico ed $A \\subseteq X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$f: A \\to \\mathbb{R}^n$, $x_0 \\in D(A)$,",
                is_correct: true,
              },
              {
                text: "$f: A \\to \\mathbb{R}^n$, $x_0 \\in A$,",
                is_correct: false,
              },
              {
                text: "$f: A \\to \\mathbb{R}^n$, $x_0 \\in X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$f(x) = \\{f_1(x), \\dots, f_n(x)\\}$",
                is_correct: true,
              },
              {
                text: "$f(x) = \\{f(x_1), \\dots, f(x_n)\\}$",
                is_correct: false,
              },
              {
                text: "$f(x) = f_1(x) + \\dots + f_n(x)$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "sia poi $l \\in \\mathbb{R}^n$ allora",
                is_correct: true,
              },
              {
                text: "sia poi $l \\in \\mathbb{R}$ allora",
                is_correct: false,
              },
              {
                text: "sia poi $l \\in A$ allora",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\lim_{x \\to x_0} f(x) = l \\Leftrightarrow \\lim_{x \\to x_0} f_i(x) = l_i$ $\\forall \\, i \\in \\{1, \\dots, n\\}$",
                is_correct: true,
              },
              {
                text: "$\\lim_{x \\to x_0} f(x) = l \\Rightarrow \\lim_{x \\to x_0} f_i(x) = l_i$ $\\forall \\, i \\in \\{1, \\dots, n\\}$",
                is_correct: false,
              },
              {
                text: "$\\lim_{x \\to x_0} f(x) = l \\Leftrightarrow \\lim_{x \\to x_0} f_i(x) = l$ $\\forall \\, i \\in \\{1, \\dots, n\\}$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 14,
      question: "Illustrare cosa si può dire sui limiti di restrizioni.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi metrici ed $A \\subseteq B \\subseteq X$,",
                is_correct: true,
              },
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi normati ed $A \\subseteq B \\subseteq X$,",
                is_correct: false,
              },
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi metrici ed $B \\subseteq A \\subseteq X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$f: B \\to Y$ ed $l \\in Y$, allora",
                is_correct: true,
              },
              {
                text: "$f: A \\to Y$ ed $l \\in X$, allora",
                is_correct: false,
              },
              {
                text: "$f: B \\to X$ ed $l \\in Y$, allora",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(I)$ se $x_0 \\in D(A)$ si ha anche $x_0 \\in D(B)$",
                is_correct: true,
              },
              {
                text: "$(I)$ se $x_0 \\in D(B)$ si ha anche $x_0 \\in D(A)$",
                is_correct: false,
              },
              {
                text: "$(I)$ se $x_0 \\in A$ si ha anche $x_0 \\in B$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(II)$ sotto l'ipotesi $(I)$, se $\\lim_{x \\to x_0} f(x) = l$ si ha $\\lim_{x \\to x_0} f_{|A}(x) = l$",
                is_correct: true,
              },
              {
                text: "$(II)$ sotto l'ipotesi $(I)$, se $\\lim_{x \\to x_0} f_{|A}(x) = l$ si ha $\\lim_{x \\to x_0} f(x) = l$",
                is_correct: false,
              },
              {
                text: "$(II)$ sotto l'ipotesi $(I)$, se $\\lim_{x \\to x_0} f(x) = l$ si ha $\\lim_{x \\to x_0} f_{|B}(x) = l$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(III)$ se $\\exists \\, r > 0$ per cui $(B_X(x_0, r) \\cap B) \\setminus \\{x_0\\} \\subseteq A$",
                is_correct: true,
              },
              {
                text: "$(III)$ se $\\forall \\, r > 0$ per cui $(B_X(x_0, r) \\cap B) \\setminus \\{x_0\\} \\subseteq A$",
                is_correct: false,
              },
              {
                text: "$(III)$ se $\\exists \\, r > 0$ per cui $(B_X(x_0, r) \\cup B) \\setminus \\{x_0\\} \\subseteq A$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "e vale $\\lim_{x \\to x_0} f_{|A}(x) = l$, si ha $\\lim_{x \\to x_0} f(x) = l$",
                is_correct: true,
              },
              {
                text: "e vale $\\lim_{x \\to x_0} f(x) = l$, si ha $\\lim_{x \\to x_0} f_{|A}(x) = l$",
                is_correct: false,
              },
              {
                text: "e vale $\\lim_{x \\to x_0} f_{|B}(x) = l$, si ha $\\lim_{x \\to x_0} f(x) = l$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 15,
      question:
        "Dare la definizione di $f$ continua in $x_0$ con $f: A \\to Y$, $A \\subseteq X$ e $X, Y$ spazi metrici. Descrivere la connessione tra questa definizione e quella di limite.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi metrici ed $A \\subseteq X$,",
                is_correct: true,
              },
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi normati ed $A \\subseteq X$,",
                is_correct: false,
              },
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi topologici ed $A \\subseteq X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$x_0 \\in A$, $f: A \\to Y$,",
                is_correct: true,
              },
              {
                text: "$x_0 \\in X$, $f: A \\to Y$,",
                is_correct: false,
              },
              {
                text: "$x_0 \\in Y$, $f: A \\to X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "diremo che $f$ è <strong>continua</strong> in $x_0$ se $\\forall \\, \\epsilon > 0 \\, \\exists \\, \\delta(\\epsilon) > 0$ tale che $\\forall \\, x \\in B_X(x_0, \\delta(\\epsilon)) \\cap A$",
                is_correct: true,
              },
              {
                text: "diremo che $f$ è <strong>continua</strong> in $x_0$ se $\\exists \\, \\epsilon > 0 \\, \\forall \\, \\delta(\\epsilon) > 0$ tale che $\\forall \\, x \\in B_X(x_0, \\delta(\\epsilon)) \\cap A$",
                is_correct: false,
              },
              {
                text: "diremo che $f$ è <strong>continua</strong> in $x_0$ se $\\forall \\, \\epsilon > 0 \\, \\exists \\, \\delta(\\epsilon) > 0$ tale che $\\forall \\, x \\in B_X(x_0, \\delta(\\epsilon)) \\cup A$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$d_Y(f(x), f(x_0)) < \\epsilon$",
                is_correct: true,
              },
              {
                text: "$d_Y(f(x), f(x_0)) \\leq \\epsilon$",
                is_correct: false,
              },
              {
                text: "$d_X(f(x), f(x_0)) < \\epsilon$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi metrici ed $A \\subseteq X$,",
                is_correct: true,
              },
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi normati ed $A \\subseteq X$,",
                is_correct: false,
              },
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi topologici ed $A \\subseteq X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$x_0 \\in A$, $f: A \\to Y$ allora",
                is_correct: true,
              },
              {
                text: "$x_0 \\in X$, $f: A \\to Y$ allora",
                is_correct: false,
              },
              {
                text: "$x_0 \\in Y$, $f: A \\to X$ allora",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(I)$ se $x_0 \\in A \\setminus D(A)$, $f$ continua in $x_0$",
                is_correct: true,
              },
              {
                text: "$(I)$ se $x_0 \\in D(A) \\setminus A$, $f$ continua in $x_0$",
                is_correct: false,
              },
              {
                text: "$(I)$ se $x_0 \\in A \\cap D(A)$, $f$ continua in $x_0$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(II)$ se $x_0 \\in A \\cap D(A)$, $f$ continua in $x_0$ $\\Leftrightarrow \\exists \\, \\lim_{x \\to x_0} f(x)$ e coincide con $f(x_0)$",
                is_correct: true,
              },
              {
                text: "$(II)$ se $x_0 \\in A \\cap D(A)$, $f$ continua in $x_0$ $\\Rightarrow \\exists \\, \\lim_{x \\to x_0} f(x)$ e coincide con $f(x_0)$",
                is_correct: false,
              },
              {
                text: "$(II)$ se $x_0 \\in A \\setminus D(A)$, $f$ continua in $x_0$ $\\Leftrightarrow \\exists \\, \\lim_{x \\to x_0} f(x)$ e coincide con $f(x_0)$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 16,
      question:
        "Enunciare ed eventualmente dimostrare un teorema di continuità per composizioni di funzioni continue.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Siano $(X, d_X)$, $(Y, d_Y)$ e $(Z, d_Z)$ tre spazi metrici ed $A \\subseteq X$, $B \\subseteq Y$,",
                is_correct: true,
              },
              {
                text: "Siano $(X, d_X)$, $(Y, d_Y)$ e $(Z, d_Z)$ tre spazi normati ed $A \\subseteq X$, $B \\subseteq Y$,",
                is_correct: false,
              },
              {
                text: "Siano $(X, d_X)$, $(Y, d_Y)$ e $(Z, d_Z)$ tre spazi topologici ed $A \\subseteq X$, $B \\subseteq Y$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$f: A \\to Y$ con $f(A) \\subseteq B$",
                is_correct: true,
              },
              {
                text: "$f: A \\to Y$ con $f(A) \\supseteq B$",
                is_correct: false,
              },
              {
                text: "$f: B \\to Y$ con $f(A) \\subseteq B$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$g: B \\to Z$ allora",
                is_correct: true,
              },
              {
                text: "$g: A \\to Z$ allora",
                is_correct: false,
              },
              {
                text: "$g: B \\to Y$ allora",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(I)$ sia $x_0 \\in A$ tale che $f$ è continua in $x_0$ e $g$ è continua in $f(x_0)$",
                is_correct: true,
              },
              {
                text: "$(I)$ sia $x_0 \\in A$ tale che $f$ è continua in $x_0$ e $g$ è continua in $x_0$",
                is_correct: false,
              },
              {
                text: "$(I)$ sia $x_0 \\in B$ tale che $f$ è continua in $x_0$ e $g$ è continua in $f(x_0)$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$\\Rightarrow g \\circ f$ è continua in $x_0$",
                is_correct: true,
              },
              {
                text: "$\\Rightarrow g \\circ f$ è continua in $f(x_0)$",
                is_correct: false,
              },
              {
                text: "$\\Rightarrow f \\circ g$ è continua in $x_0$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(II)$ $f$ e $g$ continue $\\Rightarrow g \\circ f$ continua",
                is_correct: true,
              },
              {
                text: "$(II)$ $f$ e $g$ continue $\\Rightarrow f \\circ g$ continua",
                is_correct: false,
              },
              {
                text: "$(II)$ $f$ continua $\\Rightarrow g \\circ f$ continua",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Sia $\\epsilon > 0$, poiché $g$ è continua in $f(x_0)$",
                is_correct: true,
              },
              {
                text: "Sia $\\epsilon > 0$, poiché $g$ è continua in $x_0$",
                is_correct: false,
              },
              {
                text: "Sia $\\epsilon > 0$, poiché $f$ è continua in $f(x_0)$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "allora $\\exists \\, \\delta_1(\\epsilon) > 0 \\mid$ se $y \\in B \\cap B_Y(f(x_0), \\delta_1(\\epsilon))$ si ha $d_Z(g(y), g(f(x_0))) < \\epsilon$",
                is_correct: true,
              },
              {
                text: "allora $\\exists \\, \\delta_1(\\epsilon) > 0 \\mid$ se $y \\in B \\cap B_X(f(x_0), \\delta_1(\\epsilon))$ si ha $d_Z(g(y), g(f(x_0))) < \\epsilon$",
                is_correct: false,
              },
              {
                text: "allora $\\exists \\, \\delta_1(\\epsilon) > 0 \\mid$ se $y \\in A \\cap B_Y(f(x_0), \\delta_1(\\epsilon))$ si ha $d_Y(g(y), g(f(x_0))) < \\epsilon$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Poiché $f$ è continua in $x_0$",
                is_correct: true,
              },
              {
                text: "Poiché $f$ è continua in $f(x_0)$",
                is_correct: false,
              },
              {
                text: "Poiché $g$ è continua in $x_0$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$\\exists \\, \\delta(\\epsilon) > 0 \\mid$ se $x \\in A \\cap B_X(x_0, \\delta(\\epsilon))$",
                is_correct: true,
              },
              {
                text: "$\\exists \\, \\delta(\\epsilon) > 0 \\mid$ se $x \\in B \\cap B_X(x_0, \\delta(\\epsilon))$",
                is_correct: false,
              },
              {
                text: "$\\exists \\, \\delta(\\epsilon) > 0 \\mid$ se $x \\in A \\cup B_X(x_0, \\delta(\\epsilon))$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "vale $f(x) \\in B_Y(f(x_0), \\delta_1(\\epsilon))$",
                is_correct: true,
              },
              {
                text: "vale $f(x) \\in B_X(f(x_0), \\delta_1(\\epsilon))$",
                is_correct: false,
              },
              {
                text: "vale $f(x) \\in B_Y(x_0, \\delta_1(\\epsilon))$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Ciò implica $f(x) \\in B \\cap B_Y(f(x_0), \\delta_1(\\epsilon))$",
                is_correct: true,
              },
              {
                text: "Ciò implica $f(x) \\in A \\cap B_Y(f(x_0), \\delta_1(\\epsilon))$",
                is_correct: false,
              },
              {
                text: "Ciò implica $f(x) \\in B \\cup B_Y(f(x_0), \\delta_1(\\epsilon))$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "quindi $d_Z(g(f(x)), g(f(x_0))) < \\epsilon$",
                is_correct: true,
              },
              {
                text: "quindi $d_Y(g(f(x)), g(f(x_0))) < \\epsilon$",
                is_correct: false,
              },
              {
                text: "quindi $d_Z(f(g(x)), f(g(x_0))) < \\epsilon$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 17,
      question:
        "Dare la definizione di sottoinsieme limitato in uno spazio metrico. Caratterizzare i sottoinsiemi limitati negli spazi normati.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Sia $(X, d_X)$ uno spazio metrico ed $A \\subseteq X$,",
                is_correct: true,
              },
              {
                text: "Sia $(X, d_X)$ uno spazio normato ed $A \\subseteq X$,",
                is_correct: false,
              },
              {
                text: "Sia $(X, d_X)$ uno spazio topologico ed $A \\subseteq X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "con $A \\neq \\emptyset$, chiamiamo $\\delta_X(A)$ <strong>diametro</strong> di $A$",
                is_correct: true,
              },
              {
                text: "con $A = \\emptyset$, chiamiamo $\\delta_X(A)$ <strong>diametro</strong> di $A$",
                is_correct: false,
              },
              {
                text: "con $A \\neq \\emptyset$, chiamiamo $\\delta_X(A)$ <strong>raggio</strong> di $A$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\delta_X(A) = \\sup \\{ d_X(a_0, a_1) \\mid a_0, a_1 \\in A \\}$",
                is_correct: true,
              },
              {
                text: "$\\delta_X(A) = \\inf \\{ d_X(a_0, a_1) \\mid a_0, a_1 \\in A \\}$",
                is_correct: false,
              },
              {
                text: "$\\delta_X(A) = \\sup \\{ d_X(a_0, a_1) \\mid a_0 \\in A \\}$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Diremo che $A$ è <strong>limitato</strong> se $\\delta_X(A) < +\\infty$",
                is_correct: true,
              },
              {
                text: "Diremo che $A$ è <strong>limitato</strong> se $\\delta_X(A) = +\\infty$",
                is_correct: false,
              },
              {
                text: "Diremo che $A$ è <strong>limitato</strong> se $\\delta_X(A) \\geq +\\infty$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Sia $(X, || \\cdot ||)$ uno spazio normato ed $A \\subseteq X$,",
                is_correct: true,
              },
              {
                text: "Sia $(X, || \\cdot ||)$ uno spazio metrico ed $A \\subseteq X$,",
                is_correct: false,
              },
              {
                text: "Sia $(X, || \\cdot ||)$ uno spazio topologico ed $A \\subseteq X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "allora $A$ è <strong>limitato</strong> $\\Leftrightarrow \\exists \\, M > 0 \\mid ||a|| \\leq M \\ \\forall a \\in A$",
                is_correct: true,
              },
              {
                text: "allora $A$ è <strong>limitato</strong> $\\Leftrightarrow \\forall \\, M > 0 \\mid ||a|| \\leq M \\ \\forall a \\in A$",
                is_correct: false,
              },
              {
                text: "allora $A$ è <strong>limitato</strong> $\\Leftrightarrow \\exists \\, M > 0 \\mid ||a|| < M \\ \\forall a \\in A$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 18,
      question:
        'Dare la definizione di sottoinsieme compatto di uno spazio metrico. Illustrare la connessione tra "compattezza" e "chiusura e limitatezza".',
      answer_parts: [
        [
          {
            options: [
              {
                text: "Siano $(X, d)$ uno spazio metrico ed $A \\subseteq X$,",
                is_correct: true,
              },
              {
                text: "Siano $(X, d)$ uno spazio normato ed $A \\subseteq X$,",
                is_correct: false,
              },
              {
                text: "Siano $(X, d)$ uno spazio topologico ed $A \\subseteq X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "diremo che $A$ è <strong>compatto</strong> se ogni successione a valori in $A$ possiede una sottosuccessione convergente a qualche elemento di $A$",
                is_correct: true,
              },
              {
                text: "diremo che $A$ è <strong>compatto</strong> se ogni successione a valori in $A$ è convergente",
                is_correct: false,
              },
              {
                text: "diremo che $A$ è <strong>compatto</strong> se ogni sottosuccessione di una successione in $A$ è convergente",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Siano $(X, d)$ uno spazio metrico ed $A \\subseteq X$ compatto $\\Rightarrow A$ è chiuso e limitato",
                is_correct: true,
              },
              {
                text: "Siano $(X, d)$ uno spazio normato ed $A \\subseteq X$ compatto $\\Rightarrow A$ è chiuso e limitato",
                is_correct: false,
              },
              {
                text: "Siano $(X, d)$ uno spazio metrico ed $A \\subseteq X$ compatto $\\Rightarrow A$ è chiuso",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$A$ può essere chiuso e limitato senza essere compatto",
                is_correct: true,
              },
              {
                text: "$A$ può essere compatto senza essere chiuso e limitato",
                is_correct: false,
              },
              {
                text: "$A$ non può essere chiuso e limitato senza essere compatto",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Se $A \\subseteq \\mathbb{R}^n$ allora $A$ compatto $\\Leftrightarrow A$ chiuso e limitato",
                is_correct: true,
              },
              {
                text: "Se $A \\subseteq \\mathbb{R}^n$ allora $A$ compatto $\\Rightarrow A$ chiuso e limitato",
                is_correct: false,
              },
              {
                text: "Se $A \\subseteq \\mathbb{R}^n$ allora $A$ compatto $\\Leftarrow A$ chiuso e limitato",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 19,
      question:
        "Enunciare ed, eventualmente, dimostrare (anche parzialmente) qualche versione del teorema di Weierstrass negli spazi metrici.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Sia $A \\subseteq \\mathbb{R}^n$ chiuso e limitato,",
                is_correct: true,
              },
              {
                text: "Sia $A \\subseteq \\mathbb{R}^n$ aperto e limitato,",
                is_correct: false,
              },
              {
                text: "Sia $A \\subseteq \\mathbb{R}^n$ chiuso e illimitato,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$f : A \\to \\mathbb{R}^m$ continua, con $n, m \\in \\mathbb{N}$, allora",
                is_correct: true,
              },
              {
                text: "$f : A \\to \\mathbb{R}^m$ limitata, con $n, m \\in \\mathbb{N}$, allora",
                is_correct: false,
              },
              {
                text: "$f : A \\to \\mathbb{R}^m$ aperta, con $n, m \\in \\mathbb{N}$, allora",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(I)$ $f(A)$ è un sottoinsieme chiuso e limitato in $\\mathbb{R}^m$",
                is_correct: true,
              },
              {
                text: "$(I)$ $f(A)$ è un sottoinsieme aperto e limitato in $\\mathbb{R}^m$",
                is_correct: false,
              },
              {
                text: "$(I)$ $f(A)$ è un sottoinsieme chiuso e illimitato in $\\mathbb{R}^m$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(II)$ se $m = 1$, $f$ ammette massimo e minimo",
                is_correct: true,
              },
              {
                text: "$(II)$ se $m = 1$, $f$ non ammette massimo e minimo",
                is_correct: false,
              },
              {
                text: "$(II)$ se $m = 1$, $f$ ammette massimo ma non minimo",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 20,
      question:
        "Dare la definizione di funzione uniformemente continua nell'ambito degli spazi metrici ed in quest'ambito enunciare una versione del teorema di Heine-Cantor.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi metrici ed $A \\subseteq X$, $f: A \\to Y$,",
                is_correct: true,
              },
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi normati ed $A \\subseteq X$, $f: A \\to Y$,",
                is_correct: false,
              },
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi topologici ed $A \\subseteq X$, $f: A \\to Y$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "diremo che $f$ è <strong>uniformemente continua</strong> se $\\forall \\epsilon > 0 \\, \\exists \\, \\delta(\\epsilon) > 0 \\mid \\forall a_0, a_1 \\in A$, se $d_X(a_0, a_1) < \\delta(\\epsilon)$,",
                is_correct: true,
              },
              {
                text: "diremo che $f$ è <strong>uniformemente continua</strong> se $\\exists \\epsilon > 0 \\, \\forall \\delta(\\epsilon) > 0 \\mid \\forall a_0, a_1 \\in A$, se $d_X(a_0, a_1) < \\delta(\\epsilon)$,",
                is_correct: false,
              },
              {
                text: "diremo che $f$ è <strong>uniformemente continua</strong> se $\\forall \\epsilon > 0 \\, \\exists \\, \\delta(\\epsilon) > 0 \\mid \\forall a_0, a_1 \\in A$, se $d_X(a_0, a_1) > \\delta(\\epsilon)$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "allora $d_Y(f(a_0), f(a_1)) < \\epsilon$",
                is_correct: true,
              },
              {
                text: "allora $d_Y(f(a_0), f(a_1)) \\leq \\epsilon$",
                is_correct: false,
              },
              {
                text: "allora $d_X(f(a_0), f(a_1)) < \\epsilon$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi metrici ed $A \\subseteq X$ compatto,",
                is_correct: true,
              },
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi normati ed $A \\subseteq X$ compatto,",
                is_correct: false,
              },
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi metrici ed $A \\subseteq X$ chiuso,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$f: A \\to Y$ continua",
                is_correct: true,
              },
              {
                text: "$f: A \\to X$ continua",
                is_correct: false,
              },
              {
                text: "$f: A \\to Y$ limitata",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$\\Rightarrow f$ uniformemente continua",
                is_correct: true,
              },
              {
                text: "$\\Rightarrow f$ non uniformemente continua",
                is_correct: false,
              },
              {
                text: "$\\Rightarrow f$ limitata",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 21,
      question:
        "Illustrare le nozioni di sottoinsieme convesso di uno spazio vettoriale e di sottoinsieme connesso per archi in uno spazio metrico. Illustrare qualche connessione tra esse.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Sia $(X, ||\\cdot||)$ uno spazio normato ed $x, y \\in X$",
                is_correct: true,
              },
              {
                text: "Sia $(X, ||\\cdot||)$ uno spazio metrico ed $x, y \\in X$",
                is_correct: false,
              },
              {
                text: "Sia $(X, d)$ uno spazio normato ed $x, y \\in X$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "poniamo $[x, y] = \\{x + t(y - x) \\mid t \\in [0, 1]\\}$",
                is_correct: true,
              },
              {
                text: "poniamo $[x, y] = \\{x + t(y + x) \\mid t \\in [0, 1]\\}$",
                is_correct: false,
              },
              {
                text: "poniamo $[x, y] = \\{x - t(y - x) \\mid t \\in [0, 1]\\}$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Sia $A \\subseteq X$, diremo allora che $A$ è <strong>convesso</strong> se $\\forall x, y \\in A$ segue che $[x, y] \\subseteq A$",
                is_correct: true,
              },
              {
                text: "Sia $A \\subseteq X$, diremo allora che $A$ è <strong>convesso</strong> se $\\exists x, y \\in A$ tale che $[x, y] \\subseteq A$",
                is_correct: false,
              },
              {
                text: "Sia $A \\subseteq X$, diremo allora che $A$ è <strong>convesso</strong> se $\\forall x, y \\in A$ segue che $[x, y] = A$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Sia $(X, d)$ uno spazio metrico ed $A \\subseteq X$,",
                is_correct: true,
              },
              {
                text: "Sia $(X, d)$ uno spazio normato ed $A \\subseteq X$,",
                is_correct: false,
              },
              {
                text: "Sia $(X, ||\\cdot||)$ uno spazio metrico ed $A \\subseteq X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "diremo che $A$ è <strong>connesso per archi</strong> se comunque si prendano $x, y \\in A$,",
                is_correct: true,
              },
              {
                text: "diremo che $A$ è <strong>connesso per archi</strong> se $\\exists x, y \\in A$ tali che $x$ e $y$ siano collegati da un cammino in $A$",
                is_correct: false,
              },
              {
                text: "diremo che $A$ è <strong>connesso per archi</strong> se $\\forall x, y \\in A$, esiste un segmento che collega $x$ a $y$ in $A$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "esistono $a, b \\in \\mathbb{R}$ con $a \\leq b$",
                is_correct: true,
              },
              {
                text: "esistono $a, b \\in \\mathbb{N}$ con $a < b$",
                is_correct: false,
              },
              {
                text: "esistono $a, b \\in \\mathbb{R}$ con $a < b$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "e $f: [a, b] \\to X$ continua, tale che",
                is_correct: true,
              },
              {
                text: "e $f: [a, b] \\to Y$ continua, tale che",
                is_correct: false,
              },
              {
                text: "e $f: (a, b) \\to X$ continua, tale che",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(I)$ $f(a) = x$, $f(b) = y$",
                is_correct: true,
              },
              {
                text: "$(I)$ $f(a) = y$, $f(b) = x$",
                is_correct: false,
              },
              {
                text: "$(I)$ $f(a) = x$, $f(b) \\neq y$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(II)$ $f([a, b]) \\subseteq A$",
                is_correct: true,
              },
              {
                text: "$(II)$ $f([a, b]) = A$",
                is_correct: false,
              },
              {
                text: "$(II)$ $f([a, b]) \\supset A$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Sia $(X, ||\\cdot||)$ uno spazio normato ed $A \\subseteq X$ convesso",
                is_correct: true,
              },
              {
                text: "Sia $(X, ||\\cdot||)$ uno spazio metrico ed $A \\subseteq X$ convesso",
                is_correct: false,
              },
              {
                text: "Sia $(X, d)$ uno spazio normato ed $A \\subseteq X$ convesso",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$\\Rightarrow A$ connesso per archi",
                is_correct: true,
              },
              {
                text: "$\\Rightarrow A$ non connesso per archi",
                is_correct: false,
              },
              {
                text: "$\\Rightarrow A$ connesso",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Se $A \\subseteq \\mathbb{R}$, $A$ convesso $\\Leftrightarrow A$ connesso per archi",
                is_correct: true,
              },
              {
                text: "Se $A \\subseteq \\mathbb{R}$, $A$ convesso $\\Rightarrow A$ connesso per archi",
                is_correct: false,
              },
              {
                text: "Se $A \\subseteq \\mathbb{R}$, $A$ connesso per archi $\\Rightarrow A$ convesso",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 22,
      question:
        "Illustrare ed eventualmente dimostrare qualche versione del teorema di Bolzano negli spazi metrici.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi metrici ed $A \\subseteq X$ connesso per archi,",
                is_correct: true,
              },
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi normati ed $A \\subseteq X$ connesso per archi,",
                is_correct: false,
              },
              {
                text: "Siano $(X, d_X)$ e $(Y, d_Y)$ due spazi topologici ed $A \\subseteq X$ connesso per archi,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$f: A \\to Y$ continua, allora",
                is_correct: true,
              },
              {
                text: "$f: A \\to Y$ limitata, allora",
                is_correct: false,
              },
              {
                text: "$f: A \\to X$ continua, allora",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(I)$ $f(A)$ è connesso per archi in $Y$",
                is_correct: true,
              },
              {
                text: "$(I)$ $f(A)$ è aperto in $Y$",
                is_correct: false,
              },
              {
                text: "$(I)$ $f(A)$ è compatto in $Y$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$(II)$ se $Y = \\mathbb{R}$, $f(A)$ è un intervallo",
                is_correct: true,
              },
              {
                text: "$(II)$ se $Y = \\mathbb{R}$, $f(A)$ è limitato",
                is_correct: false,
              },
              {
                text: "$(II)$ se $Y = \\mathbb{R}$, $f(A)$ è aperto",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Dimostrazione $(I)$: siano $v, \\omega \\in f(A)$,",
                is_correct: true,
              },
              {
                text: "Dimostrazione $(I)$: siano $v, \\omega \\notin f(A)$,",
                is_correct: false,
              },
              {
                text: "Dimostrazione $(I)$: siano $v, \\omega \\in A$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "sia $v = f(x)$ e $\\omega = f(y)$ con $x, y \\in A$,",
                is_correct: true,
              },
              {
                text: "sia $v = f(y)$ e $\\omega = f(x)$ con $x, y \\in A$,",
                is_correct: false,
              },
              {
                text: "sia $v = x$ e $\\omega = y$ con $x, y \\in A$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "poiché $A$ connesso per archi $\\exists \\, a, b \\in \\mathbb{R}$ con $a \\leq b$",
                is_correct: true,
              },
              {
                text: "poiché $A$ connesso per archi $\\forall \\, a, b \\in \\mathbb{R}$ con $a \\leq b$",
                is_correct: false,
              },
              {
                text: "poiché $A$ connesso per archi $\\exists \\, a, b \\in \\mathbb{N}$ con $a \\leq b$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "e $\\varphi: [a, b] \\to X$ continua con $\\varphi(a) = x$, $\\varphi(b) = y$, $\\varphi([a, b]) \\subseteq A$.",
                is_correct: true,
              },
              {
                text: "e $\\varphi: [a, b] \\to X$ continua con $\\varphi(a) = y$, $\\varphi(b) = x$, $\\varphi([a, b]) \\subseteq A$.",
                is_correct: false,
              },
              {
                text: "e $\\varphi: [a, b] \\to X$ continua con $\\varphi(a) = x$, $\\varphi(b) = y$, $\\varphi([a, b]) = A$.",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "Pongo $\\psi: [a, b] \\to Y$, $\\psi(t) = f(\\varphi(t))$ con $t \\in [a, b]$",
                is_correct: true,
              },
              {
                text: "Pongo $\\psi: [a, b] \\to Y$, $\\psi(t) = \\varphi(f(t))$ con $t \\in [a, b]$",
                is_correct: false,
              },
              {
                text: "Pongo $\\psi: [a, b] \\to X$, $\\psi(t) = f(\\varphi(t))$ con $t \\in [a, b]$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "so che $\\psi$ continua (composizione di funzioni continue),",
                is_correct: true,
              },
              {
                text: "so che $\\psi$ non è continua,",
                is_correct: false,
              },
              {
                text: "so che $\\psi$ è limitata,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$\\psi(t) \\in f(A)$ $\\forall \\, t \\in [a, b]$.",
                is_correct: true,
              },
              {
                text: "$\\psi(t) \\notin f(A)$ $\\forall \\, t \\in [a, b]$.",
                is_correct: false,
              },
              {
                text: "$\\psi(t) \\in f(A)$ $\\exists \\, t \\in [a, b]$.",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "Infine $\\psi(a) = f(\\varphi(a)) = f(x) = v$ e $\\psi(b) = \\omega$",
                is_correct: true,
              },
              {
                text: "Infine $\\psi(a) = f(\\varphi(b)) = f(y) = v$ e $\\psi(b) = \\omega$",
                is_correct: false,
              },
              {
                text: "Infine $\\psi(a) = f(\\varphi(a)) = f(x) = \\omega$ e $\\psi(b) = v$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Dimostrazione $(II)$: segue da $(I)$, poiché in $\\mathbb{R}$ $f(A)$ è connesso per archi $\\Rightarrow f(A)$ convesso",
                is_correct: true,
              },
              {
                text: "Dimostrazione $(II)$: segue da $(I)$, poiché in $\\mathbb{R}$ $f(A)$ è aperto $\\Rightarrow f(A)$ convesso",
                is_correct: false,
              },
              {
                text: "Dimostrazione $(II)$: segue da $(I)$, poiché in $\\mathbb{R}$ $f(A)$ è chiuso $\\Rightarrow f(A)$ convesso",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 23,
      question:
        "Dare la definizione di successione di Cauchy in uno spazio metrico e di spazio metrico completo. Presentare un esempio di spazio metrico completo ed un esempio di spazio metrico che non lo è.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Siano $(X, d)$ uno spazio metrico ed $\\{a_k\\}$ una successione a valori in $X$,",
                is_correct: true,
              },
              {
                text: "Siano $(X, d)$ uno spazio normato ed $\\{a_k\\}$ una successione a valori in $X$,",
                is_correct: false,
              },
              {
                text: "Siano $(X, d)$ uno spazio topologico ed $\\{a_k\\}$ una successione a valori in $X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "diremo che $\\{a_k\\}$ è <strong>di Cauchy</strong> se $\\forall \\, \\epsilon > 0 \\, \\exists \\, k(\\epsilon) \\in \\mathbb{N}$ $\\mid$ se $i, j \\in \\mathbb{N}$, allora $\\min\\{i, j\\} > k(\\epsilon)$ e $d(a_i, a_j) < \\epsilon$",
                is_correct: true,
              },
              {
                text: "diremo che $\\{a_k\\}$ è <strong>di Cauchy</strong> se $\\exists \\, \\epsilon > 0 \\, \\forall \\, \\delta > 0$ $\\mid$ se $i, j \\in \\mathbb{N}$, allora $\\min\\{i, j\\} > \\delta$ e $d(a_i, a_j) < \\epsilon$",
                is_correct: false,
              },
              {
                text: "diremo che $\\{a_k\\}$ è <strong>di Cauchy</strong> se $\\forall \\, \\epsilon > 0 \\, \\exists \\, k(\\epsilon) \\in \\mathbb{N}$ $\\mid$ se $i, j \\in \\mathbb{N}$, allora $\\max\\{i, j\\} > k(\\epsilon)$ e $d(a_i, a_j) < \\epsilon$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Sia $(X, d)$ uno spazio metrico,",
                is_correct: true,
              },
              {
                text: "Sia $(X, d)$ uno spazio normato,",
                is_correct: false,
              },
              {
                text: "Sia $(X, d)$ uno spazio topologico,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "diremo che è <strong>completo</strong> se ogni successione di Cauchy in esso è convergente",
                is_correct: true,
              },
              {
                text: "diremo che è <strong>completo</strong> se ogni successione in esso è convergente",
                is_correct: false,
              },
              {
                text: "diremo che è <strong>completo</strong> se ogni sottosuccessione di una successione di Cauchy è convergente",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Esempio: lo spazio metrico $B(A)$ delle funzioni $f: A \\to \\mathbb{R}$ limitate",
                is_correct: true,
              },
              {
                text: "Esempio: lo spazio metrico $B(A)$ delle funzioni $f: A \\to \\mathbb{R}$ illimitate",
                is_correct: false,
              },
              {
                text: "Esempio: lo spazio metrico $B(A)$ delle funzioni $f: A \\to \\mathbb{R}^2$ limitate",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "con metrica indotta dalla norma $||f||_{B(A)} = \\sup \\{|f(a)|, \\; a \\in A\\}$",
                is_correct: true,
              },
              {
                text: "con metrica indotta dalla norma $||f||_{B(A)} = \\inf \\{|f(a)|, \\; a \\in A\\}$",
                is_correct: false,
              },
              {
                text: "con metrica indotta dalla norma $||f||_{B(A)} = \\max \\{|f(a)|, \\; a \\in A\\}$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "è completo",
                is_correct: true,
              },
              {
                text: "non è completo",
                is_correct: false,
              },
              {
                text: "è compatto",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Esempio: lo spazio metrico $(0, 1)$",
                is_correct: true,
              },
              {
                text: "Esempio: lo spazio metrico $[0, 1]$",
                is_correct: false,
              },
              {
                text: "Esempio: lo spazio metrico $(0, +\\infty)$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "con la metrica $d(x, y) = |x - y|$",
                is_correct: true,
              },
              {
                text: "con la metrica $d(x, y) = ||x - y||$",
                is_correct: false,
              },
              {
                text: "con la metrica $d(x, y) = \\sup |x - y|$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "non è completo",
                is_correct: true,
              },
              {
                text: "è completo",
                is_correct: false,
              },
              {
                text: "è compatto",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 24,
      question:
        "Dimostrare che un sottoinsieme chiuso di uno spazio metrico completo è completo.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Sia $(X, d)$ uno spazio metrico completo ed $A \\subseteq X$ chiuso $\\Rightarrow A$ è completo",
                is_correct: true,
              },
              {
                text: "Sia $(X, d)$ uno spazio metrico completo ed $A \\subseteq X$ aperto $\\Rightarrow A$ è completo",
                is_correct: false,
              },
              {
                text: "Sia $(X, d)$ uno spazio normato completo ed $A \\subseteq X$ chiuso $\\Rightarrow A$ è completo",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Consideriamo una successione di Cauchy $\\{x_n\\} \\in A$,",
                is_correct: true,
              },
              {
                text: "Consideriamo una successione di Cauchy $\\{x_n\\} \\in X$,",
                is_correct: false,
              },
              {
                text: "Consideriamo una successione $\\{x_n\\} \\in A$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "poiché $A$ è dotato della metrica indotta da $X$,",
                is_correct: true,
              },
              {
                text: "poiché $A$ è dotato della metrica indotta da $A$,",
                is_correct: false,
              },
              {
                text: "poiché $X$ è dotato della metrica indotta da $A$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "la successione $\\{x_n\\}$ è anch'essa una successione di Cauchy in $(X, d)$,",
                is_correct: true,
              },
              {
                text: "la successione $\\{x_n\\}$ è anch'essa convergente in $(X, d)$,",
                is_correct: false,
              },
              {
                text: "la successione $\\{x_n\\}$ è anch'essa limitata in $(X, d)$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "ossia $\\forall \\, \\epsilon > 0 \\, \\exists \\, \\delta \\in \\mathbb{N}$ $\\mid d(x_n, x_m) < \\epsilon$ $\\forall \\, n, m \\geq \\delta$",
                is_correct: true,
              },
              {
                text: "ossia $\\forall \\, \\epsilon > 0 \\, \\exists \\, \\delta \\in \\mathbb{R}$ $\\mid d(x_n, x_m) < \\epsilon$ $\\forall \\, n, m \\geq \\delta$",
                is_correct: false,
              },
              {
                text: "ossia $\\exists \\, \\epsilon > 0 \\, \\forall \\, \\delta \\in \\mathbb{N}$ $\\mid d(x_n, x_m) < \\epsilon$ $\\forall \\, n, m \\geq \\delta$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Poiché $X$ completo $\\exists \\, x \\in X \\mid \\{x_n\\} \\to x$ in $X$,",
                is_correct: true,
              },
              {
                text: "Poiché $X$ completo $\\exists \\, x \\in A \\mid \\{x_n\\} \\to x$ in $X$,",
                is_correct: false,
              },
              {
                text: "Poiché $A$ completo $\\exists \\, x \\in X \\mid \\{x_n\\} \\to x$ in $X$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "ovvero $\\lim_{n \\to +\\infty} d(x_n, x) = 0$",
                is_correct: true,
              },
              {
                text: "ovvero $\\lim_{n \\to +\\infty} d(x_n, x) > 0$",
                is_correct: false,
              },
              {
                text: "ovvero $\\lim_{n \\to +\\infty} d(x_n, x) = \\epsilon$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "Poiché $A$ chiuso e $\\{x_n\\} \\in A$ $\\forall \\, n$, ed $\\{x_n\\} \\to x$,",
                is_correct: true,
              },
              {
                text: "Poiché $A$ aperto e $\\{x_n\\} \\in A$ $\\forall \\, n$, ed $\\{x_n\\} \\to x$,",
                is_correct: false,
              },
              {
                text: "Poiché $A$ chiuso e $\\{x_n\\} \\in A$ $\\exists \\, n$, ed $\\{x_n\\} \\to x$,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "segue che $x \\in A$ (A contiene tutti i suoi punti di accumulazione)",
                is_correct: true,
              },
              {
                text: "segue che $x \\notin A$",
                is_correct: false,
              },
              {
                text: "segue che $x \\in X$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\Rightarrow \\{x_n\\}$ converge ad $x \\in A$",
                is_correct: true,
              },
              {
                text: "$\\Rightarrow \\{x_n\\}$ converge ad $x \\in X$",
                is_correct: false,
              },
              {
                text: "$\\Rightarrow \\{x_n\\}$ è una successione limitata in $A$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$\\Rightarrow$ ogni successione di Cauchy in $A$ converge ad un punto di $A$",
                is_correct: true,
              },
              {
                text: "$\\Rightarrow$ ogni successione di Cauchy in $A$ converge ad un punto di $X$",
                is_correct: false,
              },
              {
                text: "$\\Rightarrow$ ogni successione in $A$ converge ad un punto di $A$",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "pertanto $A$ è completo",
                is_correct: true,
              },
              {
                text: "pertanto $A$ non è completo",
                is_correct: false,
              },
              {
                text: "pertanto $A$ è compatto",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
    {
      id: 25,
      question:
        "Enunciare il teorema delle contrazioni specificando il significato di ogni termine che compare in esso.",
      answer_parts: [
        [
          {
            options: [
              {
                text: "Sia $(X, d)$ uno spazio metrico completo,",
                is_correct: true,
              },
              {
                text: "Sia $(X, d)$ uno spazio metrico compatto,",
                is_correct: false,
              },
              {
                text: "Sia $(X, d)$ uno spazio metrico limitato,",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$f: X \\to X$ una <strong>contrazione</strong>, cioè tale che $\\exists \\, L \\in [0, 1)$ per cui",
                is_correct: true,
              },
              {
                text: "$f: X \\to X$ una <strong>contrazione</strong>, cioè tale che $\\forall \\, L \\in [0, 1)$ per cui",
                is_correct: false,
              },
              {
                text: "$f: X \\to X$ una <strong>contrazione</strong>, cioè tale che $\\exists \\, L \\in (1, \\infty)$ per cui",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$d(f(x), f(y)) \\leq L \\cdot d(x, y)$ $\\forall \\, (x, y) \\in X \\times X$",
                is_correct: true,
              },
              {
                text: "$d(f(x), f(y)) \\geq L \\cdot d(x, y)$ $\\forall \\, (x, y) \\in X \\times X$",
                is_correct: false,
              },
              {
                text: "$d(f(x), f(y)) = L \\cdot d(x, y)$ $\\forall \\, (x, y) \\in X \\times X$",
                is_correct: false,
              },
            ],
          },
        ],
        [
          {
            options: [
              {
                text: "$\\Rightarrow \\exists ! \\, l \\in X \\mid f(l) = l$.",
                is_correct: true,
              },
              {
                text: "$\\Rightarrow \\exists ! \\,l \\in X \\mid f(l) \\neq l$.",
                is_correct: false,
              },
              {
                text: "$\\Rightarrow \\exists ! \\, l \\in X \\mid f(l) = 0$.",
                is_correct: false,
              },
            ],
          },
          {
            options: [
              {
                text: "$l$ si dice <strong>punto fisso</strong> per $f$",
                is_correct: true,
              },
              {
                text: "$l$ si dice <strong>punto limite</strong> per $f$",
                is_correct: false,
              },
              {
                text: "$l$ si dice <strong>punto di accumulazione</strong> per $f$",
                is_correct: false,
              },
            ],
          },
        ],
      ],
    },
  ],
};
