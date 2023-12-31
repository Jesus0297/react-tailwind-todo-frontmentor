import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/MoonIcon";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.5rem] text-white">
            Todo
          </h1>
          <button>
            <MoonIcon className="fill-red-500" />
          </button>
        </div>
        <form className="mb-4 mt-6 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
          <span className="inline-block h-5 w-5 items-center rounded-full border-2"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            name="todo"
            id="todo"
            placeholder="Create a new todo..."
          />
        </form>
      </header>
      <main className="container mx-auto  px-4">
        <div className="rounded-md bg-white [&>article]:p-4 [&>section]:p-4">
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="inline-block h-5 w-5 flex-none items-center rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online javascript curse
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-3 rounded-md bg-white p-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <section className="mt-8 text-center">
        Drag and drop to reader list
      </section>
    </div>
  );
}

export default App;
