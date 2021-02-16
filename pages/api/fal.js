export default (req, res) => {
  const falSonuclari = [
    "- bak burda pikaçu benzeri birşey var görüyor musun, evet ya resmen pikaçu bu... - eee, ne demek yani şimdi bu? - valla, biri seni seçecek heralde, anlamı bu.",
    "- bir köpek var ama balık gibi kafası. - hani nerde; köpek mi, balık mı? - hmm... köpek balığı.",
    "- yunus çıktı burda. hmm yunus tatil demek yaaani vizen yazin gelicek 🎉",
    "gelecek ayin beşinci gününun şafağında mailine bak. bekledigin haber gelmis olacak.",
    "-....bak bak $urda iste... göz var sende  -kiz kahve den sonra sana bi kur$un dökelim",
    "- sana iki vakite kadar bir yol var, ayrica haber alacaksin, elline önemli bir belge geciyor, kismetlerin bol, elline para gececek, evleniyorsun, mutlu bir yuva ve iyi bir i$e sagip oluyorsun...",
    "kiz vallahi sende hiç bir$ey görmüyorum. sende hersey süper,hic merak etme. (vize sonucu muallak soylemeye korktum)",
    "sana iki yol var;biri uzun biri kisa;uzunu hayat yolu,kisasi ayak yolu",
    " -e ne görüyosun? - kahveee!?",
    "-ahtapot var bak kocaman, 4 ayağı çıkmış, kaç tane var ki normalde kız? neyse işte ayaklar tamamlanınca müjden var senin",
    "29 vakte kadar vizen gelicek.. hımm sen ya topuklu ayakkabı alıcaksın ya da italya'ya gidiceksin..",
  ];

  const random = Math.floor(Math.random() * falSonuclari.length);
  res.statusCode = 200;
  res.json({ sonuc: falSonuclari[random] });
};
