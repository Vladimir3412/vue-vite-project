<template>
  <div class="w-[1480px] min-h-[2916px] bg-[#EFEFEF] mx-auto mt-6 rounded-[15px] p-[40px] mt-[30px] mb-[30px]"> 


    <div class="flex items-center justify-between gap-[20px] flex-wrap">
        <div class="flex items-center gap-[20px] flex-wrap">

            <div class="relative ">
<img src="../assets/search.png" alt="geo" width="18" height="18" class="absolute left-[17px] top-1/2 transform -translate-y-1/2 ">

      <input
        v-model="search"
        type="text"
        placeholder="Поиск"
        class="flex-1 w-full max-w-[241px] pl-[46px] px-4 py-2 rounded-md focus:outline-none h-[40px] placeholder-[#D86B79] "
        
      />
            </div>

      <!-- Кнопки -->
        <button class="bg-white px-[20px] py-[10px] rounded-[5px] ">Все</button>
        <button class="">Платные</button>
        <button class="">Бесплатные</button>   
        </div>

<button class="flex items-center justify-between bg-white px-[20px] py-[10px] rounded-[5px] ml-[20px]">
  <span class="mr-[10px]">На карте</span>
  <img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
</button>

          
    </div>

<!-- главный нахуй -->
        <div class="flex gap-[40px] w-[1400px] mx-auto mt-[20px]">

    <!-- Левая часть — карточки -->
  <div class="w-[1030px]">
    <h1 class="font-semibold text-[24px] font-montserrat ">Силовой спорт</h1>
    
    <div class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px] ">
          <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
          <button class="absolute top-[20px] right-[20px] bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px]  text-[14px]">
      Бесплатно
    </button>
  <img src="../assets/imagecart.png" alt="geo" width="200" height="200" class="mr-[10px]">
  <div class="block ">
    <h1 class="font-semibold text-[16px] font-montserrat ">
  Тяжелая атлетика<br>
  (в Юбилейном мкр.)
</h1>
    <p class="text-[14px] mt-[10px] text-[#D86B79] font-montserrat">#Тяжелая атлетика</p>
    <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/userpng.png" alt="geo" width="18" height="18">
    <span class="text-[16px] " >10 – 18 лет</span>
    </div>

        <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/xzshto.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">г. Иркутск, Юбилейный мкр., стр. 49/1</span>
    </div>
    
            <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">ФОК "Юбилейный"</span>
    </div>
    
                <div class="flex items-center gap-[10px] ">
     
<img src="../assets/clock.png" alt="geo" width="18" height="18">
    <span class="text-[16px] font-medium ">Пн, Ср, Пт</span>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 09:00 - 10:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 12:00 - 13:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 18:00 - 19:30</button>
    </div>
    
  </div>
      <button class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F] ">Подробнее</button>

</div>


<!-- блок №2 -->
    <div class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px] ">
          <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
          <div class="absolute top-[20px] right-[20px] flex gap-[10px]">
         
        </div>
  <div class="absolute top-[20px] right-[20px] flex gap-[20px]">
    <button class=" top-[20px] right-[20px] bg-white border border-[#D86B79] text-black px-[15px] py-[5px] rounded-[8px]  text-[12px] font-semibold">Первое бесплатно</button>
    <button class=" top-[20px] right-[20px] bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px]  text-[14px]">500 руб.</button>
    
  </div>
  <img src="../assets/imagecart.png" alt="geo" width="200" height="200" class="mr-[10px]">
  <div class="block ">
    <h1 class="font-semibold text-[16px] font-montserrat ">
  Тяжелая атлетика<br>
  (на ул. Боткина)
</h1>
    <p class="text-[14px] mt-[10px] text-[#D86B79] font-montserrat">#Тяжелая атлетика</p>
    <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/userpng.png" alt="geo" width="18" height="18">
    <span class="text-[16px] " >10 – 18 лет</span>
    </div>

        <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/xzshto.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">г. Иркутск, Юбилейный мкр., стр. 49/1</span>
    </div>
    
            <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">ФОК "Юбилейный"</span>
    </div>
    
                <div class="flex items-center gap-[10px] ">
     
