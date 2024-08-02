/* eslint-disable react/prop-types */
import React, { lazy } from 'react'
import ModelCanvas from '../../Canvas/Canvas'
import { Laptop } from '../../Experience/Items/Computer/Laptop'
import { FootballBlack } from '../../Experience/Items/Sports/FootBallBlack'
import { BasketBall } from '../../Experience/Items/Sports/BasketBall'
import { VarietyBalls } from '../../Experience/Items/Sports/VarietyBalls'
import { VollyBall } from '../../Experience/Items/Sports/VollyBall'
import { Rugby } from '../../Experience/Items/Sports/Rugby'
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
import { TyreRack } from '../../Experience/Items/Automotive/TyreRack'
import { SimpleBike } from '../../Experience/Items/Automotive/SimpleBike'
import { SimpleMannequinWithHelmet } from '../../Experience/Items/Mannequins/SimpleMannequinWithHelmet'
import { Bat } from '../../Experience/Items/Sports/Bat'
import { CricketHelmet } from '../../Experience/Items/Sports/Helmet'
import { CricketGloves } from '../../Experience/Items/Sports/Gloves'
import { Pads } from '../../Experience/Items/Sports/Pads'
import { Cap } from '../../Experience/Items/Sports/Cap'
import { SimpleMannequinWithBandana } from '../../Experience/Items/Mannequins/SimpleMannequinWithBandana'
import { Logo } from '../../Experience/Items/Logo/Logo'
import { Apples } from '../../Experience/Items/Food/Apples'
import { Melons } from '../../Experience/Items/Food/Melons'
import { Oranges } from '../../Experience/Items/Food/Oranges'
import { Pears } from '../../Experience/Items/Food/Pear'
import { Almonds } from '../../Experience/Items/Food/Almonds'
import { Kurta } from '../../Experience/Items/Kurtas/Kurta'
import { Lipstick } from '../../Experience/Items/Beauty/Lipstick'
import { Oil } from '../../Experience/Items/Beauty/Oil'
import { Makeup } from '../../Experience/Items/Beauty/Makeup'
import { Shampoo } from '../../Experience/Items/Beauty/Shampoo'
import { RoseWater } from '../../Experience/Items/Beauty/RoseWater'
import { Suncream } from '../../Experience/Items/Beauty/Suncream'
import { Foundation } from '../../Experience/Items/Beauty/Foundation'
import { Facewash } from '../../Experience/Items/Beauty/Facewash'

