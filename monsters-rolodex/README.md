CLASS COMPONENT ENDS AND FUNCTIONAL COMPONENT LECTURE BEGAN. LISTED BELOW IS THE CLASS COMPONENT CODE:

//constructor runs first, then render, then componentDidMount
//setState will cause a rerender
//props will also cause a rerender
//when we first call cardlist it renders with an empty array. Then setState gets called with a full list of users. React says oh let me call based on our props. Then it says let me rerender the component based on our props.

//super just makes sure you are calling the constructor method on component.
//whenever you write constructor you need to call super
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    //this is the component URL (json file) then follow it up with a promise.
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  //this class component being moved here instead of inside the <input> will help with performance. If you have a lot of onChange events happening keeping it in the input tago will cause performance issues
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log('render');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
          className='monsters-search-box'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;

{
  /* {filteredMonsters.map((monster) => {
  return (
    <div key={monster.id}>
      <h1>{monster.name}</h1>
    </div>
  );
})} */
}


class App extends Component {
  //constructor runs first, then render, then componentDidMount
  constructor() {
    //super just makes sure you are calling the constructor method on component.
    //whenever you write constructor you need to call super
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('constructor');
  }
  //if u have a class component you want to put your API call inside your componentDidMount lifecycle method
  //this is the first time a component mounts onto the page.
  componentDidMount() {
    //this is the component URL (json file) then follow it up with a promise.
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log('render');

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(event) => {
            //if you modify any data from state then best practices says you want to keep your state equal to the original list of whatever you are keeping track of.
            const searchField = event.target.value.toLocaleLowerCase();

            //monsters is an array of diff values with the key of name and the value of the string with name
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;


---------------------------------------------------
//this was in our state object
// name: { firstName: 'Kat', lastName: 'Athay' },
// company: 'ZTM',

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// return (
//   <div className='App'>
//     <header className='App-Header'>
//       <img src={logo} className='App-logo' alt='logo' />
//       <p>
//         Hi {this.state.name.firstName} {this.state.name.lastName}, I work at{' '}
//         {this.state.company}
//       </p>
//       <button
//         onClick={() => {
//           this.setState(
//             () => {
//               return {
//                 name: { firstName: 'Andrei', lastName: 'Neaogie' },
//               };
//             },
//             () => {
//               // console.log(this.state)
//             }
//           );
//           // console.log(this.state)
//         }}

// onClick={() => {
//   this.setState({
//     name: {firstName: 'Mia', lastName: 'Athay'}, company: 'Amazon'
//   });
// console.log(this.state)
// }}
// >
// Change Name
// </button>
// </header>
// --------------------------------------------------------
// import { Component } from 'react';

// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   constructor() {
//     //super just makes sure you are calling the constructor method on component.
//     //whenever you write constructor you need to call super
//     super();

//     this.state = {
//       monsters: [
//         //the reason you need the id is so that when React rerenders instead of rerendering the entire monsters obj it will only rerender the changed name. The id is added because we used the map function. React is keeping track of the key under the hood.
//         {
//           name: 'Linda',
//           id: '1213'
//         },
//         {
//           name: 'Frank',
//           id: '121345'
//         },
//         {
//           name: 'Jacky',
//           id: '121346'
//         },
//         {
//           name: 'Andrei',
//           id: '121347'
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div className='App'>
//         {
//           this.state.monsters.map((monster) => {
//             return <h1 key={monster.id} >{monster.name}</h1>;
//           })}
//       </div>
//     );
//   }
// }
// export default App;



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

