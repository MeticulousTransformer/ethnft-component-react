import style from "./pictures/balance.module.css";
import etherumLogo from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";

function Balance() {
  return (
    <div className={style.balance}>
      <div className={style.eth}>
        <p className={style.wallet}>
          <img src={etherumLogo} alt="someimage" />
          0.041ETH
        </p>
      </div>
      <div className={style.time}>
        <p className={style.days}>
          <img src={clock} alt="someimage" />3 days left
        </p>
      </div>
    </div>
  );
}

export default Balance;
