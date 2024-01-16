import React from 'react'
import ModelCanvas from '../../Canvas/Canvas'
import { Laptop } from '../../Experience/Items/Computer/Laptop'
import { FootballBlack } from '../../Experience/Items/Sports/FootBallBlack'
import { BasketBall } from '../../Experience/Items/Sports/BasketBall'
import { VarietyBalls } from '../../Experience/Items/Sports/VarietyBalls'
import { VollyBall } from '../../Experience/Items/Sports/VollyBall'
import { Ruggby } from '../../Experience/Items/Sports/Ruggby'
import { Racket } from '../../Experience/Items/Sports/Racket'
import { BaseBallBat } from '../../Experience/Items/Sports/BaseBallBat'
import { Bowling } from '../../Experience/Items/Sports/Bowling'
import { FootBallGold } from '../../Experience/Items/Sports/FootBallGold'
import { Samsung } from '../../Experience/Items/SmartPhones/Samsung'
import { Setup } from '../../Experience/Items/Computer/Setup'
import { BlueHelmet } from '../../Experience/Items/Helmets/BlueHelmet'
import { RedGloves } from '../../Experience/Items/Gloves/RedGloves'
import { BlackShoes } from '../../Experience/Items/Shoes/BlackShoes'
import { BlueBag } from '../../Experience/Items/Bags/BlueBag'
import { Spray } from '../../Experience/Items/Lubricants/Spray'
import { CleanerTin } from '../../Experience/Items/Tins/CleanerTin'
import { Bike } from '../../Experience/Items/Automotive/Bike'
import { TyreRack } from '../../Experience/Items/Automotive/TyreRack'
import { MannequinWithHelmet } from '../../Experience/Items/Mannequins/MannequinWithHelmet'
import { SimpleBike } from '../../Experience/Items/Automotive/SimpleBike'
import { SimpleMannequinWithHelmet } from '../../Experience/Items/Mannequins/SimpleMannequinWithHelmet'
import { Bat } from '../../Experience/Items/Sports/Bat'
import { CricketHelmet } from '../../Experience/Items/Sports/Helmet'
import { CricketGloves } from '../../Experience/Items/Sports/Gloves'
import { Pads } from '../../Experience/Items/Sports/Pads'
import { Cap } from '../../Experience/Items/Sports/Cap'
import { SimpleMannequinWithBandana } from '../../Experience/Items/Mannequins/SimpleMannequinWithBandana'

const ExportModel = ({ category, type }) => {
  if (category.toLowerCase() === 'electronics') {
    if (type === 'laptop')
      return (
        <ModelCanvas>
          <Laptop scale={8} />
        </ModelCanvas>
      )
    else if (type === 'smartphones')
      return (
        <ModelCanvas autoRotate={true}>
          <Samsung scale={12} position={[0, 0, 0]} />
        </ModelCanvas>
      )
    else
      return (
        <ModelCanvas>
          <Setup scale={3} position={[0, -2, 0]} />
        </ModelCanvas>
      )
  } else if (category.toLowerCase() === 'sports') {
    if (type === 'football')
      return (
        <ModelCanvas>
          <FootballBlack scale={1.12} />
        </ModelCanvas>
      )
    else if (type === 'footballgold')
      return (
        <ModelCanvas>
          <FootBallGold scale={1.12} />
        </ModelCanvas>
      )
    else if (type === 'basketball')
      return (
        <ModelCanvas>
          <BasketBall scale={1.12} />
        </ModelCanvas>
      )
    else if (type === 'varietyballs')
      return (
        <ModelCanvas>
          <VarietyBalls scale={1.3} />
        </ModelCanvas>
      )
    else if (type === 'vollyball')
      return (
        <ModelCanvas>
          <VollyBall scale={1.4} />
        </ModelCanvas>
      )
    else if (type === 'ruggby')
      return (
        <ModelCanvas>
          <Ruggby scale={1.4} />
        </ModelCanvas>
      )
    else if (type === 'racket')
      return (
        <ModelCanvas>
          <Racket scale={1} />
        </ModelCanvas>
      )
    else if (type === 'baseballbat')
      return (
        <ModelCanvas>
          <BaseBallBat scale={0.8} />
        </ModelCanvas>
      )
    else if (type === 'bowling')
      return (
        <ModelCanvas>
          <Bowling scale={1.4} />
        </ModelCanvas>
      )
    else if (type === 'bat')
      return (
        <ModelCanvas>
          <Bat scale={6} position={[0, -2, 0]} />
        </ModelCanvas>
      )
    else if (type === 'helmet')
      return (
        <ModelCanvas>
          <CricketHelmet scale={8} />
        </ModelCanvas>
      )
    else if (type === 'gloves')
      return (
        <ModelCanvas>
          <CricketGloves scale={8} />
        </ModelCanvas>
      )
    else if (type === 'pads')
      return (
        <ModelCanvas>
          <Pads scale={7} />
        </ModelCanvas>
      )
    else if (type === 'cap')
      return (
        <ModelCanvas>
          <Cap scale={8} />
        </ModelCanvas>
      )
    else
      return (
        <ModelCanvas>
          <FootBallGold scale={1.12} />
        </ModelCanvas>
      )
  } else if (
    category.toLowerCase() === 'motorbike gears' ||
    category.toLowerCase() === 'motorcycle gears' ||
    category.toLowerCase() === 'motorbike' ||
    category.toLowerCase() === 'motorcycle' ||
    category.toLowerCase() === 'gears'
  ) {
    if (type === 'helmet')
      return (
        <ModelCanvas>
          <BlueHelmet scale={9} />
        </ModelCanvas>
      )
    else if (type === 'gloves')
      return (
        <ModelCanvas>
          <RedGloves scale={0.28} position={[0, -1, 0]} />
        </ModelCanvas>
      )
    else if (type === 'shoes')
      return (
        <ModelCanvas autoRotate={true}>
          <BlackShoes scale={9} position={[0, -1, 0]} />
        </ModelCanvas>
      )
    else if (type === 'bags')
      return (
        <ModelCanvas>
          <BlueBag scale={47} />
        </ModelCanvas>
      )
    else if (type === 'lubricants')
      return (
        <ModelCanvas>
          <Spray scale={12} position={[0, -1, 0]} />
          <CleanerTin scale={18} position={[1.6, -1, 0]} />
        </ModelCanvas>
      )
    else if (type === 'tyrerack')
      return (
        <ModelCanvas>
          <TyreRack scale={3} position={[0, -2, 0]} />
        </ModelCanvas>
      )
    else
      return (
        <ModelCanvas>
          <SimpleBike scale={3} position={[0, -2, 0]} />
        </ModelCanvas>
      )
  } else if (
    category.toLowerCase() === 'apparel' ||
    category.toLowerCase() === 'clothing' ||
    category.toLowerCase() === 'fashion' ||
    category.toLowerCase() === 'garments'
  ) {
    if (type === 'mannequinwithhelmet')
      return (
        <ModelCanvas>
          <SimpleMannequinWithHelmet scale={4} position={[0, -3, 0]} />
        </ModelCanvas>
      )
    else
      return (
        <ModelCanvas>
          <SimpleMannequinWithBandana scale={4} position={[0, -3, 0]} />
        </ModelCanvas>
      )
  } else <></>
}

export default ExportModel
