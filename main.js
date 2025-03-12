const latinToCyrillicMap = {
    a: "а",
    b: "б",
    c: "ц",
    č: "ч",
    ć: "ћ",
    d: "д",
    x: "џ",
    đ: "ђ",
    e: "е",
    f: "ф",
    g: "г",
    h: "х",
    i: "и",
    j: "ј",
    k: "к",
    l: "л",
    q: "љ",
    m: "м",
    n: "н",
    w: "њ",
    o: "о",
    p: "п",
    r: "р",
    s: "с",
    š: "ш",
    t: "т",
    u: "у",
    v: "в",
    z: "з",
    ž: "ж",

    A: "А",
    B: "Б",
    C: "Ц",
    Č: "Ч",
    Ć: "Ћ",
    D: "Д",
    X: "Џ",
    Đ: "Ђ",
    E: "Е",
    F: "Ф",
    G: "Г",
    H: "Х",
    I: "И",
    J: "Ј",
    K: "К",
    L: "Л",
    Q: "Љ",
    M: "М",
    N: "Н",
    W: "Њ",
    O: "О",
    P: "П",
    R: "Р",
    S: "С",
    Š: "Ш",
    T: "Т",
    U: "У",
    V: "В",
    Z: "З",
    Ž: "Ж",
};

const allowedWords = [
    "бетон",
    "сукња",
    "цртач",
    "љуска",
    "врлет",
    "помно",
    "много",
    "стрмо",
    "ризла",
    "фењер",
    "успут",
    "карат",
    "тракт",
    "мокро",
    "хриди",
    "њушка",
    "црвен",
    "седам",
    "шљака",
    "књига",
    "бацач",
    "балав",
    "пасус",
    "врећа",
    "листа",
    "чежња",
    "дрчно",
    "сурла",
    "гурач",
    "оштро",
    "речко",
    "уклет",
    "гудач",
    "дрвен",
    "супер",
    "варош",
    "дечко",
    "ђубре",
    "етажа",
    "жарач",
    "звоно",
    "искра",
    "јунак",
    "крило",
    "лабуд",
    "метак",
    "накит",
    "осмех",
    "петак",
    "рубин",
    "скроб",
    "тотем",
    "ћумур",
    "убрус",
    "федер",
    "јелен",
    "лимун",
    "намет",
    "плима",
    "разум",
    "самит",
    "тиква",
    "успон",
    "харфа",
    "црнац",
    "чопор",
    "шебој",
    "агава",
    "ветар",
    "глава",
    "дирка",
    "ђувеч",
    "еклер",
    "живот",
    "занат",
    "исток",
    "хотел",
    "челик",
    "шатор",
    "атлас",
    "бокал",
    "ватра",
    "галеб",
    "длака",
    "ђакон",
    "жетон",
    "запис",
    "исказ",
    "кувар",
    "левак",
    "мозак",
    "нотес",
    "отпор",
    "песак",
    "робот",
    "авион",
    "бајка",
    "варка",
    "грозд",
    "дуван",
    "естет",
    "жилет",
    "икона",
    "језик",
    "конац",
    "Мачка",
    "налог",
    "опера",
    "пилав",
    "рукав",
    "сапун",
    "трава",
    "услов",
    "фокус",
    "јасен",
    "корак",
    "лутка",
    "млеко",
    "норма",
    "памет",
    "мечка",
    "сомот",
    "тенис",
    "ћерка",
    "устав",
    "фазан",
    "химна",
    "целер",
    "шешир",
    "албум",
    "бунар",
    "гајка",
    "насип",
    "освит",
    "рачва",
    "сидро",
    "твист",
    "ћурка",
    "узрок",
    "форум",
    "харем",
    "циста",
    "чекрк",
    "штука",
    "балон",
    "вагон",
    "грива",
    "долар",
    "етика",
    "закон",
    "ирвас",
    "храна",
    "цимер",
    "чизма",
    "аванс",
    "барел",
    "визир",
    "гумар",
    "екран",
    "жакет",
    "залив",
    "јесен",
    "креда",
    "ланац",
    "молер",
    "нотар",
    "рабин",
    "аспик",
    "бурек",
    "влада",
    "голаћ",
    "добош",
    "ђерам",
    "ексер",
    "жипон",
    "замор",
    "извор",
    "јутро",
    "киоск",
    "лахор",
    "мотор",
    "најам",
    "осица",
    "пасош",
    "седеф",
    "улица",
    "јечам",
    "калем",
    "лабос",
    "новац",
    "обред",
    "ротор",
    "флека",
    "школа",
    "акорд",
    "бадем",
    "вепар",
    "порез",
    "радар",
    "серум",
    "ћуран",
    "увала",
    "фикус",
    "шаран",
    "бабун",
    "горан",
    "душек",
    "чесма",
    "штета",
    "восак",
    "гуска",
    "даска",
    "ишлер",
    "колач",
    "лотос",
    "нокат",
    "ормар",
    "проба",
    "балет",
    "екипа",
    "лимар",
    "нарав",
    "обала",
    "пуфна",
    "стена",
    "трема",
    "успех",
    "јасле",
    "котур",
    "мрест",
    "начин",
    "покер",
    "ракун",
    "сплет",
    "тунел",
    "ћилим",
    "ускок",
    "фарма",
    "цимет",
    "читач",
    "барка",
    "назив",
    "олово",
    "потез",
    "ребус",
    "сутон",
    "трака",
    "фетус",
    "хајка",
    "благо",
    "време",
    "глума",
    "длето",
    "зубун",
    "цекин",
    "човек",
    "донор",
    "епоха",
    "зебра",
    "ивица",
    "кечап",
    "ликра",
    "отказ",
    "пораз",
    "радио",
    "брада",
    "врата",
    "жамор",
    "злато",
    "јарак",
    "капут",
    "мајка",
    "оклоп",
    "ручак",
    "силос",
    "точак",
    "гусан",
    "дамар",
    "завет",
    "избор",
    "Козак",
    "лишај",
    "месец",
    "оглас",
    "просо",
    "рекет",
    "сонет",
    "торба",
    "цигла",
    "четка",
    "излет",
    "ковач",
    "ласер",
    "месар",
    "нитна",
    "облак",
    "пилот",
    "секта",
    "ћуфте",
    "упала",
    "чокот",
    "шевар",
    "акита",
    "барут",
    "расол",
    "склад",
    "тенор",
    "флота",
    "цуцла",
    "череп",
    "шодер",
    "брука",
    "грађа",
    "динар",
    "зурла",
    "калуп",
    "ласта",
    "хумус",
    "црква",
    "шумар",
    "брест",
    "волан",
    "гргеч",
    "дабар",
    "жабац",
    "канта",
    "лента",
    "мурва",
    "нерад",
    "евнух",
    "зидар",
    "мотел",
    "отпад",
    "перон",
    "ролат",
    "слово",
    "табор",
    "ћитаб",
    "факин",
    "зубар",
    "исход",
    "мачак",
    "невен",
    "рогач",
    "сусам",
    "тифус",
    "фрула",
    "шнала",
    "врана",
    "ратар",
    "сомун",
    "тапир",
    "фишек",
    "чорак",
    "севар",
    "арена",
    "велур",
    "галоп",
    "долап",
    "змија",
    "излог",
    "јарам",
    "кедар",
    "лепак",
    "бреза",
    "гепек",
    "јакна",
    "крава",
    "мамут",
    "напон",
    "орбит",
    "грана",
    "дечак",
    "жезло",
    "залог",
    "јелек",
    "лопта",
    "орден",
    "полип",
    "тацна",
    "чекић",
    "јадро",
    "кловн",
    "лемур",
    "неред",
    "пекар",
    "рикша",
    "труба",
    "цуран",
    "факат",
    "чигра",
    "аутор",
    "пелат",
    "рерна",
    "скала",
    "чунак",
    "астал",
    "батак",
    "вазал",
    "греда",
    "јавор",
    "круна",
    "драго",
    "лажно",
    "болно",
    "бушно",
    "цитра",
    "чавка",
    "бизон",
    "вергл",
    "датив",
    "ждрал",
    "зарез",
    "имела",
    "лупус",
    "оркан",
    "јунац",
    "краба",
    "напад",
    "оникс",
    "замка",
    "идиом",
    "корен",
    "осека",
    "талог",
    "усхит",
    "факир",
    "химен",
    "цваст",
    "анфас",
    "брлог",
    "удица",
    "цирка",
    "базен",
    "бонус",
    "жубор",
    "капак",
    "лишће",
    "палма",
    "чабар",
    "шамот",
    "еснаф",
    "жетва",
    "кајак",
    "лотра",
    "мицна",
    "опека",
    "пушка",
    "рафал",
    "салса",
    "замах",
    "коала",
    "мисао",
    "несит",
    "тачка",
    "фарба",
    "хрчак",
    "цегер",
    "черга",
    "лопов",
    "маска",
    "рокер",
    "сунце",
    "трска",
    "фагот",
    "штака",
    "брава",
    "текст",
    "белег",
    "голуб",
    "жаока",
    "идеја",
    "носач",
    "ловац",
    "орган",
    "поема",
    "жвака",
    "купус",
    "модро",
    "писац",
    "ризом",
    "сатир",
    "фазон",
    "шапка",
    "копач",
    "писмо",
    "копар",
    "ручка",
    "сатен",
    "транс",
    "фотка",
    "црнка",
    "апоен",
    "викар",
    "фалта",
    "цртеж",
    "чакра",
    "дошао",
    "шакал",
    "ајвар",
    "домар",
    "испит",
    "кибиц",
    "мелем",
    "бедем",
    "петао",
    "роман",
    "зенит",
    "јарац",
    "неман",
    "ровац",
    "траса",
    "учкур",
    "црево",
    "амеба",
    "канал",
    "летак",
    "олуја",
    "тимар",
    "храст",
    "шивач",
    "акреп",
    "гавез",
    "драма",
    "цитат",
    "шерпа",
    "галон",
    "дебло",
    "елита",
    "ингот",
    "јацеа",
    "колут",
    "народ",
    "блуза",
    "кофер",
    "модел",
    "надев",
    "рулет",
    "затон",
    "летва",
    "метла",
    "опело",
    "салаш",
    "топот",
    "утрка",
    "фарса",
    "арома",
    "лидер",
    "орман",
    "сокак",
    "ћитап",
    "уштап",
    "фијук",
    "хидра",
    "датум",
    "савет",
    "чорба",
    "штала",
    "бомба",
    "глина",
    "дрозд",
    "жохар",
    "јатак",
    "црвић",
    "вашар",
    "гозба",
    "згода",
    "јелка",
    "кубик",
    "марка",
    "потоп",
    "рампа",
    "еркер",
    "лавор",
    "рутер",
    "север",
    "шунка",
    "кумин",
    "пласт",
    "слава",
    "талас",
    "украс",
    "цепин",
    "чобан",
    "видра",
    "собар",
    "чилаш",
    "вивак",
    "јерес",
    "карта",
    "лонац",
    "мрежа",
    "чичак",
    "шерет",
    "буква",
    "метал",
    "октет",
    "пакет",
    "кулен",
    "отпис",
    "рибар",
    "тикет",
    "ћевап",
    "футур",
    "шарка",
    "кутак",
    "порок",
    "табла",
    "влага",
    "слика",
    "терет",
    "аорта",
    "журка",
    "индус",
    "шипка",
    "весло",
    "гулаш",
    "дулек",
    "јадац",
    "мопед",
    "посао",
    "радно",
    "замак",
    "малер",
    "отров",
    "патка",
    "углед",
    "чудак",
    "џезва",
    "манир",
    "оквир",
    "право",
    "фелер",
    "шећер",
    "визон",
    "илеус",
    "лосос",
    "метар",
    "хокеј",
    "чипка",
    "вихор",
    "жижак",
    "клада",
    "едикт",
    "образ",
    "тигар",
    "циник",
    "конак",
    "нагон",
    "танго",
    "шофер",
    "фосил",
    "цеста",
    "вазна",
    "декор",
    "живац",
    "логор",
    "морон",
    "шибер",
    "басна",
    "откос",
    "понос",
    "идиот",
    "одрон",
    "стент",
    "труст",
    "улога",
    "измет",
    "масон",
    "орион",
    "палац",
    "рудар",
    "висак",
    "форма",
    "хорда",
    "штека",
    "битка",
    "вашка",
    "зајам",
    "кефир",
    "чамац",
    "антре",
    "женка",
    "лутак",
    "момак",
    "олтар",
    "попис",
    "запад",
    "клима",
    "модем",
    "плата",
    "рачун",
    "сукоб",
    "џокер",
    "домен",
    "тегла",
    "штрас",
    "етида",
    "цифра",
    "завод",
    "ђуска",
    "зумба",
    "орада",
    "песма",
    "локал",
    "ранац",
    "степа",
    "тезга",
    "алеја",
    "бутик",
    "бакар",
    "еспап",
    "шамар",
    "бохор",
    "товар",
    "чемер",
    "навод",
    "тепих",
    "стока",
    "гусле",
    "догма",
    "ензим",
    "корпа",
    "алиби",
    "винил",
    "ебола",
    "манго",
    "емајл",
    "мамац",
    "омлет",
    "полет",
    "тонус",
    "редов",
    "сепет",
    "табан",
    "мохер",
    "шајка",
    "април",
    "гекон",
    "дорат",
    "ибрик",
    "литар",
    "ореол",
    "паста",
    "родео",
    "кокос",
    "панел",
    "сируп",
    "ћуфта",
    "ислам",
    "крема",
    "рецка",
    "титан",
    "поток",
    "чувар",
    "гесло",
    "фешта",
    "цекер",
    "валов",
    "говор",
    "округ",
    "лагер",
    "магла",
    "напор",
    "окрет",
    "слама",
    "камен",
    "ларва",
    "папир",
    "рабат",
    "темпо",
    "веста",
    "плоча",
    "тромб",
    "видик",
    "жалба",
    "анђео",
    "лажов",
    "метро",
    "облик",
    "класа",
    "цивил",
    "извоз",
    "склоп",
    "утеха",
    "божур",
    "терен",
    "уздах",
    "газда",
    "ловор",
    "ампер",
    "нанос",
    "срећа",
    "клупа",
    "софра",
    "тајга",
    "вокал",
    "рестл",
    "много",
    "многи",
    "ћорак",
    "гумно",
    "колос",
    "шутер",
    "канап",
    "пошта",
    "сетер",
    "уплив",
    "одмор",
    "ћумез",
    "аргон",
    "букет",
    "кугла",
    "бреме",
    "дирек",
    "опрез",
    "поноћ",
    "снага",
    "фраза",
    "мотив",
    "регал",
    "тутор",
    "печат",
    "сајам",
    "лежај",
    "доказ",
    "етапа",
    "салдо",
    "резус",
    "брига",
    "вијак",
    "геном",
    "дубак",
    "веган",
    "одаја",
    "олива",
    "сачма",
    "потаж",
    "синус",
    "узвик",
    "херој",
    "возач",
    "рагби",
    "ускрс",
    "цокла",
    "амбис",
    "блато",
    "глоба",
    "утока",
    "черек",
    "гелер",
    "коров",
    "самар",
    "ћошак",
    "хорор",
    "сафир",
    "таван",
    "врста",
    "створ",
    "алгин",
    "бехар",
    "афера",
    "мерак",
    "обруч",
    "рапир",
    "махер",
    "ревер",
    "сарач",
    "торта",
    "бурад",
    "вајар",
    "бегеш",
    "гајде",
    "епика",
    "кувас",
    "бивак",
    "јавка",
    "мидер",
    "гушче",
    "расад",
    "салон",
    "херба",
    "црева",
    "санта",
    "ћириш",
    "фиока",
    "вижла",
    "залет",
    "банда",
    "домет",
    "хамам",
    "јереј",
    "лелек",
    "врсан",
    "ритер",
    "пазух",
    "гибак",
    "бодеж",
    "витез",
    "играч",
    "немар",
    "пакао",
    "хобит",
    "износ",
    "кобац",
    "мирис",
    "пајац",
    "хумор",
    "ископ",
    "камин",
    "лекар",
    "будак",
    "дугме",
    "клише",
    "мазут",
    "сифон",
    "фирма",
    "окука",
    "хунта",
    "дебил",
    "кобра",
    "занос",
    "пупак",
    "бирач",
    "парип",
    "стопа",
    "брана",
    "гатер",
    "досег",
    "арија",
    "зомби",
    "ликер",
    "метеж",
    "проја",
    "спорт",
    "фетиш",
    "трзај",
    "волеј",
    "актер",
    "власт",
    "фрапе",
    "наука",
    "оглед",
    "тоцак",
    "фотон",
    "башта",
    "купон",
    "демон",
    "лујка",
    "повез",
    "тучак",
    "шипак",
    "асура",
    "глето",
    "кулов",
    "масло",
    "накот",
    "резач",
    "тукан",
    "ћурак",
    "шогор",
    "немир",
    "лакат",
    "музеј",
    "топуз",
    "један",
    "чиков",
    "губав",
    "лимит",
    "бисер",
    "десет",
    "колац",
    "машта",
    "ривал",
    "тетка",
    "флаша",
    "птица",
    "узлет",
    "граја",
    "квака",
    "одећа",
    "тајна",
    "гареж",
    "држач",
    "амбар",
    "дудук",
    "обест",
    "полен",
    "сарма",
    "ребро",
    "течај",
    "ризик",
    "сајла",
    "чоков",
    "дрмеш",
    "закоп",
    "злоба",
    "нугат",
    "ресор",
    "номад",
    "шанац",
    "савез",
    "харач",
    "еолит",
    "даире",
    "заова",
    "лагум",
    "полка",
    "спруд",
    "чарда",
    "шаман",
    "вишак",
    "шанса",
    "декан",
    "жмара",
    "коска",
    "водка",
    "казна",
    "лицеј",
    "пудер",
    "зубор",
    "завој",
    "лебац",
    "мачор",
    "пешак",
    "тинта",
    "бећар",
    "девер",
    "певач",
    "ћивот",
    "шаров",
    "винар",
    "јецај",
    "дувар",
    "машна",
    "ташна",
    "задах",
    "оскар",
    "плева",
    "пушач",
    "гусак",
    "чупав",
    "испад",
    "метан",
    "тајац",
    "крчаг",
    "позив",
    "лисје",
    "булка",
    "женик",
    "пацов",
    "рођак",
    "ћетен",
    "режим",
    "хвала",
    "дашак",
    "зилот",
    "казан",
    "пасив",
    "гусар",
    "зелот",
    "стрип",
    "тесар",
    "виски",
    "снаја",
    "ћутук",
    "јаран",
    "шапат",
    "гирос",
    "калфа",
    "сетва",
    "тарот",
    "бедро",
    "терор",
    "полог",
    "цајгл",
    "шарац",
    "жупан",
    "воћар",
    "ролка",
    "унија",
    "бечар",
    "комад",
    "ендем",
    "минер",
    "ирада",
    "јагње",
    "узгон",
    "навој",
    "салва",
    "унука",
    "фреза",
    "ништа",
    "багра",
    "атест",
    "једро",
    "гроза",
    "колар",
    "тумач",
    "чајка",
    "шојка",
    "рабош",
    "удаја",
    "анекс",
    "такси",
    "легло",
    "нацрт",
    "хусар",
    "идила",
    "седло",
    "аласи",
    "бибер",
    "кафић",
    "нишан",
    "рарог",
    "група",
    "дизна",
    "брзак",
    "дрека",
    "зипон",
    "барон",
    "векна",
    "пумпа",
    "спрат",
    "тапет",
    "хауба",
    "алкар",
    "гужва",
    "дукат",
    "сенка",
    "жбука",
    "лампа",
    "мотка",
    "ортак",
    "пехар",
    "лудак",
    "омица",
    "сквер",
    "зетон",
    "нудус",
    "ситар",
    "воћка",
    "сабор",
    "јамац",
    "цокна",
    "шетач",
    "мазга",
    "рогоз",
    "корал",
    "кадет",
    "чибук",
    "шериф",
    "хорна",
    "колан",
    "масер",
    "осврт",
    "ритам",
    "талон",
    "чочек",
    "багер",
    "везир",
    "гулаг",
    "лапот",
    "узгој",
    "прича",
    "смена",
    "гајба",
    "шурак",
    "логос",
    "страх",
    "дућан",
    "пожар",
    "одред",
    "томос",
    "борба",
    "пелин",
    "црпка",
    "излаз",
    "котао",
    "коцка",
    "фарад",
    "клема",
    "ретуш",
    "халва",
    "врело",
    "пелир",
    "лисац",
    "патак",
    "судар",
    "уштва",
    "чарка",
    "анкер",
    "место",
    "опран",
    "пегла",
    "кепец",
    "хумка",
    "чечен",
    "дршка",
    "цијук",
    "јагма",
    "намаз",
    "јахта",
    "пруга",
    "стрес",
    "ренде",
    "цилик",
    "бурма",
    "данак",
    "забит",
    "путар",
    "пегаз",
    "редар",
    "чиода",
    "аскер",
    "шкарт",
    "пород",
    "урнек",
    "зулум",
    "шегрт",
    "моном",
    "салто",
    "шахта",
    "шараф",
    "купац",
    "андол",
    "кости",
    "кадар",
    "кулак",
    "поруб",
    "сласт",
    "цурка",
    "хамер",
    "цубок",
    "гауда",
    "дезен",
    "елиса",
    "царић",
    "добос",
    "зигот",
    "писта",
    "дозна",
    "назеб",
    "истек",
    "огрев",
    "сукно",
    "узица",
    "атоми",
    "спуст",
    "алмум",
    "каста",
    "багет",
    "етнос",
    "поука",
    "дупин",
    "деран",
    "берза",
    "дурум",
    "пазар",
    "суфле",
    "морал",
    "пенал",
    "репер",
    "венац",
    "дрска",
    "жртва",
    "самац",
    "панда",
    "бокор",
    "ухода",
    "пркос",
    "лопар",
    "талац",
    "јахач",
    "лавеж",
    "јидиш",
    "анода",
    "бунда",
    "валер",
    "аерат",
    "друид",
    "бачва",
    "пепео",
    "аларм",
    "мурал",
    "добар",
    "обзир",
    "арсен",
    "канон",
    "испис",
    "ремен",
    "голет",
    "амаро",
    "ђулса",
    "кусур",
    "свест",
    "цекиц",
    "бараж",
    "иступ",
    "проза",
    "сквош",
    "оброк",
    "обрва",
    "плашт",
    "зазор",
    "колаж",
    "облог",
    "резон",
    "сплав",
    "шубер",
    "ослић",
    "базар",
    "ствар",
    "карма",
    "прело",
    "стадо",
    "сенат",
    "варан",
    "забат",
    "касир",
    "каћун",
    "никел",
    "пират",
    "флерт",
    "барок",
    "крчма",
    "калај",
    "откуп",
    "девет",
    "додир",
    "добит",
    "одмах",
    "мираз",
    "океан",
    "склек",
    "мином",
    "аскет",
    "минут",
    "кекец",
    "редут",
    "шпајз",
    "гарда",
    "јетра",
    "јуфка",
    "акрил",
    "жагор",
    "врпца",
    "тумор",
    "мошус",
    "одјек",
    "одело",
    "убица",
    "флора",
    "мућак",
    "веспа",
    "ногар",
    "патос",
    "утаја",
    "свила",
    "набоб",
    "толар",
    "гонич",
    "помоћ",
    "свећа",
    "табак",
    "сатор",
    "борац",
    "ходач",
    "морка",
    "струк",
    "флуид",
    "понор",
    "питон",
    "јемац",
    "сирће",
    "умеће",
    "ратно",
    "дојка",
    "журба",
    "зачин",
    "сленг",
    "мехур",
    "сорта",
    "одора",
    "прота",
    "нагиб",
    "хакер",
    "тисак",
    "имбус",
    "даске",
    "цвеће",
    "осама",
    "лигаш",
    "певац",
    "падеж",
    "јуриш",
    "отвор",
    "виола",
    "особа",
    "ћубан",
    "сеник",
    "довод",
    "алоја",
    "лапис",
    "трола",
    "ћушка",
    "часак",
    "насад",
    "топаз",
    "кавез",
    "бивол",
    "гинко",
    "гениј",
    "мерач",
    "идеал",
    "ефект",
    "жилав",
    "зефир",
    "копча",
    "акшам",
    "зозон",
    "прасе",
    "лугар",
    "одзив",
    "релеј",
    "ларма",
    "косач",
    "аверс",
    "хитац",
    "дилер",
    "могул",
    "лакеј",
    "слајс",
    "ципов",
    "ђогат",
    "набор",
    "перец",
    "кедер",
    "ретро",
    "кинта",
    "папак",
    "типка",
    "пацер",
    "рижот",
    "парче",
    "ћувик",
    "тонер",
    "чилим",
    "бутан",
    "порив",
    "којот",
    "рачве",
    "банка",
    "набој",
    "дођош",
    "ташта",
    "џихад",
    "епарх",
    "тегет",
    "излив",
    "наћве",
    "ропот",
    "повод",
    "ложач",
    "бином",
    "мишић",
    "цезар",
    "тираж",
    "ролна",
    "лонче",
    "нобел",
    "однос",
    "погон",
    "биста",
    "нимфа",
    "сусед",
    "шифра",
    "егзил",
    "јелеј",
    "капар",
    "бидон",
    "путер",
    "скела",
    "цвета",
    "извод",
    "такса",
    "кабал",
    "болид",
    "цевка",
    "чалма",
    "швепс",
    "куран",
    "ћесам",
    "слога",
    "давеж",
    "сокол",
    "лузер",
    "сухој",
    "немац",
    "купка",
    "обука",
    "молба",
    "тркач",
    "крађа",
    "наћос",
    "штене",
    "лепра",
    "зелен",
    "марва",
    "немоћ",
    "церка",
    "унуче",
    "нећак",
    "астма",
    "атика",
    "зулуф",
    "кебаб",
    "отава",
    "зидан",
    "нафта",
    "матор",
    "кулук",
    "стаза",
    "торзо",
    "изрод",
    "вапор",
    "омега",
    "писар",
    "слуга",
    "врбак",
    "локва",
    "сирак",
    "чедар",
    "зрака",
    "монах",
    "пређа",
    "кифла",
    "левча",
    "хипик",
    "посед",
    "инокс",
    "памук",
    "одраз",
    "аграр",
    "синод",
    "сокна",
    "терма",
    "урлик",
    "натег",
    "одвод",
    "преса",
    "рента",
    "сутра",
    "уцена",
    "загор",
    "диода",
    "зицер",
    "фосна",
    "бусен",
    "видео",
    "одбор",
    "талир",
    "крамп",
    "груда",
    "менза",
    "покус",
    "појас",
    "курир",
    "чудно",
    "локна",
    "кинез",
];

