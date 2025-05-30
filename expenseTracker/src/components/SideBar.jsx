import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="drawer fixed top-0 left-0">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="navbar bg-base-300 w-full">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="mx-2 flex-1 px-2">Finsave AI</div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          
          <li><a href='/dashbord'>Home</a></li>
          <li><a href='/income'>Income</a></li>
          <li><a href='/expense'>Expense</a></li>
          <button onClick={()=>navigate('/')} className='bg-blue-500 py-2 px-5 text-white rounded-lg mr-5'>Logout</button>
        </ul>
      </div>
    </div>
    {/* Page content here */}
   
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* phone Sidebar content here */}
      <div><h1>profilehere</h1></div>
      <li><a href='/dashbord'>Home</a></li>
          <li><a href='/income'>Income</a></li>
          <li><a href='/expense'>Expense</a></li>
          <button onClick={()=>navigate('/')} className='bg-blue-500 py-2 px-5 text-white rounded-lg mr-5 '>Logout</button>
    </ul>
  </div>
</div>
    </div>
  )
}

export default SideBar
