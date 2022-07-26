import React from 'react'

const Griddesign = () => {
  return (
    <>
		<main className="flex flex-row justify-between mt-10 h-52">
			<section className="first   w-48  h-24 ml-5">
				<div className="bg-blue-300 w-22 rounded-t-2xl h-16 "></div>
				<div className="bg-yellow-300 w-22  h-full rounded-b-3xl -ml-7"></div>
			</section>

			<section className="second flex flex-row  w-72 flex-wrap ">
				<div className="w-full grid grid-cols-2">
					<div className="bg-yellow-300 rounded-t-2xl mt-5"></div>
					<div className="bg-blue-900 w-auto rounded-t-3xl -mt-7"></div>
				</div>
				<div className="w-full grid grid-cols-2">
					<div className="bg-white "></div>
					<div className="bg-yellow-300 rounded-b-2xl -mb-4"></div>
				</div>
			</section>

			<section className="third w-48 h-24 mr-6">
				<div className="bg-yellow-300 rounded-t-2xl h-full"></div>
				<div className="bg-blue-300 h-full rounded-b-2xl "></div>
			</section>
      </main>
      </>
	);
}

export default Griddesign