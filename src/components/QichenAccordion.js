import { useCallback, useState } from "react";
import { Accordion } from "react-bootstrap";

const accordionData = [
  { id: 1, title: "How Much Testy About Your Foods?" },
  { id: 2, title: "Why We're Best Restaurant?" },
  { id: 3, title: "Do You Want to Food Order in Online?" },
  { id: 4, title: "What Payment Method Are You Accepted?" },
  { id: 5, title: "What’s Your Return Policy?" },
  { id: 6, title: "Company Success Story?" },
];

const QichenAccordion = ({ defaultActive }) => {
  const [active, setActive] = useState(defaultActive ? defaultActive : 1);
  const toggleAccordion = useCallback(
    (value) => {
      setActive(value);
    },
    [active]
  );

  return (
    <Accordion
      defaultActiveKey={defaultActive ? defaultActive : 1}
      className="accordion"
      id="accordionOne"
    >
      {accordionData.map((accordion, i) => (
        <div className="accordion-card mb-20" key={accordion.id}>
          <Accordion.Toggle
            as="div"
            eventKey={accordion.id}
            className="accordion-header"
            onClick={() => toggleAccordion(accordion.id)}
          >
            <h3
              className="accordion-title"
              data-bs-target="#collapse0"
              aria-expanded={accordion.id == active ? "true" : "false"}
            >
              {accordion.title}
            </h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={accordion.id}>
            <div className="accordion-body">
              <p>
              Welcome to TastyBytes, your go-to destination for a delightful culinary journey! We pride ourselves on crafting delectable dishes and offering a seamless dining experience. Our commitment is to serve you with the finest flavors, whether you're relishing a cozy meal or planning a grand celebration. Explore our diverse menu, indulge in our loyalty program, and experience the ease of online ordering and table reservations. At TastyBytes, every byte is a savory delight!
              </p>
            </div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
export default QichenAccordion;
