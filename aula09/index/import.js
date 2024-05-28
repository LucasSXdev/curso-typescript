"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var falcon9 = {
    pilot: 'Lucas',
    crew: ['maria', 'joão'],
    inMission: true,
    weapons: 4
};


console.log(_.camelCase(falcon9.pilot))
