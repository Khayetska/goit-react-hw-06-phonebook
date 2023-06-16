import css from './MainTitle.module.css';
const { IoListCircleOutline } = require('react-icons/io5');

const { mainTitle, titleIcon } = css;

function MainTitle() {
  return (
    <h1 className={mainTitle}>
      Ph
      <IoListCircleOutline className={titleIcon} />
      nebook
    </h1>
  );
}

export default MainTitle;