const getRandomWord = function (wordsArray) {
    if (localStorage.getItem("usedWords")) {
        usedWords = JSON.parse(localStorage.getItem("usedWords")) || [];
    }

    // Filter out already used words
    let availableWords = wordsArray.filter((word) => !usedWords.includes(word));

    if (availableWords.length === 0) {
        console.log("All words have been used.");
        alert("All words have been used.");
        return null; // No words left
    }

    // Pick a random word
    let randomIndex = Math.floor(Math.random() * availableWords.length);
    let chosenWord = availableWords[randomIndex];

    // Update localStorage
    usedWords.push(chosenWord);
    localStorage.setItem("usedWords", JSON.stringify(usedWords));

    return chosenWord;
};

const checkIfCharacterIsUsed = function (characterInputs) {
    const keyboardCharacterElements = document.querySelectorAll(
        ".game-keyboard__letter"
    );

    // Add used class that will gray out used letters in keyboard
    keyboardCharacterElements.forEach((keyboardCharacter) => {
        if (
            usedCharacters &&
            usedCharacters.includes(
                keyboardCharacter.textContent.trim().toLowerCase()
            )
        ) {
            keyboardCharacter.classList.add("used");
        }
    });

    // Check for character place inside current guess word
    Array.from(characterInputs).forEach((input, i) => {
        const userChar = input.value.toLowerCase();
        const correctChar = correctWord[i];

        if (userChar === correctChar) {
            keyboardCharacterElements.forEach((keyboardCharacter) => {
                if (
                    userChar ===
                    keyboardCharacter.textContent.trim().toLowerCase()
                ) {
                    keyboardCharacter.classList.add("correct");
                }
            });
            // keyboardCharacter.classList.add('correct')
        } else if (correctWord.includes(userChar)) {
            keyboardCharacterElements.forEach((keyboardCharacter) => {
                if (
                    userChar ===
                    keyboardCharacter.textContent.trim().toLowerCase()
                ) {
                    keyboardCharacter.classList.add("wrong");
                }
            });
        }
    });
};

