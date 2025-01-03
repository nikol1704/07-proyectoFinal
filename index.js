/**
 * @format
 */

import { AppRegistry } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { App } from './src/App';  // Asegúrate de que la ruta sea correcta
import { name as appName } from './app.json';
import { LoadingIndicator } from './src/ui/components/shared';
import Reactotron from "reactotron-react-native";

Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect();

// Función para habilitar los mocks
function enableMocking() {
    if (__DEV__) {
        // Reactotron.configure() // controls connection & communication settings
        //     .useReactNative() // add all built-in react native plugins
        //     .connect();
        require('./msw.polyfills');
        const { server } = require('./src/mocks/server'); // Cargar el servidor de mocks
        server.listen(); // Iniciar el servidor de mocks
        console.log(...server.listHandlers())
    }
}

// Componente funcional que maneja la habilitación de mocks
// const AppWrapper = () => {
//     const [isMockingEnabled, setMockingEnabled] = useState(false);

//     useEffect(() => {
//         enableMocking().then(() => setMockingEnabled(true));
//     }, []);

//     if (!isMockingEnabled) {
//         return <LoadingIndicator/>;  // O mostrar un loader mientras se configuran los mocks
//     }

//     return <App />;  // Renderiza la app cuando los mocks estén habilitados
// };

// Registrar el componente funcional AppWrapper
//enableMocking().then(() => registerComponent(appName, () => App));
enableMocking()
AppRegistry.registerComponent(appName, () => App)