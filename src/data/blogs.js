const blogs = [
  {
    id: 1,
    category: "Topcon Bülten",
    title: "Topcon Hassas Tarım Sistemlerinde Teknik Servis Sürecinin Önemi",
    date: "18 Mart 2026",
    image: "/agriculture/kontrol-sistemleri.jpg",
    slug: "topcon-hassas-tarim-teknik-servis-sureci",
    excerpt:
      "Hassas tarım sistemlerinde yüksek doğruluk yalnızca cihaz seçimiyle değil; doğru kurulum, düzenli kontrol ve teknik servis desteğiyle sürdürülebilir hale gelir.",
    content: [
      "Topcon hassas tarım sistemleri; GNSS alıcıları, ekran üniteleri, otomatik dümenleme bileşenleri ve saha yazılımlarının birlikte çalıştığı entegre yapılardır. Bu nedenle sistem performansı yalnızca ürün kalitesine değil, kurulumun doğru yapılmasına ve cihazların sahaya uygun şekilde yapılandırılmasına bağlıdır.",
      "Özellikle ikinci el cihazlarda teknik kontrol süreci daha kritik hale gelir. Anten, kablo bağlantıları, ekran tepkileri, yazılım sürümü, kalibrasyon değerleri ve saha uyumluluğu kontrol edilmeden yapılan alımlar ilerleyen süreçte ek maliyetlere neden olabilir.",
      "Teknik servis desteği, kullanıcıların yalnızca arıza durumunda değil; cihaz seçimi, kurulum, kalibrasyon ve periyodik bakım aşamalarında da doğru karar vermesini sağlar. Bu nedenle Topcon sistemlerinde servis süreci, cihazın verimli ve uzun ömürlü kullanılmasının temel parçasıdır.",
    ],
  },
  {
    id: 2,
    category: "Saha Notları",
    title: "Otomatik Dümenleme Sistemlerinde Kalibrasyon Neden Kritik?",
    date: "12 Mart 2026",
    image: "/agriculture/autosteer.jpeg",
    slug: "otomatik-dumenleme-kalibrasyon-onemi",
    excerpt:
      "Otomatik dümenleme sistemlerinde küçük kalibrasyon hataları bile saha performansını doğrudan etkileyebilir.",
    content: [
      "Otomatik dümenleme sistemleri, traktörün belirlenen hat üzerinde hassas şekilde ilerlemesini sağlar. Ancak bu hassasiyetin korunabilmesi için sistemin makineye, ekipmana ve arazi koşullarına uygun şekilde kalibre edilmesi gerekir.",
      "Kalibrasyon eksik olduğunda hat sapmaları, üst üste binmeler, boşluklar veya düzensiz geçişler görülebilir. Bu durum özellikle ekim, gübreleme ve ilaçlama gibi işlemlerde verim kaybına yol açabilir.",
      "Düzenli teknik kontrol, sistemin doğru çalıştığından emin olmak için önemlidir. Direksiyon tepkisi, sensör değerleri, GNSS sinyal kalitesi ve ekran ayarları birlikte değerlendirilmelidir.",
    ],
  },
  {
    id: 3,
    category: "Teknik Değerlendirme",
    title: "İkinci El Topcon Cihaz Alırken Nelere Dikkat Edilmeli?",
    date: "6 Mart 2026",
    image: "/agriculture/tarım-genel.jpeg",
    slug: "ikinci-el-topcon-cihaz-alirken-dikkat-edilmesi-gerekenler",
    excerpt:
      "İkinci el cihazlarda dış görünüm yeterli değildir; teknik kontrol yapılmadan alınan sistemler sonradan ciddi maliyet çıkarabilir.",
    content: [
      "İkinci el Topcon cihaz alımında ilk bakılması gereken konu cihazın fiziksel durumundan çok teknik çalışabilirliğidir. Ekran, alıcı, kablo bağlantıları, anten ve yazılım uyumluluğu birlikte kontrol edilmelidir.",
      "Cihazın daha önce hangi koşullarda kullanıldığı, yazılım sürümü, güncelleme durumu ve bağlantı portlarının sağlığı satın alma kararında belirleyici olabilir. Özellikle saha şartlarında kullanılan ekipmanlarda görünmeyen arızalar sonradan ortaya çıkabilir.",
      "Bu nedenle ikinci el cihaz alımından önce teknik servis değerlendirmesi almak, yanlış ürün seçimini ve gereksiz masraf riskini azaltır.",
    ],
  },
  {
    id: 4,
    category: "GNSS Teknolojisi",
    title: "GNSS Doğruluğu Tarımsal Operasyonları Nasıl Etkiler?",
    date: "28 Şubat 2026",
    image: "/agriculture/gps-tarim.jpeg",
    slug: "gnss-dogrulugu-tarimsal-operasyonlari-nasil-etkiler",
    excerpt:
      "GNSS doğruluğu, tarım makinelerinin sahadaki hareketini ve uygulama kalitesini doğrudan belirleyen temel faktörlerden biridir.",
    content: [
      "GNSS teknolojisi, tarım makinelerinin arazi üzerindeki konumunu belirlemek için kullanılır. Doğruluk seviyesi arttıkça makinenin takip ettiği hat daha stabil hale gelir.",
      "Düşük doğruluk seviyelerinde geçişler arasında sapmalar oluşabilir. Bu durum bazı alanların fazla işlenmesine, bazı alanların ise eksik kalmasına neden olabilir.",
      "Topcon sistemlerinde doğru GNSS çözümünün seçilmesi; yapılacak işin türüne, arazi yapısına ve beklenen hassasiyet seviyesine göre değerlendirilmelidir.",
    ],
  },
  {
    id: 5,
    category: "Servis Gündemi",
    title: "Topcon Ekran Sistemlerinde Yazılım Kontrolü Neden Gerekli?",
    date: "20 Şubat 2026",
    image: "/agriculture/verim-analizi.jpeg",
    slug: "topcon-ekran-sistemlerinde-yazilim-kontrolu",
    excerpt:
      "Ekran sistemlerinde yazılım kontrolü, cihazın güncel, uyumlu ve stabil çalışması için teknik servis sürecinin önemli bir parçasıdır.",
    content: [
      "Topcon ekran sistemleri, saha operasyonlarının merkezinde yer alır. Operatör, yönlendirme çizgilerini, ekipman verilerini ve sistem ayarlarını bu ekranlar üzerinden takip eder.",
      "Yazılım sürümünün eski olması, bazı özelliklerin çalışmamasına veya ekipman uyumsuzluklarına neden olabilir. Bu yüzden ekran sistemlerinin düzenli kontrol edilmesi gerekir.",
      "Teknik servis sürecinde yazılım durumu, bağlantılar, dokunmatik tepki, veri aktarımı ve sistem uyumluluğu birlikte değerlendirilir.",
    ],
  },
  {
    id: 6,
    category: "Bakım & Kontrol",
    title: "Sezon Öncesi Topcon Sistem Kontrolü Neden Yapılmalı?",
    date: "14 Şubat 2026",
    image: "/agriculture/toprak-hazirligi.jpeg",
    slug: "sezon-oncesi-topcon-sistem-kontrolu",
    excerpt:
      "Sezon başlamadan yapılan teknik kontroller, sahada yaşanabilecek zaman kaybını ve beklenmedik arızaları azaltır.",
    content: [
      "Tarım sezonu başlamadan önce Topcon sistemlerinin genel teknik kontrolden geçirilmesi, sahada oluşabilecek aksaklıkların önüne geçer.",
      "Kablo bağlantıları, anten durumu, ekran çalışması, GNSS sinyal alımı, otomatik dümenleme tepkisi ve kalibrasyon değerleri kontrol edilmelidir.",
      "Sezon öncesi bakım, cihazın yalnızca çalışıp çalışmadığını değil; sahada doğru performans verip vermeyeceğini de değerlendirmeyi sağlar.",
    ],
  },
];

export default blogs;