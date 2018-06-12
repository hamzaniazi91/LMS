import React from 'react';
import ContentHeader from '../content_header';

const TrainingsView = () => (
  <div className="Trainings-content">
    <ContentHeader
      name="Trainings"
      description="Trainings"
      breadcrumb="Trainings"
      breadcrumbIcon="fa fa-dashboard"
    />
    <section className="content"><span>Trainings 1</span></section>




    <div className="info-box bg-red">
        <span className="info-box-icon"><i className="fa fa-comments-o"></i></span>
        <div className="info-box-content">
          <span className="info-box-text">Likes</span>
          <span className="info-box-number">41,410</span>

          <div className="progress">
            <div className="progress-bar" style={{width: '70%'}}></div>
          </div>
          <span className="progress-description">
            70% Increase in 30 Days
          </span>
        </div>
      </div>
  </div>
);

export default TrainingsView;
