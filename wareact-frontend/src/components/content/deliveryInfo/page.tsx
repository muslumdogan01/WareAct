import Image from "next/image";

const DeliveryInfo = () => {
  return (
    <div className="w-full flex justify-center items-center px-4 py-10 bg-[#F3F4F6]">
      {/* Ana container: yan yana hizalama */}
      <div className="max-w-[1280px] w-full flex flex-col lg:flex-row gap-4 lg:gap-16 items-center relative">
      <h2 className="absolute z-40 top-28 left-42 text-4xl font-semibold leading-[1.32] text-black">
              Teslimat, Paketleme  ve <br /> Kargo Hizmeti Sunuyoruz!
            </h2>
        <div className="w-full lg:w-1/2 h-[500px] relative flex justify-center items-center ">
          {/* Orta kutu */}
          <div className="hidden lg:block w-[500px] h-[462px] absolute left-1/2 transform -translate-x-1/2 z-30">
            <Image
              src="/icons/content/delivery1.svg"
              alt="orta Kargo Kutusu"
              fill
              className="object-contain"
            />

          </div>

          {/* Alt kutular */}
          <div className="hidden lg:block w-[350px] h-[350px] absolute top-[290px] left-[30%] transform -translate-x-1/2 z-20">
            <Image
              src="/icons/content/delivery2.svg"
              alt="orta Kutu"
              fill
              className="object-contain"
            />
          </div>

          <div className="hidden lg:block w-[150px] h-[173px] absolute top-[303px] left-[8%] transform -translate-x-1/2 z-10">
            <Image
              src="/icons/content/delivery3.svg"
              alt="küçük Kargo Kutusu"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Metin */}
        <div className="w-full lg:w-1/2">
          <div className="text-[18px] text-center lg:text-left leading-[1.6] font-normal text-[#333] space-y-4">
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
      </div>
    </div>
  );
};

export default DeliveryInfo;
