export const ContainerPlaceholder = (props: { label: string }) => {
  const { label } = props;
  return <div className="container-placeholder">{label}</div>;
};
