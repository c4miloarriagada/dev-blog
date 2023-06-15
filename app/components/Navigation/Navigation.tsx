import Link from 'next/link'

const routes = [
    {
        route: '/',
        label: 'Home'
    },
    {
        route:'/about',
        label: 'About'
    }
]


export const Navigation = (): JSX.Element => {
  return (
    <header className='sticky top-0 backdrop-blur-md z-20'>
      <nav className="list-none text-lg flex justify-between px-5 items-center h-20 shadow-md">
        <div>
            <ul >
                {routes.map(({route, label})=>(
                    <Link className='ml-3' key={route} href={route}>{label}</Link>
                ))}
            </ul>
        </div>
      <div>
        <label> </label>
        <input
          className="placeholder:text-slate-400 bg-white  border border-slate-300 rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
          />
      </div>
    </nav>
    </header>
  )
}
