import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import ButtonSitios from '../../components/sitios/ButtonSitios'
import ButtonAnadir from '../../components/sitios/ButtonAnadir'

const Sedes=()=>  {
  return (
    <div className='bg-yellow-50 w-full h-full'>
      <Nav/>
      <div className='bg-white w-full h-96'>
        <button className='btn btn-success'>Añadir nuevo</button>
      </div>
      <div className='bg-gray-100 items-center justify-center text-center h-40'>
        <h1 className='center text-black p-5 font-bold'>CGDSS Sede Yamboro</h1>
        <h3 className='text-black mt-10'>También llamada Tecnoparque Yamboro, esta sede cuenta con distintas áreas y ambientes distribuidos en todo el territorio.</h3>
      </div>
      <div className='flex bg-gray-300 mt-32 text-center justify-center items-center flex-col'>
        <div className='bg-yellow-50 w-full h-14'>
          <h2 className='text-black font-semibold'>Área de barismo</h2>
        </div>
        <div className='flex flex-row mt-10 items-center'>
          <div className='bg-blue-600 w-40 h-40 mb-10'>p</div>
          <p className='text-black ml-10 mb-12'>Aquí se encuentran los titulados en catación y barismo. En esta área también se encuentra la Escuela Nacional de la Calidad del Café (ENCC).</p>
          <Link to={'/Areas'}><ButtonSitios /></Link>
        </div>
      </div>
      <div className='flex bg-gray-300 mt-32 text-center justify-center items-center flex-col'>
      <div className='bg-yellow-50 w-full h-14'>
        <h2 className='text-black font-semibold '>Área de las TIC</h2>
      </div>
        <div className='flex flex-row mt-10 items-center'>
          <div className='bg-blue-600 w-40 h-40 mb-10'>p</div>
          <p className='text-black ml-10 mb-12'>Aquí se encuentran los titulados en catación y barismo. En esta área también se encuentra la Escuela Nacional de la Calidad del Café (ENCC).</p>
          <Link to={'/Areas'}><ButtonSitios /></Link>
        </div>
      </div>
    </div>
  )
}

export default Sedes