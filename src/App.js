import { useState } from 'react';
import './styles.css'
import { validateEmail, validatePassword } from './utils/regex'

function App() {
  const[ email, setEmail ] =  useState("");
  const [ password, setPassword ] = useState("")

  const[ emailErr, setEmailErr ] =  useState(false);
  const [ passwordErr, setPasswordErr ] = useState(false);

  const validate = () => {
    if(!validateEmail.test(email)){
      setEmailErr(true)
    } else {
      setEmailErr(false)
    }

    if(!validatePassword.test(password)){
      setPasswordErr(true)
    } else {
      setPasswordErr(false)
    }
  }

  console.log(email, password)
  

  return (
    <div>
      <h1>Validando form com RegEx</h1>
      <input 
        type= 'text' 
        placeholder='Email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> 

      {emailErr && <p>Por favor, digite um email valido!</p>}

      <input 
        type='text'
        placeholder='Password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {passwordErr && <p>Por favor, digite uma senha mais segura!</p>}  

      <button onClick={validate}>Validar</button>
    </div>
  );
}

export default App;
