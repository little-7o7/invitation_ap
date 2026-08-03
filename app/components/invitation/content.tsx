import React from "react";

export type Language = "ru" | "en" | "uz" | "tj";

export const content = {
  ru: {
    guest: "Дорогой Гость",
    prefix: "Дорогой(ая)",
    langRu: "Русский",
    langEn: "English",
    langUz: "O'zбек",
    langtj: "Тоҷикӣ",
    weddingInvitation: "Приглашение на свадьбу",
    invited: "Приглашаем Вас на нашу свадьбу",
    scrollDown: "Прокрутите вниз",
    withJoy: "С радостью и любовью",
    specialMoment: "Настал особенный момент",
    inviteText:
      "С радостью приглашаем вас разделить с нами праздник нашей свадьбы — день, сотканный из любви, смеха и тепла самых важных людей.",
    quote: (
      <>
        Две души, одно сердце.
        <br />В этот день мы скажем &quot;да&quot; совместной жизни —<br />и
        хотим, чтобы вы были рядом с нами.
      </>
    ),
    time: "ВРЕМЯ",
    timeRemaining: "Осталось времени",
    untilWeSay: "До того, как мы скажем 'Да'",
    days: "Дней",
    hours: "Часов",
    mins: "Минут",
    secs: "Секунд",
    eventDetails: "Детали мероприятия",
    saveTheDate: "Сохраните дату",
    date: "Дата",
    dateValue: "15 августа",
    dateSub: "2026 · Суббота",
    day: "Суббота",
    timeLabel: "Время",
    timeValue: "19:00",
    timeSub: "Вечер",
    location: "Место",
    locationSub: "Самарканд",
    ourStory: "Наша история",
    momentsTogether: "Моменты вместе",
    theVenue: "Место проведения",
    venueDesc:
      "Расположенный в самом сердце древнего Самарканда, ресторан Amir предлагает элегантную обстановку, где узбекское гостеприимство сочетается с изысканным современным комфортом — пространство, такое же неподвластное времени, как и любовь, которую мы празднуем.",
    googleMaps: "Google Карты",
    yandexMaps: "Яндекс Карты",
    open: "Открыть",
    ourGratitude: "Наша благодарность",
    wishes: (
      <>
        Дорогие родные и друзья!
        <br />
        <br />
        С большой радостью приглашаем Вас разделить с нами один из самых важных и счастливых дней нашей жизни — день нашей свадьбы.
        <br />
        <br />
        Для нас будет огромной честью видеть Вас рядом в этот особенный вечер. Пусть он станет началом прекрасных воспоминаний, наполненных улыбками, искренними пожеланиями и радостью.
      </>
    ),
    venueFull: "Самарканд, Узбекистан  ·  Ресторан Amir",
    rsvpTitle: "БУДЕТЕ ЛИ ВЫ С НАМИ?",
    rsvpNameLabel: "Ваше имя",
    rsvpYes: "Да, с удовольствием!",
    rsvpNo: "К сожалению, не смогу",
    rsvpReasonLabel: "Укажите причину",
    rsvpSubmit: "Отправить",
    rsvpSuccess: "Спасибо! Ваш ответ отправлен.",
    rsvpError: "Произошла ошибка. Попробуйте снова.",
  },
  tj: {
    guest: "Меҳмони гиромӣ",
    prefix: "Муҳтарам",
    langRu: "Русский",
    langEn: "English",
    langUz: "O'zбек",
    langtj: "Тоҷикӣ",
    weddingInvitation: "Даъватномаи тӯй",
    invited: "Мо шуморо ба тӯйи худ даъват мекунем.",
    scrollDown: "Ба поён ҳаракат кунед",
    withJoy: "Бо шодӣ ва муҳаббат",
    specialMoment: "Лаҳзаи хосае фаро расидааст.",
    inviteText:
      "Мо шуморо бо каمالи хушнудӣ ба ҷашни арӯсии худ даъват менамоем — рӯзе, ки саршор аз муҳаббат, шодӣ ва гармии вуҷуди азизтаринҳост.",
    quote: (
      <>
        Ду ҷон, як дил.
        <br />Дар ин рӯз мо хоҳем гуфт &quot;ҳа&quot; зиндагии муштарак —<br />Ва мо мехоҳем, ки шумо бо мо бошед.
      </>
    ),
    time: "Вақт",
    timeRemaining: "Вақти боқимонда",
    untilWeSay: "Пеш аз он ки «ҳа» гӯем",
    days: "Рӯзҳо",
    hours: "Соатҳо",
    mins: "Дақиқаҳо",
    secs: "Сонияҳо",
    eventDetails: "Тафсилоти чорабинӣ",
    saveTheDate: "Санаро қайд кунед",
    date: "Сана",
    dateValue: "15-уми август",
    dateSub: "2026 · Шанбе",
    day: "Шанбе",
    timeLabel: "Вақт",
    timeValue: "19:00",
    timeSub: "Бегоҳ",
    location: "Ҷой",
    locationSub: "Самарқанд",
    ourStory: "Ҳикояи мо",
    momentsTogether: "Лаҳзаҳои якҷоя",
    theVenue: "Макон",
    venueDesc:
      "Ресторани «Амир», ки дар маркази Самарқанди бостонӣ ҷойгир аст, муҳити зебову бошукӯҳеро пешкаш мекунад; дар ин ҷо меҳмоннавозии ӯзбекӣ бо бароҳатии муосиру нозукона омезиш ёфтааст — маконе, ки мисли ишқи мо ҷовидонӣ ва безамон аст.",
    googleMaps: "Google Карты",
    yandexMaps: "Яндекс Карты",
    open: "Кушодан",
    ourGratitude: "Изҳори сипоси мо",
    wishes: (
      <>
        Хешу табор ва дӯстони азиз!
        <br />
        <br />
        Бо камоли эҳтиром Шуморо ба рӯзи арӯсии худ даъват менамоем.
        <br />
        <br />
        Ҳузури Шумо дар ин рӯзи фаромӯшнашаванда барои мо боиси ифтихор ва шодии бузург хоҳад буд. Биёед ин лаҳзаҳои зеборо якҷоя ҷашн гирем.
      </>
    ),
    venueFull: "Самарканд, Узбекистон Ресторан Амир",
    rsvpTitle: "Оё шумо бо мо хоҳед буд?",
    rsvpNameLabel: "Номи шумо",
    rsvpYes: "Бале, бо камоли майл!",
    rsvpNo: "Мутаассифона, ман наметавонам.",
    rsvpReasonLabel: "Сабабро мушаххас кунед.",
    rsvpSubmit: "Фиристодан",
    rsvpSuccess: "Ташаккур! Ҷавоби шумо фиристода шуд.",
    rsvpError: "Хатогӣ рух дод. Лутфан, дубора кӯшиш кунед.",
  },
  en: {
    guest: "Dear Guest",
    prefix: "Dear",
    langRu: "Русский",
    langEn: "English",
    langUz: "O'zbek",
    langtj: "Тоҷикӣ",
    weddingInvitation: "Wedding Invitation",
    invited: "You are cordially invited",
    scrollDown: "Scroll down",
    withJoy: "With Joy & Love",
    specialMoment: "A special moment has arrived",
    inviteText:
      "We gladly invite you to share with us the celebration of our wedding - a day woven from love, laughter and warmth of the most important people.",
    quote: (
      <>
        Two souls, one heart.
        <br />
        On this day we say yes to a lifetime together —<br />
        and we want you right here beside us.
      </>
    ),
    time: "TIME",
    timeRemaining: "Time Remaining",
    untilWeSay: "Until We Say I Do",
    days: "Days",
    hours: "Hours",
    mins: "Mins",
    secs: "Secs",
    eventDetails: "Event Details",
    saveTheDate: "Save the Date",
    date: "Date",
    dateValue: "15 August",
    dateSub: "2026 · Saturday",
    day: "Saturday",
    timeLabel: "Time",
    timeValue: "19:00",
    timeSub: "Evening",
    location: "Location",
    locationSub: "Samarkand",
    ourStory: "Our Story",
    momentsTogether: "Moments Together",
    theVenue: "The Venue",
    venueDesc:
      "Nestled in the heart of ancient Samarkand, Amir Restaurant offers an elegant setting where Uzbek warmth meets refined modern comfort — a space as timeless as the love we celebrate.",
    googleMaps: "Google Maps",
    yandexMaps: "Yandex Maps",
    open: "Open",
    ourGratitude: "Our Gratitude",
    wishes: (
      <>
        Dear Family and Friends,
        <br />
        <br />
        With great joy, we invite you to celebrate one of the most important and happiest days of our lives — our wedding day.
        <br />
        <br />
        It would be our greatest pleasure to have you with us as we begin this new chapter together. Your presence will make our celebration truly unforgettable.
      </>
    ),
    venueFull: "Samarkand, Uzbekistan  ·  Amir Restaurant",
    rsvpTitle: "WILL YOU BE WITH US?",
    rsvpNameLabel: "Your Name",
    rsvpYes: "Yes, with pleasure!",
    rsvpNo: "Unfortunately, I can't",
    rsvpReasonLabel: "Please state the reason",
    rsvpSubmit: "Send",
    rsvpSuccess: "Thank you! Your response has been sent.",
    rsvpError: "An error occurred. Please try again.",
  },
  uz: {
    guest: "Hurmatli Mehmon",
    prefix: "Hurmatli",
    langRu: "Русский",
    langEn: "English",
    langUz: "O'zbek",
    langtj: "Тоҷикӣ",
    weddingInvitation: "To'y taklifnomasi",
    invited: "Sizni to'yimizga taklif etamiz",
    scrollDown: "Pastga aylantiring",
    withJoy: "Quvonch va muhabbat bilan",
    specialMoment: "Ushbu maxsus kun yetib keldi",
    inviteText:
      "Biz siz azizlarni to‘yimiz quvonchini biz bilan baham ko‘rishga chin qalbdan taklif etamiz. Bu kun mehr, quvonch va yaqin insonlarning samimiyati bilan bezaladi.",
    quote: (
      <>
        Ikki qalb, bitta yurak.
        <br />
        Ushbu kunda biz butun umrga &quot;ha&quot; deymiz —<br />
        va bu damlarda siz biz bilan birga bo&apos;lishingizni xohlaymiz.
      </>
    ),
    time: "VAQT",
    timeRemaining: "Qolgan vaqt",
    untilWeSay: "To'yimizgacha",
    days: "Kun",
    hours: "Soat",
    mins: "Daqiqa",
    secs: "Soniya",
    eventDetails: "Marosim tafsilotlari",
    saveTheDate: "Kunni unutmang",
    date: "Sana",
    dateValue: "15-Avgust",
    dateSub: "2026 · Shanba",
    day: "Shanba",
    timeLabel: "Vaqt",
    timeValue: "19:00",
    timeSub: "Oqshom",
    location: "Manzil",
    locationSub: "Samarqand",
    ourStory: "Bizning hikoyamiz",
    momentsTogether: "Birgalikdagi damlar",
    theVenue: "Manzilimiz",
    venueDesc:
      "Qadimiy Samarqandning qoq markazida joylashgan Amir restorani sizga bejirim va qulay muhitni taqdim etadi — biz nishonlayotgan sevgi kabi vaqt o'tishiga qaram bo'lmagan makon.",
    googleMaps: "Google xaritalar",
    yandexMaps: "Yandex xaritalar",
    open: "Ochish",
    ourGratitude: "Bizning minnatdorchiligimiz",
    wishes: (
      <>
        Aziz oila a’zolari va qadrli do’stlar!
        <br />
        <br />
        Sizni hayotimizdagi eng quvonchli va unutilmas kun — toʻyimizga chin dildan taklif etamiz.
        <br />—
        <br />
        Ushbu baxtli kunimizda yonimizda bo’lishingiz biz uchun katta sharaf va quvonch bo’ladi. Keling, bu unutilmas lahzalarni birgalikda nishonlaylik.
      </>
    ),
    venueFull: "Samarqand, O'zbekiston  ·  Amir restorani",
    rsvpTitle: "BIZ BILAN BO'LASIZMI?",
    rsvpNameLabel: "Ismingiz",
    rsvpYes: "Ha, bajonidil!",
    rsvpNo: "Afsuski, kela olmayman",
    rsvpReasonLabel: "Sababini ko'rsating",
    rsvpSubmit: "Yuborish",
    rsvpSuccess: "Rahmat! Javobingiz yuborildi.",
    rsvpError: "Xatolik yuz berdi. Qayta urinib ko'ring.",
  },
};

export type Translations = typeof content.en;
