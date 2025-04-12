import { useState } from "react";

const Register = ({ onBack }) => {
  const [isIndividual, setIsIndividual] = useState(true);
  

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-gray-100 p-8 rounded-xl shadow-sm border w-full max-w-xl">
        <div className="flex justify-center gap-4 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={isIndividual} onChange={() => setIsIndividual(true)} />
            ფიზიკური პირი
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={!isIndividual} onChange={() => setIsIndividual(false)} />
            ორგანიზაცია
          </label>
        </div>

        <form className="space-y-4">
          {!isIndividual ? (
            <>
              <input type="text" placeholder="ორგანიზაციის დასახელება" className="w-full p-2 border rounded focus:outline-none" />
              <input type="text" placeholder="საიდენტიფიკაციო კოდი" className="w-full p-2 border rounded focus:outline-none" />
            </>
          ) : (
            <>
              <input type="text" placeholder="სახელი და გვარი" className="w-full p-2 border rounded focus:outline-none" />
              <input type="text" placeholder="პირადი ნომერი" className="w-full p-2 border rounded focus:outline-none" />
            </>
          )}

          <input type="text" placeholder="ტელეფონის ნომერი" className="w-full p-2 border rounded focus:outline-none" />
          <input type="email" placeholder="ელ. ფოსტა" className="w-full p-2 border rounded focus:outline-none" />
          <input type="password" placeholder="პაროლი" className="w-full p-2 border rounded focus:outline-none" />
          <input type="password" placeholder="გაიმეორეთ პაროლი" className="w-full p-2 border rounded focus:outline-none" />

          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>კონფიდენციალურობას ვეთანხმები</span>
          </div>

          <button type="submit" className="w-full bg-red-700 text-white py-2 rounded mt-2">რეგისტრაცია</button>
        </form>

      </div>
    </div>
  );
};

export default Register;
