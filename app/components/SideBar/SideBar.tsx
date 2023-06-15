import { TopicList } from '../TopicList/TopicList'

export const SideBar = (): JSX.Element => {
  return (
    <aside className="col-span-3 border-r-2">
      <nav className="min-h-full flex">
        <ul className="grid w-full h-44 s pt-4 cursor-pointer ">
          <TopicList />
        </ul>
      </nav>
    </aside>
  )
}
