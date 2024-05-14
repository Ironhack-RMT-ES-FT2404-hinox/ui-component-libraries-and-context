import img1 from "../../assets/img1.jpg"

import Accordion from 'react-bootstrap/Accordion';

function BookDetails() {
  return (
    <div>
      
      <h1>Book Details</h1>

      <img src={img1} alt="cover" width={200} height={360}/>

      <h3>Read the Book</h3>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
        <Accordion.Header>Seccion 1</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni iusto delectus natus dolor doloremque error quaerat consectetur, nisi est? Neque ullam veritatis quas voluptate ipsum qui, magnam in vitae similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate autem necessitatibus animi sit delectus. Porro similique error autem iste harum numquam animi. Animi maxime blanditiis, nemo voluptas distinctio deleniti culpa.
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
        <Accordion.Header>Seccion 2</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit, voluptatum reprehenderit adipisci quia ratione nobis commodi deleniti officiis sapiente quisquam nostrum iusto quidem sed exercitationem ea, porro iure quos.
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
        <Accordion.Header>Seccion 3</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius laborum error ab magnam sed illum voluptatibus consectetur unde odio praesentium nesciunt, fuga pariatur dicta animi quia soluta cum deleniti?
        </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </div>
  )
}

export default BookDetails