import { spaceShip } from "./export";
import * as _ from "lodash"

interface BattleSpaceship extends spaceShip{
    weapons:number
}

let falcon9:BattleSpaceship = {
    pilot:'Lucas',
    crew:['maria','joão'],
    inMission:true,
    weapons:4
}

_.camelCase(falcon9.pilot)
