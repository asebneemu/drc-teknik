import { useState } from "react";

const ContactFormCard = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Gönderilen form verisi:", formData);

    // Buraya EmailJS / Formspree / backend entegrasyonu gelecek
    alert("Form gönderimi için mail servisi bağlanacak.");
  };

  return (
    <div
      className="
        w-full h-full rounded-2xl border border-black/5 bg-white shadow-md
        p-4 sm:p-5 lg:p-6
      "
    >
      <div className="mb-4 sm:mb-5">
        <h2 className="mb-2 text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
          Bize Yazın
        </h2>
        <p className="text-sm sm:text-base leading-6 text-gray-600">
          Sorularınızı, taleplerinizi ve mesajlarınızı bize iletebilirsiniz.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm sm:text-base font-medium text-gray-700"
          >
            Ad Soyad
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Ad Soyad"
            className="
              w-full rounded-xl border border-gray-300 bg-white
              px-4 py-2.5 sm:py-3 lg:py-3
              text-sm sm:text-base
              outline-none transition
              focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100
            "
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm sm:text-base font-medium text-gray-700"
          >
            E-posta Adresi
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ornek@mail.com"
            className="
              w-full rounded-xl border border-gray-300 bg-white
              px-4 py-2.5 sm:py-3 lg:py-3
              text-sm sm:text-base
              outline-none transition
              focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100
            "
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm sm:text-base font-medium text-gray-700"
          >
            Mesajınız
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mesajınızı buraya yazın..."
            rows="3"
            className="
              w-full rounded-xl border border-gray-300 bg-white
              px-4 py-2.5 sm:py-3 lg:py-3
              text-sm sm:text-base
              outline-none resize-none transition
              focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100
              min-h-[90px] sm:min-h-[110px] lg:min-h-[120px]
            "
            required
          />
        </div>

        <button
          type="submit"
          className="
            w-full sm:w-auto
            rounded-xl bg-emerald-600 px-6 sm:px-8 py-2.5 sm:py-3
            text-sm sm:text-base font-semibold text-white shadow-md
            transition-all duration-300
            hover:bg-emerald-700 sm:hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
          "
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default ContactFormCard;