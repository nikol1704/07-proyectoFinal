/**
 * @format
 */

// import { AppRegistry } from 'react-native';
// import { App } from './src/App';
// import { name as appName } from './app.json';
// import * as React from "react";

// async function enableMocking() {
//     if (!__DEV__) { return }

//     await import('./msw.polyfills')
//     const { server } = await import('./src/mocks/server')
//     server.listen()
// }


// enableMocking().then(() => {
//     AppRegistry.registerComponent(appName, () => App)
// })

import { AppRegistry } from 'react-native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { App } from './src/App';  // Asegúrate de que la ruta sea correcta
import { name as appName } from './app.json';

// Función para habilitar los mocks
async function enableMocking() {
    if (__DEV__) {
        await import('./msw.polyfills'); // Asegúrate de que 'msw.polyfills' esté disponible
        const { server } = await import('./src/mocks/server'); // Cargar el servidor de mocks
        server.listen(); // Iniciar el servidor de mocks
        console.log(server.listHandlers())
    }
}

// Componente funcional que maneja la habilitación de mocks
const AppWrapper = () => {
    const [isMockingEnabled, setMockingEnabled] = useState(false);

    useEffect(() => {
        enableMocking().then(() => setMockingEnabled(true));
    }, []);

    if (!isMockingEnabled) {
        return null;  // O mostrar un loader mientras se configuran los mocks
    }

    return <App />;  // Renderiza la app cuando los mocks estén habilitados
};

// Registrar el componente funcional AppWrapper
AppRegistry.registerComponent(appName, () => AppWrapper);
