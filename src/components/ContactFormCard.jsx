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
    <div className="w-full h-full bg-white rounded-2xl shadow-md border border-black/5 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Bize Yazın
        </h2>
        <p className="text-gray-600 leading-7 text-sm">
          Sorularınızı, taleplerinizi ve mesajlarınızı bize iletebilirsiniz.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-2"
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
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-600"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
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
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-600"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
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
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-emerald-600"
            required
          />
        </div>

        <button
          type="submit"
          className="inline-block bg-emerald-600 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300 hover:bg-emerald-700 hover:scale-105"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default ContactFormCard;