const latinToCyrillicMap = {
    "a": "а", "b": "б", "c": "ц", "č": "ч", "ć": "ћ", "d": "д", "x": "џ",
    "đ": "ђ", "e": "е", "f": "ф", "g": "г", "h": "х", "i": "и", "j": "ј",
    "k": "к", "l": "л", "q": "љ", "m": "м", "n": "н", "w": "њ", "o": "о",
    "p": "п", "r": "р", "s": "с", "š": "ш", "t": "т", "u": "у", "v": "в",
    "z": "з", "ž": "ж",
  
    "A": "А", "B": "Б", "C": "Ц", "Č": "Ч", "Ć": "Ћ", "D": "Д", "X": "Џ",
    "Đ": "Ђ", "E": "Е", "F": "Ф", "G": "Г", "H": "Х", "I": "И", "J": "Ј",
    "K": "К", "L": "Л", "Q": "Љ", "M": "М", "N": "Н", "W": "Њ", "O": "О",
    "P": "П", "R": "Р", "S": "С", "Š": "Ш", "T": "Т", "U": "У", "V": "В",
    "Z": "З", "Ž": "Ж"
};

const allowedWords = [
    'бетон', 'сурла', 'гурач', 'речко', 'уклет', 'гудач', 'дрвен', 'супер', 'варош', 'дечко', 'ђубре', 'етажа', 'жарач', 'звоно', 'искра', 'јунак', 'крило', 'лабуд', 'метак', 'накит', 'осмех', 'петак', 'рубин', 'скроб', 'тотем', 'ћумур', 'убрус', 'федер', 'јелен', 'лимун', 'намет', 'плима', 'разум', 'самит', 'тиква', 'успон', 'харфа', 'црнац', 'чопор', 'шебој', 'агава', 'ветар', 'глава', 'дирка', 'ђувеч', 'еклер', 'живот', 'занат', 'исток', 'хотел', 'челик', 'шатор', 'атлас', 'бокал', 'ватра', 'галеб', 'длака', 'ђакон', 'жетон', 'запис', 'исказ', 'кувар', 'левак', 'мозак', 'нотес', 'отпор', 'песак', 'робот', 'авион', 'бајка', 'варка', 'грозд', 'дуван', 'естет', 'жилет', 'икона', 'језик', 'конац', 'Мачка', 'налог', 'опера', 'пилав', 'рукав', 'сапун', 'трава', 'услов', 'фокус', 'јасен', 'корак', 'лутка', 'млеко', 'норма', 'памет', 'мечка', 'сомот', 'тенис', 'ћерка', 'устав', 'фазан', 'химна', 'целер', 'шешир', 'албум', 'бунар', 'гајка', 'насип', 'освит', 'рачва', 'сидро', 'твист', 'ћурка', 'узрок', 'форум', 'харем', 'циста', 'чекрк', 'штука', 'балон', 'вагон', 'грива', 'долар', 'етика', 'закон', 'ирвас', 'храна', 'цимер', 'чизма', 'аванс', 'барел', 'визир', 'гумар', 'екран', 'жакет', 'залив', 'јесен', 'Креда', 'ланац', 'молер', 'нотар', 'рабин', 'аспик', 'бурек', 'влада', 'голаћ', 'добош', 'ђерам', 'ексер', 'жипон', 'замор', 'извор', 'јутро', 'киоск', 'лахор', 'мотор', 'најам', 'осица', 'пасош', 'седеф', 'улица', 'јечам', 'калем', 'лабос', 'новац', 'обред', 'ротор', 'флека', 'школа', 'акорд', 'бадем', 'вепар', 'порез', 'радар', 'серум', 'ћуран', 'увала', 'фикус', 'ципал', 'чирак', 'шаран', 'бабун', 'горан', 'душек', 'чесма', 'штета', 'восак', 'гуска', 'даска', 'ишлер', 'колач', 'лотос', 'нокат', 'ормар', 'проба', 'балет', 'екипа', 'лимар', 'нарав', 'обала', 'пуфна', 'стена', 'трема', 'успех', 'јасле', 'котур', 'мрест', 'начин', 'покер', 'ракун', 'сплет', 'тунел', 'ћилим', 'ускок', 'фарма', 'цимет', 'читач', 'барка', 'назив', 'олово', 'потез', 'ребус', 'сутон', 'трака', 'фетус', 'хајка', 'благо', 'време', 'глума', 'длето', 'зубун', 'цекин', 'човек', 'донор', 'епоха', 'зебра', 'ивица', 'кечап', 'ликра', 'отказ', 'пораз', 'радио', 'брада', 'врата', 'жамор', 'злато', 'јарак', 'капут', 'мајка', 'оклоп', 'ручак', 'силос', 'точак', 'гусан', 'дамар', 'завет', 'избор', 'Козак', 'лишај', 'месец', 'оглас', 'просо', 'рекет', 'сонет', 'торба', 'цигла', 'четка', 'излет', 'ковач', 'ласер', 'месар', 'нитна', 'облак', 'пилот', 'секта', 'ћуфте', 'упала', 'чокот', 'шевар', 'акита', 'барут', 'расол', 'склад', 'тенор', 'флота', 'цуцла', 'череп', 'шодер', 'брука', 'грађа', 'динар', 'зурла', 'калуп', 'ласта', 'хумус', 'црква', 'шумар', 'брест', 'волан', 'гргеч', 'дабар', 'жабац', 'канта', 'лента', 'мурва', 'нерад', 'евнух', 'зидар', 'мотел', 'отпад', 'перон', 'ролат', 'слово', 'табор', 'ћитаб', 'факин', 'зубар', 'исход', 'мачак', 'невен', 'рогач', 'сусам', 'тифус', 'фрула', 'шнала', 'врана', 'ратар', 'сомун', 'тапир', 'фишек', 'чорак', 'севар', 'арена', 'велур', 'галоп', 'долап', 'змија', 'излог', 'јарам', 'кедар', 'лепак', 'бреза', 'гепек', 'јакна', 'крава', 'мамут', 'напон', 'орбит', 'грана', 'дечак', 'жезло', 'залог', 'јелек', 'лопта', 'орден', 'полип', 'тацна', 'чекић', 'јадро', 'кловн', 'лемур', 'неред', 'пекар', 'рикша', 'труба', 'цуран', 'факат', 'чигра', 'аутор', 'пелат', 'рерна', 'скала', 'чунак', 'астал', 'батак', 'вазал', 'греда', 'јавор', 'круна', 'цитра', 'чавка', 'бизон', 'вергл', 'датив', 'ждрал', 'зарез', 'имела', 'лупус', 'оркан', 'јунац', 'краба', 'напад', 'оникс', 'чанак', 'замка', 'идиом', 'корен', 'осека', 'талог', 'усхит', 'факир', 'химен', 'цваст', 'анфас', 'брлог', 'Везув', 'удица', 'цирка', 'Атина', 'базен', 'бонус', 'жубор', 'капак', 'Лишће', 'палма', 'чабар', 'шамот', 'еснаф', 'жетва', 'кајак', 'лотра', 'мицна', 'опека', 'пушка', 'рафал', 'салса', 'замах', 'коала', 'мисао', 'несит', 'тачка', 'фарба', 'хрчак', 'цегер', 'черга', 'лопов', 'маска', 'рокер', 'сунце', 'трска', 'фагот', 'штака', 'брава', 'текст', 'белег', 'голуб', 'жаока', 'идеја', 'носач', 'ловац', 'орган', 'поема', 'жвака', 'купус', 'писац', 'ризом', 'сатир', 'фазон', 'шапка', 'копач', 'писмо', 'ручка', 'сатен', 'транс', 'фотка', 'црнка', 'апоен', 'викар', 'фалта', 'цртеж', 'чакра', 'шакал', 'ајвар', 'домар', 'испит', 'кибиц', 'мелем', 'бедем', 'петао', 'роман', 'зенит', 'јарац', 'неман', 'ровац', 'траса', 'учкур', 'црево', 'амеба', 'канал', 'летак', 'олуја', 'тимар', 'храст', 'шивач', 'Акреп', 'гавез', 'драма', 'цитат', 'шерпа', 'галон', 'дебло', 'елита', 'ингот', 'јацеа', 'колут', 'народ', 'блуза', 'инсан', 'кофер', 'модел', 'надев', 'рулет', 'затон', 'летва', 'метла', 'опело', 'салаш', 'топот', 'утрка', 'фарса', 'арома', 'лидер', 'орман', 'сокак', 'ћитап', 'уштап', 'фијук', 'хидра', 'датум', 'савет', 'чорба', 'штала', 'бомба', 'глина', 'дрозд', 'жохар', 'јатак', 'црвић', 'вашар', 'гозба', 'згода', 'јелка', 'кубик', 'марка', 'потоп', 'рампа', 'еркер', 'лавор', 'рутер', 'север', 'шунка', 'кумин', 'пласт', 'слава', 'талас', 'украс', 'цепин', 'чобан', 'видра', 'собар', 'чилаш', 'вивак', 'јерес', 'карта', 'лонац', 'мрежа', 'чичак', 'шерет', 'буква', 'метал', 'октет', 'пакет', 'кулен', 'отпис', 'рибар', 'тикет', 'ћевап', 'футур', 'шарка', 'кутак', 'порок', 'табла', 'влага', 'слика', 'терет', 'аорта', 'журка', 'индус', 'шипка', 'весло', 'гулаш', 'дулек', 'јадац', 'мопед', 'посао', 'радно', 'замак', 'малер', 'отров', 'патка', 'углед', 'чудак', 'џезва', 'манир', 'оквир', 'право', 'фелер', 'шећер', 'визон', 'илеус', 'лосос', 'метар', 'хокеј', 'цесна', 'чипка', 'вихор', 'жижак', 'клада', 'едикт', 'образ', 'тигар', 'циник', 'конак', 'нагон', 'танго', 'шофер', 'фосил', 'цеста', 'вазна', 'декор', 'живац', 'логор', 'морон', 'шибер', 'басна', 'откос', 'понос', 'идиот', 'одрон', 'стент', 'труст', 'улога', 'измет', 'масон', 'орион', 'палац', 'рудар', 'висак', 'форма', 'хорда', 'штека', 'битка', 'вашка', 'зајам', 'кефир', 'чамац', 'антре', 'женка', 'лутак', 'момак', 'олтар', 'попис', 'запад', 'клима', 'модем', 'плата', 'рачун', 'сукоб', 'џокер', 'домен', 'тегла', 'штрас', 'етида', 'цифра', 'завод', 'ђуска', 'зумба', 'орада', 'песма', 'локал', 'ранац', 'степа', 'тезга', 'алеја', 'бутик', 'бакар', 'еспап', 'шамар', 'бохор', 'товар', 'чемер', 'навод', 'тепих', 'стока', 'гусле', 'догма', 'ензим', 'корпа', 'алиби', 'винил', 'ебола', 'манго', 'емајл', 'мамац', 'омлет', 'полет', 'тонус', 'редов', 'сепет', 'табан', 'мохер', 'шајка', 'април', 'гекон', 'дорат', 'ибрик', 'литар', 'ореол', 'паста', 'родео', 'кокос', 'панел', 'сируп', 'ћуфта', 'ислам', 'крема', 'Рецка', 'титан', 'поток', 'чувар', 'гесло', 'фешта', 'цекер', 'валов', 'говор', 'округ', 'лагер', 'магла', 'напор', 'окрет', 'слама', 'камен', 'ларва', 'папир', 'рабат', 'темпо', 'веста', 'плоча', 'тромб', 'видик', 'жалба', 'анђео', 'лажов', 'метро', 'облик', 'класа', 'цивил', 'извоз', 'склоп', 'утеха', 'божур', 'терен', 'уздах', 'газда', 'ловор', 'ампер', 'нанос', 'срећа', 'клупа', 'софра', 'тајга', 'вокал', 'рестл', 'ћорак', 'гумно', 'колос', 'шутер', 'канап', 'пошта', 'сетер', 'уплив', 'одмор', 'ћумез', 'аргон', 'букет', 'кугла', 'бреме', 'дирек', 'опрез', 'поноћ', 'снага', 'фраза', 'мотив', 'регал', 'тутор', 'печат', 'сајам', 'лежај', 'доказ', 'етапа', 'салдо', 'резус', 'брига', 'вијак', 'геном', 'дубак', 'веган', 'одаја', 'олива', 'сачма', 'потаж', 'синус', 'узвик', 'херој', 'возач', 'рагби', 'ускрс', 'цокла', 'амбис', 'блато', 'глоба', 'утока', 'черек', 'гелер', 'коров', 'самар', 'ћошак', 'хорор', 'сафир', 'таван', 'врста', 'створ', 'алгин', 'бехар', 'афера', 'мерак', 'обруч', 'рапир', 'махер', 'ревер', 'сарач', 'торта', 'бурад', 'вајар', 'бегеш', 'гајде', 'епика', 'кувас', 'бивак', 'јавка', 'мидер', 'гушче', 'расад', 'салон', 'херба', 'црева', 'санта', 'ћириш', 'фиока', 'вижла', 'залет', 'банда', 'домет', 'хамам', 'јереј', 'лелек', 'ритер', 'пазух', 'бодеж', 'витез', 'играч', 'немар', 'пакао', 'хобит', 'износ', 'кобац', 'мирис', 'пајац', 'хумор', 'ископ', 'камин', 'лекар', 'будак', 'дугме', 'клише', 'мазут', 'сифон', 'фирма', 'окука', 'хунта', 'дебил', 'кобра', 'занос', 'пупак', 'бирач', 'парип', 'стопа', 'брана', 'гатер', 'досег', 'арија', 'зомби', 'ликер', 'метеж', 'Јапан', 'проја', 'спорт', 'фетиш', 'трзај', 'волеј', 'актер', 'власт', 'фрапе', 'наука', 'оглед', 'тоцак', 'фотон', 'башта', 'купон', 'демон', 'лујка', 'повез', 'тучак', 'шипак', 'асура', 'глето', 'Имола', 'кулов', 'масло', 'накот', 'резач', 'тукан', 'ћурак', 'шогор', 'немир', 'лакат', 'музеј', 'топуз', 'један', 'чиков', 'губав', 'лимит', 'бисер', 'десет', 'колац', 'машта', 'ривал', 'тетка', 'флаша', 'птица', 'узлет', 'граја', 'квака', 'одећа', 'тајна', 'гареж', 'држач', 'амбар', 'дудук', 'обест', 'полен', 'сарма', 'ребро', 'течај', 'ризик', 'сајла', 'чоков', 'дрмеш', 'закоп', 'злоба', 'нугат', 'ресор', 'номад', 'шанац', 'савез', 'харач', 'еолит', 'даире', 'заова', 'лагум', 'полка', 'спруд', 'чарда', 'шаман', 'вишак', 'шанса', 'декан', 'жмара', 'коска', 'водка', 'казна', 'лицеј', 'пудер', 'зубор', 'завој', 'лебац', 'мачор', 'хашиш', 'пешак', 'тинта', 'бећар', 'девер', 'певач', 'ћивот', 'шаров', 'винар', 'Давос', 'јецај', 'дувар', 'машна', 'ташна', 'задах', 'оскар', 'плева', 'пушач', 'гусак', 'чупав', 'испад', 'метан', 'тајац', 'крчаг', 'позив', 'лисје', 'булка', 'Игало', 'женик', 'пацов', 'рођак', 'ћетен', 'режим', 'хвала', 'дашак', 'зилот', 'казан', 'пасив', 'гусар', 'зелот', 'стрип', 'тесар', 'виски', 'снаја', 'ћутук', 'јаран', 'шапат', 'гирос', 'калфа', 'сетва', 'тарот', 'бедро', 'терор', 'полог', 'цајгл', 'шарац', 'жупан', 'ролка', 'унија', 'бечар', 'комад', 'ендем', 'минер', 'ирада', 'узгон', 'навој', 'салва', 'унука', 'фреза', 'багра', 'атест', 'једро', 'гроза', 'колар', 'тумач', 'чајка', 'шојка', 'рабош', 'удаја', 'анекс', 'такси', 'легло', 'нацрт', 'хусар', 'идила', 'седло', 'аласи', 'бибер', 'кафић', 'нишан', 'рарог', 'група', 'дизна', 'брзак', 'дрека', 'зипон', 'барон', 'векна', 'пумпа', 'спрат', 'тапет', 'хауба', 'алкар', 'гужва', 'дукат', 'сенка', 'жбука', 'лампа', 'мотка', 'ортак', 'пехар', 'лудак', 'омица', 'сквер', 'зетон', 'нудус', 'ситар', 'воћка', 'сабор', 'јамац', 'цокна', 'шетач', 'мазга', 'рогоз', 'корал', 'кадет', 'чибук', 'шериф', 'хорна', 'колан', 'масер', 'осврт', 'ритам', 'талон', 'чочек', 'багер', 'везир', 'гулаг', 'лапот', 'узгој', 'прича', 'смена', 'гајба', 'шурак', 'логос', 'страх', 'дућан', 'пожар', 'одред', 'томос', 'борба', 'пелин', 'црпка', 'излаз', 'котао', 'коцка', 'фарад', 'клема', 'ретуш', 'халва', 'врело', 'пелир', 'лисац', 'патак', 'судар', 'уштва', 'чарка', 'анкер', 'место', 'опран', 'пегла', 'кепец', 'хумка', 'чечен', 'дршка', 'цијук', 'јагма', 'намаз', 'јахта', 'пруга', 'стрес', 'ренде', 'цилик', 'бурма', 'вакуф', 'данак', 'забит', 'путар', 'пегаз', 'редар', 'чиода', 'аскер', 'шкарт', 'пород', 'урнек', 'зулум', 'шегрт', 'моном', 'салто', 'шахта', 'шараф', 'купац', 'андол', 'кадар', 'кулак', 'поруб', 'сласт', 'цурка', 'хамер', 'цубок', 'гауда', 'дезен', 'елиса', 'царић', 'добос', 'зигот', 'писта', 'дозна', 'назеб', 'истек', 'огрев', 'сукно', 'узица', 'атоми', 'спуст', 'алмум', 'каста', 'багет', 'бозур', 'етнос', 'поука', 'цакан', 'дупин', 'деран', 'берза', 'дурум', 'пазар', 'суфле', 'себој', 'морал', 'пенал', 'репер', 'венац', 'дрска', 'Хомер', 'жртва', 'самац', 'панда', 'бокор', 'ухода', 'пркос', 'лопар', 'талац', 'јахач', 'лавеж', 'јидиш', 'анода', 'бунда', 'малем', 'валер', 'аерат', 'друид', 'бачва', 'пепео', 'аларм', 'мурал', 'Добар', 'обзир', 'арсен', 'канон', 'испис', 'ремен', 'голет', 'амаро', 'ђулса', 'кусур', 'свест', 'цекиц', 'бараж', 'иступ', 'проза', 'сквош', 'оброк', 'обрва', 'плашт', 'зазор', 'колаж', 'облог', 'резон', 'сплав', 'шубер', 'ослић', 'базар', 'ствар', 'карма', 'прело', 'стадо', 'сенат', 'варан', 'забат', 'касир', 'каћун', 'никел', 'пират', 'флерт', 'барок', 'крчма', 'калај', 'откуп', 'девет', 'додир', 'добит', 'одмах', 'мираз', 'океан', 'склек', 'мином', 'ексит', 'минут', 'кекец', 'редут', 'шпајз', 'аллас', 'гарда', 'јетра', 'јуфка', 'акрил', 'жагор', 'врпца', 'тумор', 'мошус', 'одјек', 'одело', 'убица', 'флора', 'мућак', 'веспа', 'ногар', 'патос', 'утаја', 'свила', 'набоб', 'толар', 'гонич', 'Емина', 'помоћ', 'свећа', 'табак', 'сатор', 'борац', 'ходач', 'морка', 'струк', 'флуид', 'понор', 'питон', 'јемац', 'сирће', 'умеће', 'ратан', 'дојка', 'журба', 'зачин', 'сленг', 'мехур', 'сорта', 'одора', 'прота', 'нагиб', 'хакер', 'тисак', 'имбус', 'даске', 'цвеће', 'осама', 'лигаш', 'певац', 'падеж', 'јуриш', 'отвор', 'виола', 'особа', 'ћубан', 'сеник', 'довод', 'алоја', 'лапис', 'трола', 'ћушка', 'часак', 'насад', 'топаз', 'кавез', 'бивол', 'гинко', 'гениј', 'мерач', 'идеал', 'ефект', 'жилав', 'зефир', 'копча', 'акшам', 'зозон', 'прасе', 'лугар', 'одзив', 'релеј', 'Илова', 'ларма', 'косач', 'аверс', 'хитац', 'Аркан', 'дилер', 'Иртиш', 'могул', 'слина', 'Екрем', 'кипар', 'лакеј', 'слајс', 'ципов', 'ђогат', 'набор', 'перец', 'кедер', 'ретро', 'кинта', 'папак', 'типка', 'пацер', 'рижот', 'парче', 'ћувик', 'тонер', 'чилим', 'Бутан', 'Жером', 'порив', 'којот', 'рачве', 'банка', 'набој', 'дођош', 'ташта', 'џихад', 'епарх', 'тегет', 'излив', 'наћве', 'ропот', 'повод', 'ложач', 'бином', 'мишић', 'цезар', 'тираж', 'ролна', 'лонче', 'нобел', 'бураг', 'однос', 'погон', 'биста', 'нимфа', 'сусед', 'шифра', 'егзил', 'јелеј', 'капар', 'бидон', 'путер', 'скела', 'цвета', 'извод', 'такса', 'кебап', 'кабал', 'болид', 'Забац', 'шашир', 'цевка', 'чалма', 'швепс', 'куран', 'ћесам', 'слога', 'давеж', 'сокол', 'Лузер', 'сухој', 'Немац', 'купка', 'обука', 'молба', 'тркач', 'крађа', 'наћос', 'штене', 'Ђувец', 'лепра', 'Зелен', 'марва', 'немоћ', 'Естер', 'церка', 'унуче', 'нећак', 'астма', 'атика', 'Јемен', 'зулуф', 'кебаб', 'отава', 'Зидан', 'нафта', 'мацор', 'кулук', 'стаза', 'торзо', 'изрод', 'вапор', 'омега', 'писар', 'слуга', 'врбак', 'локва', 'сирак', 'чедар', 'зрака', 'монах', 'пређа', 'кифла', 'левча', 'хипик', 'посед', 'инокс', 'памук', 'одраз', 'аграр', 'синод', 'сокна', 'терма', 'урлик', 'натег', 'одвод', 'преса', 'рента', 'сутра', 'уцена', 'загор', 'диода', 'зицер', 'фосна', 'бусен', 'видео', 'одбор', 'талир', 'крамп', 'груда', 'ђеран', 'борик', 'менза', 'јахаћ', 'покус', 'појас', 'курир'
]

