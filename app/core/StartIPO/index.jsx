import React, { useState } from 'react';
import { StartIPOStyled } from './style';
import Input from '../../uikit/Input';
import Button from '../../uikit/Button';
import sql from '../Database';

function StartIPO() {
  const [ticker, setTicker] = useState('');
  const [fullName, setFullName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [info, setInfo] = useState('');

  async function handleClick() {
    setInfo('');

    if (!ticker || !fullName || !price || !quantity) {
      setInfo('Form is not filled');
      return;
    }

    try {
      const [{ id: securityId }] = await sql`
        INSERT INTO security_entity (ticker, "openPrice", "marketPrice", "fullName", quantity) 
        VALUES (${ticker}, ${price}, ${price}, ${fullName}, ${quantity}) RETURNING id
      `;
      await sql`
        INSERT INTO order_entity ("securityId", "userId", operation, lots, price, "executedQuantity", cancelled) 
        VALUES (${securityId}, null, 'SELL', ${quantity}, ${price}, 0, false)
      `;

      setInfo(`Started IPO for ${fullName}!`);
      setTicker('');
      setFullName('');
      setPrice('');
      setQuantity('');
    } catch (e) {
      setInfo(e.message);
      console.log(e);
    }
  }

  return (
    <StartIPOStyled>
      <h2>Initial Public Offering</h2>
      <Input label="Ticker" value={ticker} onChange={setTicker} />
      <Input label="Full name" value={fullName} onChange={setFullName} />
      <Input label="Price" value={price} onChange={setPrice} />
      <Input label="Quantity" value={quantity} onChange={setQuantity} />
      <Button onClick={handleClick}>Start IPO</Button>
      {info && <p>{info}</p>}
    </StartIPOStyled>
  );
}

export default StartIPO;
