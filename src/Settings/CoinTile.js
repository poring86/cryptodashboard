import React from 'react'
import {AppContext} from '../App/AppProvider'
import {SelectableTile, DisabledTile, DeletableTile} from '../Shared/Tile'
import CoinHeaderGrid from './CoinHeaderGrid'
import CoinImage from '../Shared/CoinImage'

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
    return topSection ?  () => {
        removeCoin(coinKey)
    } : () => {
        addCoin(coinKey)
    }
}

export default function({coinKey, topSection}){

    // const TileClass = SelectbleTile

    return <AppContext.Consumer>
        {({coinList, addCoin, removeCoin, isInFavorites}) => {
            let coin = coinList[coinKey]

            let TileClass = SelectableTile
            console.log(topSection)
            if(topSection){
                console.log('passou aqui')
                TileClass = DeletableTile
            }
            else if(isInFavorites(coinKey)){
                TileClass = DisabledTile
            }

            return <TileClass onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}>
                <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol}/>
                <CoinImage coin={coin}/>
            </TileClass>
        }}

    </AppContext.Consumer>
}