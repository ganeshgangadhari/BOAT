import { combineReducers } from "@reduxjs/toolkit";
import airpodessystem from './cartSlice'
import watchessystem from './watchesSlice'
import neckbandsystem from './NeckbandSlice'
import wiredheadphonesystem from './WiredheadphonesSlice'
import wirelessheadphonesystem from './WirelessHPSlice'
import wiredearphonessystem from './WiredEarphonesSlice'


const rootReducer = combineReducers({

    airpodes:airpodessystem,
    watches:watchessystem,
    neckband:neckbandsystem,
    wiredheadphone:wiredheadphonesystem,
    wirelessheadphone:wirelessheadphonesystem,
    wiredearphones:wiredearphonessystem,
})

export default rootReducer;