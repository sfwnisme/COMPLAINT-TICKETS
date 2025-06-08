import { useEffect, useState } from "react";
import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";
import LoadingIcon from "../../../../components/loadingIcon/LoadingIcon";
import useCreateDepartment from "../../hooks/use-create-department";
import useCreateDepartmentFormValidation from "../../hooks/use-create-department-form-validation";
import { Plus, X } from "lucide-react";
import Spacer from "../../../../components/spacer/Spacer";

export default function CreateDepartmentForm() {
  const [activeCreate, setActiveCreate] = useState(false)
  const { register, handleSubmit, formState: { errors, isValid } } = useCreateDepartmentFormValidation()
  const { onSubmit, isPending, isSuccess, errorMessage } = useCreateDepartment()
  const canCreate = !isPending && isValid

  useEffect(() => {
    setActiveCreate(false)
  }, [isSuccess])

  return (
    <div>
      <Spacer />
      <div style={{ display: "flex", gap: '3px', alignItems: 'start', justifyContent: 'end' }}>
        {activeCreate ?
          <>
            <form id="creaet_department_form" onSubmit={handleSubmit(onSubmit)} />
            <Input type='text' form='creaet_department_form' {...register('title')}
              message={errors?.title?.message ?? errorMessage}
              variant={errors?.title?.message || errorMessage ? 'danger' : 'primary'}
            />
            <Button form='creaet_department_form' disabled={!canCreate}>
              {isPending && <LoadingIcon />}
              create
            </Button>
            <Button variant="danger" shape="soft" onClick={() => setActiveCreate(false)}><X size={15} /></Button>
          </>
          : <Button onClick={() => setActiveCreate(true)}><Plus size={15} /></Button>
        }
      </div>
    </div>
  )
}