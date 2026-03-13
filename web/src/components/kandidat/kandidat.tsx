import React, { useState } from 'react';
import './kandidat.css';
import { ArrowRight } from "lucide-react";

type ProgramItemProps = {
  name: string;
  text: string;
  description: string;
  source: string;
};

export default function Kandidat({ name, text, description, source }: ProgramItemProps) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div 
      className={`kandidat ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      <img className='kandidat-img no-select' src={source} alt={name} />

      <h2 className="kandidat-name no-select">
        {name}
      </h2>

      <p className="kandidat-description no-select">
        {description}
        <ArrowRight className='sipka' />
      </p>

      <div className="kandidat-hover">
        <p className="kandidat-description">{description}</p>
        <p className="kandidat-text">{text}</p>
      </div>

    </div>
  );
}