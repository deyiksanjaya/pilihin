// translations.js

const translations = {
  // Bahasa Inggris
  en: {
    pageTitle: "Let Fate Decide",
    pageSubtitle: "Enter your choices or pick a template",
    resultPlaceholder: "Your Result Here",
    explanationTitle: "Search Google for",
    inputPlaceholder: "Enter each choice on a new line...",
    clearList: "Clear list",
    startButton: "Start Picking",
    stopButton: "Stop",
    templateHeader: "Or use a template",
    googleSearch: "Search on Google",
    // Template Buttons
    "tpl-places": "Places",
    "tpl-foods": "Foods",
    "tpl-activities": "Activities",
    "tpl-games": "Games",
    "tpl-movies": "Movie Genre",
    "tpl-music": "Music Genre",
    "tpl-drinks": "Drinks",
    "tpl-workouts": "Workouts",
    "tpl-books": "Book Genre",
    "tpl-hobbies": "Hobbies",
    "tpl-code": "Code Languages",
    "tpl-pets": "Pets",
    "tpl-vehicles": "Vehicles",
    "tpl-art": "Art Styles",
    // Modal
    modalTitle: "Welcome to PICKER!",
    modalText: "Feeling indecisive? Let us help! Whether it's choosing a travel destination, your next meal, a fun activity, or a game to play, just input your options and we'll pick one for you. You can also use our handy templates to get started.",
    modalButton: "Got it!",
    // Pesan Error
    errorInputFirst: "Input your list first!",
    errorListEmpty: "List cannot be empty.",
    // Penjelasan
    explanationFetching: "Fetching explanation...",
    explanationNotFound: "Sorry, no explanation found for this item.",
    explanationError: "Could not fetch explanation. Please check your connection.",
    // Daftar Template
    lists: {
        places: "Bali\nRaja Ampat\nMount Bromo\nLabuan Bajo\nLake Toba\nBorobudur Temple\nKyoto\nParis\nRome\nNew York\nLondon\nSydney\nCape Town\nRio de Janeiro\nSantorini\nMaldives\nSwiss Alps\nGrand Canyon\nYogyakarta\nLombok\nTokyo\nSeoul\nBangkok\nDerawan Islands\nBelitung Island\nMachu Picchu\nDubai\nIceland\nBanff National Park\nPetra\nVenice\nAmsterdam\nSingapore\nHong Kong\nIstanbul\nBarcelona\nVancouver\nQueenstown\nHawaii\nPhuket\nHoi An\nHalong Bay\nMarrakech\nSafari in Serengeti",
        foods: "Fried Rice\nRendang\nChicken Satay\nChicken Soto\nGado-gado\nMeatball Soup\nChicken Noodles\nPempek\nMartabak\nPizza\nBurger\nSushi\nTacos\nPasta\nSteak\nRamen\nDim Sum\nTom Yum\nPadang Rice\nGrilled Fish\nCapcay\nSeblak\nKebab\nLasagna\nPho\nPaella\nFish and Chips\nCroissant\nFalafel\nHummus\nPoutine\nBaklava\nKimchi\nBibimbap\nPho\nMoussaka\nCeviche\nTapas\nPierogi\nRisotto\nGoulash\nChurros\nPeking Duck\nHot Pot\nBiryani\nNasi Lemak",
        activities: "Watch a Movie\nRead a Book\nPlay Games\nExercise\nGo for a Walk\nCook a Meal\nGardening\nPaint or Draw\nListen to Music\nKaraoke\nLearn Something New\nClean the House\nWrite a Journal\nPhotography\nYoga or Meditate\nCamping\nHiking\nSwimming\nCycling\nHang out at a Cafe\nGo to a Concert\nVisit a Museum\nVolunteer\nLearn a New Language\nTake an Online Course\nGo Fishing\nTry Pottery\nAttend a Workshop\nGo to an Amusement Park\nTry Archery\nGo Kayaking\nTry Rock Climbing\nVisit an Aquarium\nGo Stargazing\nTry Surfing\nVisit a Local Market\nTry Stand-up Comedy\nJoin a Book Club\nTry Baking\nGo to a Theme Park",
        games: "Mobile Legends\nPUBG Mobile\nValorant\nGenshin Impact\nMinecraft\nStardew Valley\nChess\nMonopoly\nUno\nWerewolf\nLudo\nSnakes and Ladders\nAmong Us\nRoblox\nFIFA\nAnimal Crossing\nLeague of Legends\nFortnite\nPlaying Cards\nCall of Duty\nApex Legends\nOverwatch\nDota 2\nCounter-Strike\nThe Sims\nPokémon Go\nClash of Clans\nClash Royale\nCandy Crush\nSudoku\nScrabble\nJenga\nPictionary\nTrivial Pursuit\nRisk\nCatan\nTetris\nPac-Man\nSuper Mario\nZelda",
        movies: "Action\nComedy\nDrama\nSci-Fi\nHorror\nThriller\nRomance\nAnimation\nDocumentary\nFantasy\nMystery\nAdventure\nMusical\nCrime\nBiography\nHistorical\nFamily\nWar\nWestern\nNoir\nSports\nRom-Com\nTeen\nDisaster\nSuperhero\nMartial Arts\nPsychological\nSatire\nSilent\nShort Film",
        music: "Pop\nRock\nHip Hop\nJazz\nElectronic (EDM)\nClassical\nR&B\nCountry\nReggae\nMetal\nIndie\nDangdut\nK-Pop\nJ-Pop\nFolk\nBlues\nAcoustic\nPunk\nSoul\nFunk\nDisco\nGospel\nTechno\nHouse\nDubstep\nTrap\nSka\nOpera\nOrchestral\nAmbient\nLatin\nBollywood\nAfrobeat\nBluegrass",
        drinks: "Black Coffee\nCoffee with Milk\nSweet Tea\nPlain Tea\nAvocado Juice\nOrange Juice\nFruit Smoothie\nMineral Water\nSoda\nHot Chocolate\nIced Coconut Water\nMilk\nTeh Tarik (Pulled Tea)\nGinger Tea\nCendol\nBoba Milk Tea\nMatcha Latte\nChai Tea\nLemonade\nIced Tea\nMilkshake\nCoconut Milk\nAlmond Milk\nGreen Tea\nHerbal Tea\nEspresso\nCappuccino\nLatte\nMocha\nWine\nBeer\nCocktail\nWhiskey\nVodka\nRum\nTequila\nSake\nSoju\nKombucha\nKefir",
        workouts: "Cardio (Running)\nWeightlifting\nYoga\nHIIT\nPilates\nZumba\nCrossFit\nBoxing\nSwimming\nAerobics\nCycling\nPush-ups\nSit-ups\nSquats\nJumping Rope\nBadminton\nFutsal\nBasketball\nTennis\nMartial Arts\nDancing\nRowing\nClimbing\nHiking\nKickboxing\nCalisthenics\nBarre\nTRX\nPlyometrics\nFunctional Training\nTai Chi\nJogging\nSkating\nSurfing\nSnowboarding\nKayaking\nGymnastics\nParkour\nKettlebell\nCircuit Training",
        books: "Fiction\nNon-fiction\nScience Fiction\nFantasy\nMystery\nThriller\nRomance\nHorror\nHistorical\nBiography\nAutobiography\nSelf-help\nBusiness\nScience\nPhilosophy\nTravel\nCookbook\nPoetry\nDrama\nYoung Adult\nChildren's\nGraphic Novel\nCrime\nAdventure\nHumor\nClassic\nWestern\nDystopian\nTrue Crime\nPsychology",
        hobbies: "Photography\nPainting\nKnitting\nWoodworking\nPottery\nGardening\nChess\nBlogging\nLearning an Instrument\nCalligraphy\nOrigami\nScrapbooking\nModel Building\nBird Watching\nAstronomy\nCoin Collecting\nStamp Collecting\nWine Tasting\nBaking\nHome Brewing\nStand-up Comedy\nMagic Tricks\nDancing\nSinging\nPodcasting\nLanguage Learning\nTraveling\nHiking\nCycling\nFishing",
        code: "JavaScript\nPython\nJava\nC++\nC#\nPHP\nRuby\nSwift\nGo\nRust\nKotlin\nTypeScript\nSQL\nHTML\nCSS\nR\nDart\nScala\nPerl\nHaskell\nLua\nJulia\nElixir\nClojure\nAssembly\nShell\nMATLAB\nGroovy\nObjective-C\nVB.NET",
        pets: "Dog\nCat\nFish\nBird\nHamster\nRabbit\nGuinea Pig\nTurtle\nSnake\nLizard\nFrog\nHermit Crab\nFerret\nChinchilla\nParrot\nGecko\nRat\nMouse\nHedgehog\nSugar Glider\nPig\nChicken\nDuck\nGoat\nHorse\nSheep\nCow\nAlpaca\nSnail\nStick Insect",
        vehicles: "Car\nMotorcycle\nBicycle\nScooter\nBus\nTrain\nAirplane\nBoat\nShip\nHelicopter\nSubmarine\nTruck\nVan\nSUV\nPickup Truck\nTram\nBullet Train\nSegway\nHoverboard\nElectric Skateboard\nGolf Cart\nATV\nSnowmobile\nCable Car\nHot Air Balloon\nSpaceship\nJet Ski\nKayak\nCanoe\nYacht",
        art: "Realism\nImpressionism\nAbstract\nSurrealism\nCubism\nPop Art\nMinimalism\nExpressionism\nArt Deco\nArt Nouveau\nBaroque\nRenaissance\nContemporary\nDigital Art\nStreet Art\nGraffiti\nPhotorealism\nPointillism\nFauvism\nDadaism\nFuturism\nConstructivism\nDe Stijl\nOp Art\nConceptual Art\nNaïve Art\nNeo-Expressionism\nSymbolism\nRomanticism\nUkiyo-e"
    }
  },
  // Bahasa Indonesia
  id: {
    pageTitle: "Biar Takdir yang Menentukan",
    pageSubtitle: "Masukkan pilihanmu atau gunakan template",
    resultPlaceholder: "Hasil Pilihanmu di Sini",
    explanationTitle: "Cari Tau Tentang",
    inputPlaceholder: "Masukkan setiap pilihan di baris baru...",
    clearList: "Bersihkan daftar",
    startButton: "Mulai Mengacak",
    stopButton: "Berhenti",
    templateHeader: "Atau gunakan template",
    googleSearch: "Cari di Google",
    // Template Buttons
    "tpl-places": "Tempat",
    "tpl-foods": "Makanan",
    "tpl-activities": "Aktivitas",
    "tpl-games": "Permainan",
    "tpl-movies": "Genre Film",
    "tpl-music": "Genre Musik",
    "tpl-drinks": "Minuman",
    "tpl-workouts": "Olahraga",
    "tpl-books": "Genre Buku",
    "tpl-hobbies": "Hobi",
    "tpl-code": "Bahasa Koding",
    "tpl-pets": "Peliharaan",
    "tpl-vehicles": "Kendaraan",
    "tpl-art": "Gaya Seni",
    // Modal
    modalTitle: "Selamat Datang di PICKER!",
    modalText: "Merasa bimbang? Biarkan kami membantu! Baik itu memilih tujuan wisata, makanan berikutnya, aktivitas seru, atau permainan untuk dimainkan, cukup masukkan pilihan Anda dan kami akan memilihnya untuk Anda. Anda juga bisa menggunakan template praktis kami untuk memulai.",
    modalButton: "Mengerti!",
    // Pesan Error
    errorInputFirst: "Masukkan daftarmu dulu!",
    errorListEmpty: "Daftar tidak boleh kosong.",
    // Penjelasan
    explanationFetching: "Sedang mengambil penjelasan...",
    explanationNotFound: "Maaf, tidak ada penjelasan yang ditemukan untuk item ini.",
    explanationError: "Tidak dapat mengambil penjelasan. Periksa koneksi Anda.",
    // Daftar Template (Untuk saat ini, isinya sama dengan B. Inggris, tapi bisa diubah nanti)
    lists: {
        places: "Bali\nRaja Ampat\nGunung Bromo\nLabuan Bajo\nDanau Toba\nCandi Borobudur\nKyoto\nParis\nRoma\nNew York\nLondon\nSydney\nCape Town\nRio de Janeiro\nSantorini\nMaladewa\nAlpen Swiss\nGrand Canyon\nYogyakarta\nLombok\nTokyo\nSeoul\nBangkok\nKepulauan Derawan\nPulau Belitung\nMachu Picchu\nDubai\nIslandia\nTaman Nasional Banff\nPetra\nVenesia\nAmsterdam\nSingapura\nHong Kong\nIstanbul\nBarcelona\nVancouver\nQueenstown\nHawaii\nPhuket\nHoi An\nTeluk Halong\nMarrakech\nSafari di Serengeti",
        foods: "Nasi Goreng\nRendang\nSate Ayam\nSoto Ayam\nGado-gado\nBakso\nMie Ayam\nPempek\nMartabak\nPizza\nBurger\nSushi\nTaco\nPasta\nSteak\nRamen\nDim Sum\nTom Yum\nNasi Padang\nIkan Bakar\nCapcay\nSeblak\nKebab\nLasagna\nPho\nPaella\nFish and Chips\nCroissant\nFalafel\nHummus\nPoutine\nBaklava\nKimchi\nBibimbap\nPho\nMoussaka\nCeviche\nTapas\nPierogi\nRisotto\nGoulash\nChurros\nBebek Peking\nHot Pot\nBiryani\nNasi Lemak",
        activities: "Nonton Film\nBaca Buku\nMain Game\nOlahraga\nJalan-jalan\nMasak\nBerkebun\nMelukis atau Menggambar\nDengar Musik\nKaraoke\nBelajar Hal Baru\nBersih-bersih Rumah\nMenulis Jurnal\nFotografi\nYoga atau Meditasi\nBerkemah\nMendaki\nBerenang\nBersepeda\nNongkrong di Kafe\nPergi ke Konser\nMengunjungi Museum\nJadi Relawan\nBelajar Bahasa Baru\nAmbil Kursus Online\nMemancing\nMembuat Gerabah\nIkut Workshop\nPergi ke Taman Hiburan\nCoba Panahan\nMain Kayak\nCoba Panjat Tebing\nMengunjungi Akuarium\nMelihat Bintang\nCoba Selancar\nMengunjungi Pasar Lokal\nCoba Stand-up Comedy\nIkut Klub Buku\nCoba Membuat Kue\nPergi ke Taman Hiburan",
        games: "Mobile Legends\nPUBG Mobile\nValorant\nGenshin Impact\nMinecraft\nStardew Valley\nCatur\nMonopoli\nUno\nWerewolf\nLudo\nUlar Tangga\nAmong Us\nRoblox\nFIFA\nAnimal Crossing\nLeague of Legends\nFortnite\nKartu Remi\nCall of Duty\nApex Legends\nOverwatch\nDota 2\nCounter-Strike\nThe Sims\nPokémon Go\nClash of Clans\nClash Royale\nCandy Crush\nSudoku\nScrabble\nJenga\nPictionary\nTrivial Pursuit\nRisk\nCatan\nTetris\nPac-Man\nSuper Mario\nZelda",
        movies: "Aksi\nKomedi\nDrama\nFiksi Ilmiah\nHoror\nThriller\nRomantis\nAnimasi\nDokumenter\nFantasi\nMisteri\nPetualangan\nMusikal\nKriminal\nBiografi\nSejarah\nKeluarga\nPerang\nWestern\nNoir\nOlahraga\nKomedi Romantis\nRemaja\nBencana\nSuperhero\nSeni Bela Diri\nPsikologis\nSatir\nFilm Bisu\nFilm Pendek",
        music: "Pop\nRock\nHip Hop\nJazz\nElektronik (EDM)\nKlasik\nR&B\nCountry\nReggae\nMetal\nIndie\nDangdut\nK-Pop\nJ-Pop\nFolk\nBlues\nAkustik\nPunk\nSoul\nFunk\nDisko\nGospel\nTekno\nHouse\nDubstep\nTrap\nSka\nOpera\nOrkestra\nAmbient\nLatin\nBollywood\nAfrobeat\nBluegrass",
        drinks: "Kopi Hitam\nKopi Susu\nTeh Manis\nTeh Tawar\nJus Alpukat\nJus Jeruk\nSmoothie Buah\nAir Mineral\nSoda\nCokelat Panas\nAir Kelapa Dingin\nSusu\nTeh Tarik\nTeh Jahe\nCendol\nBoba Milk Tea\nMatcha Latte\nTeh Chai\nLimonade\nEs Teh\nMilkshake\nSantan\nSusu Almond\nTeh Hijau\nTeh Herbal\nEspresso\nCappuccino\nLatte\nMocha\nAnggur\nBir\nKoktail\nWiski\nVodka\nRum\nTequila\nSake\nSoju\nKombucha\nKefir",
        workouts: "Kardio (Lari)\nAngkat Beban\nYoga\nHIIT\nPilates\nZumba\nCrossFit\nTinju\nBerenang\nAerobik\nBersepeda\nPush-up\nSit-up\nJongkok\nLompat Tali\nBulu Tangkis\nFutsal\nBasket\nTenis\nSeni Bela Diri\nMenari\nMendayung\nMemanjat\nMendaki\nKickboxing\nKalistenik\nBarre\nTRX\nPliometrik\nLatihan Fungsional\nTai Chi\nJogging\nSkating\nSelancar\nSnowboarding\nKayak\nGimnastik\nParkour\nKettlebell\nLatihan Sirkuit",
        books: "Fiksi\nNon-fiksi\nFiksi Ilmiah\nFantasi\nMisteri\nThriller\nRomantis\nHoror\nSejarah\nBiografi\nAutobiografi\nSelf-help\nBisnis\nSains\nFilsafat\nPerjalanan\nBuku Masak\nPuisi\nDrama\nRemaja\nAnak-anak\nNovel Grafis\nKriminal\nPetualangan\nHumor\nKlasik\nWestern\nDistopia\nKisah Nyata Kriminal\nPsikologi",
        hobbies: "Fotografi\nMelukis\nMerajut\nKerajinan Kayu\nGerabah\nBerkebun\nCatur\nBlogging\nBelajar Alat Musik\nKaligrafi\nOrigami\nScrapbooking\nMembangun Model\nMengamati Burung\nAstronomi\nMengoleksi Koin\nMengoleksi Perangko\nMencicipi Anggur\nMembuat Kue\nMembuat Bir Sendiri\nStand-up Comedy\nTrik Sulap\nMenari\nMenyanyi\nPodcasting\nBelajar Bahasa\nJalan-jalan\nMendaki\nBersepeda\nMemancing",
        code: "JavaScript\nPython\nJava\nC++\nC#\nPHP\nRuby\nSwift\nGo\nRust\nKotlin\nTypeScript\nSQL\nHTML\nCSS\nR\nDart\nScala\nPerl\nHaskell\nLua\nJulia\nElixir\nClojure\nAssembly\nShell\nMATLAB\nGroovy\nObjective-C\nVB.NET",
        pets: "Anjing\nKucing\nIkan\nBurung\nHamster\nKelinci\nMarmut\nKura-kura\nUlar\nKadal\nKatak\nKelomang\nMusang\nChinchilla\nBurung Beo\nTokek\nTikus\nMencit\nLandak Mini\nSugar Glider\nBabi\nAyam\nBebek\nKambing\nKuda\nDomba\nSapi\nAlpaka\nSiput\nSerangga Tongkat",
        vehicles: "Mobil\nMotor\nSepeda\nSkuter\nBus\nKereta Api\nPesawat\nPerahu\nKapal\nHelikopter\nKapal Selam\nTruk\nVan\nSUV\nTruk Pickup\nTrem\nKereta Cepat\nSegway\nHoverboard\nSkateboard Listrik\nKereta Golf\nATV\nMobil Salju\nKereta Gantung\nBalon Udara\nPesawat Luar Angkasa\nJet Ski\nKayak\nKano\nYacht",
        art: "Realisme\nImpresionisme\nAbstrak\nSurealisme\nKubisme\nPop Art\nMinimalisme\nEkspresionisme\nArt Deco\nArt Nouveau\nBarok\nRenaisans\nKontemporer\nSeni Digital\nSeni Jalanan\nGraffiti\nFotorealisme\nPointilisme\nFauvisme\nDadaisme\nFuturisme\nKonstruktivisme\nDe Stijl\nSeni Optik\nSeni Konseptual\nSeni Naif\nNeo-Ekspresionisme\nSimbolisme\nRomantisisme\nUkiyo-e"
    }
  }
};