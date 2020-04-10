rc-progress-bar
============
Easy to use progress-bar for react web applications

## Demo

[Show Demo](https://montayrekj.github.io/rc-progress-bar)

Install
--------

```bash
$ npm install rc-progress-bar --save
```

## Usage
```jsx
import React from 'react';
import ProgressBar from 'rc-progress-bar';

function App() {
  return (
    <div>
      <ProgressBar 
        value={75} 
        showPercentage={true}
      />
    </div>
  );
}

export default App;
```

## Options

rc-progress-bar supports 4 options, all of which are optional:

* *min* - _number_ (Defaults to 0)
* *max* - _number_ (Defaults to 100)
* *value* - _number_ (Defaults to 0)
* *showPercentage* - _boolean_ (Defaults to false)
* *animated* - _boolean_ (Defaults to false)