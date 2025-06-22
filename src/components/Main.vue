
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
      

      <div  class="w-[1030px]">
        <transition name="fade">
             <div v-if="filteredCards.length === 0" class="text-center text-[24px] text-[#70232F] font-montserrat no-results" >
    По вашему запросу ничего не найдено
  </div>
  </transition>
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
      <div class="w-[330px]"  >
        <h1 class="font-semibold text-[24px] font-montserrat mb-[17px]">Фильтры</h1>
          
        <div class="h-[1215px] bg-white rounded-[5px] rounded-t-[15px] px-[20px] py-[10px] gap-[15px] flex flex-col">
          <h1 class="font-semibold text-[14px]">Возраст</h1>

          <div class="relative">
            <div @click="toggleAgeDropdown" class="age-dropdown-button">
              {{ selectedAge === 0 ? 'Любой' : `${selectedAge} ${getYearWord(selectedAge)}` }} 
              <span>
               <img :src="chevstrelka" alt="arrow" class="arrow" width="15" height="15" >
              </span>     
            </div>

            <transition name="dropdown">
                    <div v-if="isAgeDropdownOpen" class="age-dropdown-list">
                      <div v-for="age in ages"
                      :key="age"
                      @click="selectAge(age)"
                      class="age-dropdown-item"
                      :class="{ 'bg-[#D86B79] text-white': age === selectedAge }"
                      >
                      {{ age === 0 ? 'Любой' : `${age} ${getYearWord(age)}` }}
                      </div>
                    </div>
            </transition>
          </div>
          <h1 class="font-semibold text-[14px]">Пол</h1>
      <div class="checkbox-group">
        <label class="checkbox-label ">
          <!-- v-model привязывает чекбокс к массиву selectedGenders и значение value="male" закинется в массив selectedGenders-->
          <input type="checkbox" v-model="selectedGenders" value="male" class="hidden-checkbox " >
          <!-- Мы добавим класс при условии, что в массиве есть значеение 'male', если true - добавляем, иначе - false -->
          <span class="custom-checkbox" :class="{ 'checked': selectedGenders.includes('male') }">
            <!-- если в массиве есть 'male', то показываем галочку -->
            <span v-if="selectedGenders.includes('male')" class="checkmark">✔</span>
          </span>
          Мужской
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="selectedGenders" value="female" class="hidden-checkbox">
          <span class="custom-checkbox" :class="{ 'checked': selectedGenders.includes('female') }">
            <span v-if="selectedGenders.includes('female')" class="checkmark">✔</span>
          </span>
          Женский
        </label>
      </div>

      <h1 class="text-[14px] font-semibold font-montserrat" >Каталог</h1>

  <div>
        <!-- слушаем клик toggleCategory - переключение из закрытой категории при клике, в открытую -->
      <h2 class="font-montserrat flex items-center justify-between cursor-pointer" @click="toggleCategory">
        <div class="category-title">
          <!-- подставляем getCategoryCount для общего кол-ва в категории -->
        Силовой спорт <span class="count">{{ getCategoryCount('Силовой спорт') }}</span>
        </div>
        <!-- Добавляем класс rotated, в случае если категория открыта(true)  -->
        <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" :class="{'rotated' : isCategoryOpen }">
      </h2>
      <transition name="accordion">
        <!--  Показываем isCategoryOpen, если true (выше при клике на стрелочку из false уже поменяли на true) -->
      <div v-show="isCategoryOpen" class="category-list">
        <!-- перебираем массив, добавляем ключ по тегу  -->
        <div v-for="subcategory in subcategories" :key="subcategory.tag" class="subcategory-item"
        @click="toggleSubcategory(subcategory.tag)" :class="{'selected' : selectedSubcategories.includes(subcategory.tag) }"
        >
          <!-- подставляем из массива наш тег и указываем рядом с ним кол-во через getCount  -->
            <li>{{ subcategory.tag }} 
              <span class="count"> {{ getCount(subcategory.tag)  }}</span>
             </li>
            
        </div>
      </div>
      </transition>

  </div>


  <div>
    <h2 class="font-montserrat flex items-center justify-between cursor-pointer" @click="toggleCategory1">
      <div class="category-title">
               Единоборства <span class="count">{{ getCategoryCount('Единоборства') }}</span>
       </div>        
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" :class="{'rotated' : isPowerSportOpen }">
    </h2>
    <transition name="accordion">
    <div v-show="isPowerSportOpen" class="category-list">
    <div v-for="subcatecor in martialArtsSubcategories " :key="subcatecor.tag" class="subcategory-item"
    
    @click="toggleSubcategory(subcatecor.tag)" :class="{'selected' : selectedSubcategories.includes(subcatecor.tag)}"
    >
    <!--       // Ты кликаешь на "Дзюдо":
