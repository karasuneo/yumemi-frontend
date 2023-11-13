import { PopulationCards } from '@/app/ui-domain/PopulationCards';
import { SelectPopulationChart } from '@/app/ux-domain/SelectPopulationChart';

import styles from './style.module.scss';

export default function Home() {
  return (
    <main>
      <div className={styles.cardsContainer}>
        <h1 className={styles.title}>種類別人口構成グラフ表示</h1>
        <PopulationCards />
      </div>
      <SelectPopulationChart />
    </main>
  );
}
