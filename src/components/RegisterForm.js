const Register = ({ onBack }) => {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">რეგისტრაცია</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border" />
          <input type="email" placeholder="Email" className="w-full p-2 border" />
          <input type="password" placeholder="Password" className="w-full p-2 border" />
          <button className="bg-green-600 text-white px-4 py-2 rounded">რეგისტრაცია</button>
        </form>
        <button onClick={onBack} className="mt-4 text-sm text-blue-500 hover:underline">Back</button>
      </div>
    );
  };
  
  export default Register;
  