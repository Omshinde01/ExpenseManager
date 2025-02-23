import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4 text-primary">Expense Manager</h2>
        <p className="text-center text-muted">Login to manage your expenses</p>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter your email" 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Enter your password" 
          />
        </div>
        <button className="btn btn-primary w-100">Login</button>
        <p className="text-center mt-3">
          Don't have an account? <a href="/signup" className="text-primary">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
