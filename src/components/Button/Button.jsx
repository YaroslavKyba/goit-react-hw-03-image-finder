import css from './Button.module.css';

const Button = () => {
  return (
    <button type="button" className={css.Button}>
      Load more
    </button>
  );
};

export { Button };
