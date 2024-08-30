import { ExchangeT } from "../../consts/types";
import "./ExchangeList.css";

interface ExchangeListProps {
  data: ExchangeT[];
}
export const ExchangeList = ({ data }: ExchangeListProps) => {
  return (
    <ul className="exchange-list">
      {data.map((data: ExchangeT) => {
        return (
          <li className="exchange-list-valute">
            <p className="exchange-list-valute-name">{data.Name}:</p>
            <p className="exchange-list-valute-value">
              {data.Value.toFixed(2)}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
