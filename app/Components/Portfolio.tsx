import React from "react";

export default function Portfolio() {
  return (
    <section id="Portfolio" className="w-full min-h-screen bg-background1 px-5 md:px-12 lg:px-28 py-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-textColor font-bold w-full text-center mb-8 lg:mb-10">
        Latest <span className="text-mainColor">Projects</span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        
        {/* box-1 */}
        <div className='w-full h-full object-cover rounded-xl min-h-[300px]'>
          <div className="rounded-xl bg-background2 flex items-center justify-around flex-col p-4 h-full" style={{ width: "97%", height: "100%" }}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-textColor">Governor Web</h1>
            <p className="text-sm md:text-[18px] lg:text-[21px] text-center text-textColor">"Clone of Sindh Governor's website highlighting key features and design."</p>
            <a className="w-[50px] h-[50px] rounded-full bg-textColor flex items-center justify-center" href="http://governor-sindh-web-clone-two.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Visit Sindh Governor's website"><i className="bx bx-link-external text-[23px]"></i></a>
          </div>
        </div>

        {/* box-2 */}
        <div className='w-full h-full object-cover rounded-xl min-h-[300px]'>
          <div className="rounded-xl bg-background2 flex items-center justify-around flex-col p-4 h-full" style={{ width: "97%", height: "100%" }}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-textColor">Glam Bags</h1>
            <p className="text-sm md:text-[18px] lg:text-[21px] text-center text-textColor">"Stylish Glam Bags purse website featuring trendy designs and latest collections."</p>
            <a className="w-[50px] h-[50px] rounded-full bg-textColor flex items-center justify-center" href="http://glam-bags-website-j2sw.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Visit Glam Bag Website"><i className="bx bx-link-external text-[23px]"></i></a>
          </div>
        </div>

        {/* box-3 */}
        <div className='w-full h-full object-cover rounded-xl min-h-[300px]'>
          <div className="rounded-xl bg-background2 flex items-center justify-around flex-col p-4 h-full" style={{ width: "97%", height: "100%" }}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-textColor">Tic Tac Toe</h1>
            <p className="text-sm md:text-[18px] lg:text-[21px] text-center text-textColor">"Interactive Tic Tac Toe game allowing players to compete and enjoy classic gameplay."</p>
            <a className="w-[50px] h-[50px] rounded-full bg-textColor flex items-center justify-center" href="http://tic-tac-toe-web-project.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Visit Tic Tac Toe"><i className="bx bx-link-external text-[23px]"></i></a>
          </div>
        </div>

        {/* box-4 */}
        <div className='w-full h-full object-cover rounded-xl min-h-[300px]'>
          <div className="rounded-xl bg-background2 flex items-center justify-around flex-col p-4 h-full" style={{ width: "97%", height: "100%" }}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-textColor">Resume Builder</h1>
            <p className="text-sm md:text-[18px] lg:text-[21px] text-center text-textColor">"Custom resume builder allowing users to input their details and generate professional resumes easily."</p>
            <a className="w-[50px] h-[50px] rounded-full bg-textColor flex items-center justify-center" href="http://hackathon-nu-eight.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Visit Resume Builder"><i className="bx bx-link-external text-[23px]"></i></a>
          </div>
        </div>

        {/* box-5 */}
        <div className='w-full h-full object-cover rounded-xl min-h-[300px]'>
          <div className="rounded-xl bg-background2 flex items-center justify-around flex-col p-4 h-full" style={{ width: "97%", height: "100%" }}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-textColor">Todo List</h1>
            <p className="text-sm md:text-[18px] lg:text-[21px] text-center text-textColor">"A dynamic To-Do List app where users can add, manage, and track their daily tasks efficiently."</p>
            <a className="w-[50px] h-[50px] rounded-full bg-textColor flex items-center justify-center" href="http://to-do-list-web-page.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Visit Todo List"><i className="bx bx-link-external text-[23px]"></i></a>
          </div>
        </div>

        {/* box-6 */}
        <div className='w-full h-full object-cover rounded-xl min-h-[300px]'>
          <div className="rounded-xl bg-background2 flex items-center justify-around flex-col p-4 h-full" style={{ width: "97%", height: "100%" }}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-textColor">Calculator</h1>
            <p className="text-sm md:text-[18px] lg:text-[21px] text-center text-textColor">"Simple and intuitive calculator for performing basic arithmetic operations with ease."</p>
            <a className="w-[50px] h-[50px] rounded-full bg-textColor flex items-center justify-center" href="http://calculator-web-page.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Visit Calculator"><i className="bx bx-link-external text-[23px]"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}
