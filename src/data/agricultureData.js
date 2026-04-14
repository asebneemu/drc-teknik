const agricultureData = [
  {
    id: 1,
    slug: "guidance",
    title: "Guidance",
    subtitle: "Hassas yönlendirme ve otomatik dümenleme çözümleri",
    description:
      "Topcon Guidance çözümleri, hassas konumlandırma ve otomatik yönlendirme ile tarımsal operasyonlarda daha doğru geçişler, daha verimli saha yönetimi ve daha düşük operatör yorgunluğu sağlamaya yönelik ürün ailesidir.",
    image: "",
    products: [
      { name: "XC1 plus", note: '10" özelleştirilebilir dokunmatik ekran' },
      { name: "XC1", note: '7" özelleştirilebilir dokunmatik ekran' },
      { name: "XW-1", note: "Electric Steering System" },
      { name: "XR-1", note: "Receiver / Steering Controller" },
      { name: "ACU-1", note: "Guidance bileşeni" },
      { name: "EHi Valve", note: "Steering bileşeni" },
    ],
  },
  {
    id: 2,
    slug: "correction-services",
    title: "Correction Services",
    subtitle: "GNSS doğruluğunu artıran düzeltme servisleri",
    description:
      "Correction Services ürün ailesi, GNSS tabanlı yönlendirme ve otomatik dümenleme sistemlerinde daha yüksek doğruluk ve tekrarlanabilirlik sağlamak için kullanılan alıcı, baz ve referans çözümlerini kapsar.",
    image: "",
    products: [
      { name: "XR-1", note: "Receiver / Steering Controller" },
      { name: "MR-2", note: "Permanent Base" },
      { name: "HiPer VR", note: "Mobile Base" },
    ],
  },
  {
    id: 3,
    slug: "consoles-software",
    title: "Consoles & Software",
    subtitle: "Ekran, işletim sistemi ve uygulama kontrol çözümleri",
    description:
      "Topcon’un konsol ve yazılım tarafı; otomatik dümenleme desenlerinin ayarlanması, uygulama oranlarının kontrolü, operasyon takibi ve haritalama gibi süreçleri tek arayüzden yönetmeye odaklanır.",
    image: "",
    products: [
      { name: "Topcon Horizon OS", note: "Modüler konsol yazılım altyapısı" },
      { name: "ISOBUS Universal OS", note: "Evrensel uyumluluk odaklı yazılım" },
      { name: "XC1", note: "Konsol" },
      { name: "XC1 plus", note: "Konsol" },
      { name: "X Family Consoles", note: "ISOBUS uyumlu donanım ailesi" },
    ],
  },
  {
    id: 4,
    slug: "digital-farm-management",
    title: "Digital Farm Management",
    subtitle: "Dijital tarım yönetimi ve veri akışı çözümleri",
    description:
      "Topcon Agriculture Platform yapısı, operasyon verilerinin toplanması, düzenlenmesi, görselleştirilmesi ve paylaşılması için kullanılan dijital tarım yönetimi çözümlerini içerir.",
    image: "",
    products: [
      { name: "TAP", note: "Topcon Agriculture Platform" },
      { name: "CL-55", note: "Cloud Connectivity Device" },
      { name: "TAP FEED App", note: "iOS ve Android uygulaması" },
      { name: "TAP FEED Software", note: "Feed management yazılımı" },
    ],
  },
  {
    id: 5,
    slug: "soil-preparation",
    title: "Soil Preparation",
    subtitle: "Toprak hazırlığı ve arazi düzenleme çözümleri",
    description:
      "Soil Preparation ürünleri; arazi hazırlığı, tesviye, drenaj ve toprak verimliliğini destekleyen saha düzenleme uygulamalarına yönelik donanım ve yazılım bileşenlerini kapsar.",
    image: "",
    products: [
      { name: "AGForm-3D", note: "Survey / Design software" },
      { name: "MFDC 100", note: "Landforming / drainage bileşeni" },
      { name: "CAN Motor", note: "Tillage / kontrol bileşeni" },
      { name: "Guidance Receivers", note: "Konumlandırma altyapısı" },
      { name: "Controllers", note: "Kontrol donanımı" },
    ],
  },
  {
    id: 6,
    slug: "seeding",
    title: "Seeding",
    subtitle: "Ekim ve dikim uygulamalarına yönelik ürünler",
    description:
      "Seeding kategorisi; tohum yerleşimi, sıra aralığı ve değişken oranlı uygulama gibi ekim süreçlerinde kullanılan kontrolör ve izleme çözümlerini içerir.",
    image: "",
    products: [
      { name: "Seed Drill Monitor", note: "Ekim izleme çözümü" },
      { name: "Apollo CM-40", note: "Controller" },
      { name: "HCM1", note: "Controller" },
      { name: "ISOBUS", note: "Uyumlu yazılım / entegrasyon yapısı" },
    ],
  },
  {
    id: 7,
    slug: "crop-care",
    title: "Crop Care",
    subtitle: "İlaçlama, gübreleme ve crop monitoring çözümleri",
    description:
      "Crop Care ürünleri; sprayer ve spreader kontrolü, crop monitoring, boom height control ve saha içi hassas uygulama süreçlerine yönelik sensör ve kontrol bileşenlerini içerir.",
    image: "",
    products: [
      { name: "CM-40 / CM-20", note: "Controller" },
      { name: "SL2 Convertor", note: "Weigh çözümü" },
      { name: "CM-20", note: "Controller" },
      { name: "LMS-20", note: "Sensor" },
      { name: "Artemis AS-1X", note: "Controller" },
      { name: "SM-1X", note: "Controller" },
      { name: "GC-35", note: "Controller / Display" },
      { name: "MC-X1 / GR-i3F", note: "Controller / Receiver" },
      { name: "H2 Spraymaster", note: "Spraying çözümü" },
      { name: "MS-1", note: "Ultrasonic Sensor" },
    ],
  },
  {
    id: 8,
    slug: "harvest",
    title: "Harvest",
    subtitle: "Hasat ve verim takibine yönelik çözümler",
    description:
      "Harvest kategorisi; gerçek zamanlı verim ve nem ölçümü, hasat verilerinin kaydı ve sonraki analiz süreçleri için kullanılan donanım ve kontrol çözümlerini kapsar.",
    image: "",
    products: [
      { name: "Optical Sensor", note: "Yield monitoring bileşeni" },
      { name: "Moisture Sensor", note: "Nem ölçüm bileşeni" },
      { name: "YM-2", note: "Controller" },
      { name: "YM-3", note: "Controller" },
    ],
  },
  {
    id: 9,
    slug: "weighing",
    title: "Weighing",
    subtitle: "Tartım ve ölçüm çözümleri",
    description:
      "Weighing kategorisi; grain cart, material handling, onboard weighing ve universal weighing gibi farklı tartım senaryolarına yönelik sensör, gösterge ve veri aktarım çözümlerini içerir.",
    image: "",
    products: [
      { name: "SL2 Convertor Indicator", note: "Gösterge / dönüştürücü" },
      { name: "Cab Control App", note: "Mobil kontrol çözümü" },
      { name: "Weighing Platform", note: "Tartım platformu" },
      { name: "2810BT / 3410B", note: "Indicator" },
      { name: "Load Sensor", note: "Yük sensörü" },
      { name: "Pressure Sensor", note: "Basınç sensörü" },
      { name: "Indicator TST 7600", note: "Indicator" },
      { name: "Indicator SW4600EID", note: "Indicator" },
    ],
  },
  {
    id: 10,
    slug: "feed-management",
    title: "Feed Management",
    subtitle: "Yem yönetimi ve load mixer odaklı çözümler",
    description:
      "Feed Management tarafı; yem karışım sürecinin izlenmesi, kayıt altına alınması ve yazılım ile bağlantılı şekilde yönetilmesi için geliştirilen cihaz ve yazılım ürünlerini kapsar.",
    image: "",
    products: [
      { name: "TMR Tracker", note: "Feed mixing / tracking çözümü" },
      { name: "ERM Wi-Fi Module", note: "Bağlantı modülü" },
      { name: "Indicator TMR 3610 / 4610", note: "TMR gösterge ailesi" },
      { name: "Digi-Star FD1 / CL-55", note: "Indicator / Data Transfer" },
      { name: "TAP FEED App", note: "Mobil uygulama" },
      { name: "TAP FEED Software", note: "Yazılım çözümü" },
    ],
  },
];

export default agricultureData;