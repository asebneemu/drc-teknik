const LocationMapCard = () => {
  return (
    <div className="w-full h-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-md">
      <div className="border-b border-black/5 p-4 sm:p-5 lg:p-6">
        <h2 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl">
          Konumumuz
        </h2>

        <p className="mb-3 text-xs leading-6 text-gray-600 sm:text-sm sm:leading-7">
          Bizi harita üzerinden kolayca bulabilir, konumumuza hızlıca ulaşabilirsiniz.
        </p>

        <p className="text-sm font-medium leading-6 text-gray-800 sm:text-base">
          Beycanoğlu İş Merkezi
          <br />
          Ehlibeyt Mahallesi Ceyhun Atıf Kansu Caddesi No: 104/12
          <br />
          Çankaya / Ankara
        </p>
      </div>

      <div className="h-[260px] w-full sm:h-[320px] md:h-[360px] lg:h-[380px]">
        <iframe
          title="DRC Teknik Konum"
          src="https://www.google.com/maps?q=39.8954436,32.8169658&z=18&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default LocationMapCard;