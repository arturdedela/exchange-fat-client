import React, { useState } from 'react';
import * as crypto from 'crypto';
import Input from '../../uikit/Input';
import Button from '../../uikit/Button';
import { CreateUserStyled } from './style';
import sql from '../Database';

function CreateUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [info, setInfo] = useState('');

  async function handleClick() {
    setInfo('');

    if (!email || !password || !firstName || !lastName || !phone) {
      setInfo('Form is not filled');
      return;
    }

    try {
      const hashedPassword = crypto
        .createHmac('sha256', password)
        .digest('hex');

      const result = await sql`INSERT INTO user_entity ("email", "password", "firstName", "lastName", "phoneNumber", "rubles") 
        VALUES (${email}, ${hashedPassword}, ${firstName}, ${lastName}, ${phone}, 0)
      `;
      console.log(result);

      setInfo(`Created user ${email}!`);
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setPhone('');
    } catch (e) {
      setInfo(e.message);
      console.log(e);
    }
  }

  return (
    <CreateUserStyled>
      <h2>New user</h2>
      <Input label="Email" value={email} onChange={setEmail} />
      <Input label="Password" value={password} onChange={setPassword} />
      <Input label="First name" value={firstName} onChange={setFirstName} />
      <Input label="Last name" value={lastName} onChange={setLastName} />
      <Input label="Phone" value={phone} onChange={setPhone} />
      <Button onClick={handleClick}>Create</Button>
      {info && <p>{info}</p>}
    </CreateUserStyled>
  );
}

export default CreateUser;