const checkIfWordIsInTheList = function (word) {
    if (allowedWords.includes(word)) {
        return true;
    } else {
        return false;
    }
};

let score = 0;
let topScore = 0;

let usedWords = [];
let usedCharacters = [];

let correctWord = getRandomWord(allowedWords); // The word to guess

// Main

document.addEventListener("DOMContentLoaded", () => {
    localStorage.setItem("tries", 0);

    const inputFieldsWrapper = document.querySelector(
        ".game__characters-wrapper"
    );
    const inputFields = document.querySelectorAll("input.game__character");
    const submitButton = document.querySelector("button[js-btn-submit]");
    const deleteButton = document.querySelector("[js-btn-delete]");
    const keyboardButtons = document.querySelectorAll("[js-game-letter]");
    const gameTriesElement = document.querySelector("[js-game-tries]");
    const gameGuesses = document.querySelector(".game__guesses");
    const gameRewardWrapper = document.querySelector(".game-reward");

    const increaseTries = function () {
        const currentTries = Number(localStorage.getItem("tries"));
        localStorage.setItem("tries", currentTries + 1);
        gameTriesElement.textContent = localStorage.getItem("tries");
        userGuess = [];
    };

    const clearAllCharacterInputs = function () {
        inputFields.forEach((inputWordCharacter, i) => {
            inputWordCharacter.value = "";
        });
    };

    const focusFirstCharacterInput = function () {
        inputFields[0].focus();
    };

    const increaseScore = function () {
        const rewardScore = gameRewardWrapper.querySelector(
            ".game-reward__number"
        );
        const rewardIcon = gameRewardWrapper.querySelector(
            ".game-reward__item:not(.game-reward__item--stacked)"
        );

        const newRewardIcon = rewardIcon.cloneNode(true);
        newRewardIcon.classList.add("game-reward__item--stacked");

        score++;

        if (score > 1 && score < 4) {
            gameRewardWrapper.appendChild(newRewardIcon);
        }

        rewardScore.innerHTML = score;
        gameRewardWrapper.style.display = "flex";
    };

    /*
     * Starts new game. User can guess right and start new round
     * or loose and start new game from begining
     * @param endGame: boolean
     */

    const newGame = function (endGame) {
        clearAllCharacterInputs();
        focusFirstCharacterInput();

        localStorage.setItem("tries", 0);
        gameGuesses.innerHTML = "";
        inputFieldsWrapper.classList.remove("success", "error");
        usedCharacters = [];

        Array.from(keyboardButtons).forEach((el) => {
            el.classList.remove("used", "correct", "wrong");
        });

        gameTriesElement.textContent = localStorage.getItem("tries");
        correctWord = getRandomWord(allowedWords);

        console.log("correct word: ", correctWord);

        submitButton.setAttribute("disabled", true);

        if (endGame) {
            score = 0;
            const rewardIcons =
                gameRewardWrapper.querySelectorAll(".game-reward__item");
            rewardIcons.forEach((icon) => {
                if (icon.classList.contains("game-reward__item--stacked")) {
                    icon.remove();
                }
            });
            gameRewardWrapper.style.display = "none";
        }
    };

    let userGuess = [];

    focusFirstCharacterInput();

    /* Bind event listeners for character input fields
     ** On keydown set value to input and focus next element
     ** On input: handle backspace, check if word is allowed
     ** in game dictionary
     */

    Array.from(inputFields).forEach((inputWordCharacter, i) => {
        inputWordCharacter.addEventListener("keydown", function (e) {
            if (e.key == "Backspace") {
                userGuess[i] = "";
                inputWordCharacter.value = "";
                if (inputFields[i].previousElementSibling) {
                    inputFields[i].previousElementSibling.focus();
                }
            }

            if (e.key == "Enter") {
                submitButton.click();
                inputFields[0].focus();
            }
        });

        inputWordCharacter.addEventListener("input", function (e) {
            // this.value = e.target.value;

            if (latinToCyrillicMap[e.target.value]) {
                this.value = latinToCyrillicMap[e.target.value];
            }

            const charIndex = e.target.getAttribute("data-char-input");

            if (e.inputType === "deleteContentBackward") {
                // If backspace is pressed, stay on the current input
                userGuess[charIndex] = "";
            } else {
                // Ensure only one character is allowed
                this.value = this.value.charAt(0);
                userGuess[charIndex] = this.value;

                // Move to the next input if available
                if (this.value && this.nextElementSibling) {
                    this.nextElementSibling.focus();
                }
            }

            if (userGuess.length === 5) {
                const isWordAllowed = checkIfWordIsInTheList(
                    userGuess.join("")
                );

                if (isWordAllowed) {
                    inputFieldsWrapper.classList.remove("error");
                    inputFieldsWrapper.classList.add("success");
                    submitButton.removeAttribute("disabled");
                } else {
                    inputFieldsWrapper.classList.remove("success");
                    inputFieldsWrapper.classList.add("error");
                    submitButton.setAttribute("disabled", true);
                }
            }
        });
    });

    // Handles user submitting the word

    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        let userWord = userGuess.join("").trim();

        if (userWord.length !== 5) {
            alert(`Унесите реч од ${correctWord.length} слова.`);
            return;
        }

        const isWordAllowed = checkIfWordIsInTheList(userWord);

        if (isWordAllowed) {
            let result = "";

            let usedLetters = [];

            inputFields.forEach((input, index) => {
                const userChar = input.value.toLowerCase();

                const letterPosition = correctWord.indexOf(userChar);

                usedCharacters.push(userChar);

                checkIfCharacterIsUsed(inputFields);

                input.value = "";

                if (letterPosition === -1) {
                    result += `<div class="game__character">${userChar}</div>`; // Gray for incorrect character
                } else {
                    if (userChar === correctWord[index]) {
                        result += `<div class="game__character correct">${userChar}</div>`; // Green for correct character
                    } else {
                        if (
                            Array.from(correctWord).includes(userChar) &&
                            !usedLetters.includes(userChar)
                        ) {
                            usedLetters.push(userChar);
                            result += `<div class="game__character present">${userChar}</div>`; // Yellow for present character
                        } else {
                            result += `<div class="game__character">${userChar}</div>`;
                        }
                    }
                }
            });

            gameGuesses.innerHTML =
                `<div class="game__guess">${result}</div>` +
                gameGuesses.innerHTML;

            usedLetters = [];

            focusFirstCharacterInput();

            increaseTries();

            inputFieldsWrapper.classList.remove("success");
            inputFieldsWrapper.classList.remove("error");

            const modalWinHTML = `<h2>Честитамо!</h2> <p>Погодили сте загонетну реч: </p><span>${correctWord}</span>`;
            const modalLooseHTML = `<p>Изгубили сте, задата реч је била: </p><span>${correctWord}</span>`;

            if (Number(localStorage.getItem("tries")) <= 5) {
                if (userWord === correctWord) {
                    const modalWin = new Modal({ content: modalWinHTML });
                    manager.addConfetti();
                    setTimeout(() => {
                        modalWin.open();
                        increaseScore();
                        newGame();
                    }, 300);
                }
            } else {
                if (userWord === correctWord) {
                    const modalWin = new Modal({ content: modalWinHTML });
                    manager.addConfetti();
                    setTimeout(() => {
                        modalWin.open();
                        increaseScore();
                        newGame();
                    }, 300);
                } else {
                    setTimeout(() => {
                        const modalLost = new Modal({
                            content: modalLooseHTML,
                        });
                        setTimeout(() => {
                            modalLost.open();
                            newGame(true);
                        }, 300);
                    });
                }
            }
        }
    });

    // Handler to delete all input fields
    deleteButton.addEventListener("click", function () {
        clearAllCharacterInputs();
        focusFirstCharacterInput();
    });

    /**
     * Handles virtual keyboard
     */

    Array.from(keyboardButtons).forEach((button, i) => {
        // Prevents loosing focus from character input fields
        button.addEventListener("mousedown", function (e) {
            e.preventDefault();
        });

        button.addEventListener("click", function (e) {
            const activeElement = document.activeElement;
            const buttonLetter = this.getAttribute("js-game-letter");

            const activeCharacterInputIndex =
                activeElement.getAttribute("data-char-input");

            if (activeCharacterInputIndex) {
                switch (buttonLetter) {
                    case "enter":
                        activeElement.dispatchEvent(
                            new KeyboardEvent("keydown", {
                                key: "Enter",
                                code: "Enter",
                                keyCode: 13,
                            })
                        );
                        activeElement.dispatchEvent(
                            new KeyboardEvent("keyup", {
                                key: "Enter",
                                code: "Enter",
                                keyCode: 13,
                            })
                        );
                        break;
                    case "backspace":
                        activeElement.value = activeElement.value.slice(0, -1); // Remove last character
                        activeElement.dispatchEvent(new InputEvent("input"));
                        activeElement.dispatchEvent(
                            new KeyboardEvent("keydown", {
                                key: "Backspace",
                                code: "Backspace",
                            })
                        );
                        activeElement.dispatchEvent(
                            new KeyboardEvent("keyup", {
                                key: "Backspace",
                                code: "Backspace",
                                keyCode: 8,
                            })
                        );
                        break;
                    default:
                        activeElement.value = buttonLetter;
                        activeElement.dispatchEvent(new InputEvent("input"));
                        break;
                }
            }
        });
    });

    class Modal {
        constructor({ content = "", closeButton = true } = {}) {
            this.modal = document.createElement("div");
            this.modal.classList.add("modal");
            this.modal.innerHTML = `
                <div class="modal-overlay"></div>
                <div class="modal-content">
                    ${
                        closeButton
                            ? '<button class="modal-close">&times;</button>'
                            : ""
                    }
                    <div class="modal-body">${content}</div>
                </div>
            `;
            document.body.appendChild(this.modal);

            this.overlay = this.modal.querySelector(".modal-overlay");
            this.closeButton = this.modal.querySelector(".modal-close");

            this.overlay?.addEventListener("click", () => this.close());
            this.closeButton?.addEventListener("click", () => this.close());
        }

        open() {
            this.modal.classList.add("modal-open");
            setTimeout(() => {
                this.modal.classList.remove("modal-open");

                console.log("doc act el ", document.activeElement);

                if (!document.activeElement) {
                    focusFirstCharacterInput();
                }
            }, 3000);
        }

        close() {
            this.modal.classList.remove("modal-open");
            focusFirstCharacterInput();
        }
    }

    // Adds confetti animation
    // Utility functions grouped into a single object
    const Utils = {
        // Parse pixel values to numeric values
        parsePx: (value) => parseFloat(value.replace(/px/, "")),

        // Generate a random number between two values, optionally with a fixed precision
        getRandomInRange: (min, max, precision = 0) => {
            const multiplier = Math.pow(10, precision);
            const randomValue = Math.random() * (max - min) + min;
            return Math.floor(randomValue * multiplier) / multiplier;
        },

        // Pick a random item from an array
        getRandomItem: (array) =>
            array[Math.floor(Math.random() * array.length)],

        // Scaling factor based on screen width
        getScaleFactor: () => Math.log(window.innerWidth) / Math.log(1920),

        // Debounce function to limit event firing frequency
        debounce: (func, delay) => {
            let timeout;
            return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => func(...args), delay);
            };
        },
    };

    // Precomputed constants
    const DEG_TO_RAD = Math.PI / 180;

    // Centralized configuration for default values
    const defaultConfettiConfig = {
        confettiesNumber: 250,
        confettiRadius: 6,
        confettiColors: [
            "#fcf403",
            "#62fc03",
            "#f4fc03",
            "#03e7fc",
            "#03fca5",
            "#a503fc",
            "#fc03ad",
            "#fc03c2",
        ],
        emojies: [],
        svgIcon: null, // Example SVG link
    };

    // Confetti class representing individual confetti pieces
    class Confetti {
        constructor({
            initialPosition,
            direction,
            radius,
            colors,
            emojis,
            svgIcon,
        }) {
            const speedFactor =
                Utils.getRandomInRange(0.9, 1.7, 3) * Utils.getScaleFactor();
            this.speed = { x: speedFactor, y: speedFactor };
            this.finalSpeedX = Utils.getRandomInRange(0.2, 0.6, 3);
            this.rotationSpeed =
                emojis.length || svgIcon
                    ? 0.01
                    : Utils.getRandomInRange(0.03, 0.07, 3) *
                      Utils.getScaleFactor();
            this.dragCoefficient = Utils.getRandomInRange(0.0005, 0.0009, 6);
            this.radius = { x: radius, y: radius };
            this.initialRadius = radius;
            this.rotationAngle =
                direction === "left"
                    ? Utils.getRandomInRange(0, 0.2, 3)
                    : Utils.getRandomInRange(-0.2, 0, 3);
            this.emojiRotationAngle = Utils.getRandomInRange(0, 2 * Math.PI);
            this.radiusYDirection = "down";

            const angle =
                direction === "left"
                    ? Utils.getRandomInRange(82, 15) * DEG_TO_RAD
                    : Utils.getRandomInRange(-15, -82) * DEG_TO_RAD;
            this.absCos = Math.abs(Math.cos(angle));
            this.absSin = Math.abs(Math.sin(angle));

            const offset = Utils.getRandomInRange(-150, 0);
            const position = {
                x:
                    initialPosition.x +
                    (direction === "left" ? -offset : offset) * this.absCos,
                y: initialPosition.y - offset * this.absSin,
            };

            this.position = { ...position };
            this.initialPosition = { ...position };
            this.color =
                emojis.length || svgIcon ? null : Utils.getRandomItem(colors);
            this.emoji = emojis.length ? Utils.getRandomItem(emojis) : null;
            this.svgIcon = null;

            // Preload SVG if provided
            if (svgIcon) {
                this.svgImage = new Image();
                this.svgImage.src = svgIcon;
                this.svgImage.onload = () => {
                    this.svgIcon = this.svgImage; // Mark as ready once loaded
                };
            }

            this.createdAt = Date.now();
            this.direction = direction;
        }

        draw(context) {
            const { x, y } = this.position;
            const { x: radiusX, y: radiusY } = this.radius;
            const scale = window.devicePixelRatio;

            if (this.svgIcon) {
                context.save();
                context.translate(scale * x, scale * y);
                context.rotate(this.emojiRotationAngle);
                context.drawImage(
                    this.svgIcon,
                    -radiusX,
                    -radiusY,
                    radiusX * 2,
                    radiusY * 2
                );
                context.restore();
            } else if (this.color) {
                context.fillStyle = this.color;
                context.beginPath();
                context.ellipse(
                    x * scale,
                    y * scale,
                    radiusX * scale,
                    radiusY * scale,
                    this.rotationAngle,
                    0,
                    2 * Math.PI
                );
                context.fill();
            } else if (this.emoji) {
                context.font = `${radiusX * scale}px serif`;
                context.save();
                context.translate(scale * x, scale * y);
                context.rotate(this.emojiRotationAngle);
                context.textAlign = "center";
                context.fillText(this.emoji, 0, radiusY / 2); // Adjust vertical alignment
                context.restore();
            }
        }

        updatePosition(deltaTime, currentTime) {
            const elapsed = currentTime - this.createdAt;

            if (this.speed.x > this.finalSpeedX) {
                this.speed.x -= this.dragCoefficient * deltaTime;
            }

            this.position.x +=
                this.speed.x *
                (this.direction === "left" ? -this.absCos : this.absCos) *
                deltaTime;
            this.position.y =
                this.initialPosition.y -
                this.speed.y * this.absSin * elapsed +
                (0.00125 * Math.pow(elapsed, 2)) / 2;

            if (!this.emoji && !this.svgIcon) {
                this.rotationSpeed -= 1e-5 * deltaTime;
                this.rotationSpeed = Math.max(this.rotationSpeed, 0);

                if (this.radiusYDirection === "down") {
                    this.radius.y -= deltaTime * this.rotationSpeed;
                    if (this.radius.y <= 0) {
                        this.radius.y = 0;
                        this.radiusYDirection = "up";
                    }
                } else {
                    this.radius.y += deltaTime * this.rotationSpeed;
                    if (this.radius.y >= this.initialRadius) {
                        this.radius.y = this.initialRadius;
                        this.radiusYDirection = "down";
                    }
                }
            }
        }

        isVisible(canvasHeight) {
            return this.position.y < canvasHeight + 100;
        }
    }

    class ConfettiManager {
        constructor() {
            this.canvas = document.createElement("canvas");
            this.canvas.style =
                "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000; pointer-events: none;";
            document.body.appendChild(this.canvas);
            this.context = this.canvas.getContext("2d");
            this.confetti = [];
            this.lastUpdated = Date.now();
            window.addEventListener(
                "resize",
                Utils.debounce(() => this.resizeCanvas(), 200)
            );
            this.resizeCanvas();
            requestAnimationFrame(() => this.loop());
        }

        resizeCanvas() {
            this.canvas.width = window.innerWidth * window.devicePixelRatio;
            this.canvas.height = window.innerHeight * window.devicePixelRatio;
        }

        addConfetti(config = {}) {
            const {
                confettiesNumber,
                confettiRadius,
                confettiColors,
                emojies,
                svgIcon,
            } = {
                ...defaultConfettiConfig,
                ...config,
            };

            const baseY = (5 * window.innerHeight) / 7;
            for (let i = 0; i < confettiesNumber / 2; i++) {
                this.confetti.push(
                    new Confetti({
                        initialPosition: { x: 0, y: baseY },
                        direction: "right",
                        radius: confettiRadius,
                        colors: confettiColors,
                        emojis: emojies,
                        svgIcon,
                    })
                );
                this.confetti.push(
                    new Confetti({
                        initialPosition: { x: window.innerWidth, y: baseY },
                        direction: "left",
                        radius: confettiRadius,
                        colors: confettiColors,
                        emojis: emojies,
                        svgIcon,
                    })
                );
            }
        }

        resetAndStart(config = {}) {
            // Clear existing confetti
            this.confetti = [];
            // Add new confetti
            this.addConfetti(config);
        }

        loop() {
            const currentTime = Date.now();
            const deltaTime = currentTime - this.lastUpdated;
            this.lastUpdated = currentTime;

            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.confetti = this.confetti.filter((item) => {
                item.updatePosition(deltaTime, currentTime);
                item.draw(this.context);
                return item.isVisible(this.canvas.height);
            });

            requestAnimationFrame(() => this.loop());
        }
    }

    const manager = new ConfettiManager();
});
