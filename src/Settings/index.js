import React from 'react';
import  WellcomeMessage from './WellcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page'
import CoinGrid from './CoinGrid'
import Search from './Search'

export default function(){
    return <Page name="settings">
        <WellcomeMessage/>
        <CoinGrid topSection/>
        <ConfirmButton/>
        <Search/>
        <CoinGrid />
    </Page>
}