export const TextInput = ({ changeFn, key }) => {
  return <input className="TextInput" onChange={changeFn} key={key}></input>;
};
