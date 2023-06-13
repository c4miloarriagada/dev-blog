'use client'

import React, {  useState } from 'react'
import { SideBarLinks } from '../SideBarLinks/SideBarLinks'
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io'
import { listOfTopics } from './listOfTopics'

type Toggle = {
  [id: string]: boolean
}

export const SideBar = (): JSX.Element => {
  const [toggle, setToggle] = useState<Toggle>({})
  const [activeLink, setActiveLink] = useState<Toggle>({})

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const { target } = event

    if(target instanceof HTMLAnchorElement){
        setActiveLink({
        [target.id] : !activeLink[target.id]
      })
      return
    }
    if (target instanceof HTMLElement && target.id) {
      setToggle({
        ...toggle,
        [target.id]: !toggle[target.id]
      })
      return
    }
  }


  return (
    <aside className="col-span-3 border-r-2">
      <nav className="min-h-full flex">
        <ul className="grid w-full h-44 s pt-4 cursor-pointer ">
          {listOfTopics.map(({ topic, options }, index) => (
            <React.Fragment key={topic}>
              <li
                id={`${index}`}
                className={`font-bold pl-3 rounded-md hover:bg-slate-200 h-10 flex items-center justify-between pr-4 z-10 ${toggle[index] && 'bg-slate-200 rounded-md'}`}
                onClick={handleClick}
              > 

              {toggle[index] ?  <p className=' text-sky-500'>{topic}</p> : <p>{topic}</p>}

              {toggle[index] ? <IoIosArrowDown /> : <IoIosArrowBack />}
              </li>
              <SideBarLinks activeLink={activeLink} handleClick={(event) => handleClick(event)} options={options} active={toggle[index]} />
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
