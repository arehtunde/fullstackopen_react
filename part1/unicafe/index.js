import ReactDOM from 'react-dom';
import { useState } from 'react';

const Header = ({text}) => <h1>{text}</h1>;

const StatList = ({name, counter}) => (
  <tr>
    <td>{name}</td>
    <td>{counter}</td>
  </tr>
);

const Statistics = ({details, all}) => {
  if (all.value === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  const renderStat = details.map(detail => (
    <StatList key={detail.id} name={detail.name} counter={detail.value} />
  ))

  let good, bad;
  [good, , bad] = details;

  return (
    <>
      <table>
        <tbody>
          {renderStat}
          <StatList name='total' counter={all.value} />
          <StatList name='average' counter={((good.value - bad.value) / all.value).toFixed(2)} />
          <StatList name='positive' counter={((good.value / all.value) * 100).toFixed(2) + '%'} />
        </tbody>
      </table>
    </>
  )
};

const Button = ({details}) => {
  const renderButton = details.map(detail => (
    <button key={detail.id} onClick={detail.handleClick}>
      {detail.name}
    </button>
  ))
  return renderButton;
};

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0);

  const details = [
    {
      id: 1,
      name: 'good',
      value: good,
      handleClick: () => {
        setGood(good + 1);
        setTotal(total + 1);
      },
    },
    {
      id: 2,
      name: 'neutral',
      value: neutral,
      handleClick: () => {
        setNeutral(neutral + 1)
        setTotal(total + 1);
      },
    },
    {
      id: 3,
      name: 'bad',
      value: bad,
      handleClick: () => {
        setBad(bad + 1)
        setTotal(total + 1);
      },
    },
  ];

  const all = {
    name: 'total',
    value: total,
  };

  return (
    <>
      <Header text='give feedback' />
      <Button details={details} />
      <Header text='statistics' />
      <Statistics details={details} all={all} />
    </>
  )
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
);