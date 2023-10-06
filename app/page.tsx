import '../database/products';
import styles from './page.module.scss';
import Example from './SlideShowContainer';

export const metadata = {
  title: 'Home',
  description: 'This is Claras e-commerce shop',
};

export default function mainpage() {
  return (
    <div className={styles.mainpage}>
      <video
        id="background-video"
        autoPlay
        loop
        muted
        poster="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sfa1e985dff417ba4/image/i234d59361be284db/version/1646756758/image.jpg"
      >
        <source
          src="https://www.youtube.com/embed/c1TmbDoj7Tg?si=5Ju0VqMsyhOeXvRy"
          type="video/mp4"
        />
      </video>
      <Example />
      <h1>Hermannshöhle</h1>
      <p>
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
