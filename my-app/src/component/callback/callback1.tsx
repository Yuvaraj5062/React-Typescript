import React, {useCallback, useEffect, useState} from 'react';
import { EmailInput} from './inputs';
import { PasswordInput } from './password';

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
}

const Callback1: React.FC<LoginFormProps> = (props) => {
  const {onSubmit} = props;
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const updateEmail = useCallback(
    
    
    (newValue: string): void => setEmail(newValue),

    [setEmail]
  );
  
  const updatePassword = useCallback(
    (newPass: string): void => 
  		setPassword(newPass),
    [setPassword]
  );
  
  useEffect(() => {
console.log("email",email)
console.log("pass",password)

}, [email,password]);

  return <form onSubmit={()=>onSubmit}>
    <EmailInput 
      value={email} 
      onChange={updateEmail} />
    
    <PasswordInput 
      value={password} 
      onChange={updatePassword} />
  </form>
}


export default Callback1;