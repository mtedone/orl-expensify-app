// Higher Order Component - A Component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Hello</h1>
    <p>This info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please authenticate!</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  //   <AdminInfo isAdmin={true} info="This is the detail" />,
  //   document.getElementById('app')
  <AuthInfo isAuthenticated={true} info="This is the detail" />,
  document.getElementById('app')
);
