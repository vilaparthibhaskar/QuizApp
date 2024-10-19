const qstns =  [
    {
      'question': 'What is the main purpose of React?',
      'options': ['To manage the backend of applications', 'To style web pages', 'To build user interfaces', 'To manage databases'],
      'answer': 2
    },
    {
      'question': 'Which of the following is a correct way to create a functional component in React?',
      'options': ['const Component = () => { return <div>Text</div>; }', 'const Component = function() { return "Text"; }', 'const Component = () => "Text";', 'const Component = () => { return <h1>Title</h1>; }'],
      'answer': 0
    },
    {
      'question': 'How do you pass data from a parent component to a child component?',
      'options': ['Through state', 'Through props', 'Through context', 'Through functions'],
      'answer': 1
    },
    {
      'question': 'What is the use of the `useState` hook in React?',
      'options': ['To handle side effects in components', 'To manage the component’s state', 'To render a component multiple times', 'To create components'],
      'answer': 1
    },
    {
      'question': 'Which of the following is used to handle side effects in React?',
      'options': ['useState', 'useRef', 'useContext', 'useEffect'],
      'answer': 3
    },
    {
      'question': 'What is JSX?',
      'options': ['A special function in React', 'A syntax extension for JavaScript used in React', 'A React component', 'A JavaScript library'],
      'answer': 1
    },
    {
      'question': 'How can you conditionally render a component in React?',
      'options': ['Using if-else inside JSX', 'Using if-else outside JSX and && or ternary operators inside JSX', 'Using switch-case in JSX', 'Using for-loop in JSX'],
      'answer': 1
    },
    {
      'question': 'What is the purpose of the `key` prop in React lists?',
      'options': ['To apply CSS to list items', 'To identify which items in the list are changed, added, or removed', 'To pass data between list elements', 'To handle events in list items'],
      'answer': 1
    },
    {
      'question': 'Which method is used to update the state in a class component?',
      'options': ['this.updateState()', 'this.setState()', 'this.changeState()', 'this.modifyState()'],
      'answer': 1
    },
    {
      'question': 'Which of the following correctly describes the `useContext` hook?',
      'options': ['It allows passing data between siblings', 'It allows sharing state between components without passing props', 'It is used to update component lifecycle', 'It is used for performance optimization'],
      'answer': 1
    }
  ];

  export default qstns;
  