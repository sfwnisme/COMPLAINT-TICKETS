import { useEffect, useState } from "react";
import Button from "../../../../../components/button/Button";
import Input from "../../../../../components/input/Input";
import LoadingIcon from "../../../../../components/loadingIcon/LoadingIcon";
import { Plus, X } from "lucide-react";
import Spacer from "../../../../../components/spacer/Spacer";
import useCreateTag from "../../../hooks/use-create-tag";
import useCreateTagFormValidation from "../../../hooks/use-create-tag-form-validation";

export default function CreateTagForm() {
  const [activeCreate, setActiveCreate] = useState(false)
  const { register, handleSubmit, formState: { errors, isValid } } = useCreateTagFormValidation()
  const { onSubmit, isPending, isSuccess, errorMessage } = useCreateTag()
  const canCreate = !isPending && isValid

  useEffect(() => {
    setActiveCreate(false)
  }, [isSuccess])

  return (
    <div>
      <Spacer />
      <div style={{ display: "flex", flexWrap: 'wrap', gap: '3px', alignItems: 'start', justifyContent: 'end' }}>
        {activeCreate ?
          <>
            <form id="create_tag_form" onSubmit={handleSubmit(onSubmit)} />
            <Input type='text' form='create_tag_form' {...register('name')}
              message={errors?.name?.message ?? errorMessage}
              variant={errors?.name?.message || errorMessage ? 'danger' : 'primary'}
            />
            <Button form='create_tag_form' disabled={!canCreate}>
              {isPending && <LoadingIcon />}
              Create
            </Button>
            <Button variant="danger" onClick={() => setActiveCreate(false)}><X size={15} /> Cancel</Button>
          </>
          : <Button onClick={() => setActiveCreate(true)}><Plus size={15} /> New</Button>
        }
      </div>
    </div>
  )
}