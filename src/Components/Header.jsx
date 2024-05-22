import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="header__info">
        <p>info@kenny.ml</p>
        <p>+234 813 819 1796</p>
      </div>
      <div className="header__right">
        <img
          className="header__flag"
          width="20"
          height="20"
          src="https://abs-0.twimg.com/emoji/v2/svg/1f1f3-1f1ec.svg"
          alt="Nigerian flag"
        />
        <div className="header__status">NG</div>
      </div>
    </header>
  );
}
