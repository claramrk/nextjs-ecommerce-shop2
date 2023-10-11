import '../database/products';
import styles from './page.module.scss';

export const metadata = {
  title: 'Home',
  description: 'This is Claras e-commerce shop',
};

export default function mainpage() {
  return (
    <div className={styles.mainpage}>
      <h1>Hermannshöhle</h1>
      <p className={styles.p}>
        Die Hermannshöhle ist die größte Tropfsteinhöhle und das wichtigstes
        Fledermaus-Winterquartier Niederösterreichs. Der Höhlenbesuch ist ein
        Naturerlebnis in einer nahen, jedoch so unbekannten Welt. Tropfsteine,
        Fledermäuse, Gesteinsformationen, gesunde keimfreie Luft All das ist
        leicht auf guten, elektrisch beleuchteten Wegen im Rahmen einer Führung
        zu besichtigen. Unsere staatlich geprüften Höhlenführer bieten
        zusätzlich fachliches Hintergrundwissen. Vom Parkplatz (auch für Busse)
        geht man ca. 5 Min. bis zum Höhleneingang. Dort wird man vom
        Höhlenführer empfangen. Die Führung selbst dauert inkl. Rückkehr bis zum
        Höhleneingang ca. 1 Std. 15 Min. Aktuelle Beiträge im Internet: SchauTV:
        Elisabeth Wielander - über Fledermäuse in der Hermannshöhle Verein für
        Perfomance - "Gischt": Performance
      </p>
    </div>
  );
}
