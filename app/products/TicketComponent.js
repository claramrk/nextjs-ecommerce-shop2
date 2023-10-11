import styles from './TicketComponent.module.scss';

export default function TicketComponent(props) {
  return (
    <div className={styles.ticketAll}>
      <div className={styles.ticket}>
        <div className={styles.left}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${props.src})` }}
          >
            <div className={styles.textinimage}>
              <p className={styles.admitone}>
                <span>TICKET</span>

                <span>TICKET</span>
                <span>TICKET</span>
              </p>
              <div className={styles.ticketnumber}>
                <p>#########</p>
              </div>
            </div>
          </div>
          <div className={styles.ticketinfo}>
            <p className={styles.date}>
              <span>WOCHENTAG</span>
              <span className={styles.june29}>DATUM</span>
              <span>JAHR</span>
            </p>
            <div className={styles.showname}>
              <h2>Hermannshöhle</h2>
              <h3>{props.name}</h3>
            </div>
            <p className={styles.location}>
              <span>Kirchberg am Wechsel</span>

              <span>XYZ</span>
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightinfocontainer}>
            <div>
              <img
                className={styles.barcode}
                src="https://cdn.pixabay.com/photo/2022/02/07/19/13/barcode-7000118_960_720.png"
                alt=""
              />
            </div>
            <div>
              <div className={styles.showname}>
                <h2>1x {props.name}</h2>
              </div>
              <div className={styles.time}>
                <p>UHRZEIT | DATUM</p>
              </div>

              <div className={styles.price}>
                <p>{props.price}€</p>
              </div>
              <p className={styles.ticketnumber}>#########</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
