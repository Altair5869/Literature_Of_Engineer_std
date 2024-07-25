import React from 'react';
import { useParams } from 'react-router-dom';
import './WorkDetailComponent.css';

function WorkDetailComponent({ cardsData }) {
  const { title } = useParams();
  const work = cardsData.find(work => work.title === title);

  if (!work) {
    return <div>작품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="container">
      <h1 className="title">{work.title}</h1>
      <img src={work.imageUrl} alt={work.title} className="image"/>
      <p className="content">{work.content}</p>
    </div>
  );
}
export default WorkDetailComponent;