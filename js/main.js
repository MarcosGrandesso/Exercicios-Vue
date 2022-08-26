var app = new Vue({
  el: "#app",
  data: {
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
  },
  computed: {
    studentNote() {      
      if (this.studyingList.length == 0) {
      return "Selecione um ou mais cursos e bora estudar!";
    } else if (this.studyingList.length > 0 && this.studyingList.length < 10) {
      return 'Muito bem, você já pode iniciar seu estudo!'
    } else if (this.studyingList.length >=10) {
      return 'Opps! Não seria melhor focar os estudos em apenas algumas tecnologias?'
    }
    
  },
  },
});
