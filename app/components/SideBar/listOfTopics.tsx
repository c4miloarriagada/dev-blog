import Link from "next/link";
import { ReactElement } from "react";
import { BsLink45Deg } from 'react-icons/bs'

type Topic = {
  topic: string;
  options: ReactElement[]
}

export const listOfTopics: Topic[] = [
  {
    topic: 'Topic 1',
    options: [
      <Link id="0" className="w-full flex justify-between" key={1} href={'/about'}>
        Link 1 
        <BsLink45Deg />
      </Link>,
      <Link id="1" className="w-full flex justify-between"  key={2} href={'/'}>
        Link 2
        <BsLink45Deg />
      </Link>
    ]
  },
  {
    topic: 'Topic 2',
    options: [
      <Link  id="3" className="w-full flex justify-between"  key={1} href={'/'}>
        Link 1
         <BsLink45Deg />
      </Link>,
      <Link id="4" className="w-full flex justify-between"  key={2} href={'/'}>
        Link 2
         <BsLink45Deg />
      </Link>
    ]
  },
  {
    topic: 'Topic 3',
    options: [
      <Link id="5" className="w-full flex justify-between" key={1} href={'/'}>
        Link 1
         <BsLink45Deg />
      </Link>,
      <Link  id="6" className="w-full flex justify-between" key={2} href={'/'}>
        Link 2
         <BsLink45Deg />
      </Link>
    ]
  },
  {
    topic: 'Topic 4',
    options: [
      <Link id="7" className="w-full flex justify-between"  key={1} href={'/'}>
        Link 1
         <BsLink45Deg />
      </Link>,
      <Link id="8" className="w-full flex justify-between" key={2} href={'/'}>
        Link 2
         <BsLink45Deg />
      </Link>
    ]
  },
  {
    topic: 'Topic 5',
    options: [
      <Link id="9" className="w-full flex justify-between"  key={1} href={'/'}>
        
        Link 1

         <BsLink45Deg />
      </Link>,
      <Link id="10" className="w-full flex justify-between"  key={2} href={'/'}>
        Link 2
         <BsLink45Deg />
      </Link>
    ]
  }
];
