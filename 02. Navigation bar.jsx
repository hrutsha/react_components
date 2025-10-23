import React, { useState } from 'react'

const Navbar = () => {
    let [mobileView, setmobileView] = useState(false)

    console.log(mobileView)

    return (
        <nav className='bg-red-500 flex justify-between py-5 px-10'>
            <h2 className='text-2xl font-bold'>your shop</h2>
            <div className='hidden md:flex gap-6 md:visible '>
                <a className='bg-white p-2 px-5 rounded-2xl' href="#">home</a>
                <a className='bg-white p-2 px-5 rounded-2xl' href="#">about</a>
                <a className='bg-white p-2 px-5 rounded-2xl' href="#">services</a>
                <a className='bg-white p-2 px-5 rounded-2xl' href="#">contact</a>
            </div>
            <div className='flex gap-4 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16t-.288.713T18 17H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H2q-.425 0-.712-.288T1 3t.288-.712T2 2h1.625q.275 0 .525.15t.375.425zm3.35 7h7z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3" /></svg>
                {
                    !mobileView &&
                    <svg className='md:hidden' xmlns="http://www.w3.org/2000/svg" onClick={() => { setmobileView(true) }} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" /></svg>
                }

                {
                    mobileView &&
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { setmobileView(false) }} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" /></svg>
                }
            </div>

            {/* for mobile  */}
            <div className={`md:hidden absolute left-0 top-[72px] flex flex-col ${mobileView ? 'translate-x-[0%]' : '-translate-x-full'} transition duration-300 `}>
                <a className='bg-red-400 hover:bg-red-900 py-5 px-20' href="#">home</a>
                <a className='bg-red-400 hover:bg-red-900 py-5 px-20' href="#">about</a>
                <a className='bg-red-400 hover:bg-red-900 py-5 px-20' href="#">services</a>
                <a className='bg-red-400 hover:bg-red-900 py-5 px-20' href="#">contact</a>
            </div>


        </nav>
    )
}

export default Navbar
