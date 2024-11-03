const jsonData = {
  theorems: [
    {
      question:
        "Definizione di spazio normato. Dare un esempio e dimostrare che effettivamente lo è.",
      answer_parts: [
        {
          options: [
            {
              text: "Sia $X$ uno spazio vettoriale definito sul campo $K$. Una funzione $\\|\\cdot\\| : X \\rightarrow [0, +\\infty)$ è una <strong>norma</strong> se soddisfa le seguenti proprietà $\\forall x, y \\in X$ e $\\forall \\lambda \\in K$:",
              is_correct: true,
            },
            {
              text: "Sia $X$ uno spazio topologico. Una funzione $\\|\\cdot\\| : X \\rightarrow \\mathbb{R}$ è una <strong>norma</strong> se soddisfa le seguenti proprietà $\\forall x, y \\in X$ e $\\forall \\lambda \\in K$:",
              is_correct: false,
            },
            {
              text: "Sia $X$ un insieme numerabile. Una funzione $\\|\\cdot\\| : X \\rightarrow [0, 1]$ è una <strong>norma</strong> se soddisfa le seguenti proprietà $\\forall x, y \\in X$ e $\\forall \\lambda \\in K$:",
              is_correct: false,
            },
          ],
        },
        {
          options: [
            {
              text: "$\\| x \\| = 0 \\Leftrightarrow x = 0$",
              is_correct: true,
            },
            {
              text: "$\\| x \\| \\geq 0$ $\\forall x \\in X$",
              is_correct: false,
            },
            {
              text: "$\\| x \\| = \\| -x \\|$",
              is_correct: false,
            },
          ],
        },
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
        {
          options: [
            {
              text: "$\\| x + y \\| \\leq \\| x \\| + \\| y \\|$ (Disuguaglianza triangolare)",
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
        {
          options: [
            {
              text: "Consideriamo $\\mathbb{R}^n$ con la norma euclidea $\\| x \\| = \\sqrt{x_1^2 + \\dots + x_n^2}$",
              is_correct: true,
            },
            {
              text: "Consideriamo $\\mathbb{R}^n$ con la norma definita come $\\| x \\| = x_1 + \\dots + x_n$",
              is_correct: false,
            },
            {
              text: "Consideriamo $\\mathbb{R}^n$ con la norma nulla $\\| x \\| = 0$ $\\forall x \\in \\mathbb{R}^n$",
              is_correct: false,
            },
          ],
        },
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
              text: "$\\| x \\| = 0 \\Leftrightarrow x$ è ortogonale a se stesso",
              is_correct: false,
            },
          ],
        },
        {
          options: [
            {
              text: "$\\| \\lambda x \\| = |\\lambda| \\| x \\|$ poiché $\\sqrt{(\\lambda x_1)^2 + \\dots + (\\lambda x_n)^2} = |\\lambda| \\sqrt{x_1^2 + \\dots + x_n^2}$",
              is_correct: true,
            },
            {
              text: "$\\| \\lambda x \\| = \\lambda \\| x \\|$ poiché $\\lambda$ è uno scalare",
              is_correct: false,
            },
            {
              text: "$\\| \\lambda x \\| = \\| x \\|$ poiché la norma è indipendente da $\\lambda$",
              is_correct: false,
            },
          ],
        },
        {
          options: [
            {
              text: "$\\| x + y \\| \\leq \\| x \\| + \\| y \\|$ poiché $(\\| x + y \\|)^2 = \\| x \\|^2 + 2 x \\cdot y + \\| y \\|^2 \\leq (\\| x \\| + \\| y \\|)^2$",
              is_correct: true,
            },
            {
              text: "$\\| x + y \\| = \\| x \\| + \\| y \\|$ sempre vero in $\\mathbb{R}^n$",
              is_correct: false,
            },
            {
              text: "$\\| x + y \\| \\geq \\| x \\| - \\| y \\|$ $\\forall x, y \\in \\mathbb{R}^n$",
              is_correct: false,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title:
        "Mostrare come si può definire una norma su uno spazio con prodotto interno. Dare un esempio.",
      answer_parts: [
        {
          options: [
            {
              text: "Sia $\\langle \\cdot , \\cdot \\rangle$ un prodotto interno su $X$, allora possiamo definire la norma come $\\| x \\| = \\sqrt{\\langle x, x \\rangle}$",
              is_correct: true,
            },
            {
              text: "Sia $\\langle \\cdot , \\cdot \\rangle$ un prodotto esterno su $X$, allora la norma è $\\| x \\| = \\langle x, x \\rangle$",
              is_correct: false,
            },
            {
              text: "Sia $\\langle \\cdot , \\cdot \\rangle$ una forma bilineare su $X$, allora $\\| x \\| = \\langle x, x \\rangle^2$",
              is_correct: false,
            },
          ],
        },
        {
          options: [
            {
              text: "Prendiamo il prodotto scalare euclideo $\\langle x, y \\rangle = x_1 y_1 + \\dots + x_n y_n$",
              is_correct: true,
            },
            {
              text: "Prendiamo il prodotto vettoriale $\\langle x, y \\rangle = x_1 y_2 - x_2 y_1$",
              is_correct: false,
            },
            {
              text: "Prendiamo il prodotto esterno $\\langle x, y \\rangle = x \\wedge y$",
              is_correct: false,
            },
          ],
        },
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
        {
          options: [
            {
              text: "La funzione $\\| x \\| = \\sqrt{\\langle x, x \\rangle}$ soddisfa le proprietà di positività, omogeneità e disuguaglianza triangolare",
              is_correct: true,
            },
            {
              text: "La funzione $\\| x \\| = \\sqrt{\\langle x, x \\rangle}$ non soddisfa la disuguaglianza triangolare",
              is_correct: false,
            },
            {
              text: "La funzione $\\| x \\| = \\sqrt{\\langle x, x \\rangle}$ è sempre negativa",
              is_correct: false,
            },
          ],
        },
      ],
    },
  ],
};
