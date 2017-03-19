/* eslint-env browser, commonjs */
/* global firebase */

'use strict';

import { firebase as fbConfig } from '../../../config.json';

require('../sass/main.scss');

firebase.initializeApp(fbConfig);


