import React from 'react'
import "./App.css"
import { NavBar } from './components/NavBar'
import { ExtensionCard } from './components/ExtensionCard'

export const App = () => {
  return (
    <>
    <NavBar/>
    <div className="containerCards">
      <ExtensionCard 
      cardTitle="DevLens" 
      cardImage="./public/logo-devlens.svg" 
      cardDescription="Quickly inspect page layouts and wisualize element boundaries"
      />
      <ExtensionCard 
      cardTitle="StyleSpy" 
      cardImage="./public/logo-style-spy.svg" 
      cardDescription="Instantly analyze and copy CSS from any webpage element"
      />
      <ExtensionCard 
      cardTitle="SpeedBoost" 
      cardImage="./public/logo-speed-boost.svg" 
      cardDescription="Optimizes browser resource usage to accelerate page loading"
      />
      <ExtensionCard 
      cardTitle="JSONWizard" 
      cardImage="./public/logo-json-wizard.svg" 
      cardDescription="Formats, validates, and prettifies JSON responses in-browser"
      />
      <ExtensionCard 
      cardTitle="TahMaster Pro" 
      cardImage="./public/logo-tab-master-pro.svg"  
      cardDescription="Organizes browser tabs into groups and sessions"
      />
      <ExtensionCard 
      cardTitle="ViewportBuddy" 
      cardImage="./public/logo-viewport-buddy.svg"  
      cardDescription="Simulates various screen resolutions directly within the browser"
      />
      <ExtensionCard 
      cardTitle="Markun Notes" 
      cardImage="./public/logo-markup-notes.svg"  
      cardDescription="Enables annotation and notes directly onto webpages for collaborative debugging"
      />
      <ExtensionCard 
      cardTitle="GridGuides" 
      cardImage="./public/logo-grid-guides.svg"  
      cardDescription="Overlay customizable grids and alignment guides on any webpage."
      />
      <ExtensionCard 
      cardTitle="Palette Picker" 
      cardImage="./public/logo-palette-picker.svg" 
      cardDescription="20 Instantly extract color pareste strany webpage."
      />

    </div>
    
    </>
  )
}