# Review on React
Simple TODO list app  
Tutorial: https://gitbook.cn/gitchat/column/59ae12fdbc511269a95f9616#catalog  
1. Configuration of React (orginal)  
2. Components:
- AddTodo: input text for adding a new todo; use connect from react-redux to link to redux; dispatch addTodo from action.js upon pressing enter.  
- Footer: All/Active/Completed filters; each wrapped as a link  
- Link: use react-router to match a routelink "to" to each filter to create their url  
- Root: initial render component; use react-redux provider to make store.js available to connect calls from redux; use react-router to match an initial url for the app  
- Todo: listview with checkbox of the todolist; each list element is a input element as checkbox; upon clicking, changing the completed value  
- TodoApp: main app component; calls AddTodo, VisibleTodolist, Footer  
- TodoList: wrapper for the Todo component, add key value for Todo for tracking; implement the onClick reaction of the checkboxes  
  
3. Containers:  
- VisibleTodoList: the container that maps the diplay and dispatch actions to the TodoList componenet  

4. Supporting:
- actions: define add_todo and toggle_todo options  
- index: render the project  
- reducer: in react-redux, take options from actions, return desired changes  
- selector: selector for footer filters  
- store: provide default values and createStore function to update store for the project
