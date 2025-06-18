```vue
<template>
  <div class="w-[1480px] min-h-[2916px] bg-[#EFEFEF] mx-auto mt-6 rounded-[15px] p-[40px] mt-[30px] mb-[30px]">
    <!-- Панель поиска и фильтров -->
    <div class="flex items-center justify-between gap-[20px] flex-wrap">
      <div class="flex items-center gap-[20px] flex-wrap">
        <!-- Поле поиска -->
        <div class="relative">
          <img src="../assets/search.png" alt="geo" width="18" height="18" class="absolute left-[17px] top-1/2 transform -translate-y-1/2">
          <input
            v-model="search"
            type="text"
            placeholder="Поиск"
            class="flex-1 w-full max-w-[241px] pl-[46px] px-4 py-2 rounded-md focus:outline-none h-[40px] placeholder-[#D86B79]"
          />
        </div>

        <!-- Кнопки фильтров -->
        <button @click="filterType = 'all'" :class="{ 'bg-white': filterType === 'all' }" class="px-[20px] py-[10px] rounded-[5px]">
          Все
        </button>
        <button @click="filterType = 'paid'" :class="{ 'bg-white': filterType === 'paid' }" class="px-[20px] py-[10px] rounded-[5px]">
          Платные
        </button>
        <button @click="filterType = 'free'" :class="{ 'bg-white': filterType === 'free' }" class="px-[20px] py-[10px] rounded-[5px]">
          Бесплатные
        </button>
      </div>

      <!-- Кнопка "На карте" -->
      <button class="flex items-center justify-between bg-white px-[20px] py-[10px] rounded-[5px] ml-[20px]">
        <span class="mr-[10px]">На карте</span>
        <img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
      </button>
    </div>

    <!-- Главный контейнер -->
    <div class="flex gap-[40px] w-[1400px] mx-auto mt-[20px]">
      <!-- Левая часть — карточки -->
      <div class="w-[1030px]">
        <!-- Силовой спорт -->
        <template v-if="filteredPowerSportCards.length">
          <transition name="fade" >
          <h1 class="font-semibold text-[24px] font-montserrat">Силовой спорт</h1>
          </transition>
          <transition-group name="card-list" tag="card-list" >
          <div
            class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px]"
            v-for="(card, index) in filteredPowerSportCards"
            :key="card.id"
            :style="{ '--i': index }"
          >
            <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
            <div class="absolute top-[20px] right-[20px] flex gap-[10px]">
              <button
                v-if="card.firstFree"
                class="bg-white border border-[#D86B79] text-black px-[15px] py-[5px] rounded-[8px] text-[12px] font-semibold"
              >
                Первое бесплатно
              </button>
              <button class="bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px] text-[14px]">
                {{ card.type }}
              </button>
            </div>

            <img :src="card.image" alt="geo" width="200" height="200" class="mr-[10px]">
            <div class="block">
              <h1 class="font-semibold text-[16px] font-montserrat">
                {{ card.title }}<br v-if="card.subtitle">{{ card.subtitle }}
              </h1>
              <p class="text-[14px] mt-[10px] text-[#D86B79] font-montserrat">{{ card.tag }}</p>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="../assets/userpng.png" alt="geo" width="18" height="18">
                <span class="text-[16px]">{{ card.age }}</span>
              </div>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="../assets/xzshto.png" alt="geo" width="18" height="18">
                <span class="text-[16px]">{{ card.geo }}</span>
              </div>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
                <span class="text-[16px]">{{ card.location }}</span>
              </div>
              <div class="flex items-center gap-[10px]">
                <img src="../assets/clock.png" alt="geo" width="18" height="18">
                <span class="text-[16px] font-medium">{{ card.days }}</span>
                <button
                  v-for="(time, index) in card.times"
                  :key="index"
                  class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"
                >
                  {{ time }}
                </button>
              </div>
            </div>
            <button
              class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F]"
            >
              Подробнее
            </button>
          </div>
          </transition-group>
        </template>

        <!-- Единоборства 1 -->
        <template v-if="filteredMartialArtsCardsSection1.length">
          <transition name="fade" >
          <h1 class="font-semibold text-[24px] font-montserrat mt-[20px]">Единоборства</h1>
          </transition>
          <transition-group name="card-list" tag="card-list">
          <div
            class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px]"
            v-for="(card, index) in filteredMartialArtsCardsSection1"
            :key="card.id"
            :style="{ '--i': index }"
          >
            <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
            <div class="absolute top-[20px] right-[20px] flex gap-[10px]">
              <button
                v-if="card.firstFree"
                class="bg-white border border-[#D86B79] text-black px-[15px] py-[5px] rounded-[8px] text-[12px] font-semibold"
              >
                Первое бесплатно
              </button>
              <button class="bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px] text-[14px]">
                {{ card.type }}
              </button>
            </div>

            <img :src="card.image" alt="geo" width="200" height="200" class="mr-[10px]">
            <div class="block">
              <h1 class="font-semibold text-[16px] font-montserrat">
                {{ card.title }}<br v-if="card.subtitle">{{ card.subtitle }}
              </h1>
              <p class="text-[14px] mt-[10px] text-[#D86B79] font-montserrat">{{ card.tag }}</p>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="../assets/userpng.png" alt="geo" width="18" height="18">
                <span class="text-[16px]">{{ card.age }}</span>
              </div>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="../assets/xzshto.png" alt="geo" width="18" height="18">
                <span class="text-[16px]">{{ card.geo }}</span>
              </div>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
                <span class="text-[16px]">{{ card.location }}</span>
              </div>
              <div class="flex items-center gap-[10px]">
                <img src="../assets/clock.png" alt="geo" width="18" height="18">
                <span class="text-[16px] font-medium">{{ card.days }}</span>
                <button
                  v-for="(time, index) in card.times"
                  :key="index"
                  class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"
                >
                  {{ time }}
                </button>
              </div>
            </div>
            <button
              class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F]"
            >
              Подробнее
            </button>
          </div>
          </transition-group>
        </template>

        <!-- Единоборства 2 -->
        <template v-if="filteredMartialArtsCardsSection2.length">
          <transition name="fade" >
          <h1 class="font-semibold text-[24px] font-montserrat mt-[20px]">Единоборства</h1>
          </transition>
          <transition-group name="card-list" tag="div">
          <div
            class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px]"
            v-for="(card, index) in filteredMartialArtsCardsSection2"
            :key="card.id"
            :style="{ '--i': index }"
          >
            <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
            <div class="absolute top-[20px] right-[20px] flex gap-[10px]">
              <button
                v-if="card.firstFree"
                class="bg-white border border-[#D86B79] text-black px-[15px] py-[5px] rounded-[8px] text-[12px] font-semibold"
              >
                Первое бесплатно
              </button>
              <button class="bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px] text-[14px]">
                {{ card.type }}
              </button>
            </div>

            <img :src="card.image" alt="geo" width="200" height="200" class="mr-[10px]">
            <div class="block">
              <h1 class="font-semibold text-[16px] font-montserrat">
                {{ card.title }}<br v-if="card.subtitle">{{ card.subtitle }}
              </h1>
              <p class="text-[14px] mt-[10px] text-[#D86B79] font-montserrat">{{ card.tag }}</p>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="../assets/userpng.png" alt="geo" width="18" height="18">
                <span class="text-[16px]">{{ card.age }}</span>
              </div>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="../assets/xzshto.png" alt="geo" width="18" height="18">
                <span class="text-[16px]">{{ card.geo }}</span>
              </div>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
                <span class="text-[16px]">{{ card.location }}</span>
              </div>
              <div class="flex items-center gap-[10px]">
                <img src="../assets/clock.png" alt="geo" width="18" height="18">
                <span class="text-[16px] font-medium">{{ card.days }}</span>
                <button
                  v-for="(time, index) in card.times"
                  :key="index"
                  class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"
                >
                  {{ time }}
                </button>
              </div>
            </div>
            <button
              class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F]"
            >
              Подробнее
            </button>
          </div>
          </transition-group>
        </template>

        <!-- Единоборства 3 -->
        <template v-if="filteredMartialArtsCardsSection3.length">
          <transition name="fade" >
          <h1 class="font-semibold text-[24px] font-montserrat mt-[20px]">Единоборства</h1>
          </transition>
          <transition-group name="card-list" tag="div">
          <div
            class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px]"
            v-for="(card, index) in filteredMartialArtsCardsSection3"
            :key="card.id"
            :style="{ '--i': index }"
          >
            <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
            <div class="absolute top-[20px] right-[20px] flex gap-[10px]">
              <button
                v-if="card.firstFree"
                class="bg-white border border-[#D86B79] text-black px-[15px] py-[5px] rounded-[8px] text-[12px] font-semibold"
              >
                Первое бесплатно
              </button>
              <button class="bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px] text-[14px]">
                {{ card.type }}
              </button>
            </div>

            <img :src="card.image" alt="geo" width="200" height="200" class="mr-[10px]">
            <div class="block">
              <h1 class="font-semibold text-[16px] font-montserrat">
                {{ card.title }}<br v-if="card.subtitle">{{ card.subtitle }}
              </h1>
              <p class="text-[14px] mt-[10px] text-[#D86B79] font-montserrat">{{ card.tag }}</p>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="../assets/userpng.png" alt="geo" width="18" height="18">
                <span class="text-[16px]">{{ card.age }}</span>
              </div>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="../assets/xzshto.png" alt="geo" width="18" height="18">
                <span class="text-[16px]">{{ card.geo }}</span>
              </div>
              <div class="flex items-center gap-[10px] mt-[5px]">
                <img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
                <span class="text-[16px]">{{ card.location }}</span>
              </div>
              <div class="flex items-center gap-[10px]">
                <img src="../assets/clock.png" alt="geo" width="18" height="18">
                <span class="text-[16px] font-medium">{{ card.days }}</span>
                <button
                  v-for="(time, index) in card.times"
                  :key="index"
                  class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"
                >
                  {{ time }}
                </button>
              </div>
            </div>
            <button
              class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F]"
            >
              Подробнее
            </button>
          </div>
          </transition-group>
        </template>
      </div>

      <!-- Правая часть — фильтры -->
      <div class="w-[330px]">
        <h1 class="font-semibold text-[24px] font-montserrat">Фильтры</h1>
        <!-- Дополнительные фильтры можно добавить здесь -->
      </div>
    </div>
  </div>
</template>

<script>
import image1 from '../assets/imagecart.png';

export default {
  data() {
    return {
      search: '',
      filterType: 'all',
      cards: [
        // Силовой спорт
        {
          id: 1,
          category: 'Силовой спорт',
          title: 'Тяжелая атлетика',
          subtitle: '(в Юбилейном мкр.)',
          age: '10-18 лет',
          tag: 'Тяжелая атлетика',
          type: 'Бесплатно',
          firstFree: true,
          image: image1,
          geo: 'г. Иркутск, Юбилейный мкр., стр. 49/1',
          location: 'ФОК "Юбилейный"',
          days: 'Пн, Ср, Пт',
          times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'],
        },
        {
          id: 2,
          category: 'Силовой спорт',
          title: 'Тяжелая атлетика',
          subtitle: '(на ул. Боткина)',
          age: '10-18 лет',
          tag: 'Тяжелая атлетика',
          type: '500 руб.',
          firstFree: true,
          image: image1,
          geo: 'г. Иркутск, Юбилейный мкр., стр. 49/1',
          location: 'ФОК "Юбилейный"',
          days: 'Пн, Ср, Пт',
          times: ['09:00 - 10:30', '12:00 - 13:30'],
        },
        {
          id: 3,
          category: 'Силовой спорт',
          title: 'Тяжелая атлетика',
          subtitle: '(на ул. Норильской)',
          age: '10-18 лет',
          tag: 'Тяжелая атлетика',
          type: '3200 руб. 8 занятий',
          firstFree: true,
          image: image1,
          geo: 'г. Иркутск, Юбилейный мкр., стр. 49/1',
          location: 'ФОК "Юбилейный"',
          days: 'Пн, Ср, Пт',
          times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'],
        },
        {
          id: 4,
          category: 'Силовой спорт',
          title: 'Пауэрлифтинг',
          subtitle: '',
          age: '10-18 лет',
          tag: 'Пауэрлифтинг',
          type: 'Бесплатно',
          firstFree: false,
          image: image1,
          geo: 'г. Иркутск, Юбилейный мкр., стр. 49/1',
          location: 'ФОК "Юбилейный"',
          days: 'Пн, Ср, Пт',
          times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'],
        },
        // Единоборства, секция 1
        {
          id: 5,
          category: 'Единоборства',
          section: 1,
          title: 'Дзюдо',
          subtitle: '',
          age: '6-18 лет',
          tag: 'Дзюдо',
          type: 'Бесплатно',
          firstFree: false,
          image: image1,
          geo: 'г. Иркутск, ул. Трудовая, д. 115А',
          location: 'СК "Вымпел"',
          days: 'Пн, Ср, Пт',
          times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'],
        },
        {
          id: 6,
          category: 'Единоборства',
          section: 1,
          title: 'Вольная борьба',
          subtitle: '(на ул. Норильская)',
          age: '6-18 лет',
          tag: 'Вольная борьба',
          type: '3200 руб. месяц',
          firstFree: true,
          image: image1,
          geo: 'г. Иркутск, Юбилейный мкр., стр. 49/1',
          location: 'ФОК "Юбилейный"',
          days: 'Пн, Ср, Пт',
          times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'],
        },
        // Единоборства, секция 2
        {
          id: 7,
          category: 'Единоборства',
          section: 2,
          title: 'Дзюдо',
          subtitle: '',
          age: '6-18 лет',
          tag: 'Дзюдо',
          type: 'Бесплатно',
          firstFree: false,
          image: image1,
          geo: 'г. Иркутск, ул. Трудовая, д. 115А',
          location: 'СК "Вымпел"',
          days: 'Пн, Ср, Пт',
          times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'],
        },
        {
          id: 8,
          category: 'Единоборства',
          section: 2,
          title: 'Вольная борьба',
          subtitle: '(на ул. Норильская)',
          age: '6-18 лет',
          tag: 'Вольная борьба',
          type: '3200 руб. месяц',
          firstFree: true,
          image: image1,
          geo: 'г. Иркутск, Юбилейный мкр., стр. 49/1',
          location: 'ФОК "Юбилейный"',
          days: 'Пн, Ср, Пт',
          times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'],
        },
        // Единоборства, секция 3
        {
          id: 9,
          category: 'Единоборства',
          section: 3,
          title: 'Дзюдо',
          subtitle: '',
          age: '6-18 лет',
          tag: 'Дзюдо',
          type: 'Бесплатно',
          firstFree: false,
          image: image1,
          geo: 'г. Иркутск, ул. Трудовая, д. 115А',
          location: 'СК "Вымпел"',
          days: 'Пн, Ср, Пт',
          times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'],
        },
        {
          id: 10,
          category: 'Единоборства',
          section: 3,
          title: 'Вольная борьба',
          subtitle: '(на ул. Норильская)',
          age: '6-18 лет',
          tag: 'Вольная борьба',
          type: '3200 руб. 8 занятий',
          firstFree: true,
          image: image1,
          geo: 'г. Иркутск, Юбилейный мкр., стр. 49/1',
          location: 'ФОК "Юбилейный"',
          days: 'Пн, Ср, Пт',
          times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'],
        },
      ],
    };
  },
  computed: {
    // Базовая фильтрация по поиску и типу (платные/бесплатные)
    filteredCards() {
      let filtered = this.cards.filter(card => {
        const q = this.search.toLowerCase();
        return (
          card.title.toLowerCase().includes(q) ||
          card.tag.toLowerCase().includes(q) ||
          (card.subtitle && card.subtitle.toLowerCase().includes(q)) ||
          card.geo.toLowerCase().includes(q) ||
          card.location.toLowerCase().includes(q)
        );
      });

      if (this.filterType === 'paid') {
        return filtered.filter(card => card.type !== 'Бесплатно');
      } else if (this.filterType === 'free') {
        return filtered.filter(card => card.type === 'Бесплатно');
      }
      return filtered;
    },
    // Карточки для "Силового спорта"
    filteredPowerSportCards() {
      return this.filteredCards.filter(c => c.category === 'Силовой спорт');
    },
    // Карточки для "Единоборств", секция 1
    filteredMartialArtsCardsSection1() {
      return this.filteredCards.filter(c => c.category === 'Единоборства' && c.section === 1);
    },
    // Карточки для "Единоборств", секция 2
    filteredMartialArtsCardsSection2() {
      return this.filteredCards.filter(c => c.category === 'Единоборства' && c.section === 2);
    },
    // Карточки для "Единоборств", секция 3
    filteredMartialArtsCardsSection3() {
      return this.filteredCards.filter(c => c.category === 'Единоборства' && c.section === 3);
    },
  },
};
</script>

<style scoped>
/* Анимация для появления карточек */
.card-list-enter-active,
.card-list-leave-active {
  transition: all 0.4s ease;
  transition-delay: calc(0.3s * var(--i));
}
.card-list-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
  filter: blur(5px);
  box-shadow: none;
}
.card-list-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
  filter: blur(5px);
  box-shadow: none;
}


/* Анимация для заголовков */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>