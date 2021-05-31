import Header from '../../components/Header'
;<script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>

export default function GoapImplemenation() {
  return (
    <>
      <Header />

      <h1> GOAP </h1>
      <p>
        Goap or Goal Oriented Action Planning is a type of decision making that easily gives agents choices to make
        smart decisions. This is without having to create and maintain a large and complex finite state machine. So I
        thought to myself lets just have a go at making one. So I loaded up Unity got a fresh cup of coffee and got to
        work.
      </p>

      <p>
        <h1> GOAP Implementation </h1>
        This will only be a very basic version of GOAP for the time being, I will be adding onto it within the coming
        days and weeks making more complex. This is so it will be easier to debug and be able to get a working version
        up and running much quicker. The first step was to make a action and goal class that will be fed into the GOAP
        algorithm. To keep things short and sweet at this time the Action class wil be taking in a Name, Value, and a
        Goal.
      </p>

      <p>
        This is the contents of the action class at the moment, it returns what goal is assigned to the object and takes
        away the value that the action is weighted at. The goal class is pretty much the same as the action class, so I
        won't bore you with all code for that one at this time. GOAP is the last class that I will be talking about in
        this log. Since it's quite a simple and short algorithm I will be bullet pointing the step it takes and putting
        the code at the end of this blog. The steps:
        <li> Function takes in a list of action and goals</li>
        <li> We check for the goal with the biggest value then store it</li>
        <li> Check that this action is correcrt for this goal</li>
        <li> Check each action with the GetGoalChange function for the goal then store the best action</li>
        <li> Return the best action that gives the best result</li>
        And thats it pretty simple since we're just getting the maxium one and returning it. For the next blog I will be
        trying to get multiply action that need to be forfilled to obtain the correct goal.
      </p>
    </>
  )
}
