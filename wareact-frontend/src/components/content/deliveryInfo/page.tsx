import Image from "next/image";

const DeliveryInfo = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 pt-[100px]  bg-[#F3F4F6]">
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
            <Image
              src="/icons/content/deliveryUnion.svg"
              alt="Küçük Kutu"
              fill
              className="object-contain w-[329px] h-[317px]"
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
          <h2 className="lg:absolute lg:top-10 lg:left-10 text-xl md:text-2xl lg:text-4xl font-semibold leading-[1.32] text-black z-20">
            Teslimat, Paketleme  ve <br /> Kargo Hizmeti Sunuyoruz!
          </h2>
        </div>

        {/* Sağ: Açıklama */}
        <div className="text-sm md:text-base text-[#333] space-y-4  lg:w-1/2">
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
