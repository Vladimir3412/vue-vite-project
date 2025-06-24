<template>
  
    <Header />
 <div class="mt-4">
 <div class="w-[1480px] min-h-[2916px] bg-[#EFEFEF] mx-auto mt-6 rounded-[15px] p-[40px] mt-[30px] mb-[30px]">
    <!-- кнопка + на карте -->
<div class="flex items-center justify-between gap-[20px] flex-wrap">
  <div class="flex items-center gap-[20px] flex-wrap">
<div>
  <button class="flex items-center px-[20px] py-[10px] rounded-[5px] bg-white" @click="$router.push('/')">
    <img src="../assets/Group 330.png" alt="geo" width="7" height="7" class=" mr-[10px] object-contain" />
    <span >Назад</span>
  </button>
  
</div>
  </div>
       <button class="flex items-center justify-between bg-white px-[20px] py-[10px] rounded-[5px] ml-[20px]">
        <span class="mr-[10px]">На карте</span>
        <img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
      </button>
</div>

 <div class="flex gap-[40px] w-[1400px] mx-auto mt-[20px]">
        <template>
          
          <h1 class="font-semibold text-[24px] font-montserrat mt-[20px]">Единоборства</h1>
         
        
          <div
            class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px]"
  
          >
            <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
            <div class="absolute top-[20px] right-[20px] flex gap-[10px]">
              <button
                
                class="bg-white border border-[#D86B79] text-black px-[15px] py-[5px] rounded-[8px] text-[12px] font-semibold"
              >
                Первое бесплатно
              </button>
              <button class="bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px] text-[14px]">
                выфв
              </button>
            </div>

            <img :src="card.image" alt="geo" width="200" height="200" class="mr-[10px]">
            <div class="block">
              <h1 class="font-semibold text-[16px] font-montserrat">
                аываыв<br v-if="card.subtitle">аывавы
              </h1>
              <p class="text-[14px] mt-[10px] text-[#D86B79] font-montserrat">авыаыв</p>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="" alt="geo" width="18" height="18">
                <span class="text-[16px]">аываыв</span>
              </div>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="" alt="geo" width="18" height="18">
                <span class="text-[16px]">аываыв</span>
              </div>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="" alt="geo" width="18" height="18">
                <span class="text-[16px]">аввыа</span>
              </div>
              <div class="flex items-center gap-[10px]">
                <img src="" alt="geo" width="18" height="18">
                <span class="text-[16px] font-medium">вфывфы</span>
                <button
    
                  class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"
                >
                  вфывфы
                </button>
              </div>
            </div>
            <button
              class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F]"
             
            >
              Подробнее
            </button>
          </div>
         
        </template>

 </div>

  <!-- Добавь для id=3–10 -->
</div>
  <div v-if="cardId == 2">
    <p>Курс для начинающих по штанге. Учим правильной технике.</p>
    <p>Тренер: Петрова А.А., сертифицированный тренер.чвы</p>
  </div>
        
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
      cards: [
        {
          id: 1,
          category: 'Силовой спорт',
          title: 'Тяжелая атлетика',
          subtitle: '(в Юбилейном мкр.)',
          age: '10-18 лет (муж.)',
          tag: 'Тяжелая атлетика',
          type: 'Бесплатно',
          firstFree: false,
          geo: 'г. Иркутск, Юбилейный мкр., стр. 49/1',
          location: 'ФОК "Юбилейный"',
          days: 'Пн, Ср, Пт',
          times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'],
          gender: 'male',
        },
        // ... остальные карточки (id: 2–10) из твоего кода ...
      ],
    };
  },
  computed: {
    cardId() {
      return this.$route.params.id;
    },
  },
  methods: {
    loadCard() {
      this.card = this.cards.find(card => card.id === parseInt(this.cardId)) || null;
    },
    getUniqueContent(id) {
      // Заглушка для уникального контента
      const content = {
        1: 'Интенсивные тренировки по тяжелой атлетике для мужчин. Подходит для подготовки к соревнованиям.',
        2: 'Курс для начинающих, где вы научитесь работать со штангой. Идеально для женщин.',
        3: 'Силовые тренировки для мужчин на профессиональном оборудовании.',
        4: 'Пауэрлифтинг для всех уровней подготовки, акцент на технику.',
        5: 'Дзюдо для мужчин, развитие ловкости и силы.',
        6: 'Вольная борьба для женщин, подходит для всех возрастов.',
        7: 'Классическое дзюдо с опытными тренерами.',
        8: 'Вольная борьба для мужчин, акцент на соревновательную подготовку.',
        9: 'Дзюдо с индивидуальным подходом к каждому ученику.',
        10: 'Вольная борьба для женщин, развитие выносливости и техники.',
      };
      return content[id] || 'Описание пока недоступно.';
    },
  },
  created() {
    this.loadCard();
  },
  watch: {
    cardId() {
      this.loadCard();
    },
  },
};
</script>

<style scoped>
.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>