const Total = ({course}) => {
  const total = course.reduce((prev, cur) => {
    return prev + cur.exercises 
  }, 0)
  return <h3>total of {total} exercises</h3>
}

export default Total;