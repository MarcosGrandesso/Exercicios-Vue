<template>
        <div :class="minhaClasse">
          <h3><i ></i> {{ msg }} {{ tipo }}</h3>
        </div>
</template>

<script>
    module.exports = {
        props: ['msg', 'tipo'],
        computed : {
            minhaClasse() {
                if (this.tipo == 'aviso'){
                    return ['badge', 'alert', 'warning']

                } else if (this.tipo == 'erro ') {
                    return ['badge', 'alert', 'danger']

                } else {
                    return ['badge', 'alert', 'success']
                }
                
            }
        }
    }
</script>