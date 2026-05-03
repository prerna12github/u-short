export default function UrlForm() {
  return (
  <div className="flex flex-col items-center justify-center dark mt-8">
    <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-200 mb-4">Enter your long URL</h2>
  
      <form className="flex flex-col">
        <input placeholder="https://www.example.com" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email">
        </input>
        <button className="flex justify-center bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150 w-45" type="submit">Shorten URL</button>
      </form>
    </div>
  </div>
)
}
