const Card = () => {
  return (
    <div id="container" className=" bg-white w-80 h-[500px] rounded-2xl drop-shadow-2xl font-sans">
      <img src="/images/illustration-hero.svg" alt="Illustration Hero" id="image-container" className="w-full object-cover rounded-tl-2xl rounded-tr-2xl" />
      <div id="text-and-button-container" className="flex flex-col items-center justify-center text-center">
        <h2 className=" text-darkBlue font-black text-2xl mt-8 mb-2">Order Summary</h2>
        <p className=" text-desatBlue font-normal text-xs px-8 leading-5">You can now listen to millions of songs, audiobooks, and podcasts on any devices, anywhere you like!</p>

        <div id="plan-container" className="flex items-center my-8">
          <img src="/images/icon-music.svg" alt="Music Icon" className=" w-10"/>
          <div id="annual-plan-text" className="flex flex-col justify-between ml-3 mr-14">
            <p className=" text-darkBlue font-black text-sm">Annual Plan</p>
            <p className=" text-desatBlue font-normal text-sm">$59.99/year</p>
          </div>
          <a href="#" className=" underline text-brightBlue font-bold text-xs hover:no-underline hover:opacity-80">Change</a>
        </div>

        <button className=" bg-brightBlue text-xs rounded-lg font-bold w-64 drop-shadow-2xl mb-2 h-9 hover:opacity-80">Proceed to Payment</button>
        <button className="bg-white text-desatBlue text-xs font-bold rounded-lg hover:text-darkBlue hover:border-none">Cancel Order</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className=" bg-backgroundPattern w-screen h-screen flex justify-center items-center bg-no-repeat bg-contain bg-paleBlue">
      <Card />
    </div>
  )
}

export default App
