import { Modal, Button, Form, Card, ProgressBar, Alert } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">💰 Expense Tracker</h2>
      <div className="text-center mb-3">
        <h5>🎯 Budget: ₹0</h5>
        <h5>💸 Spent: ₹0</h5>
        <h5 className="text-success">✅ Remaining: ₹0</h5>
        <ProgressBar now={0} label={`0%`} variant="success" />
      </div>
      <div className="d-flex justify-content-between mb-4">
        <Button variant="secondary">🎯 Set Budget</Button>
        <Button variant="primary">➕ Add Expense</Button>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 mb-3">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Expense Title</Card.Title>
              <Card.Text className="text-muted">₹0</Card.Text>
              <Card.Text className="text-muted">📅 Date</Card.Text>
              <div className="d-flex justify-content-between">
                <Button variant="warning" size="sm">✏️ Edit</Button>
                <Button variant="danger" size="sm">🗑️ Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Button variant="secondary">🚪 Logout</Button>
      </div>
      <Modal centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter expense title" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter amount" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="success">Add</Button>
        </Modal.Footer>
      </Modal>
      <Modal centered>
        <Modal.Header closeButton>
          <Modal.Title>🎯 Set Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Budget</Form.Label>
              <Form.Control type="number" placeholder="Enter your budget" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">🗑️ Delete Budget</Button>
          <Button variant="primary">💾 Save Budget</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
