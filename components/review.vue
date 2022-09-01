<template>
    <div>
                <p>
                  <i class="fa-solid fa-face-grin-stars"></i>
                  <span
                    v-if="course.reviews && course.reviews.length > 0"
                    class="rating bold ml-2"
                    >{{ calcRating(index) }}</span
                  >
                  <span v-else class="rating ml-2">Sem revisão</span>
                </p>

                <ul>
                  <li
                    :class="{tabs: true, activeTab: course.selectedTab === 'Notas' }"
                    @click="selectTab(index, 'Notas')"
                  >
                    Notas
                  </li>
                  <li
                    :class="{tabs: true, activeTab: course.selectedTab === 'Dar uma nota' }"
                    @click="selectTab(index, 'Dar uma nota')"
                  >
                    Dar uma nota
                  </li>
                </ul>

                <div v-show="course.selectedTab == 'Notas'">
                  <div class="my-2">
                    <div v-if="course.reviews && course.reviews.length == 0">
                      <h3>Este curso ainda não tem revisões...</h3>
                      <button
                        class="pa-1"
                        @click="selectTab(index, 'Dar uma nota')"
                      >
                        Dar uma nota
                      </button>
                    </div>

                    <table v-else data-table-theme="default zebra">
                      <caption>
                        O que estão falando do {{ course.course.split(" - ")[0]
                        || 'curso' }}
                      </caption>
                      <thead>
                        <tr>
                          <th>Data</th>
                          <th>Nome</th>
                          <th>Revisão</th>
                          <th>Nota</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="review in course.reviews">
                          <td class="px-1">
                            {{ new Date(review.date).toLocaleDateString('pt-br')
                            }}
                          </td>
                          <td class="px-1">{{ review.name }}</td>
                          <td class="px-1">{{ review.review }}</td>
                          <td class="px-1">{{ review.rating.toFixed(1) }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div v-show="course.selectedTab == 'Dar uma nota'">
                  <form class="form-review" @submit.prevent="sendRewiew(index)">
                    <p class="form-group">
                      <label for="name">Name:</label>
                      <input
                        class="form-control"
                        id="name"
                        v-model="course.name"
                        placeholder="Digite seu nome"
                      />
                    </p>

                    <p class="form-group">
                      <label for="review">Review:</label>
                      <textarea
                        class="form-control"
                        id="review"
                        v-model="course.review"
                        rows="10"
                        placeholder="O que você gostou ou não gostou?"
                      ></textarea>
                    </p>
                    <p class="form-group">
                      <label for="rating">Nota:</label>
                      <select
                        class="form-control"
                        id="rating"
                        name="rating"
                        v-model.number="course.rating"
                      >
                        <option></option>
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                      </select>
                    </p>
                    <ul>
                      <li class="text-error" v-for="error in course.errors">
                        {{ error }}
                      </li>
                    </ul>
                    <p class="form-group center">
                      <input type="submit" value="Enviar" class="btn btn-sm" />
                    </p>
                  </form>
                </div>

                <!-- REVIEW - FIM -->
    </div>
</template>

<script>
    module.export = {
        props: {
            course : {
                type: Object, required: true
            },
        },
    methods: {
        calcRating(index) {
            return 0
        },
        selectTab(index, aba){
            return null
        }
    }
}
</script>
