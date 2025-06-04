import PageHeader from "../../../components/pageHeader/PageHeader";
import LoadingDepartments from "../../../features/departments/components/loadingDepartments/LoadingDepartments";
// import RenderDepartments from "../../../features/departments/components/renderDepartments/RenderDepartments";
import RenderDepartmentsContent from "../../../features/departments/components/renderDepartmentsContent/RenderDepartmentsContent";

export default function Departments() {
  return (
    <div>
      <PageHeader title="Departments" button="Create Department" />
      {/* <LoadingDepartments /> */}
      <RenderDepartmentsContent/>
    </div>
  )
}
