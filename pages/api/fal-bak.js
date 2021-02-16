export default (req, res) => {
  const falSonuclari = [
    "- bak burda pikaçu benzeri birşey var görüyor musun, \n evet ya resmen pikaçu bu... \n- eee, ne demek yani şimdi bu? \n- valla, biri seni seçecek heralde, anlamı bu.",
    "- bir köpek var ama balık gibi kafası. \n - hani nerde; \n köpek mi, balık mı? \n - hmm... köpek balığı. \n ?!vize?!",
    "- yunus çıktı burda. hmm yunus tatil demek yaaani vizen yazın gelecek. 🎉",
    "- gelecek ayin beşinci gününün şafağında mailine bak. bekledigin haber gelmiş olacak.",
    "...bak bak şurda işte... \n göz var sende vizeyi boşver şimdi. \n -kız kahve den sonra sana bi kurşun dökelim",
    "- sana iki vakite kadar bir yol var, ayrica haber alacaksin, elline önemli bir belge geciyor, kismetlerin bol, elline para gececek, evleniyorsun, mutlu bir yuva ve iyi bir işe sahip oluyorsun...",
    "- kiz vallahi sende hiç birşey görmüyorum. sende hersey süper, hic merak etme.",
    "- sana iki yol var; biri uzun biri kisa; uzunu vize yolu, kisasi ayak yolu",
    "- e ne görüyosun? \n- kahveee!? \n- e vize??",
    "- ahtapot var bak kocaman, 4 ayağı çıkmış, \n kaç tane var ki normalde kız? \nneyse işte ayaklar tamamlanınca müjden var senin",
    "- 29 vakte kadar vizen gelicek.. \nhımm sen ya topuklu ayakkabı alıcaksın ya da italya'ya gidiceksin..",
    "- senin devlet kapısında bir işin var, hayır olsun inş.",
    "- bir iki damla gözyaşı var, sevinç göz yaşın olsun",
    "- bak şurda yırtıcı bir hayvan var böyle aslan gibi \n...kıızz sen bi olaydan yırtcan demedi deme he,\n mülakat mı dersin?",
  ];

  const random = Math.floor(Math.random() * falSonuclari.length);
  res.statusCode = 200;
  res.json({ sonuc: falSonuclari[random] });
};
