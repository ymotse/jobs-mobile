/**
 * @format
 */

import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'

import DefaultRoutes from './src/routes/DefaultRoutes'
AppRegistry.registerComponent(appName, () => DefaultRoutes)

