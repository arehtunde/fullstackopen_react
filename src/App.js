import { useState } from 'react';

const Header = ({text}) => <h1>{text}</h1>;

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>;

const MostVoted = ({votes}) => {
  if (votes.every(x => x === 0)) {
    return (
      <div>
        No voted anecdote
      </div>
    )
  }

  const maxVotes = Math.max(...votes);
  const mostVoted = votes.indexOf(maxVotes);

  return (
    <div>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {maxVotes} vote(s)</p>
    </div>
  )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState({
    quoteIndex: 0,
    votes: new Array(anecdotes.length).fill(0),
  });

  const handleClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    return setSelected({
      ...selected,
      quoteIndex: random,
    });
  };

  const handleVote = () => {
    const newVotes = [...selected.votes];
    const currentQuote = selected.quoteIndex;
    newVotes[currentQuote] += 1;
    return setSelected({
      ...selected,
      votes: newVotes,
    });
  };

  return (
    <div>
      <Header text='Anecdote of the day' />
      <p>{anecdotes[selected.quoteIndex]}</p>
      <p>has {selected.votes[selected.quoteIndex]} vote(s)</p>
      <Button text='vote' handleClick={handleVote} />
      <Button text='next anecdotes' handleClick={handleClick} />

      <Header text='Anecdote with the most votes' />
      <MostVoted votes={selected.votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

export { App, anecdotes};