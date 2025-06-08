import PageHeader from "../../../components/pageHeader/PageHeader";
import RenderDepartmentsContent from "../../../features/departments/components/renderDepartmentsContent/RenderDepartmentsContent";

export default function Departments() {
  return (
    <div>
      <PageHeader title="Departments" />
      <RenderDepartmentsContent />
    </div>
  )
}
