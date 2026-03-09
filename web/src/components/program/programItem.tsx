import React from 'react';
import './programItem.css';

type ProgramItemProps = {
  title: string;
  text: string;
};

export default function ProgramItem({ title, text }: ProgramItemProps) {
  return (
    <div className="program-item">
      <h3 className="program-title">{title}</h3>
      <p className="program-text">{text}</p>
    </div>
  );
}