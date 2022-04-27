'use strict';

import counterType from '../core/counterTypeEnums';
import operatorId from '../core/operatorIdEnum';
import Operator from '../core/operatorFactory';
import r6operators from "r6operators";

let mozzie = new Operator(r6operators.mozzie, operatorId.mozzie, "Operation Burnt Horizon");

mozzie.addCounterNode(operatorId.twitch, counterType.hard, "Mozzie's Pests can hack Twitch's Shock Drone. The hacked drone can still shoot darts.");
mozzie.addCounterNode(operatorId.flores, counterType.hard, "Mozzie's Pests can hack Flores' RCE-RATERO drone. The hacked drone cannot be controlled though.");

export default mozzie