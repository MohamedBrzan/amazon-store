import { Link } from 'react-router-dom';
import './DropdownMenu.scss';

type props = {
  left: number;
};

const DropdownMenu = (props: props) => {
  const { left } = props;
  return (
    <div className='dropdown_component'>
      <div className='dropdown_menu'>
        <Link to='/'>Link1</Link>
        <Link to='/'>Link2</Link>
        <Link to='/'>Link3</Link>
        <Link to='/'>Link4</Link>
        <Link to='/'>Link5</Link>
      </div>
      <div className='mini_arrow' style={{ left }}></div>
    </div>
  );
};

export default DropdownMenu;