const getRandomWord = function(wordsArray) {
    if (localStorage.getItem('usedWords')) {
        usedWords = JSON.parse(localStorage.getItem('usedWords')) || [];
    }

    // Filter out already used words
    let availableWords = wordsArray.filter(word => !usedWords.includes(word));

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
    localStorage.setItem('usedWords', JSON.stringify(usedWords));

    return chosenWord;
}

const checkIfCharacterIsUsed = function(characterInputs) {
    const keyboardCharacterElements = document.querySelectorAll('.game-keyboard__letter');
    
    // Add used class that will gray out used letters in keyboard 
    keyboardCharacterElements.forEach(keyboardCharacter => {
        if (usedCharacters && usedCharacters.includes(keyboardCharacter.textContent.trim().toLowerCase())) {
            keyboardCharacter.classList.add('used');
        }

        
    });

    // Check for character place inside current guess word
    Array.from(characterInputs).forEach((input, i) => {
        const userChar = input.value.toLowerCase();
        const correctChar = correctWord[i];

        if (userChar === correctChar) {
            keyboardCharacterElements.forEach(keyboardCharacter => {
                if (userChar === keyboardCharacter.textContent.trim().toLowerCase()) {
                    keyboardCharacter.classList.add('correct');
                }
            });
            // keyboardCharacter.classList.add('correct')
        } else if (correctWord.includes(userChar)) {
            keyboardCharacterElements.forEach(keyboardCharacter => {
                if (userChar === keyboardCharacter.textContent.trim().toLowerCase()) {
                    keyboardCharacter.classList.add('wrong');
                }
            });
        }
    })
}

