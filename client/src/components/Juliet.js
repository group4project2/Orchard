import React from 'react';

function Juliet() {
  return (
    <div>
      <div className="card card-about">
        <img
          className="card-img-top"
          src={require('./banana.png')}
          alt="Juliet"
        />
        <div className="card-body">
          <h5 className="card-title">Juliet</h5>
          <p className="card-text">
            Juliet loves dark leafy greens! She worked on the back end
            of this project.{' '}
          </p>
          <a
            href="https://github.com/julietg19"
            className="btn btn-primary"
          >
            Juliet's Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Juliet;
