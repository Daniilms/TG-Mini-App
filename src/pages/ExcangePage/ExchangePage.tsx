import "./ExchangePage.css";
import { ExchangeList } from "../../components/ExchangeList/ExchangeList";
import { useExchangeData } from "../../hooks/useExchangeData";
import { Loader } from "../../components/Loader/Loader";

export const ExchangePage = () => {
  const data = useExchangeData();
  if (!data) {
    return (
      <div className="loader-wrp">
        <Loader />
      </div>
    );
  }
  return (
    <div className="exchange-wrp">
      <h1 className="exchange-header">Today's data:</h1>
      <ExchangeList data={data} />
    </div>
  );
};
