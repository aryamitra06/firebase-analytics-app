import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';
// Init for the web
import "@capacitor-community/firebase-analytics";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {

  const init = () => {

    // FirebaseAnalytics.setCollectionEnabled({
    //   enabled: true,
    // });
  }

  const firebaseConfig = {
    apiKey: "AIzaSyBpUGUXxiSDx8p8PLosBr9ETbOoakukvc8",
    authDomain: "cme-one-testing.firebaseapp.com",
    projectId: "cme-one-testing",
    storageBucket: "cme-one-testing.appspot.com",
    messagingSenderId: "682607174840",
    appId: "1:682607174840:web:7d98a7e0a96d4c7989804d",
    measurementId: "G-1DMQ1YZ0R3"
  };

  // useEffect(() => {
  //   if (Capacitor.getPlatform() === 'web') {
  //     FirebaseAnalytics.initializeFirebase({
  //       apiKey: "AIzaSyAM3BC7Cxh6BpSM1obB_7g2zQDvMmXNLrU",
  //       authDomain: "fir-analytics-7a28d.firebaseapp.com",
  //       projectId: "fir-analytics-7a28d",
  //       storageBucket: "fir-analytics-7a28d.appspot.com",
  //       messagingSenderId: "318551405485",
  //       appId: "1:318551405485:web:30eae6652d468863e42724",
  //       measurementId: "G-H0CVB5QCMT"
  //     });
  //   }
  // }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <Home />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
