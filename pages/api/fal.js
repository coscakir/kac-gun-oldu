export default (req, res) => {
  const falSonuclari = [
    "- bak burda pikaçu benzeri birşey var görüyor musun, evet ya resmen pikaçu bu... - eee, ne demek yani şimdi bu? - valla, biri seni seçecek heralde, anlamı bu.",
    "- bir köpek var ama balık gibi kafası. - hani nerde; köpek mi, balık mı? - hmm... köpek balığı. ?!vize?!",
    "- yunus çıktı burda. hmm yunus tatil demek yaaani vizen yazın gelecekç 🎉",
    "- gelecek ayin beşinci gününün şafağında mailine bak. bekledigin haber gelmiş olacak.",
    "...bak bak şurda işte... göz var sende vizeyi boşver şimdi. -kız kahve den sonra sana bi kurşun dökelim",
    "- sana iki vakite kadar bir yol var, ayrica haber alacaksin, elline önemli bir belge geciyor, kismetlerin bol, elline para gececek, evleniyorsun, mutlu bir yuva ve iyi bir işe sahip oluyorsun...",
    "- kiz vallahi sende hiç birşey görmüyorum. sende hersey süper, hic merak etme.",
    "- sana iki yol var; biri uzun biri kisa; uzunu hayat yolu, kisasi ayak yolu",
    "- e ne görüyosun? - kahveee!?",
    "- ahtapot var bak kocaman, 4 ayağı çıkmış, kaç tane var ki normalde kız? neyse işte ayaklar tamamlanınca müjden var senin",
    "- 29 vakte kadar vizen gelicek.. hımm sen ya topuklu ayakkabı alıcaksın ya da italya'ya gidiceksin..",
    "- senin devlet kapısında bir işin var, hayır olsun inş.",
    "- bir iki damla gözyaşı var, sevinç göz yaşın olsun",
    "- bak şurda yırtıcı bir hayvan var böyle aslan gibi...kıızz sen bi olaydan yırtcan demedi deme he, mülakat mı dersin?",
  ];

  const random = Math.floor(Math.random() * falSonuclari.length);
  res.statusCode = 200;
  res.json({ sonuc: falSonuclari[random] });
};
