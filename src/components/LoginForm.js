const Login = ({ onBack }) => {
  return (
    <div className="flex justify-center items-center bg-[#edf0f5]">
      <div className="bg-white rounded-xl p-8 shadow-md w-full max-w-sm">
        <h2 className="text-lg font-semibold mb-6 text-center">ავტორიზაცია</h2>
        <form className="space-y-4">
          <input 
            type="email" 
            placeholder="ელ. ფოსტა" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <input 
            type="password" 
            placeholder="პაროლი" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button 
            type="submit" 
            className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            შესვლა
          </button>
        </form>
        <button 
          onClick={onBack} 
          className="block mt-4 text-center text-sm text-gray-600 hover:underline"
        >
          პაროლის აღდგენა
        </button>
      </div>
    </div>
  );
};

export default Login;
