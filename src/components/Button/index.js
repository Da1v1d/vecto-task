import './Button.styles.css';

export const Button = ({ text, icon = null, color, ...props }) => {
  return (
    <button className={`button__${color}`} {...props}>
      {!!icon && (
        <img width='18' src={require(`../../assets/icons/${icon}.png`)} alt = 'button icon' />
      )}
      <p>{text}</p>
    </button>
  );
};