// @click="toggleSubcategory('Дзюдо')" -->

    <!-- Клик добавляет/убирает подкатегорию из selectedSubcategories, подсвечивает выбранную ВЫШЕ 
    subcatecor.tag — текущий тег из цикла v-for (например, 'Дзюдо') 
    в функцию toggleSubcategory передает наш тег из v-for, т.е есть массива, где есть наши теги в martialArtsSubcategories
    Говорить передать нужное значение, а именно из массива subcatecor - тэг
    -->
      <li class="cursor-pointer"> {{ subcatecor.tag }} 
        <span class="count">
          {{ getCount(subcatecor.tag) }}
        </span>
        
      </li>

    </div>
    </div>
    </transition>


  </div>


      <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               ДПИ и ремесла
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Техническое конструирование
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Словесность
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Иностранные языки
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Развитие интеллекта
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Информационные технологии
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               История и Традиции
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Педагогика
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Музыка и звук
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Пение
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               ДПИ и ремесла
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Хореография(танцы)
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Мода и стиль
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Познавательные развлечения
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
              Туризм
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Естественные науки
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Люди и животные
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Эстетические виды спорта
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Технические виды спорта
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Командно-игровой спорт
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
          <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Индивидуально игровой спорт
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
              <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Водные виды спорта
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
              <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Лёгкая атлетика и гимнастика
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
              <h2 class="font-montserrat flex items-center justify-between cursor-pointer" >
               Физкультура
              <img :src="chevstrelka" alt="arrow" width="15" height="15" class="arrow" >
    </h2>
        </div>

        
      </div>
    </div>
  </div>
</template>


<script setup>
import chevstrelka from '../assets/strelka.png'
</script>
<script>
import image1 from '../assets/imagecart.png';

