import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import ApplyButton from './components/applyButton/ApplyButton';
import ApplyAndSaveButton from './components/apply&SaveButton/ApplyAndSaveButton';
import ClearButton from './components/clearButton/ClearButton';
import 'react-toastify/dist/ReactToastify.css';
import onChange = toast.onChange;

type TasksListProp = {
  title:string,
};

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [colorList, setColorList] = useState<TasksListProp[]>([]);
  const inputElementRef = useRef<HTMLInputElement | null>(null);
  const notify = () => toast.info(`Changed color to ${inputValue}`);

  const backgroundHandler = () => {
    document.body.style.backgroundColor = inputValue;
  };

  const deleteTask = (index: number) => {
    const newList = colorList;
    newList.splice(index, 1);
    setColorList([...newList]);
  };
  useEffect(() => {
    inputElementRef.current?.focus();
  }, [inputValue, onclick]);

  useEffect(() => {
    document.title = 'Body color change application';
  });

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  const isColor = (strColor:string) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color;
  };

  return (
    <div className="App">
      <div className="container-upper-all">
        <form className="container-upper" onSubmit={onSubmit}>
          <input
            className={!isColor(inputValue) && inputValue ? 'input valid-input' : 'input'}
            type="text"
            title="Accepts just named, #, hsla and RGB"
            placeholder="Write color here"
            value={inputValue}
            ref={inputElementRef}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <ApplyButton
            onApply={() => {
              if (isColor(inputValue)) {
                notify();
                backgroundHandler();
                setInputValue('');
              }
            }}
          />
          <ApplyAndSaveButton
            onApplyAndSave={() => {
              if (isColor(inputValue)) {
                notify();
                backgroundHandler();
                setColorList([...colorList, { title: inputValue }]);
                setInputValue('');
              }
            }}
          />
          <ClearButton
            onClear={() => {
              setInputValue('');
            }}
          />
        </form>
      </div>
      <div className="container-list">
        {colorList.map((title, index) => (
          <div key={Math.random()} className="list-all">
            <ul className="list-title">
              {title.title}
            </ul>
            <button
              className="list__btn-delete"
              onClick={() => deleteTask(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
