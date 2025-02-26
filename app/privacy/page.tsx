import PrivacyContent from '../../markdown/Privacy.mdx';
import styles from './styles.module.css';
export default function PrivacyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <PrivacyContent />
      </div>
    </div>
  );
}
