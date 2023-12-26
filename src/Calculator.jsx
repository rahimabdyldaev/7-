import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      result: ''
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  calculateSum = () => {
    const { number1, number2 } = this.state;
    const result = Number(number1) + Number(number2);
    this.setState({ result });
  }

  calculateDifference = () => {
    const { number1, number2 } = this.state;
    const result = Number(number1) - Number(number2);
    this.setState({ result });
  }

  calculateProduct = () => {
    const { number1, number2 } = this.state;
    const result = Number(number1) * Number(number2);
    this.setState({ result });
  }

  calculateQuotient = () => {
    const { number1, number2 } = this.state;
    const result = Number(number1) / Number(number2);
    this.setState({ result });
  }

  calculatePower = () => {
    const { number1, number2 } = this.state;
    const result = Math.pow(Number(number1), Number(number2));
    this.setState({ result });
  }

  calculateSquareRoot = () => {
    const { number1 } = this.state;
    const result = Math.sqrt(Number(number1));
    this.setState({ result });
  }

  render() {
    const { number1, number2, result } = this.state;

    return (
      <div>
        <input name="number1" value={number1} onChange={this.handleInputChange} />
        <input name="number2" value={number2} onChange={this.handleInputChange} />

        <button onClick={this.calculateSum}>+</button>
        <button onClick={this.calculateDifference}>-</button>
        <button onClick={this.calculateProduct}>*</button>
        <button onClick={this.calculateQuotient}>/</button>
        <button onClick={this.calculatePower}>^</button>
        <button onClick={this.calculateSquareRoot}>√</button>

        <p>Результат: {result}</p>
      </div>
    );
  }
}

export default Calculator;