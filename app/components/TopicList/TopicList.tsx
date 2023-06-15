'use client'

import React, { useState } from 'react'
import { listOfTopics } from '../SideBar/listOfTopics'
import { SideBarLinks } from '../SideBarLinks/SideBarLinks'
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io'

type Toggle = {
  [id: string]: boolean
}

interface ClickedLink extends HTMLElement {
  dataset: DOMStringMap & {
    action: 'link'
  }
}

interface AnchorLink extends HTMLElement {
  dataset: DOMStringMap & {
    action: 'anchor'
  }
}

export const TopicList = () => {
  const [toggle, setToggle] = useState<Toggle>({})
  const [activeLink, setActiveLink] = useState<Toggle>({})

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const { target } = event

    const linkELement = target as ClickedLink

    const anchorElement = target as AnchorLink


    if (
      target instanceof HTMLAnchorElement &&
      anchorElement.dataset.action === 'anchor'
      ) {
        setActiveLink({
          [target.id]: !activeLink[target.id]
        })
      return
    }
    if (
      target instanceof HTMLElement &&
      linkELement.dataset.action === 'link'
    ) {
      setToggle({
        ...toggle,
        [target.id]: !toggle[target.id]
      })
      return
    }
  }

  return (
    <>
      {listOfTopics.map(({ topic, options }, index) => (
        <React.Fragment key={topic}>
          <li
            id={`${index}`}
            className={`font-bold pl-3 rounded-md hover:bg-slate-200 h-10 flex items-center justify-between pr-4 z-10 ${
              toggle[index] && 'bg-slate-200 rounded-md'
            }`}
            onClick={handleClick}
            data-action="link"
          >
            {toggle[index] ? (
              <p className=" text-sky-500">{topic}</p>
            ) : (
              <p>{topic}</p>
            )}

            {toggle[index] ? <IoIosArrowDown /> : <IoIosArrowBack />}
          </li>
          <SideBarLinks
            activeLink={activeLink}
            handleClick={handleClick}
            options={options}
            active={toggle[index]}
          />
        </React.Fragment>
      ))}
    </>
  )
}
