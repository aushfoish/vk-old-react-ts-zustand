import styles from './ContainerPlaceholder.module.scss'

export const ContainerPlaceholder = (props: { label: string }) => {
  const { label } = props;
  
  return <p className={styles.emptyContainer}>{label}</p>;
};
