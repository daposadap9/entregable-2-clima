import React, { useState } from 'react'

const Weather = ({weather, temp}) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const changeUnitTemp = () => {
        setIsCelsius(!isCelsius)
    }

  return (
    <section className='text-xl'>
        <h2 className='text-center mb-4 font-bold text-2xl tracking-wider'>{weather?.name},{weather.sys.country}</h2>
        <section className='grid gap-4 sm:grid-cols-two'>

            <article className='bg-slate-300/70 rounded-3xl grid grid-cols-2 py-2 sm:px-2'>
                <h3 className='capitalize col-start-1-col-end-3'>{weather.weather[0].description}</h3>
                    <h2 className='text-[45px] font-light sm:text-6xl'>{isCelsius ? `${temp.celsius} °C`:`${temp.fahrenheit} °F`}</h2>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                </div>
            </article>
            <article className='bg-slate-300/70 rounded-3xl grid grid-cols-3 py-2 justify-items-center justify-center sm:grid-cols-1 sm:px-2 sm:py-0'>
                <div className='flex gap-2 tex-sm justify-items-center justify-center'>
                    <div><img src="/images/imagen1.png" alt="" />m/s</div>
                    <h5>{weather.wind.speed}</h5>
                </div>
                <div className='flex gap-2 tex-sm justify-items-cente justify-center'>
                    <div><img src="/images/imagen2.png" alt="" /></div>
                    <h5>{weather.main.humidity}</h5>
                </div>
                <div className='flex gap-2 tex-sm justify-items-cente justify-center'>
                    <div><img src="/images/imagen3.png" alt="" /></div>
                    <h5>{weather.main.pressure}</h5>
                </div>
                

            </article>

        </section>
        <button onClick={changeUnitTemp} className='bg-blue-500 py-2 px-6 text-white font-bould rounded-full hover:bg-blue-800 duration-200 text-sm block mx-auto mt-4'>Change C°/°F</button>
    </section>
  )
}

export default Weather