<img src="../assets/clock.png" alt="geo" width="18" height="18">
    <span class="text-[16px] font-medium ">Пн, Ср, Пт</span>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 09:00 - 10:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 12:00 - 13:30</button>
    
    </div>
    
  </div>
      <button class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F] ">Подробнее</button>

</div>


<!-- блок №3 -->
    <div class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px] ">
          <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
  <div class="absolute top-[20px] right-[20px] flex gap-[20px]">
    <button class=" top-[20px] right-[20px] bg-white border border-[#D86B79] text-black px-[15px] py-[5px] rounded-[8px]  text-[12px] font-semibold">Первое бесплатно</button>
    <button class=" top-[20px] right-[20px] bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px]  text-[14px]">3200 руб. 8 занятий</button>
    
  </div>
  <img src="../assets/imagecart.png" alt="geo" width="200" height="200" class="mr-[10px]">
  <div class="block ">
    <h1 class="font-semibold text-[16px] font-montserrat ">
  Тяжелая атлетика<br>
  (на ул. Норильской)
</h1>
    <p class="text-[14px] mt-[10px] text-[#D86B79] font-montserrat">#Тяжелая атлетика</p>
    <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/userpng.png" alt="geo" width="18" height="18">
    <span class="text-[16px] " >10 – 18 лет</span>
    </div>

        <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/xzshto.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">г. Иркутск, Юбилейный мкр., стр. 49/1</span>
    </div>
    
            <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">ФОК "Юбилейный"</span>
    </div>
    
                <div class="flex items-center gap-[10px] ">
     
<img src="../assets/clock.png" alt="geo" width="18" height="18">
    <span class="text-[16px] font-medium ">Пн, Ср, Пт</span>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 09:00 - 10:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 12:00 - 13:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 18:00 - 19:30</button>
    </div>
    
  </div>
      <button class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F] ">Подробнее</button>

</div>



<!-- блок №4 -->
    <div class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px] ">
          <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
          <button class="absolute top-[20px] right-[20px] bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px]  text-[14px]">
      Бесплатно
    </button>
  <img src="../assets/imagecart.png" alt="geo" width="200" height="200" class="mr-[10px]">
  <div class="block ">
    <h1 class="font-semibold text-[16px] font-montserrat ">
 Пауэрлифтинг
</h1>
    <p class="text-[14px] mt-[15px] text-[#D86B79] font-montserrat">#Пауэрлифтинг</p>
    <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/userpng.png" alt="geo" width="18" height="18">
    <span class="text-[16px] " >10 – 18 лет</span>
    </div>

        <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/xzshto.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">г. Иркутск, Юбилейный мкр., стр. 49/1</span>
    </div>
    
            <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">ФОК "Юбилейный"</span>
    </div>
    
                <div class="flex items-center gap-[10px] ">
     
<img src="../assets/clock.png" alt="geo" width="18" height="18">
    <span class="text-[16px] font-medium ">Пн, Ср, Пт</span>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 09:00 - 10:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 12:00 - 13:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 18:00 - 19:30</button>
    </div>
    
  </div>
      <button class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F] ">Подробнее</button>

</div>

<!-- Единоборства -->
<h1 class="font-semibold text-[24px] font-montserrat mt-[20px] ">Единоборства</h1>
    
    <div class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px] ">
          <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
          <button class="absolute top-[20px] right-[20px] bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px]  text-[14px]">
      Бесплатно
    </button>
  <img src="../assets/imagecart.png" alt="geo" width="200" height="200" class="mr-[10px]">
  <div class="block ">
    <h1 class="font-semibold text-[16px] font-montserrat ">
Дзюдо
</h1>
    <p class="text-[14px] mt-[15px] text-[#D86B79] font-montserrat">#Дзюдо</p>
    <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/userpng.png" alt="geo" width="18" height="18">
    <span class="text-[16px] " >6 – 18 лет</span>
    </div>

        <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/xzshto.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">г Иркутск, ул Трудовая, д 115А</span>
    </div>
    
            <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">СК "Вымпел"</span>
    </div>
    
                <div class="flex items-center gap-[10px] ">
     
