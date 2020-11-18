const Header = ({course}) => <h1>{course}</h1>;

const Content = ({details}) => {

  return (
    details.map(({id, part, exercises}) => <p key={id}>{part} {exercises}</p>)
  )
};

const Total = ({total}) => {
   const add = total.reduce((prev, cur) => {
     return prev + cur.exercises;
    }, 0);

   return (
    <p>Number of exercises {add}</p>
   )
};

const App = () => {
  const course = 'Half Stack application development';
  const details = [
    {
      id: 1,
      part: 'Fundamentals of React',
      exercises: 10,
    },
    {
      id: 2,
      part: 'Using props to pass data',
      exercises: 7,
    },
    {
      id: 3,
      part: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content details={details} />
      <Total total={details}/>
    </div>
  )
}

export default App;