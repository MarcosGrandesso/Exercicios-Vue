<template>
        <div :class="classesbadge">
          <h3><i :class="icones"></i> {{texto}}</h3>
        </div>
    
</template>

<script>
    module.exports= {
        props: [
            'texto',
            'icone'
        ],
        data : ()=> {
            return {
                listaIcones : {
                    'success': 'fa-check',
                    'warning': 'fa-triangle-exclamation',
                    'danger' : 'fa-bomb'
                }
            }
        },
        computed : {
            classesbadge() {
                return [
                    'badge',
                    'alert',
                    this.icone || 'success'
                ]
            },
            icones() {
                return [
                    'fa-solid',
                    this.listaIcones[this.icone || 'success']
                ]
            }
        }
    }
</script>