<img src="../assets/clock.png" alt="geo" width="18" height="18">
    <span class="text-[16px] font-medium ">Пн, Ср, Пт</span>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 09:00 - 10:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 12:00 - 13:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 18:00 - 19:30</button>
    </div>
    
  </div>
      <button class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F] ">Подробнее</button>

</div>

    <div class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px] ">
          <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
  <div class="absolute top-[20px] right-[20px] flex gap-[20px]">
    <button class=" top-[20px] right-[20px] bg-white border border-[#D86B79] text-black px-[15px] py-[5px] rounded-[8px]  text-[12px] font-semibold">Первое бесплатно</button>
    <button class=" top-[20px] right-[20px] bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px]  text-[14px]">3200 руб. месяц</button>
    
  </div>
  <img src="../assets/imagecart.png" alt="geo" width="200" height="200" class="mr-[10px]">
  <div class="block ">
    <h1 class="font-semibold text-[16px] font-montserrat ">
  Вольная борьба <br>
  (на ул. Норильская)
</h1>
    <p class="text-[14px] mt-[10px] text-[#D86B79] font-montserrat">#Тяжелая атлетика</p>
    <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/userpng.png" alt="geo" width="18" height="18">
    <span class="text-[16px] " >6 – 18 лет</span>
    </div>

        <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/xzshto.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">г. Иркутск, Юбилейный мкр., стр. 49/1</span>
    </div>
    
            <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">ФОК "Юбилейный"</span>
    </div>
    
                <div class="flex items-center gap-[10px] ">
     
<img src="../assets/clock.png" alt="geo" width="18" height="18">
    <span class="text-[16px] font-medium ">Пн, Ср, Пт</span>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 09:00 - 10:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 12:00 - 13:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 18:00 - 19:30</button>
    </div>
    
  </div>
      <button class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F] ">Подробнее</button>

</div>
<h1 class="font-semibold text-[24px] font-montserrat mt-[20px] ">Единоборства</h1>
    
    <div class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px] ">
          <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
          <button class="absolute top-[20px] right-[20px] bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px]  text-[14px]">
      Бесплатно
    </button>
  <img src="../assets/imagecart.png" alt="geo" width="200" height="200" class="mr-[10px]">
  <div class="block ">
    <h1 class="font-semibold text-[16px] font-montserrat ">
Дзюдо
</h1>
    <p class="text-[14px] mt-[15px] text-[#D86B79] font-montserrat">#Дзюдо</p>
    <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/userpng.png" alt="geo" width="18" height="18">
    <span class="text-[16px] " >6 – 18 лет</span>
    </div>

        <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/xzshto.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">г Иркутск, ул Трудовая, д 115А</span>
    </div>
    
            <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">СК "Вымпел"</span>
    </div>
    
                <div class="flex items-center gap-[10px] ">
     
<img src="../assets/clock.png" alt="geo" width="18" height="18">
    <span class="text-[16px] font-medium ">Пн, Ср, Пт</span>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 09:00 - 10:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 12:00 - 13:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 18:00 - 19:30</button>
    </div>
    
  </div>
      <button class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F] ">Подробнее</button>

</div>


    
    <div class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px] ">
          <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
          <button class="absolute top-[20px] right-[20px] bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px]  text-[14px]">
      3200 руб. месяц
    </button>
  <img src="../assets/imagecart.png" alt="geo" width="200" height="200" class="mr-[10px]">
  <div class="block ">
    <h1 class="font-semibold text-[16px] font-montserrat ">
Вольная борьба <br>
(на ул. Норильская)
</h1>
    <p class="text-[14px] mt-[15px] text-[#D86B79] font-montserrat">#Дзюдо</p>
    <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/userpng.png" alt="geo" width="18" height="18">
    <span class="text-[16px] " >6 – 18 лет</span>
    </div>

        <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/xzshto.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">г Иркутск, ул Трудовая, д 115А</span>
    </div>
    
            <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">СК "Вымпел"</span>
    </div>
    
                <div class="flex items-center gap-[10px] ">
     
