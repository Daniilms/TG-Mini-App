import "./ExchangePage.css";
import { ExchangeList } from "../../components/ExchangeList/ExchangeList";
import { useExchangeData } from "../../hooks/useExchangeData";

export const ExchangePage = () => {
  const data = useExchangeData();
  if (!data) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <h1 className="exchange-header">Today's data:</h1>
      <ExchangeList data={data} />
    </div>
  );
};
