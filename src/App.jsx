import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PublicRouter from './modules/router/PublicRouter';
import AuthRouter from './modules/router/AuthRouter';




function App() {
  const [session, setSession] = useState(false);
  
  useEffect(() => {
      if(!!sessionStorage.getItem('TOKEN')) {
        //Navigate hacia Auth
      }
  }, [session]);

  return (<>
    {session ? (
      <AuthRouter/>
    ) : (
      <PublicRouter/>
    )}
  </>
  );
}

export default App