const ExportModel = ({ category, type }) => {
  // console.log('CAT:-----', category)
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
          <Samsung scale={25} position={[0, 0, 0]} />
        </ModelCanvas>
      )
    else
      return (
        <ModelCanvas>
          <Setup scale={3.4} position={[0, 0.5, 0]} />
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
          <BasketBall scale={14} />
        </ModelCanvas>
      )
    else if (type === 'varietyballs')
      return (
        <ModelCanvas>
          <VarietyBalls scale={8} />
        </ModelCanvas>
      )
    else if (type === 'vollyball')
      return (
        <ModelCanvas>
          <VollyBall scale={14} />
        </ModelCanvas>
      )
    else if (type === 'ruggby')
      return (
        <ModelCanvas>
          <Rugby scale={20} />
        </ModelCanvas>
      )
    else if (type === 'racket')
      return (
        <ModelCanvas>
          <Racket scale={10} position={[0, -0.5, 0]} />
        </ModelCanvas>
      )
    else if (type === 'baseballbat')
      return (
        <ModelCanvas>
          <BaseBallBat scale={11} position={[0, -0.5, 0]} />
        </ModelCanvas>
      )
    else if (type === 'bowling')
      return (
        <ModelCanvas>
          <Bowling scale={12} />
        </ModelCanvas>
      )
    else if (type === 'bat')
      return (
        <ModelCanvas>
          <Bat scale={6} position={[0, 0, 0]} />
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
    category.toLowerCase() === 'automotive' ||
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
          <RedGloves scale={0.28} position={[0, -2, 0]} />
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
          <BlueBag />
        </ModelCanvas>
      )
    else if (type === 'lubricants')
      return (
        <ModelCanvas>
          <Spray scale={12} position={[0, 0, 0]} />
        </ModelCanvas>
      )
    else if (type === 'tyrerack')
      return (
        <ModelCanvas>
          <TyreRack scale={5} position={[0, -0.5, 0]} />
        </ModelCanvas>
      )
    else
      return (
        <ModelCanvas>
          <SimpleBike scale={4} position={[-0.2, 0, 0]} />
        </ModelCanvas>
      )
  } else if (
    category.toLowerCase() === 'apparel' ||
    category.toLowerCase() === 'clothing' ||
    category.toLowerCase() === 'fashion' ||
    category.toLowerCase() === 'garments' ||
    category.toLowerCase() === 'jacket'
  ) {
    if (type === 'mannequinwithhelmet')
      return (
        <ModelCanvas>
          <SimpleMannequinWithHelmet scale={4} position={[0, -3, 0]} />
        </ModelCanvas>
      )
    else if (type === 'kurtas') {
      return (
        <ModelCanvas>
          <Kurta scale={5} position={[0, 1.3, 0]} />
        </ModelCanvas>
      )
    } else
      return (
        <ModelCanvas>
          <SimpleMannequinWithBandana scale={4} position={[0, -2.4, 0]} />
        </ModelCanvas>
      )
  } else if (category.toLowerCase() === 'gloves') {
    return (
      <ModelCanvas>
        <RedGloves scale={0.28} position={[0, -1, 0]} />
      </ModelCanvas>
    )
  } else if (
    category.toLowerCase() === 'backpack' ||
    category.trim() === 'Leisure & Travel'
  ) {
    return (
      <ModelCanvas>
        <BlueBag scale={47} />
      </ModelCanvas>
    )
  } else if (category.trim() === 'Food Items') {
    if (type === 'apples')
      return (
        <ModelCanvas>
          <Apples scale={6} position={[0, 0.3, 0]} />
        </ModelCanvas>
      )
    else if (type === 'oranges')
      return (
        <ModelCanvas>
          <Oranges scale={6} position={[0, 0.3, 0]} />
        </ModelCanvas>
      )
    else if (type === 'pears')
      return (
        <ModelCanvas>
          <Pears scale={6} position={[0, 0.3, 0]} />
        </ModelCanvas>
      )
    else if (type === 'almonds')
      return (
        <ModelCanvas>
          <Almonds scale={10} position={[0, 0.3, 0]} />
        </ModelCanvas>
      )
    else
      return (
        <ModelCanvas>
          <Melons scale={6} position={[0, 0.3, 0]} />
        </ModelCanvas>
      )
  } else if (category.toLowerCase() === 'beauty') {
    if (type === 'lipsticks')
      return (
        <ModelCanvas>
          <Lipstick scale={16} position={[0, 0.2, 0]} />
        </ModelCanvas>
      )
    else if (type === 'oil')
      return (
        <ModelCanvas>
          <Oil scale={14} position={[0, 0.3, 0]} />
        </ModelCanvas>
      )
    else if (type === 'makeup')
      return (
        <ModelCanvas>
          <Makeup scale={14} position={[0, 0.3, 0]} />
        </ModelCanvas>
      )
    else if (type === 'shampoo')
      return (
        <ModelCanvas>
          <Shampoo scale={14} position={[0, 0.3, 0]} />
        </ModelCanvas>
      )
    else if (type === 'spray')
      return (
        <ModelCanvas>
          <RoseWater scale={14} position={[0, 0.3, 0]} />
        </ModelCanvas>
      )
    else if (type === 'suncream')
      return (
        <ModelCanvas>
          <Suncream scale={14} position={[0, 0.3, 0]} />
        </ModelCanvas>
      )
    else if (type === 'foundation')
      return (
        <ModelCanvas>
          <Foundation scale={14} position={[0, 0.3, 0]} />
        </ModelCanvas>
      )
    else if (type === 'facewash')
      return (
        <ModelCanvas>
          <Facewash scale={14} position={[0, 0.3, 0]} />
        </ModelCanvas>
      )
  } else
    return (
      <ModelCanvas>
        <Logo scale={3} position={[0, 1, 0]} />
      </ModelCanvas>
    )
}

export default ExportModel
