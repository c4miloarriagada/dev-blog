'use client'
import { LinkProps } from 'next/link'
import React, { HTMLProps, useState } from 'react'

type Option = {
  id:string
  label: string
}

type Props = {
  options: React.ReactNode[] & HTMLProps<HTMLAnchorElement>
  active: boolean
  activeLink: {[id: string] : boolean}
  handleClick: (event: React.MouseEvent<HTMLLIElement>) => void;
}


export const SideBarLinks = ({ active, options, handleClick, activeLink }: Props) => {


  return (
    <ul
      className={`pb-1 font-semibold ${
        active
          ? 'transition ease-in-out duration-300 opacity-100'
          : 'opacity-0 h-0 z-0'
      }`}
    >
      {options.map((options, index) => (
        <li
          className="pl-6 pr-6 h-7 pt-2 pb-2"
          onClick={handleClick}
          key={index}
        >
          <p
            className={`flex justify-between pl-2 rounded-md hover:bg-slate-200 hover:text-sky-500 ${options && activeLink[options.props.id] && 'bg-slate-200'}`}
            >
          
            {options}
          </p>
        </li>
      ))}
    </ul>
  )
}