const checkIfWordIsInTheList = function(word) {
    if (allowedWords.includes(word)) {
        return true;
    } else {
        return false;
    }
}

async function requestWakeLock() {
    try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => {
            console.log('Wake Lock was released');
        });
        console.log('Wake Lock is active');
    } catch (err) {
        console.error(`${err.name}, ${err.message}`);
    }
}

let usedWords = [];
let usedCharacters = [];

let correctWord = getRandomWord(allowedWords); // The word to guess
console.log('Correct word: ', correctWord);

// Main
document.addEventListener('DOMContentLoaded', requestWakeLock);

document.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem("tries", 0);

    const inputFieldsWrapper = document.querySelector('.game__characters-wrapper');
    const inputFields = document.querySelectorAll('input.game__character');
    const submitButton = document.querySelector('button[js-btn-submit]');
    const deleteButton = document.querySelector('[js-btn-delete]');
    const keyboardButtons = document.querySelectorAll('[js-game-letter]');
    const gameTriesElement = document.querySelector('[js-game-tries]');
    const gameGuesses = document.querySelector('.game__guesses');

    const increaseTries = function() {
        const currentTries = Number(localStorage.getItem('tries'));
        localStorage.setItem('tries', currentTries + 1);
        gameTriesElement.textContent = localStorage.getItem('tries');
    }

    const clearAllCharacterInputs = function() {
        inputFields.forEach((inputWordCharacter, i) => {
            inputWordCharacter.value = '';
        });
    }

    const focusFirstCharacterInput = function() {
        inputFields[0].focus();
    }


    const newGame = function() {
        clearAllCharacterInputs()
        focusFirstCharacterInput();
        localStorage.setItem('tries', 0);   
        gameGuesses.innerHTML = '';
        // usedWords = [];
        usedCharacters = [];
        Array.from(keyboardButtons).forEach(el => {
            el.classList.remove('used')
            el.classList.remove('correct');
        })
        gameTriesElement.textContent = localStorage.getItem('tries');
        correctWord = getRandomWord(allowedWords);
    }

    let userGuess = [];

    let wakeLock = null;

    focusFirstCharacterInput();

    /* Bind event listeners for character input fields
    ** On keydown set value to input and focus next element
    ** On input: handle backspace, check if word is allowed
    ** in game dictionary
    */

    Array.from(inputFields).forEach((inputWordCharacter, i) => {
        inputWordCharacter.addEventListener('keydown', function(e) {
            if (e.key == 'Backspace') {
                console.log('backspace', i);
                userGuess[i] = '';
                inputWordCharacter.value = '';

                if (inputFields[i].previousElementSibling) {
                    inputFields[i].previousElementSibling.focus()
                }
            }

            if (e.key == 'Enter') {
                submitButton.click();
                inputFields[0].focus();
            }
        });
        
        inputWordCharacter.addEventListener('input', function(e) {
            // this.value = e.target.value;

            if (latinToCyrillicMap[e.target.value]) {
                this.value = latinToCyrillicMap[e.target.value];
            }

            const charIndex = e.target.getAttribute('data-char-input');

            if (e.inputType === "deleteContentBackward") {
                // If backspace is pressed, stay on the current input
                userGuess[charIndex] = '';
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
                const isWordAllowed = checkIfWordIsInTheList(userGuess.join(''));

                if (isWordAllowed) {
                    inputFieldsWrapper.classList.remove('error')
                    inputFieldsWrapper.classList.add('success')
                    submitButton.removeAttribute('disabled');
                } else {
                    inputFieldsWrapper.classList.remove('success')
                    inputFieldsWrapper.classList.add('error')
                    submitButton.setAttribute('disabled', true);
                }
            }            
            console.dir(this.nextElementSibling,'userguess: ', userGuess)
        })
    })

    // Handles user submitting the word

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        increaseTries();
        let userWord = userGuess.join('');

        if (userWord.length !== 5) {
            alert(`Унесите реч од ${correctWord.length} слова.`);
            return;
        }

        const isWordAllowed = checkIfWordIsInTheList(userWord);

        if (isWordAllowed) {

            let result = '';

            inputFields.forEach((input, index) => {
                const userChar = input.value.toLowerCase();
                const correctChar = correctWord[index];

                usedCharacters.push(userChar);

                checkIfCharacterIsUsed(inputFields);

                input.value = '';
    
                if (userChar == correctChar) {
                    result += `<div class="game__character correct">${userChar}</div>`;
                } else if (correctWord.includes(userChar)) {
                    result += `<div class="game__character present">${userChar}</div>`; // Yellow for present but wrong position
                } else {
                    result += `<div class="game__character">${userChar}</div>`; // Gray for incorrect character
                }
            });

            gameGuesses.innerHTML = `<div class="game__guess">${result}</div>` + gameGuesses.innerHTML;

            focusFirstCharacterInput();
        }

        if(Number(localStorage.getItem('tries')) <= 6) {
            if (userWord === correctWord) {
                const message = `Честитамо! Погодили сте загонетну реч: ${correctWord}`;
                setTimeout(() => {
                    alert(message);
                    newGame();
                }, 100);
            }
        } else {
            alert('Изгубили сте, задата реч је била: ' + correctWord);
            newGame();
        }
    });

    // Handler to delete all input fields
    deleteButton.addEventListener('click', function() {
        clearAllCharacterInputs();
        focusFirstCharacterInput();
    });

    /**
     * Handles virtual keyboard
     */

    Array.from(keyboardButtons).forEach((button, i) => {

        // Prevents loosing focus from character input fields
        button.addEventListener('mousedown', function(e) {
            e.preventDefault();
        });

        button.addEventListener('click', function(e) {
           
            const activeElement = document.activeElement;
            const buttonLetter = this.getAttribute('js-game-letter');
            
            const activeCharacterInputIndex = activeElement.getAttribute('data-char-input');

            if (activeCharacterInputIndex) {
                switch (buttonLetter) {
                    case 'enter':
                            activeElement.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", code: "Enter", keyCode: 13 }));
                            activeElement.dispatchEvent(new KeyboardEvent("keyup", { key: "Enter", code: "Enter", keyCode: 13 }));
                        break;
                    case 'backspace':
                            activeElement.value = activeElement.value.slice(0, -1); // Remove last character
                            activeElement.dispatchEvent(new InputEvent("input"));
                            activeElement.dispatchEvent(new KeyboardEvent("keydown", { key: "Backspace", code: "Backspace", keyCode: 8 }));
                            activeElement.dispatchEvent(new KeyboardEvent("keyup", { key: "Backspace", code: "Backspace", keyCode: 8 }));
                        break;
                    default:
                        activeElement.value = buttonLetter;
                        activeElement.dispatchEvent(new InputEvent("input"));
                        break;
                }
                
            }
            console.log('buttonLetter', buttonLetter, activeElement);
            
        });
    })
});

document.addEventListener('visibilitychange', () => {
    if (wakeLock !== null && document.visibilityState === 'visible') {
        requestWakeLock();
    }
});