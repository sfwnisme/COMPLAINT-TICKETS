import FormLayout from '../../../../components/formLayout/FormLayout'
import Alert from '../../../../components/alert/Alert'
import Button from '../../../../components/button/Button'
import LoadingIcon from '../../../../components/loadingIcon/LoadingIcon'
import useCreateTicketFormValidation from '../../hooks/use-create-ticket-form-validation'
import Input from '../../../../components/input/Input'
import useCreateTicket from '../../hooks/use-create-ticket'
// import SelectPriority from '../selectPriority_draft/SelectPriority'
import SelectUser from '../selectUser/SelectUser'
import SelectTags from '../selectTags/SelectTags'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Controller, useFieldArray } from 'react-hook-form'
import Select from '../../../../components/select/Select'
import Badge from '../../../../components/badge/Badge'
import { DevTool } from "@hookform/devtools";
import Title from '../../../../components/title/Title'
import Spacer from '../../../../components/spacer/Spacer'
import { TICKET_PRIORITY, TICKET_PRIORITY_COLORS } from '../../../../constraints/constraints'
import Style from './CreateTicketForm.module.css'
import Grid from '../../../../components/grid/Grid'
import RadioInput from '../../../../components/radioInput/RadioInput'
import { Priority } from '../../../../types/types'
import SelectPriority from '../selectPriority/SelectPriority'

export default function CreateTicketForm() {
  const {
    control,
    register,
    setValue,
    getValues,
    formState: { errors, isValid },
    watch,
    handleSubmit,
  } = useCreateTicketFormValidation()

  console.log(";;;;;;;;;;;;;;;;;;;;;;;;", watch())

  const handleTagsChanges = (event: { target: { value: string } }) => {
    const arr = []
    arr.push(event.target.value)
    setValue('tags', arr)
  }

  // const inputsConfig = getCreateTicketInputsConfig(errors)
  const { onSubmit, isPending, isSuccess, isError, errorMessage, successMessage } = useCreateTicket();
  const showAlert = isSuccess || isError
  const canCreate = !isPending && isValid

  const onEditorStatChange = (editorState: string) => {
    setValue('description', editorState)
  }
  const editorContent = watch('description')
  const tagsContent = watch('tags')
  console.log('errors', errors)
  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)} title='Ticket details' subtitle="enter ticket details">
      <Input type='string' title='Title' {...register('title')} placeholder='ticket title'
        message={errors.title?.message}
      />
      <div>
        <ReactQuill theme='snow'
          value={editorContent}
          onChange={onEditorStatChange}
        />
      </div>
      <SelectPriority register={register('priority')} />
      <div>
        <SelectTags title='Select tags' value={tagsContent} onChange={handleTagsChanges} />
        <Spacer />
        <Badge text={String(getValues('tags'))} />
      </div>
      <SelectUser {...register('assignedTo')} title='Assign user' />
      <Button variant='primary' disabled={!canCreate}>
        {isPending && <LoadingIcon />} Create
      </Button>
      <Alert visible={showAlert} variant={isSuccess ? 'success' : 'danger'} hasIcon >
        {errorMessage ?? successMessage}
      </Alert>
      <DevTool control={control} />
    </FormLayout>
  )
}