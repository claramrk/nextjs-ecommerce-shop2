import styles from './TicketComponent.module.scss';

export default function TicketComponent() {
  return (
    <div className={styles.ticketAll}>
      <div class={styles.ticket}>
        <div class={styles.left}>
          <div class={styles.image}>
            <div class={styles.textinimage}>
              <p class={styles.admitone}>
                <span>TICKET</span>

                <span>TICKET</span>
                <span>TICKET</span>
              </p>
              <div class={styles.ticketnumber}>
                <p>#TicketID</p>
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
              <h1>Hermannshöhle</h1>
              <h2>Kinder</h2>
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
            <img
              className={styles.barcode}
              src="https://cdn.pixabay.com/photo/2022/02/07/19/13/barcode-7000118_960_720.png"
            />
            <div class={styles.showname}>
              <h1>1 Kind</h1>
            </div>
            <div class={styles.time}>
              <p>UHRZEIT</p>
              <p>DATUM</p>
            </div>

            <div class={styles.price}>
              <p>Preis</p>
            </div>
            <div class={styles.barcode}></div>
            <p class={styles.ticketnumber}>#20030220</p>
          </div>
        </div>
      </div>
    </div>
  );
}
