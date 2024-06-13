import classes from './styles.module.css';
export default function RadioIcon({ selected }) {
  return (
    <div
      style={{
        borderRadius: '6px',
        width: '18px',
        height: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid #A6A6A6',
      }}
    >
      <span
        style={{
          borderRadius: '3px',
          width: '10px',
          height: '10px',
          background: '#A6A6A6',
          transform: `scale(${selected ? 1 : 0})`,
          transition: '0.5s',
        }}
      ></span>
    </div>
  );
}
