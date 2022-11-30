import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';
const Services = () => {
  return (
    <section id="services">
      <h5> What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Start UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* End of ui/ux Design */}
        {/* Start of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* End Of Web depelopment */}
        {/* Start of Content Creator */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creator</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creator */}
      </div>
    </section>
  );
};

export default Services;
