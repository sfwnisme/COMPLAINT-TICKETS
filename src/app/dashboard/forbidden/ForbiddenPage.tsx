import { NavLink } from "react-router-dom";
import Alert from "../../../components/alert/Alert";
import Button from "../../../components/button/Button";
import Spacer from "../../../components/spacer/Spacer";

export default function ForbiddenPage() {
  return (
    <div>
      <Alert visible variant="danger" hasIcon>
        <h1>
          Forbidden
        </h1>
        <p>
          You are not allowed to access this page
        </p>
      </Alert>
      <Spacer size="lg" />
      <NavLink to={'/dashboard'}>
        <Button shape="default" variant="primary">Home</Button>
      </NavLink>
    </div>
  )
}