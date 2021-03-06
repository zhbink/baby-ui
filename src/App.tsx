import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>disabled</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>primary large</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>primary small</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>danger small</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Small}>default small</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">goBaidu</Button>
      </header>
    </div>
  );
}

export default App;
