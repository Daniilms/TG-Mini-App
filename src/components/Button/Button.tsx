import "./Button.css";

interface ButtonProps {
  text: string;
  action: () => void;
}

export const Button = ({ text, action }: ButtonProps) => {
  return (
    <button className="button" onClick={action}>
      {text}
    </button>
  );
};
