import styles from './pillBox.module.css';

const PillBox = ({ value, name, id, onClick, selected }) => {
  return (
    <div
      className={styles.pill}
      onClick={() => onClick(id)}
      style={selected === id ? { backgroundColor: '#E2CCFF', color: '#7000FF' } : {}}
    >
      {name}
    </div>
  );
};

export default PillBox;
