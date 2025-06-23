<template>
  <div>
    <Header />
    
    <button @click="$router.push('/')">Назад</button>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name: 'Cardinfo',
    components: { Header },
    data() {
        return {
            card: null,
        };
    },

    computed: {
        // для получения ID карточки из URL
        cardId() {
            return this.$route.params.id;
        },
    },
    created() {
        const cards = [
             {
          id: 1,

        },
        {
          id: 2,


        },
        {
          id: 3,

        },
        {
          id: 4,

        },
        // Единоборства, секция 1
        {
          id: 5,


        },
        {
          id: 6,

        },
        // Единоборства, секция 2
        {
          id: 7,

        },
        {
          id: 8,

        },
        // Единоборства, секция 3
        {
          id: 9,
        
        },
        {
          id: 10,

        },
        ];
        this.card = cards.find(card => card.id === parseInt(this.cardId));
    },
};

</script>