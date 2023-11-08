import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';
import './Home.css';
import { useEffect } from 'react';

const Home: React.FC = () => {

  const init = () => {
    FirebaseAnalytics.initializeFirebase({
      apiKey: "AIzaSyAM3BC7Cxh6BpSM1obB_7g2zQDvMmXNLrU",
      authDomain: "fir-analytics-7a28d.firebaseapp.com",
      projectId: "fir-analytics-7a28d",
      storageBucket: "fir-analytics-7a28d.appspot.com",
      messagingSenderId: "318551405485",
      appId: "1:318551405485:web:30eae6652d468863e42724",
      measurementId: "G-H0CVB5QCMT"
    });
  }

  const enable = () => {
    FirebaseAnalytics.setCollectionEnabled({
      enabled: true,
    });
  }

  // const disable = () => {
  //   FirebaseAnalytics.setCollectionEnabled({
  //     enabled: false,
  //   });
  // }

  // const setUserId = () => {
  //   FirebaseAnalytics.setUserId({
  //     userId: 'john_doe_123',
  //   });
  // };

  // const setUserProperty = () => {
  //   FirebaseAnalytics.setUserProperty({
  //     name: "favorite_food",
  //     value: "pizza",
  //   });
  // };

  // const getAppInstanceId = async () => {
  //   const response = await FirebaseAnalytics.getAppInstanceId();

  //   const { instanceId } = response;
  //   // console.log(response);

  // };

  // const setScreenName = async () => {
  //   await FirebaseAnalytics.setScreenName({ screenName: 'test', nameOverride: 'testScreen' });
  // };

  const logEvent = () => {
    FirebaseAnalytics.logEvent({
      name: "place_order",
      params: {
        content_type: "test",
        content_id: "1234"
      },
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={init}>Init Firebase</IonButton>
        <IonButton onClick={enable}>Enable Analytics</IonButton>
        {/* <IonButton onClick={disable}>Disable Analytics</IonButton>
        <IonButton onClick={setUserId}>Set User ID</IonButton>
        <IonButton onClick={setUserProperty}>Set User Property</IonButton>
        <IonButton onClick={getAppInstanceId}>Get App Instance Id</IonButton> */}
        <IonButton onClick={logEvent}>Log Event</IonButton>
        {/* <IonButton onClick={setScreenName}>Set Screen</IonButton> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
