var app = new Vue({
  el: "#app",
  data: {
    notaFinal : 0,
    sumMediaCurso : 0,
    mediaCurso: [],
    shoppingList: [],
    studyingList: [],
    courses: [
      {
        id: 1,
        course: "D-Já Vue - Uma jornada pela Web",
        image: "./images/dejavu_matrix.jpg",
        description: "Como construir aplicações web com agilidade e qualidade.",
        duration: 42,
        active: true,
        price: 100,
        message: "👉 50% Desconto! Últimos dias",
        style: {
          priceColor: "#ffc31c",
        },
        showReview: false,
        reviews: [],
        rating: null,
        media: 0,
      },
      {
        id: 2,
        course: "Git - Via terminal para aprender da forma correta!",
        image: "./images/logo-git-430-215-v3.jpg",
        description:
          "Entendendo Git através dos primeiros comandos via linha de comando.",
        duration: 21,
        active: false,
        price: 900,
        message: "👈 Melhor cursp do mercado",
        showReview: false,
        reviews: [],
        rating: null,
        media: 0,
      },
      {
        id: 3,
        course: "Linux - Entendendo a tela preta!",
        image: "./images/logo-linux960x430.jpg",
        description:
          "Entendendo Git através dos primeiros comandos via linha de comando.",
        duration: 21,
        active: true,
        price: 0,
        showReview: false,
        reviews: [],
        rating: null,
        media: 0,
      },
    ],
    theme: {
      priceColorDefault: "#56ad80",
    },
  },
  methods: {
    addCourse(course) {
      /**
       * Adiciona curso na lista de compras se o valor for > 0
       * caso contrário, adiciona na lista de estudos
       */
      let targetList = this.shoppingList;
      if (course.price == 0) {
        targetList = this.studyingList;
      }
      targetList.push(course);
    },
    toggleReview(index) {
      this.courses[index].showReview = !this.courses[index].showReview;
    },
    sendRewiew(id) {
      app.courses[id-1].reviews.push(app.courses[id-1].rating)
      app.courses[id-1].media = 0

      for (elemento of app.courses[id-1].reviews) {
        
        app.courses[id-1].media = app.courses[id-1].media + Number(elemento)
      }
      app.courses[id-1].media =  app.courses[id-1].media /  app.courses[id-1].reviews.length

      console.log(app.courses[id-1].media)

      // Como pegar o curso correspondente a este review?
      // Como adicionar a nota ao course.reviews correspondente?
    },
  },
  computed: {
    studentNote() {
      let message = "Selecione um ou mais cursos e bora estudar!";
      if (this.studyingList.length > 0 && this.studyingList.length <= 10) {
        message = "Muito bem, você já pode iniciar seu estudo!";
      } else if (this.studyingList.length > 10) {
        message =
          "Opps! Não seria melhor focar os estudos em apenas algumas tecnologias?";
      }
      return message;
    },
  },
});
