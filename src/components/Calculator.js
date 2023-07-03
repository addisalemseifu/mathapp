import { React } from 'react';
import '../index.css';
import Output from './Output';
import Buttons from './Buttons';

export default function Calculator() {
  return (
    <div className="calc-grid">
      <Output data-testid="my-output" />
      <Buttons type="button" symbol="AC" className="clear" />
      <Buttons type="button" symbol="+/-" />
      <Buttons type="button" symbol="%" />
      <Buttons type="button" symbol="÷" />
      <Buttons type="button" symbol="7" />
      <Buttons type="button" symbol="8" />
      <Buttons type="button" symbol="9" />
      <Buttons type="button" symbol="x" className="operator" />
      <Buttons type="button" symbol="4" />
      <Buttons type="button" symbol="5" />
      <Buttons type="button" symbol="6" />
      <Buttons type="button" symbol="-" className="operator" />
      <Buttons type="button" symbol="1" />
      <Buttons type="button" symbol="2" />
      <Buttons type="button" symbol="3" />
      <Buttons type="button" symbol="+" className="operator" />
      <Buttons type="button" symbol="0" className="zero" />
      <Buttons type="button" symbol="." />
      <Buttons type="button" symbol="=" className="operator" />
    </div>
  );
}
