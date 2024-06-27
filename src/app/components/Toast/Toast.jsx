import Styles from './Toast.module.css';

export const Toast = ({ message, visible }) => {
  return (
    <div className={`${Styles["toast"]} ${visible ? Styles.visible : ''}`}>
      {message}
    </div>
  );
};
