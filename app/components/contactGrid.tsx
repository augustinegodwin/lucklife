import React from 'react'
import { GoogleMap } from './googleMap'

export default function ContactGrid() {
  return (
    <div className="flex w-full gap-5 h-140">
        <div className="flex-1 rounded-[25px] overflow-hidden bg-gray-200">
            <GoogleMap/>
        </div>
        <div className="flex-1 ">
            
        </div>
    </div>
  )
}
