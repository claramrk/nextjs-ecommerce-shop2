import styles from './TicketComponent.module.scss';

export default function TicketComponent(props) {
  console.log(props);
  return (
    <div className={styles.ticketAll}>
      <div class={styles.ticket}>
        <div class={styles.left}>
          <div
            class={styles.image}
            style={{ backgroundImage: `url(${props.src})` }}
          >
            <div class={styles.textinimage}>
              <p class={styles.admitone}>
                <span>TICKET</span>

                <span>TICKET</span>
                <span>TICKET</span>
              </p>
              <div class={styles.ticketnumber}>
                <p>#########</p>
              </div>
            </div>
          </div>
          <div class={styles.ticketinfo}>
            <p class={styles.date}>
              <span>WOCHENTAG</span>
              <span class={styles.june29}>DATUM</span>
              <span>JAHR</span>
            </p>
            <div class={styles.showname}>
              <h2>Hermannshöhle</h2>
              <h3>{props.name}</h3>
            </div>
            <p class={styles.location}>
              <span>Kirchberg am Wechsel</span>
              <span class={styles.separator}>
                <i class={styles.smile} />
              </span>
              <span>XYZ</span>
            </p>
          </div>
        </div>
        <div class={styles.right}>
          <div class={styles.rightinfocontainer}>
            <div class={styles.barcodesection}>
              <img
                className={styles.barcode}
                src="https://cdn.pixabay.com/photo/2022/02/07/19/13/barcode-7000118_960_720.png"
              />
            </div>
            <div class={styles.infosection}>
              <div class={styles.showname}>
                <h2>1x {props.name}</h2>
              </div>
              <div class={styles.time}>
                <p>UHRZEIT | DATUM</p>
              </div>

              <div class={styles.price}>
                <p>{props.price}€</p>
              </div>
              <div class={styles.barcode}></div>
              <p class={styles.ticketnumber}>#########</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
