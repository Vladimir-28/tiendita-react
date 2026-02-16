import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PublicRouter from './modules/router/PublicRouter';
import AuthRouter from './modules/router/AuthRouter';
import { useNavigate } from 'react-router-dom';




function App() {
  const [session, setSession] = useState(false);
  const navigation = useNavigate();
  
  useEffect(() => {
      if(!session && !!sessionStorage.getItem('token')) {
        setSession(true);
        navigation("/");
      }
  }, [session]);

  return (<>
    {session ? (
      <AuthRouter setSession={setSession}/>
    ) : (
      <PublicRouter setSession={setSession}/>
    )}
  </>
  );
}

export default App
