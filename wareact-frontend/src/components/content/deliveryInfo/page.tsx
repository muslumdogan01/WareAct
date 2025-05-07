import Image from "next/image";

const DeliveryInfo = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16  bg-[#F3F4F6]">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Sol: Başlık + görseller */}
        <div className="relative flex flex-col items-center lg:items-start lg:w-1/2 space-y-6">
          
          {/* Büyük kutu */}
          <div className="hidden lg:block w-[500px] h-[462px] relative z-10">
            <Image
              src="/icons/content/delivery1.svg"
              alt="Büyük Kargo Kutusu"
              fill
              className="object-contain w-[500px] h-[462px]"
            />
          </div>

          {/* Küçük kutu */}
          <div className="hidden lg:block w-[350px] h-[350px] absolute -bottom-10 left-10 z-0">
            <Image
              src="/icons/content/delivery2.svg"
              alt="Küçük Kutu"
              fill
              className="object-contain w-[300px] h-[289px]"
            />
          </div>
          <div className="hidden lg:block w-[150px] h-[173px] relative z-10">
            <Image
              src="/icons/content/delivery3.svg"
              alt="Büyük Kargo Kutusu"
              fill
              className="object-contain w-[150px] h-[173px]"
            />
          </div>

          {/* Başlık – kutunun üstünde */}
          <h2 className="lg:absolute lg:top-24 lg:left-10 text-center text-4xl font-semibold leading-[1.32] text-black z-20">
            Teslimat, Paketleme <br />  ve Kargo Hizmeti Sunuyoruz!
          </h2>
        </div>

        {/* Sağ: Açıklama */}
        <div className="text-[18px] text-center pt-[100px]  leading-[1.6] font-normal md:text-base text-[#333] space-y-4 lg:text-left lg:max-w-[496px]">
          <p>
            İhtiyacınız olan her türlü teslimat, paketleme ve kargo işlemlerini
            hızlı ve güvenilir bir şekilde gerçekleştiriyoruz. Profesyonel
            ekibimiz, gönderilerinizi en iyi şekilde paketleyerek hasar riskini
            minimize eder ve zamanında teslimat garantisi sunar. İster küçük bir
            zarf, ister büyük bir koliyi gönderiyor olun, her gönderiye aynı
            özeni gösteriyoruz.
          </p>
          <p>
            Yüksek kaliteli paketleme malzemeleriyle, ürünlerinizin güvende
            olduğundan emin olabilirsiniz. Ayrıca, geniş kargo ağımız sayesinde
            ulusal ve uluslararası gönderilerinizi hızlı ve güvenilir şekilde
            ulaştırıyoruz. Tüm bu hizmetleri, bütçenize uygun fiyatlarla sunarak
            işlerinizi kolaylaştırıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
