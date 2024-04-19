/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import "./styles.css";
import validator from 'validator';

const Otp: React.FC<{
  error: boolean;
  enteredValue: string[];
  setEnteredValue: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ enteredValue, setEnteredValue, error }) => {
  const [timer, setTimer] = useState(30);
  const boxRef = useRef<null | HTMLInputElement>(null);
  useEffect(() => {}, [enteredValue]);

  const resetOptValues = () =>{
    setEnteredValue(["","","",""]);
  }
  const resentOtpHandler = () => {
    if (timer != 0) return;
    setTimer(30)
    resetOptValues()
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const keyHandle = (e: any) => {
    if (!validator.isNumeric(e.target.value) && e.keyCode != 8) return;

    if (
      e.keyCode === 8 &&
      parseInt(e.target.name) - 1 >= 0 &&
      e.target.value.length === 0
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (boxRef.current!.children[parseInt(e.target.name) - 1] as any).focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validator.isNumeric(e.target.value) && e.target.value != "") return;

    if (e.target.value.length > 1) return;

    if (e.target.value.length === 1) {
      if (parseInt(e.target.name) + 1 < 6) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (boxRef.current!.children[parseInt(e.target.name) + 1] as any).focus();
      }
    }
    setEnteredValue((prev: string[]) =>
      prev.map((el, i) => {
        if (i === parseInt(e.target.name)) {
          return e.target.value;
        }
        return el;
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0) return;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="global-otp-box-container">
      <div ref={boxRef} className="global-otp-box-inputs">
        <input
          onKeyDown={keyHandle}
          placeholder="-"
          value={enteredValue["0"] ? enteredValue["0"] : ""}
          name={"0"}
          type="tel"
          style={error ? { border: "1px solid red" } : {}}
          onChange={handleChange}
        />
        <input
          onKeyDown={keyHandle}
          placeholder="-"
          type="tel"
          value={enteredValue[1] ? enteredValue[1] : ""}
          name={"1"}
          style={error ? { border: "1px solid red" } : {}}
          onChange={handleChange}
        />
        <input
          onKeyDown={keyHandle}
          placeholder="-"
          type="tel"
          value={enteredValue && enteredValue[2] ? enteredValue[2] : ""}
          name={"2"}
          style={error ? { border: "1px solid red" } : {}}
          onChange={handleChange}
        />
        <input
          onKeyDown={keyHandle}
          placeholder="-"
          type="tel"
          value={enteredValue && enteredValue[3] ? enteredValue[3] : ""}
          name={"3"}
          style={error ? { border: "1px solid red" } : {}}
          onChange={handleChange}
        />
        <div></div>
      </div>
      <div
        onClick={() => resentOtpHandler()}
        className={timer === 0 ? "resend-enabled" : "resend-disabled"}
      >
        {timer === 0 ? "Resend" : `Resend OTP `}
        {timer != 0 ? <span className="--blue-color">{timer}s</span> : null}
      </div>
      <div></div>
    </div>
  );
};

export default Otp;