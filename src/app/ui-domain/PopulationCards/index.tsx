import { POPULATION_TYPE_LIST } from '@/const';

import { Card } from './Card';
import styles from './style.module.scss';

export function PopulationCards() {
  return (
    <div className={styles.container}>
      {POPULATION_TYPE_LIST.map((item) => (
        <Card key={item} icon={item} />
      ))}
    </div>
  );
}
