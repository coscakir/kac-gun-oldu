export default (req, res) => {
  const falSonuclari = [
    {
      replik:
        "- bak burda pikaçu benzeri birşey var görüyor musun, evet ya resmen pikaçu bu... \n- eee, ne demek yani şimdi bu? \n- valla, biri seni seçecek heralde, anlamı bu.",
      falci: "esaskiz",
    },
    {
      replik:
        "- bir köpek var ama balık gibi kafası. \n - hani nerde; \n köpek mi, balık mı? \n - hmm... köpek balığı. \n ?!vize?!",
      falci: "gabbelloto",
    },
    {
      replik:
        "- yunus çıktı burda\n - iyi ya yunus kısmet demekti galiba\n- hayır, tatil demek\n- nasıl?\n- club flipper\n- hay allam...",
      falci: "kestane sekeri",
    },
    {
      replik:
        "- gelecek ayin beşinci gününün şafağında mailine bak. bekledigin haber gelmiş olacak.",
      falci: "bugunku aklim",
    },
    {
      replik:
        "...bak bak şurda işte... \n göz var sende vizeyi boşver şimdi. \n -kız kahve den sonra sana bi kurşun dökelim",
      falci: "rain",
    },
    {
      replik:
        "- sana iki vakite kadar bir yol var, ayrica haber alacaksin, elline önemli bir belge geciyor, kismetlerin bol, elline para gececek, evleniyorsun, mutlu bir yuva ve iyi bir işe sahip oluyorsun...",
      falci: "limon",
    },
    {
      replik:
        "-ne görüyor neee????\n-kiz vallahi sende hiç bir$ey görmüyorum.\n sende hersey süper,hic merak etme.\n -hayatim kaymi$ sen hala ayni seyleri söylüyorsun,tam be$ yildan beri.",
      falci: "delayn",
    },
    {
      replik:
        "- sana iki yol var; biri uzun biri kisa; uzunu vize yolu, kisasi ayak yolu",
      falci: "emekli",
    },
    { replik: "- e ne görüyosun? \n- kahveee!? \n- e vize??", falci: "sirius" },
    {
      replik:
        "- ahtapot var bak kocaman, 4 ayağı çıkmış, \n - kaç tane var ki normalde kız? \n-neyse işte ayaklar tamamlanınca müjden var senin",
      falci: "roxane",
    },
    {
      replik:
        "- 29 vakte kadar vizen gelicek.. \nhımm sonrasinda sen ya topuklu ayakkabı alıcaksın ya da italya'ya gidiceksin..",
      falci: "gosalyn mallard",
    },
    {
      replik:
        "- senin devlet kapısında bir işin var, hayır olsun inş. - bir iki damla gözyaşı var, sevinç göz yaşın olsun",
      falci: "aglarken gulen cocuk",
    },
    {
      replik:
        "- bak şurda yırtıcı bir hayvan var böyle aslan gibi \n...kıızz sen bi olaydan yırtcan demedi deme he,\n mülakat mı dersin?",
      falci: "bakhele",
    },
  ];

  const random = Math.floor(Math.random() * falSonuclari.length);
  res.statusCode = 200;
  res.json({ sonuc: falSonuclari[random] });
};
