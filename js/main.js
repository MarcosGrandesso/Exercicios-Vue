var app = new Vue({
  el: "#app",
  data: {
    item : {
      'color1' : 'red',
      'color2' : 'purple',
    },
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
});
