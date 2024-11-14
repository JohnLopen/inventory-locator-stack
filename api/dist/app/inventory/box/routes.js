"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const boxController_1 = require("./boxController");
const boxRoutes = (0, express_1.Router)();
boxRoutes.get('/', boxController_1.BoxController.get);
boxRoutes.post('/', boxController_1.BoxController.postBox);
boxRoutes.get('/:boxId/details', boxController_1.BoxController.getBox);
boxRoutes.put('/:boxId/update', boxController_1.BoxController.updateBox);
boxRoutes.get('/count', boxController_1.BoxController.getCount);
exports.default = boxRoutes;