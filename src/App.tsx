import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu>
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link2</MenuItem>
          <SubMenu title="下拉选项">
            <MenuItem>
            <MenuItem>
              下拉选项二
            </MenuItem>
          </SubMenu>
          <MenuItem>cool link3</MenuItem>
        </Menu>
        <hr />
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
