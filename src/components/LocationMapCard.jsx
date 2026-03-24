const LocationMapCard = () => {
  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-md overflow-hidden border border-black/5">
      <div className="p-6 border-b border-black/5">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Konumumuz
        </h2>
        <p className="text-gray-600 leading-7 text-sm">
          Bizi harita üzerinden kolayca bulabilir, konumumuza hızlıca ulaşabilirsiniz.
        </p>
      </div>

      <div className="w-full h-[380px]">
        <iframe
          title="DRC Teknik Konum"
          src="https://www.google.com/maps?q=Ehlibeyt%20Mahallesi%20Ceyhun%20At%C4%B1f%20Kansu%20Caddesi%20104/12%20%C3%87ankaya%20Ankara&z=15&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default LocationMapCard;