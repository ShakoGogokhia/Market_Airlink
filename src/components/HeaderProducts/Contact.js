import React from 'react';

const Contact = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">კონტაქტი</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Google Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11901.059973647289!2d44.7396749052766!3d41.758765635066485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d7aa991f571%3A0x71e663f86c18be18!2s44%20Baron%20De%20Bai%20St%2C%20T'bilisi%2C%20Georgia!5e0!3m2!1sen!2sge!4v1713179260629!5m2!1sen!2sge"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-4">კონტაქტის ფორმა</h3>
            <p className="mb-6 text-sm text-gray-600">გთხოვთ შეავსოთ ქვემოთ მოცემული ველები და ჩვენ მალე დაგიკავშირდებით.</p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="თქვენი სახელი"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="ელ.ფოსტა"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="ტელეფონი"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <textarea
                rows="4"
                placeholder="შეტყობინება"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition"
              >
                გაგზავნა
              </button>
            </form>
          </div>
        </div>

        {/* Footer Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-14 text-sm text-gray-700">
          <div>
            <div>📍</div>
            <p>დიდ დიღომი, ბარონ დე ბაის #44</p>
          </div>
          <div>
            <div>📞</div>
            <p>ტელ: ზარებისთვის : +995 577 322 148</p>
          </div>
          <div>
            <div>📧</div>
            <p>Mail us : info@my-market.ge</p>
          </div>
          <div>
            <div>⏰</div>
            <p>სამუშაო საათები : 10:00 – 19:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
