import React from 'react'
import './App.css'
import Header from '../Header/Header'
import AdDesigner from '../AdDesigner/AdDesigner'
import Votes from '../Votes/Votes'
import Ad from '../Ad/Ad'

const App = () => (
  <div className='App'>
    <Header user="Chirpus"/>
    <AdDesigner />
    <Votes />
  </div>
)

export default App