export default {
  data() {
    return {
      // загружаем выбранные подкатегории из localStorage или юзаем пустой массив
      
      isCategoryOpen: JSON.parse(localStorage.getItem('isCategoryOpen')) || false,
      isPowerSportOpen: JSON.parse(localStorage.getItem('isPowerSportOpen')) || false,
      selectedSubcategories: JSON.parse(localStorage.getItem('selectedSubcategories')) || [],
      selectedGenders: JSON.parse(localStorage.getItem('selectedGenders')) || [], // ['male', 'female']
      
      search: '',
      filterType: 'all',
      isAgeDropdownOpen: false, // Открыт ли dropdown
      selectedAge: 0, // Выбранный возраст (0 = Любой)
      ages: Array.from({ length: 19 }, (_, i) => i), // [0, 1, 2, ..., 18]subcategories
      subcategories: [
        {tag: 'Тяжелая атлетика'},
        {tag: 'Пауэрлифтинг'},
      ],
      
      martialArtsSubcategories: [
      { tag: 'Дзюдо' },
      { tag: 'Вольная борьба' },
      ],
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
          firstFree: false,
          image: image1,
          geo: 'г. Иркутск, Юбилейный мкр., стр. 49/1',
          location: 'ФОК "Юбилейный"',
          days: 'Пн, Ср, Пт',
          times: ['09:00 - 10:30', '12:00 - 13:30', '18:00 - 19:30'],
          gender: 'male',

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
          gender: 'female',

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
          gender: 'male',

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
          gender: 'female',

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
          gender: 'both',

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
          firstFree: false,
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
      mounted() {
      document.addEventListener('click', this.closeDropdown);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.closeDropdown);
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
      // Добавляем фильтр по возрасту
      if( this.selectedAge !== 0) {
        filtered = filtered.filter(card => {
          const cleanAge = card.age.replace(' лет', ''); // Убираем " лет" нахзуй чтоб не мешался
          const [minAge, maxAge] = cleanAge.split('-').map(Number); // вместо стринг на намбер
          return this.selectedAge >= minAge && this.selectedAge <= maxAge;
        })
      }
      // Если длина массива больше (то есть там что-то добавлено),
      //  то обращаемся к переменной filtered и фильтруем карточку,
      //  обращаясь к нашему массиву и проверяем,
      //  есть ли там gender(пол), или есть ли там оба "both
      // карточки с gender: 'both' показываются всегда, если есть выбранный пол.
      if(this.selectedGenders.length > 0) {
        filtered = filtered.filter(card => 
          this.selectedGenders.includes(card.gender) || card.gender === 'both'
        );
       localStorage.setItem('selectedGenders', JSON.stringify(this.selectedGenders));


      }

// Фильтруем карточки по подкатегориям, если selectedSubcategories не пустой
// Сначала смотрим, выбраны ли подкатегории, если да, то
// осталяем только те карточки, где card.tag есть в selectedSubcategories
// filteredCards фильтрует карточки, оставляя только card.tag = 'Дзюдо'
      if(this.selectedSubcategories.length > 0) {
        filtered = filtered.filter(card => this.selectedSubcategories.includes(card.tag))
      }

      
      // Возвращаем все карточки, если фильтр не выбран
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

  methods: {
    
    toggleAgeDropdown() {
      this.isAgeDropdownOpen = !this.isAgeDropdownOpen;
    },
    selectAge(age) {
      this.selectedAge = age; // Сохраняем возраст
      this.isAgeDropdownOpen = false; // Закрываем dropdown после выбора
    },

    closeDropdown(event) {
      if(!event.target.closest('.age-dropdown-button') && !event.target.closest('.age-dropdown-list')) {
        this.isAgeDropdownOpen = false;
      }
    },
// из закрытого ( первоначальное состояние) делаем открытым 
    toggleCategory() {
      // Переключает состояние аккордеона Силовой спорт (открыт/закрыт)
      this.isCategoryOpen = !this.isCategoryOpen;
      // Сохраняем состояние в localStorage для сохранения при перезагрузке
      localStorage.setItem('isCategoryOpen', JSON.stringify(this.isCategoryOpen))
    },
    toggleCategory1() {
      // Переключает состояние аккордеона Единоборства (открыт/закрыт)
      this.isPowerSportOpen = !this.isPowerSportOpen;
      // Сохраняем состояние в localStorage для сохранения при перезагрузке
      localStorage.setItem('isPowerSportOpen', JSON.stringify(this.isPowerSportOpen))

    },
    // считаем длину 
      getCount(tag) {
      return this.cards.filter(card => card.tag === tag).length
    },
          getCountOur(tag) {
      return this.cards.filter(card => card.tag === tag).length
    },
    // Считает количество карточек для указанной категории
getCategoryCount(category) {
  // Считает количество карточек для указанной категории
  return this.cards.filter(card => card.category === category).length;
},
    // mounted() {
    //   document.addEventListener('click', this.closeDropdown);
    // },
    // beforeDestroy() {
    //   document.removeEventListener('click', this.closeDropdown);
    // },

    getYearWord(age) {
      if (age % 10 === 1 && age !== 11) return 'год';
      if([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age)) return 'года';
      return 'лет';
    },
    toggleSubcategory(tag) {
      // Если тег уже выбран, убираем его
      // Начальное состояние: selectedSubcategories = [].
      // Ты кликаешь на "Дзюдо":
// @click="toggleSubcategory('Дзюдо')" → toggleSubcategory('Дзюдо').
// includes('Дзюдо') = false → push('Дзюдо') → selectedSubcategories = ['Дзюдо'].
      if(this.selectedSubcategories.includes(tag)) {
        this.selectedSubcategories = this.selectedSubcategories.filter(t => t !== tag)
        // Если тег не выбран, добавляем его
      } else {
        this.selectedSubcategories.push(tag);
        if(this.subcategories.map(s => s.tag).includes(tag)) {
          this.isCategoryOpen = true;
          localStorage.setItem('isCategoryOpen', JSON.stringify(true))
        }
        if(this.martialArtsSubcategories.map(s => s.tag).includes(tag)) {
          this.isPowerSportOpen = true;
          localStorage.setItem('isPowerSportOpen', JSON.stringify(true))
        }

      }
      // Сохраняем обновлённый массив в localStorage для сохранения при перезагрузке
      localStorage.setItem('selectedSubcategories', JSON.stringify(this.selectedSubcategories));
    },


  },
  created() {
    // Открываем открвающийся список(аккордеон) Силовой спорт, если есть выбранные подкатегории

    // Проверяем, есть ли выбранные подкатегории, и открываем соответствующие аккордеоны
    // Для Силового спорта: если в selectedSubcategories есть тег из subcategories
    if(this.selectedSubcategories.some(tag => this.subcategories.map(s => s.tag).includes(tag))) {
      // Открываем аккордеон Силовой спорт
      this.isCategoryOpen = true;
      // Сохраняем состояние в localStorage
      localStorage.setItem('isCategoryOpen', JSON.stringify(true));
    }
    // Для Единоборств: если в selectedSubcategories есть тег из martialArtsSubcategories
    if(this.selectedSubcategories.some(tag => this.martialArtsSubcategories.map(s => s.tag).includes(tag))) {
      // Открываем аккордеон Единоборства
      this.isPowerSportOpen = true;
      // Сохраняем состояние в localStorage
      localStorage.setItem('isPowerSportOpen', JSON.stringify(true));
    }
  },
  watch: {
    selectedGenders: {
      handler(newValue) {
        localStorage.setItem('selectedGenders', JSON.stringify(newValue))
      },
      deep: true,
    }
  }

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


.age-dropdown-button {
  background: white;
  border: 1px solid #D86B79;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.age-dropdown-list {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #D86B79;
  border-radius: 5px;
  max-height: 250px;
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.age-dropdown-item {
  padding: 5px 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  cursor: pointer;
  
}

/* допилить, чтоб не накладывалось друг на друга */
.age-dropdown-item:hover {
  background: #C8C5CF;
}

.dropdown-enter-active, .dropdown-leave-active {
  transition: all 0.2s ease;
}
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.checkbox-group {
  display: flex;
  gap: 20px;
  margin-top: -10px;
}
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
}
.hidden-checkbox {
  display: none;
}
.custom-checkbox {
  width: 16px;
  height: 16px;
  border: 2px solid #D86B79;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checked {
  background: #70232F;
  border-color: #70232F;
}
.checkmark {
  color: white;
  font-size: 12px;
}
.selected-genders {
  margin-top: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #70232F;
}


.arrow {
  transition: transform 0.3s ease;
}
.rotated {
  transform: rotate(180deg);
}
.category-list {
  margin-top: 10px;
  padding-left: 10px;
}
.subcategory-item {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  margin-bottom: 5px;
  cursor: pointer;
}
.accordion-enter-active, .accordion-leave-active {
  transition: opacity 0.3s ease, max-height 0.3s ease;
  overflow: hidden;
  max-height: 100px;
}
.accordion-enter, .accordion-leave-to {
  opacity: 0;
  max-height: 0;
}

.count{
  color: #70232F;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 10px; /* Отступ между текстом и цифрой */
}

.subcategory-item.selected {
  color: #70232F; /* Подсвечиваем выбранную подкатегорию */
  font-weight: 600; /* Делаем чуть жирнее для акцента */
}
</style>