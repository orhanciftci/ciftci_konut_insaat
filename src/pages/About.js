import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
     
        <h2>Hakkımızda</h2>
     

      {/* Hakkımızda İçerik */}
      <section className="about-content">
        <div className="about-text">
          <h3>15+ Yıl Tecrübe ile Kaliteyi İnşa Ediyoruz</h3>
          <p>
          Çiftçi Konut, inşaat sektöründe güçlü temeller üzerine kurulmuş, geleceği bugünden inşa eden bir markadır. Bizler, her projede sadece bir yapı değil, bir yaşam alanı yaratmayı hedefliyoruz. Yılların tecrübesi ve sektördeki yenilikçi yaklaşımımızla, her detayda mükemmelliği arıyoruz.

Güvenilir, estetik ve sürdürülebilir projelerle, hem iş ortaklarımıza hem de müşterilerimize değer katmayı amaçlıyoruz. Yenilikçi ve çağdaş mimari anlayışımızla, her geçen gün daha sağlam adımlarla büyüyerek, sektördeki yerimizi güçlendirmeye devam ediyoruz.

Çiftçi Konut olarak, insan odaklı tasarımlarımızla, yaşam alanlarına estetik bir dokunuş yaparken, güvenliği ve kaliteden asla ödün vermiyoruz. Gelişen teknoloji ve trendlerle uyum içinde projeler üretiyor, her işte mükemmel sonuçlar elde ediyoruz
          </p>
        </div>

        {/* Kartlar */}
        <div className="about-grid">
          <div className="about-card">
            <h3>Vizyonumuz</h3>
            <p>Çiftçi Konut İnşaat olarak vizyonumuz; mimariyi sadece yapı inşa etmekten ibaret görmeyip, insan hayatına dokunan, estetikle işlevselliği buluşturan, zamanın ötesinde yaşam alanları yaratmaktır.
Geleneksel değerlerimizden ilham alarak çağdaş mimariyle harmanladığımız her projemiz, sadece bugünü değil, yarının ihtiyaçlarını da düşünerek şekillenir.

Amacımız; Türkiye’de ve uluslararası arenada da tanınan, kalite ve güvenle özdeşleşmiş bir marka haline gelmek.
Çiftçi Konut İnşaat; bulunduğu her şehirde iz bırakan, insanların içinde kendini ait hissettiği yapılar inşa etmeyi hedefler.
Her tuğlada tutku, her projede vizyon var.</p>
          </div>
          <div className="about-card">
            <h3>Misyonumuz</h3>
            <p>Çiftçi Konut İnşaat, her projesinde sadece fiziksel bir yapı değil, yaşayan ve yaşatan bir değer üretmeyi misyon edinmiştir.
Bizim için bir bina, sadece beton ve çelik değil; bir ailenin hayali, bir yatırımcının umudu, bir kentin geleceğidir.
Bu bilinçle çalışır, estetikle mühendisliği birleştirir, her ayrıntıda kullanıcı deneyimini düşünürüz.

Yüksek kalite standartlarına bağlı kalırken sürdürülebilirliğe önem verir, çevreye duyarlı, yenilikçi çözümler sunarız.
Müşteri memnuniyetini bir sonuç değil, bir başlangıç olarak görür; her işte güven, şeffaflık ve sorumluluk ilkeleriyle hareket ederiz.

Çiftçi Konut, yalnızca yapı üretmez.
Bir yaşam biçimi sunar.
Bir vizyonu yaşatır.
Bir markayı geleceğe taşır.</p>
          </div>
          <div className="about-card">
            <h3>Deneyim</h3>
            <p>Yıllara dayanan tecrübemizle, inşaat sektöründe sadece projeler değil, kalıcı güven ilişkileri inşa ettik.
            Çiftçi Konut olarak, her bir projeye yılların birikimini, sahada kazanılmış tecrübemizi ve yenilikçi bakış açımızı yansıtıyoruz.

Her detayda “deneyim konuşur” ilkesini benimseyerek; planlamadan teslimata kadar tüm süreçlerde profesyonel bir yaklaşım sergiliyoruz.
Müşterilerimizin ihtiyaçlarını doğru analiz eder, estetik ve işlevselliği bir araya getirerek beklentilerin ötesine geçeriz.

Gerçek deneyim; sadece ne yaptığınla değil, nasıl hissettirdiğinle ilgilidir.
Ve biz, her projede bu hissi yaşatmak için çalışıyoruz.</p>
          </div>
        </div>
      </section>

      {/* Ekibimiz Bölümü */}
      <section className="team-section">
        <h2>Ekibimiz</h2>
        <div className="team-content">
          <img src="/images/renderfoto/city.jpg" alt="Ekibimiz" className="team-image" />
          <p>
          Çiftçi Konut'un başarısının arkasında, her biri alanında uzmanlaşmış mühendisler, mimarlar ve inşaat profesyonellerinden oluşan güçlü bir ekip yer almaktadır. Her bir projede, uzmanlığımızı ve deneyimimizi en iyi şekilde kullanarak, en yüksek kalitede işlere imza atıyoruz.

Takım ruhuyla hareket ediyor, her projeye tutku ve özveriyle yaklaşıyoruz. Bizim için her detay, müşteri beklentilerini karşılamak ve ötesine geçmek için bir fırsattır. Ekibimiz, birlikte çalışarak güçleniyor, zorlukların üstesinden gelerek her zaman en iyi sonuçları elde ediyor.

Güçlü organizasyon yapımız, koordinasyonu mükemmel şekilde sağlayarak, projelerin her aşamasında yüksek verimlilik ve mükemmellik sunmamıza olanak tanıyor. Müşterilerimize sunduğumuz hizmetin kalitesini artırmak için sürekli olarak kendimizi geliştiriyor ve yenilikçi çözümler üretiyoruz.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
