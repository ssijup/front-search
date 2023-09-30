import Nav from 'react-bootstrap/Nav';

function Memberslist() {
  return (
    <Nav justify variant="tabs">
      <Nav.Item>
        <Nav.Link>
             Active members
          </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >Pending </Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item> */}
    </Nav>
  );
}

export default Memberslist;
