'use client'

import { useState } from 'react'
import { SideBarLinks } from '../SideBarLinks/SideBarLinks'
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'

type Toggle = {
  [id: string]: boolean
}

export const SideBar = (): JSX.Element => {
  const [toggle, setToggle] = useState<Toggle>({})

  const handleClick = (event: React.MouseEvent<HTMLLIElement>): void => {
    const { target } = event
    if (target instanceof HTMLElement && target.id) {
      setToggle({
        ...toggle,
        [target.id]: !toggle[target.id]
      })
    }
  }

  return (
    <aside className="col-span-3 border-r-2">
      <nav className="min-h-full flex">
        <ul className="grid w-full h-44 s pt-4 cursor-pointer">
          <li
            id="1"
            className="pl-3 hover:bg-slate-500 h-10 flex items-center justify-between pr-4"
            onClick={handleClick}
          >
            <p>Tema 1</p>

            {toggle['1'] ?  <IoIosArrowBack/> : <IoIosArrowDown/>}
           
          </li>
          <SideBarLinks
            options={[
              <Link key={1} href={'/'}>
                Link 1
              </Link>,
              <Link key={2} href={'/'}>
                Link 2
              </Link>
            ]}
            active={toggle['1']}
          />
          <li
            id="2"
            className="pl-3 hover:bg-slate-500 h-10 flex items-center justify-between pr-4"
            onClick={handleClick}
          >
            <p>Tema 2</p>
              {toggle['2'] ?  <IoIosArrowBack/> : <IoIosArrowDown/>}
          </li>
          <SideBarLinks
            options={[
              <Link key={1} href={'/'}>
                Link 1
              </Link>,
              <Link key={2} href={'/'}>
                Link 2
              </Link>
            ]}
            active={toggle['2']}
          />
          <li
            id="3"
            className="pl-3 hover:bg-slate-500 h-10  flex items-center justify-between pr-4"
            onClick={handleClick}
          >
            <p>Tema 3</p>
            {toggle['3'] ?  <IoIosArrowBack/> : <IoIosArrowDown/>}
          </li>

          <SideBarLinks
            options={[
              <Link key={1} href={'/'}>
                Link 1
              </Link>,
              <Link key={2} href={'/'}>
                Link 2
              </Link>
            ]}
            active={toggle['3']}
          />

          <li
            id="4"
            className="pl-3 hover:bg-slate-500 h-10 flex items-center justify-between pr-4"
            onClick={handleClick}
          >
           <p>Tema 4</p>
        {toggle['4'] ?  <IoIosArrowBack/> : <IoIosArrowDown/>}
          </li>

          <SideBarLinks
            options={[
              <Link key={1} href={'/'}>
                Link 1
              </Link>,
              <Link key={2} href={'/'}>
                Link 2
              </Link>
            ]}
            active={toggle['4']}
          />

          <li
            id="5"
            className="pl-3 hover:bg-slate-500 h-10 flex items-center justify-between pr-4"
            onClick={handleClick}
          >
            <p>Tema 5</p>
        {toggle['5'] ?  <IoIosArrowBack/> : <IoIosArrowDown/>}
          </li>

          <SideBarLinks
            options={[
              <Link key={1} href={'/'}>
                Link 1
              </Link>,
              <Link key={2} href={'/'}>
                Link 2
              </Link>
            ]}
            active={toggle['5']}
          />
        </ul>
      </nav>
    </aside>
  )
}
