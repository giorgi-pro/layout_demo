export default function Home() {
  return (
    <main className="h-full">
      <div className="flex flex-col sm:flex-row h-full">
        <div className="sm:w-1/4 bg-gray-800 p-4">
          <h2 className="text-lg font-bold mb-4">Master</h2>
          <ul>
            <li>
              <a href="#" className="block py-1">
                Item 1
              </a>
            </li>
            <li>
              <a href="#" className="block py-1">
                Item 2
              </a>
            </li>
            <li>
              <a href="#" className="block py-1">
                Item 3
              </a>
            </li>
          </ul>
        </div>

        <div className="sm:w-3/4 sm:h-auto h-full bg-gray-400 p-4">
          <h2 className="text-lg font-bold mb-4">Detail</h2>
          <p>Details for selected item will appear here.</p>
        </div>
      </div>
    </main>
  );
}