<img src="../assets/clock.png" alt="geo" width="18" height="18">
    <span class="text-[16px] font-medium ">Пн, Ср, Пт</span>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 09:00 - 10:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 12:00 - 13:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 18:00 - 19:30</button>
    </div>
    
  </div>
      <button class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F] ">Подробнее</button>

</div>
<h1 class="font-semibold text-[24px] font-montserrat mt-[20px] ">Единоборства</h1>
    
    <div class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px] ">
          <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
          <button class="absolute top-[20px] right-[20px] bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px]  text-[14px]">
      Бесплатно
    </button>
  <img src="../assets/imagecart.png" alt="geo" width="200" height="200" class="mr-[10px]">
  <div class="block ">
    <h1 class="font-semibold text-[16px] font-montserrat ">
Дзюдо
</h1>
    <p class="text-[14px] mt-[15px] text-[#D86B79] font-montserrat">#Дзюдо</p>
    <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/userpng.png" alt="geo" width="18" height="18">
    <span class="text-[16px] " >6 – 18 лет</span>
    </div>

        <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/xzshto.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">г Иркутск, ул Трудовая, д 115А</span>
    </div>
    
            <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">СК "Вымпел"</span>
    </div>
    
                <div class="flex items-center gap-[10px] ">
     
<img src="../assets/clock.png" alt="geo" width="18" height="18">
    <span class="text-[16px] font-medium ">Пн, Ср, Пт</span>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 09:00 - 10:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 12:00 - 13:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 18:00 - 19:30</button>
    </div>
    
  </div>
      <button class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F] ">Подробнее</button>

</div>
  <div class="relative flex w-[1030px] h-[240px] bg-white p-[20px] rounded-[5px] mt-[20px] ">
          <div class="absolute top-0 left-0 w-full h-[4px] bg-[#70232F] rounded-t-[35px]"></div>
  <div class="absolute top-[20px] right-[20px] flex gap-[20px]">
    <button class=" top-[20px] right-[20px] bg-white border border-[#D86B79] text-black px-[15px] py-[5px] rounded-[8px]  text-[12px] font-semibold">Первое бесплатно</button>
    <button class=" top-[20px] right-[20px] bg-[#D86B79] text-white px-[15px] py-[5px] rounded-[8px]  text-[14px]">3200 руб. 8 занятий</button>
    
  </div>
  <img src="../assets/imagecart.png" alt="geo" width="200" height="200" class="mr-[10px]">
  <div class="block ">
    <h1 class="font-semibold text-[16px] font-montserrat ">
  Вольная борьба<br>
  (на ул. Норильская)
</h1>
    <p class="text-[14px] mt-[10px] text-[#D86B79] font-montserrat">#Тяжелая атлетика</p>
    <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/userpng.png" alt="geo" width="18" height="18">
    <span class="text-[16px] " >10 – 18 лет</span>
    </div>

        <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/xzshto.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">г. Иркутск, Юбилейный мкр., стр. 49/1</span>
    </div>
    
            <div class="flex items-center gap-[10px] mt-[5px]">
     
<img src="../assets/locationpointer_83774 1.png" alt="geo" width="18" height="18">
    <span class="text-[16px] ">ФОК "Юбилейный"</span>
    </div>
    
                <div class="flex items-center gap-[10px] ">
     
<img src="../assets/clock.png" alt="geo" width="18" height="18">
    <span class="text-[16px] font-medium ">Пн, Ср, Пт</span>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 09:00 - 10:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 12:00 - 13:30</button>
    <button class="ml-[10px] text-[14px] px-[10px] py-[4px] rounded-[5px] bg-[#F7DAAB]"> 18:00 - 19:30</button>
    </div>
    
  </div>
      <button class="absolute bottom-[20px] right-[20px] text-[14px] text-white px-[20px] py-[10px] rounded-[5px] bg-[#70232F] ">Подробнее</button>

</div>

  </div>

  <!-- Правая часть — фильтры -->
  <div class="w-[330px]">
    <h1 class="font-semibold text-[24px] font-montserrat">Фильтры</h1>
  </div>
    </div>


  </div>
</template>