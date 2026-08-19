import styles from './PersonalItem.module.scss'

interface PersonalInfoProps {
  children: React.ReactNode;
  label: string;
  id: string;
}

export const PersonalInfo = (props: PersonalInfoProps) => {
  const { children, label, id } = props;

  return (
    <dl className={styles.infoRow} key={id}>
      <dt className={styles.label}>
        {label}
      </dt>
      <dd className={styles.content} id={id}>
        {children}
      </dd>
    </dl>
  );
};
