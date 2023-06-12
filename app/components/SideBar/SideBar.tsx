'use client'

import { useState } from 'react'
import { SideBarLinks } from '../SideBarLinks/SideBarLinks'
import Link from 'next/link'

interface Toggle {
    [ id:string ]: boolean;
}

export const SideBar = (): JSX.Element => {
    
  const [toggle, setToggle] = useState<Toggle>({})

  const handleClick = (event: React.MouseEvent<HTMLLIElement>): void => {
   const { target } = event
   if (target instanceof HTMLElement && target.id) {
    setToggle({
        ...toggle,
        [target.id] : !toggle[target.id]
    })
  }
  }

  return (
    <aside className="col-span-3 border-r-2">
      <nav className="min-h-full flex">
        <ul className="grid w-full h-44 s pt-4 cursor-pointer">
            
          <li
            id='1'
            className="pl-3 hover:bg-slate-500 h-full flex items-center"
            onClick={handleClick}
          >
         <p>Tema 1</p>
          </li>
          <SideBarLinks 
            options={[<Link key={1} href={'/'}>Link 1</Link>, <Link key={2} href={'/'}>Link 2</Link>]}
            active={toggle['1']}
          />
          {/* <li className="pl-3 hover:bg-slate-500 h-full flex items-center"
             onClick={handleClick}

          >
            <p>Tema 2</p>
          </li>
          <SideBarLinks />
          <li className="pl-3 hover:bg-slate-500 h-full flex items-center">
            Tema 3
          </li>

          <SideBarLinks />

          <li className="pl-3 hover:bg-slate-500 h-full flex items-center">
            Tema 4
          </li>

          <SideBarLinks />

          <li className="pl-3 hover:bg-slate-500 h-full flex items-center">
            Tema 5
          </li>

          <SideBarLinks /> */}
        </ul>
      </nav>
    </aside>
  )
}
